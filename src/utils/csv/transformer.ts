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
│   └── regexConstants.ts      # Regex patterns used in the project
│
├── /utils
│   ├── fetchUtils.ts          # Utility functions for fetching data
│   ├── csvParser.ts           # CSV parsing logic
│   └── errorHandler.ts        # Error handling utilities
│
├── /patterns
│   ├── regexPatterns.ts        # Regex patterns for validation
│   └── validationPatterns.ts   # Validation logic for inputs
│
├── /tests
│   ├── api.test.ts            # Tests for API endpoints
│   ├── utils.test.ts          # Tests for utility functions
│   └── components.test.ts      # Tests for components
│
├── .gitignore                  # Git ignore file
├── deno.json                   # Deno configuration file
└── README.md                   # Project documentation