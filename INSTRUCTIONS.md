## Setup

I have a Google Spreadsheet I setup for testing with 4 sheets.

Base URL:
https://docs.google.com/spreadsheets/d/16fcvNEt6vPOiuOtQmP3Nji97_KgU-pffEBf6IbELeE0

Sheet Index: 0: row 1: row-nested 2: col 3: col-nested

### row
```csv
"header1","header2","header3"
"header1 data1","header2 data1","header3 data1"
"header1 data2","header2 data2","header3 data2"
"header1 data3","header2 data3","header3 data3"
```

### row-nested (dot notation)
```csv
"id","user.name","user.email","settings.theme","settings.notifications.email"
"1","Alice","alice@email.com","dark","TRUE"
"2","Bob","bob@email.com","light","FALSE"
```

### col
```csv
"key1","key1 value"
"key2","key2 value"
"key3","key3 value"
```

### col-nested (dot notation)
```csv
"user.name","Alice"
"user.email","alice@email.com"
"settings.theme","dark"
"settings.notifications.email","TRUE"
```

## Bugs To Fix

### all sheets:
- if only ID is provided e.g. "http://localhost:8000/16fcvNEt6vPOiuOtQmP3Nji97_KgU-pffEBf6IbELeE0", 
  it should default to first sheet, but currently is showing `404 Not Found`
- if i use "http://localhost:8000/16fcvNEt6vPOiuOtQmP3Nji97_KgU-pffEBf6IbELeE0/0",
  it defaults to first sheet, but if i do "1" or "2", it keeps going to first sheet

### dot notation is not working for `mode=row` or `mode=col`:
#### row-nested (`mode=row` - default):
- current output:
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
- expected output:
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
        "email": "true"
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
        "email": "false"
      }
    }
  }
]
```

#### col-nested (`mode=col`):
- current output:
```json
[
  {
    "user.name user.email settings.theme": "settings.notifications.email",
    "Alice alice@email.com dark": "TRUE"
  }
]

```
- expected output:
```json
{
  "user": {
    "name": "Alice",
    "email": "alice@email.com"
  },
  "settings": {
    "theme": "dark",
    "notifications": {
      "email": "true"
    }
  }
}
```
