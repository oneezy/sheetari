export function getGidFromSheetIndex(_sheetId: string, _index: number): Promise<string> {
  throw new Error(`Index-based sheet access is not supported. Please use actual sheet names from your Google Sheet.`);
}

export function getGidFromSheetName(_sheetId: string, sheetName: string): Promise<string> {
  // Simply return the sheet name - the gviz/tq endpoint accepts sheet names directly
  return Promise.resolve(sheetName);
}

export function getFirstAvailableSheet(_sheetId: string): Promise<string> {
  throw new Error(`Default sheet access is not supported. Please specify a sheet name in the URL.`);
}
