import { Hono } from '@hono/hono'
import { fetchSheet } from '../core/sheets.ts'

const api = new Hono()

api.get('/:sheetId/:sheetName', async (c) => {
  const { sheetId, sheetName } = c.req.param()
  const { mode, headerRange, dataRange, dotNotation } = c.req.query()

  try {
    const json = await fetchSheet({
      sheetId,
      sheetName,
      mode: mode as 'row' | 'col' | undefined,
      headerRange,
      dataRange,
      dotNotation: dotNotation === 'true'
    })
    return c.json(json)
  } catch (error) {    
    return c.json({ error: error instanceof Error ? error.message : 'An unknown error occurred' }, 500)
  }
})

export default api
