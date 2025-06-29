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

### Parameters

- `mode`: `row` or `col` (default: `row`)
- `dot`: `true` or `false` (default: `true` - enables dot notation parsing)
- `range`: Single range parameter (e.g., `A1:C10`, `A:Z`, `B2:Z`, `2:10`)
- `headerRange`: Range for headers (row mode: header rows, col mode: key column)
- `dataRange`: Range for data (row mode: data rows, col mode: value columns)

### Flexible Range Notation

Sheetari supports flexible A1 notation for precise data extraction:

| Pattern | Description | Example |
|---------|-------------|---------|
| `A1:C10` | Standard range | Rows 1-10, columns A-C |
| `A:Z` | All rows, columns A-Z | Full column range |
| `B2:Z` | Rows 2+, columns B-Z | Skip first row |
| `2:10` | Rows 2-10, all columns | Full row range |
| `A:` | All rows, column A to end | Open-ended columns |
| `:Z` | All rows, first column to Z | Open-ended rows |

### Range Parameters

- **`range`**: Single parameter that defines the data rectangle
  - *Row mode*: First row becomes headers, rest become data
  - *Column mode*: First column becomes keys, second becomes values
- **`headerRange` + `dataRange`**: Separate control over headers and data
  - Useful when headers and data are in non-contiguous ranges

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

### 5. Flexible Range Examples

**Extract specific columns:**
```
https://sheetari.deno.dev/16fcvNEt6vPOiuOtQmP3Nji97_KgU-pffEBf6IbELeE0/row?range=A:B
```

**Skip headers (start from row 2):**
```
https://sheetari.deno.dev/16fcvNEt6vPOiuOtQmP3Nji97_KgU-pffEBf6IbELeE0/row?range=A2:C
```

**Extract specific rows:**
```
https://sheetari.deno.dev/16fcvNEt6vPOiuOtQmP3Nji97_KgU-pffEBf6IbELeE0/row?range=2:4
```

**Column mode with specific range:**
```
https://sheetari.deno.dev/16fcvNEt6vPOiuOtQmP3Nji97_KgU-pffEBf6IbELeE0/col?mode=col&range=A1:B10
```

**Separate header and data ranges:**
```
https://sheetari.deno.dev/16fcvNEt6vPOiuOtQmP3Nji97_KgU-pffEBf6IbELeE0/row?headerRange=A1:C1&dataRange=A3:C10
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
