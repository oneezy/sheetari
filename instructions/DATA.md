## Data

I have a Google Spreadsheet I setup for testing with 4 sheets.

Base URL:
https://docs.google.com/spreadsheets/d/16fcvNEt6vPOiuOtQmP3Nji97_KgU-pffEBf6IbELeE0

Sheet Index: 
- 0: row 
- 1: row-nested 
- 2: col 
- 3: col-nested

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