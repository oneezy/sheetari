![Sheetari](static/sheetari.png)

# Sheetari

Turn any public Google Sheet into structured JSON using a clean, flexible API. Just plug in the sheet ID and get instant JSON back—ideal for devs, no-coders, and frontend frameworks like SvelteKit.

- ✅ **Public sheets only** - No authentication required
- ✅ **Automatic type conversion** - Booleans, numbers, null values
- ✅ **Dot notation parsing** - `user.name` → `{ user: { name: "value" } }`
- ✅ **Flexible modes** - Row arrays or column objects
- ✅ **Error handling** - Clear messages for missing sheets
- ✅ **CORS enabled** - Use from any frontend framework
- ✅ **Edge deployed** - Fast response times worldwide

## Usage

`https://sheetari.deno.dev/<sheetId>/<sheetName>`

### Demo Sheet

Google Sheet: [https://docs.google.com/spreadsheets/d/16fcvNEt6vPOiuOtQmP3Nji97_KgU-pffEBf6IbELeE0](https://docs.google.com/spreadsheets/d/16fcvNEt6vPOiuOtQmP3Nji97_KgU-pffEBf6IbELeE0)

Sheetari: [https://sheetari.deno.dev/16fcvNEt6vPOiuOtQmP3Nji97_KgU-pffEBf6IbELeE0](https://sheetari.deno.dev/16fcvNEt6vPOiuOtQmP3Nji97_KgU-pffEBf6IbELeE0)


## Examples

Contains 4 demo sheets: 
- `row`
- `row-nested`
- `col`
- `col-nested`

### 1. Rows 
```
https://sheetari.deno.dev/16fcvNEt6vPOiuOtQmP3Nji97_KgU-pffEBf6IbELeE0/row
```

### 2. Rows Nested (Dot Notation)
```
https://sheetari.deno.dev/16fcvNEt6vPOiuOtQmP3Nji97_KgU-pffEBf6IbELeE0/row-nested
```

### 3. Columns (Key-Value Pairs)
```
https://sheetari.deno.dev/16fcvNEt6vPOiuOtQmP3Nji97_KgU-pffEBf6IbELeE0/col?mode=col
```

### 4. Columns Nested (Dot Notation)
```
https://sheetari.deno.dev/16fcvNEt6vPOiuOtQmP3Nji97_KgU-pffEBf6IbELeE0/col-nested?mode=col
```

## All Demo Sheets

| Sheet Name | Description | Best Mode | Example URL |
|------------|-------------|-----------|-------------|
| `row` | Basic tabular data | Row | [/row](https://sheetari.deno.dev/16fcvNEt6vPOiuOtQmP3Nji97_KgU-pffEBf6IbELeE0/row) |
| `row-nested` | Tabular data with dot notation | Row | [/row-nested](https://sheetari.deno.dev/16fcvNEt6vPOiuOtQmP3Nji97_KgU-pffEBf6IbELeE0/row-nested) |
| `col` | Key-value pairs | Column | [/col?mode=col](https://sheetari.deno.dev/16fcvNEt6vPOiuOtQmP3Nji97_KgU-pffEBf6IbELeE0/col?mode=col) |
| `col-nested` | Nested key-value pairs | Column | [/col-nested?mode=col](https://sheetari.deno.dev/16fcvNEt6vPOiuOtQmP3Nji97_KgU-pffEBf6IbELeE0/col-nested?mode=col) |

## Quick Start

1. **Make your Google Sheet public**: Share → Anyone with the link can view
2. **Get the sheet ID**: Copy from the URL between `/d/` and `/edit`
3. **Return JSON Data**: https://sheetari.deno.dev/YOUR_SHEET_ID/YOUR_SHEET_NAME

## Sheet Requirements

- Sheet must be publicly accessible (anyone with link can view)
- For column mode: Use 2-column format (key, value)
- For dot notation: Use dot-separated keys like `user.name`, `settings.theme`
- First row is treated as headers in row mode
- Empty rows and columns are automatically filtered out
