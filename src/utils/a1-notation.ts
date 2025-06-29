export function parseA1Notation(range: string, maxRows?: number, maxCols?: number): { startRow: number, endRow: number, startCol: number, endCol: number } {
  return parseFlexibleRange(range, maxRows, maxCols);
}

export function parseFlexibleRange(range: string, maxRows: number = 1000, maxCols: number = 1000): { startRow: number, endRow: number, startCol: number, endCol: number } {
  if (!range.includes(':')) {
    throw new Error(`Invalid range notation: ${range}. Must contain ':'`);
  }

  const [start, end] = range.split(':');
  
  // Handle different flexible range patterns
  if (isColumnOnlyRange(start, end)) {
    // A:Z or A: or :Z
    return parseColumnOnlyRange(start, end, maxRows);
  } else if (isRowOnlyRange(start, end)) {
    // 2:10 or 2: or :10
    return parseRowOnlyRange(start, end, maxCols);
  } else if (isMixedRange(start, end)) {
    // B2:Z or A1:Z100
    return parseMixedRange(start, end, maxRows, maxCols);
  } else {
    // Standard A1:B2 notation
    return parseStandardRange(start, end);
  }
}

function isColumnOnlyRange(start: string, end: string): boolean {
  const colOnlyPattern = /^[A-Z]+$/;
  // Also consider cases like "B2:C" as column-oriented
  const mixedToColPattern = /([A-Z]+)(\d+)/;
  
  return (colOnlyPattern.test(start) || colOnlyPattern.test(end) || start === '' || end === '') ||
         (mixedToColPattern.test(start) && colOnlyPattern.test(end));
}

function isRowOnlyRange(start: string, end: string): boolean {
  const rowOnlyPattern = /^\d+$/;
  return rowOnlyPattern.test(start) && rowOnlyPattern.test(end);
}

function isMixedRange(start: string, end: string): boolean {
  const hasRowCol = /([A-Z]+)(\d+)/;
  const colOnly = /^[A-Z]+$/;
  
  return (hasRowCol.test(start) && colOnly.test(end)) || 
         (colOnly.test(start) && hasRowCol.test(end)) ||
         (hasRowCol.test(start) && hasRowCol.test(end));
}

function parseColumnOnlyRange(start: string, end: string, maxRows: number): { startRow: number, endRow: number, startCol: number, endCol: number } {
  let startCol = 1, endCol = 1000; // Default max columns
  let startRow = 1, endRow = maxRows;
  
  // Handle mixed start (like "B2") with column-only end (like "C")
  const mixedPattern = /([A-Z]+)(\d+)/;
  
  if (start && start !== '') {
    const mixedMatch = start.match(mixedPattern);
    if (mixedMatch) {
      // e.g., "B2" -> start from column B, row 2
      const [, colStr, rowStr] = mixedMatch;
      startCol = colToNumber(colStr);
      startRow = parseInt(rowStr, 10);
    } else {
      // Pure column like "A"
      startCol = colToNumber(start);
    }
  }
  
  if (end && end !== '') {
    const mixedMatch = end.match(mixedPattern);
    if (mixedMatch) {
      // e.g., "C5" -> end at column C, row 5
      const [, colStr, rowStr] = mixedMatch;
      endCol = colToNumber(colStr);
      endRow = parseInt(rowStr, 10);
    } else {
      // Pure column like "C"
      endCol = colToNumber(end);
    }
  }
  
  return {
    startRow,
    endRow,
    startCol,
    endCol
  };
}

function parseRowOnlyRange(start: string, end: string, maxCols: number): { startRow: number, endRow: number, startCol: number, endCol: number } {
  const startRow = parseInt(start, 10);
  const endRow = parseInt(end, 10);
  
  return {
    startRow,
    endRow,
    startCol: 1,
    endCol: maxCols
  };
}

function parseMixedRange(start: string, end: string, maxRows: number, maxCols: number): { startRow: number, endRow: number, startCol: number, endCol: number } {
  const startMatch = start.match(/([A-Z]+)(\d+)?/);
  const endMatch = end.match(/([A-Z]+)(\d+)?/);
  
  if (!startMatch && !endMatch) {
    throw new Error(`Invalid mixed range: ${start}:${end}`);
  }
  
  let startRow = 1, endRow = maxRows, startCol = 1, endCol = maxCols;
  
  if (startMatch) {
    const [, startColStr, startRowStr] = startMatch;
    startCol = colToNumber(startColStr);
    if (startRowStr) {
      startRow = parseInt(startRowStr, 10);
    }
  }
  
  if (endMatch) {
    const [, endColStr, endRowStr] = endMatch;
    endCol = colToNumber(endColStr);
    if (endRowStr) {
      endRow = parseInt(endRowStr, 10);
    }
  }
  
  return { startRow, endRow, startCol, endCol };
}

function parseStandardRange(start: string, end: string): { startRow: number, endRow: number, startCol: number, endCol: number } {
  const startMatch = start.match(/([A-Z]+)(\d+)/);
  const endMatch = end.match(/([A-Z]+)(\d+)/);

  if (!startMatch || !endMatch) {
    throw new Error(`Invalid A1 notation: ${start}:${end}`);
  }

  const [, startColStr, startRowStr] = startMatch;
  const [, endColStr, endRowStr] = endMatch;

  const startCol = colToNumber(startColStr);
  const endCol = colToNumber(endColStr);
  const startRow = parseInt(startRowStr, 10);
  const endRow = parseInt(endRowStr, 10);

  return { startRow, endRow, startCol, endCol };
}

function colToNumber(col: string): number {
  let result = 0;
  for (let i = 0; i < col.length; i++) {
    result *= 26;
    result += col.charCodeAt(i) - 'A'.charCodeAt(0) + 1;
  }
  return result;
}
