export function parseA1Notation(range: string): { startRow: number, endRow: number, startCol: number, endCol: number } {
  const [start, end] = range.split(':');
  const startMatch = start.match(/([A-Z]+)(\d+)/);
  const endMatch = end.match(/([A-Z]+)(\d+)/);

  if (!startMatch || !endMatch) {
    throw new Error(`Invalid A1 notation: ${range}`);
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
