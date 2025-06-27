/deno-google-sheets-to-json
│
├── /api
│   ├── mod.ts                # Main API entry point
│   ├── routes.ts            # Define routes for the API
│   └── handlers.ts          # Request handlers for different endpoints
│
├── /components
│   ├── /data
│   │   ├── fetchData.ts      # Fetch data from Google Sheets
│   │   └── parseData.ts      # Parse CSV data into JSON
│   │
│   ├── /response
│   │   ├── jsonResponse.ts    # Format JSON response
│   │   └── errorResponse.ts    # Handle error responses
│   │
│   └── /validation
│       ├── validateParams.ts   # Validate URL parameters
│       └── validateData.ts      # Validate parsed data
│
├── /constants
│   ├── apiConstants.ts        # API constants (e.g., error messages)
│   └── regexPatterns.ts       # Common regex patterns used in the project
│
├── /utils
│   ├── cors.ts                # CORS middleware
│   └── logger.ts              # Logging utility
│
├── /tests
│   ├── api.test.ts            # Tests for API endpoints
│   ├── data.test.ts           # Tests for data fetching and parsing
│   └── validation.test.ts      # Tests for validation logic
│
├── mod.ts                     # Main entry point for the Deno application
├── README.md                  # Project documentation
└── deps.ts                   # Dependency management (if needed)