import { Hono, Context } from '@hono/hono'
import { fetchSheet } from '../core/sheets.ts'

const api = new Hono()

// Handle both with and without trailing slash
api.get('/:sheetId/:sheetIdentifier?', handleSheetRequest)
api.get('/:sheetId/', handleSheetRequest)
api.get('/:sheetId/:sheetIdentifier/', handleSheetRequest)

async function handleSheetRequest(c: Context) {
  const { sheetId, sheetIdentifier } = c.req.param()
  const { mode, dot, headerRange, dataRange, range, group } = c.req.query()

  try {
    let gid: string;
    const detectedMode = (mode as 'row' | 'col') || 'row';
    const groupMode = (group as 'dot' | 'case' | 'none') || 'dot'; // Default to dot
    // If group is explicitly set, use it; otherwise fall back to dot notation logic
    const useDotNotation = group ? false : (dot !== 'false'); // Default to true only if no group specified

    if (sheetIdentifier === undefined || sheetIdentifier === '') {
      // Default to the first sheet by using gid=0
      gid = "0"; // This will access the first sheet using GID 0
    } else if (/^\d+$/.test(sheetIdentifier)) {
      // Index-based access not supported
      return c.json({ 
        error: 'Index-based sheet access is not supported. Please use the actual sheet name from your Google Sheet.' 
      }, 400);
    } else {
      // It's a string name, use it directly
      gid = sheetIdentifier;
    }

    const json = await fetchSheet({
      sheetId,
      gid,
      mode: detectedMode,
      headerRange,
      dataRange,
      range,
      dotNotation: useDotNotation,
      groupMode
    })
    
    return c.json(json)
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return c.json({ error: errorMessage }, 400)
  }
}

export default api
