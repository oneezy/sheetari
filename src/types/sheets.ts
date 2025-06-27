/deno-google-sheets-to-json
│
├── /api
│   ├── index.ts               # Main API entry point
│   ├── routes.ts              # Define API routes
│   └── handlers.ts            # Request handlers for different endpoints
│
├── /components
│   ├── /Header
│   │   ├── Header.ts          # Header component logic
│   │   └── Header.test.ts     # Tests for Header component
│   ├── /Row
│   │   ├── Row.ts             # Row component logic
│   │   └── Row.test.ts        # Tests for Row component
│   └── /Column
│       ├── Column.ts          # Column component logic
│       └── Column.test.ts     # Tests for Column component
│
├── /constants
│   ├── apiConstants.ts        # API-related constants (e.g., error messages)
│   └── regexPatterns.ts       # Common regex patterns used in the project
│
├── /utils
│   ├── fetchUtils.ts          # Utility functions for fetching data
│   ├── csvParser.ts           # CSV parsing utilities
│   └── errorHandler.ts        # Error handling utilities
│
├── /tests
│   ├── api.test.ts            # API tests
│   ├── utils.test.ts          # Utility functions tests
│   └── components.test.ts      # Component tests
│
├── .gitignore                  # Git ignore file
├── deno.json                   # Deno configuration file
└── README.md                   # Project documentation