import { parseCsv } from '../utils/csv.ts';
import { parseDotNotation } from '../utils/dot-notation.ts';
import { parseA1Notation } from '../utils/a1-notation.ts';

interface FetchSheetParams {
  sheetId: string;
  gid: string; // Now this can be either a GID or sheet name
  mode?: 'row' | 'col';
  headerRange?: string;
  dataRange?: string;
  dotNotation?: boolean;
}

export async function fetchSheet(params: FetchSheetParams) {
  const { sheetId, gid, mode = 'row', headerRange, dataRange, dotNotation } = params;

  // Determine if gid is a numeric GID or a sheet name
  const isNumericGid = /^\d+$/.test(gid);
  
  let url: string;
  if (isNumericGid) {
    // Use export endpoint for numeric GIDs
    url = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&gid=${gid}`;
  } else {
    // Use gviz/tq endpoint for sheet names
    url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(gid)}`;
  }

  const response = await fetch(url, {
    redirect: 'follow'
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch sheet: ${response.statusText}`);
  }

  const csv = await response.text();
  if (!csv.trim()) {
    throw new Error('Empty CSV data received');
  }
  
  // Check for Google Sheets error responses that indicate invalid sheet name
  if (csv.includes('Invalid query') || csv.includes('INVALID_QUERY') || csv.includes('Error in query')) {
    throw new Error(`Sheet "${gid}" not found. Please check the sheet name and try again.`);
  }
  
  // For non-numeric GIDs (sheet names), validate that we're not getting default sheet
  if (!isNumericGid && csv.startsWith('"header1"')) {
    // This looks like it might be the default first sheet instead of the requested sheet
    // Only throw error if the requested sheet name doesn't suggest it should have these headers
    if (!gid.toLowerCase().includes('row') && !gid.toLowerCase().includes('header')) {
      throw new Error(`Sheet ${gid} does not exist.`);
    }
  }
  
  const matrix = parseCsv(csv);
  if (matrix.length === 0) {
    throw new Error('No data found in CSV');
  }

  if (mode === 'col') {
    let colData = matrix;
    if (dataRange) {
        const { startRow, endRow, startCol, endCol } = parseA1Notation(dataRange);
        colData = matrix.slice(startRow - 1, endRow).map(row => row.slice(startCol - 1, endCol));
    }
    const colJson = colData.reduce((acc, row) => {
      if(row[0]) acc[row[0]] = row[1] || null;
      return acc;
    }, {} as Record<string, string | null>);
    return dotNotation ? parseDotNotation(colJson) : colJson;
  }

  // mode === 'row'
  let headerData = matrix[0];
  let tableData = matrix.slice(1);

  if (headerRange) {
    const { startRow, endRow, startCol, endCol } = parseA1Notation(headerRange);
    headerData = matrix.slice(startRow - 1, endRow)[0].slice(startCol - 1, endCol);
  }

  if (dataRange) {
    const { startRow, endRow, startCol, endCol } = parseA1Notation(dataRange);
    tableData = matrix.slice(startRow - 1, endRow).map(row => row.slice(startCol - 1, endCol));
  } else {
    const headerRowIndex = headerRange ? parseA1Notation(headerRange).endRow : 1;
    tableData = matrix.slice(headerRowIndex);
  }

  const rowJson = tableData.map(row => {
    const rowData = headerData.reduce((acc, key, i) => {
      acc[key] = row[i] || null;
      return acc;
    }, {} as Record<string, string | null>);
    return dotNotation ? parseDotNotation(rowData) : rowData;
  });

  return rowJson;
}