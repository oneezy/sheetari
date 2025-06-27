/deno-google-sheets-to-json
│
├── /api
│   ├── mod.ts                # Main API entry point
│   ├── routes.ts            # Define API routes
│   └── handlers.ts          # Request handlers for each route
│
├── /components
│   ├── /data
│   │   ├── fetchData.ts     # Fetch data from Google Sheets
│   │   └── parseData.ts     # Parse CSV data into JSON
│   │
│   ├── /response
│   │   ├── sendResponse.ts   # Send JSON response with CORS headers
│   │   └── errorResponse.ts   # Handle error responses
│   │
│   └── /validation
│       ├── validateParams.ts # Validate URL parameters
│       └── validateRange.ts   # Validate range inputs
│
├── /constants
│   ├── apiConstants.ts       # API constants (e.g., error messages)
│   └── regexPatterns.ts       # Common regex patterns
│
├── /utils
│   ├── logger.ts             # Logging utility
│   └── config.ts             # Configuration settings
│
├── /tests
│   ├── api.test.ts           # Tests for API routes
│   ├── data.test.ts          # Tests for data fetching and parsing
│   └── validation.test.ts     # Tests for validation functions
│
├── mod.ts                    # Main entry point for the Deno application
├── README.md                 # Project documentation
└── deps.ts                   # Dependency management