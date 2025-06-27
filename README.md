# Google Sheets to JSON

Turn any public Google Sheet into structured JSON using a clean, flexible API. Just plug in the sheet ID and get instant JSON back—ideal for devs, no-coders, and frontend frameworks like SvelteKit.

## Usage

`/:sheetId/:sheetName`

### Parameters

- `mode`: `row` or `col` (default: `row`)
- `headerRange`: e.g., `A1:C1`
- `dataRange`: e.g., `A2:C10`
- `dotNotation`: `true` or `false` (default: `false`)

### Example

[https://sheets-to-json.deno.dev/1L2hL1C6hY7nQ2p3a4b5c6d7e8f9g0h1i2j3k4l/Sheet1?mode=row](https://sheets-to-json.deno.dev/1L2hL1C6hY7nQ2p3a4b5c6d7e8f9g0h1i2j3k4l/Sheet1?mode=row)
