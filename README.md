# Sheetari

Turn any public Google Sheet into structured JSON using a clean, flexible API. Just plug in the sheet ID and get instant JSON back—ideal for devs, no-coders, and frontend frameworks like SvelteKit.

## Usage

`https://sheetari.deno.dev/:sheetId/:sheetName`

### Parameters

- `mode`: `row` or `col` (default: `row`)
- `dot`: `true` or `false` (default: `true` - enables dot notation parsing)

### Demo Sheet

Base Google Sheet: [https://docs.google.com/spreadsheets/d/16fcvNEt6vPOiuOtQmP3Nji97_KgU-pffEBf6IbELeE0](https://docs.google.com/spreadsheets/d/16fcvNEt6vPOiuOtQmP3Nji97_KgU-pffEBf6IbELeE0)

Contains 4 demo sheets: `row`, `row-nested`, `col`, `col-nested`

## Examples

### Default Sheet (First Sheet)
```
https://sheetari.deno.dev/16fcvNEt6vPOiuOtQmP3Nji97_KgU-pffEBf6IbELeE0
```
Returns the first sheet (`row`) in row mode with dot notation enabled.

### 1. Row Mode - Basic Data
```
https://sheetari.deno.dev/16fcvNEt6vPOiuOtQmP3Nji97_KgU-pffEBf6IbELeE0/row
```
**Output:**
```json
[
  {
    "header1": "header1 data1",
    "header2": "header2 data1",
    "header3": "header3 data1"
  },
  {
    "header1": "header1 data2",
    "header2": "header2 data2",
    "header3": "header3 data2"
  },
  {
    "header1": "header1 data3",
    "header2": "header2 data3",
    "header3": "header3 data3"
  }
]
```

### 2. Row Mode - Nested Objects (Dot Notation)
```
https://sheetari.deno.dev/16fcvNEt6vPOiuOtQmP3Nji97_KgU-pffEBf6IbELeE0/row-nested
```
**Output:**
```json
[
  {
    "id": "1",
    "user": {
      "name": "Alice",
      "email": "alice@email.com"
    },
    "settings": {
      "theme": "dark",
      "notifications": {
        "email": true
      }
    }
  },
  {
    "id": "2",
    "user": {
      "name": "Bob",
      "email": "bob@email.com"
    },
    "settings": {
      "theme": "light",
      "notifications": {
        "email": false
      }
    }
  }
]
```

### 3. Column Mode - Basic Key-Value Pairs
```
https://sheetari.deno.dev/16fcvNEt6vPOiuOtQmP3Nji97_KgU-pffEBf6IbELeE0/col?mode=col
```
**Output:**
```json
{
  "key1": "key1 value",
  "key2": "key2 value",
  "key3": "key3 value"
}
```

### 4. Column Mode - Nested Objects (Dot Notation)
```
https://sheetari.deno.dev/16fcvNEt6vPOiuOtQmP3Nji97_KgU-pffEBf6IbELeE0/col-nested?mode=col
```
**Output:**
```json
{
  "user": {
    "name": "Alice",
    "email": "alice@email.com"
  },
  "settings": {
    "theme": "dark",
    "notifications": {
      "email": true
    }
  }
}
```

### 5. Disable Dot Notation (Flat Keys)
```
https://sheetari.deno.dev/16fcvNEt6vPOiuOtQmP3Nji97_KgU-pffEBf6IbELeE0/row-nested?dot=false
```
**Output:**
```json
[
  {
    "id": "1",
    "user.name": "Alice",
    "user.email": "alice@email.com",
    "settings.theme": "dark",
    "settings.notifications.email": "TRUE"
  },
  {
    "id": "2",
    "user.name": "Bob",
    "user.email": "bob@email.com",
    "settings.theme": "light",
    "settings.notifications.email": "FALSE"
  }
]
```

### 6. Column Mode with Dot Notation Disabled
```
https://sheetari.deno.dev/16fcvNEt6vPOiuOtQmP3Nji97_KgU-pffEBf6IbELeE0/col-nested?mode=col&dot=false
```
**Output:**
```json
{
  "user.name": "Alice",
  "user.email": "alice@email.com",
  "settings.theme": "dark",
  "settings.notifications.email": "TRUE"
}
```

## All Demo Sheets

| Sheet Name | Description | Best Mode | Example URL |
|------------|-------------|-----------|-------------|
| `row` | Basic tabular data | Row | [/row](https://sheetari.deno.dev/16fcvNEt6vPOiuOtQmP3Nji97_KgU-pffEBf6IbELeE0/row) |
| `row-nested` | Tabular data with dot notation | Row | [/row-nested](https://sheetari.deno.dev/16fcvNEt6vPOiuOtQmP3Nji97_KgU-pffEBf6IbELeE0/row-nested) |
| `col` | Key-value pairs | Column | [/col?mode=col](https://sheetari.deno.dev/16fcvNEt6vPOiuOtQmP3Nji97_KgU-pffEBf6IbELeE0/col?mode=col) |
| `col-nested` | Nested key-value pairs | Column | [/col-nested?mode=col](https://sheetari.deno.dev/16fcvNEt6vPOiuOtQmP3Nji97_KgU-pffEBf6IbELeE0/col-nested?mode=col) |

## Features

- ✅ **Public sheets only** - No authentication required
- ✅ **Automatic type conversion** - Booleans, numbers, null values
- ✅ **Dot notation parsing** - `user.name` → `{ user: { name: "value" } }`
- ✅ **Flexible modes** - Row arrays or column objects
- ✅ **Error handling** - Clear messages for missing sheets
- ✅ **CORS enabled** - Use from any frontend framework
- ✅ **Edge deployed** - Fast response times worldwide

## Error Handling

### Invalid Sheet Name
```
https://sheetari.deno.dev/16fcvNEt6vPOiuOtQmP3Nji97_KgU-pffEBf6IbELeE0/nonexistent
```
**Output:**
```json
{
  "error": "Sheet 'nonexistent' not found"
}
```

### Invalid Sheet ID
```
https://sheetari.deno.dev/invalid-sheet-id/row
```
**Output:**
```json
{
  "error": "Failed to fetch sheet data"
}
```

## Quick Start

1. **Make your Google Sheet public**: Share → Anyone with the link can view
2. **Get the sheet ID**: Copy from the URL between `/d/` and `/edit`
3. **Make API calls**:
   ```bash
   curl "https://sheetari.deno.dev/YOUR_SHEET_ID/YOUR_SHEET_NAME"
   ```

## Usage Tips

### Best Practices
- Use **row mode** for lists of records (like user tables, product catalogs)
- Use **column mode** for configuration data (settings, constants, key-value pairs)
- Enable **dot notation** for nested object structures
- Disable **dot notation** when you need literal dot-separated keys

### Frontend Framework Examples

**Fetch API:**
```javascript
const data = await fetch('https://sheetari.deno.dev/16fcvNEt6vPOiuOtQmP3Nji97_KgU-pffEBf6IbELeE0/row')
  .then(res => res.json());
```

**SvelteKit:**
```javascript
// src/routes/+page.js
export async function load({ fetch }) {
  const res = await fetch('https://sheetari.deno.dev/16fcvNEt6vPOiuOtQmP3Nji97_KgU-pffEBf6IbELeE0/row');
  return {
    data: await res.json()
  };
}
```

**Next.js:**
```javascript
export async function getStaticProps() {
  const res = await fetch('https://sheetari.deno.dev/16fcvNEt6vPOiuOtQmP3Nji97_KgU-pffEBf6IbELeE0/row');
  const data = await res.json();
  
  return { props: { data } };
}
```

## Sheet Requirements

- Sheet must be publicly accessible (anyone with link can view)
- For column mode: Use 2-column format (key, value)
- For dot notation: Use dot-separated keys like `user.name`, `settings.theme`
- First row is treated as headers in row mode
- Empty rows and columns are automatically filtered out
