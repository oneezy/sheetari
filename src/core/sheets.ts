import { parseCsv } from '../utils/csv.ts';
import { parseDotNotation } from '../utils/dot-notation.ts';
import { parseA1Notation } from '../utils/a1-notation.ts';

interface FetchSheetParams {
  sheetId: string;
  sheetName: string;
  mode?: 'row' | 'col';
  headerRange?: string;
  dataRange?: string;
  dotNotation?: boolean;
}

export async function fetchSheet(params: FetchSheetParams) {
  const { sheetId, sheetName, mode = 'row', headerRange, dataRange, dotNotation } = params;

  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${sheetName}`;

  // row example:
  // https://docs.google.com/spreadsheets/d/16fcvNEt6vPOiuOtQmP3Nji97_KgU-pffEBf6IbELeE0/gviz/tq?tqx=out:csv&sheet=row`;
  // col example:
  // https://docs.google.com/spreadsheets/d/16fcvNEt6vPOiuOtQmP3Nji97_KgU-pffEBf6IbELeE0/gviz/tq?tqx=out:csv&sheet=col`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch sheet: ${response.statusText}`);
  }

  const csv = await response.text();
  const matrix = parseCsv(csv);

  if (mode === 'col') {
    let columnData = matrix;
    if (dataRange) {
        const { startRow, endRow, startCol, endCol } = parseA1Notation(dataRange);
        columnData = matrix.slice(startRow - 1, endRow).map(row => row.slice(startCol - 1, endCol));
    }
    const columnJson = columnData.reduce((acc, row) => {
      if(row[0]) acc[row[0]] = row[1] || null;
      return acc;
    }, {} as Record<string, string | null>);
    return dotNotation ? parseDotNotation(columnJson) : columnJson;
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