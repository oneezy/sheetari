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
│   │   ├── parseCSV.ts      # Parse CSV data into a matrix
│   │   └── transformData.ts  # Transform data into desired format
│   │
│   ├── /error
│   │   ├── handleErrors.ts   # Error handling utilities
│   │   └── errorResponses.ts  # Standard error responses
│   │
│   └── /response
│       ├── sendJSON.ts       # Send JSON response with CORS headers
│       └── formatResponse.ts  # Format response based on mode
│
├── /constants
│   ├── apiConstants.ts       # API constants (e.g., error messages)
│   └── regexPatterns.ts       # Common regex patterns used in the project
│
├── /utils
│   ├── validateParams.ts      # Validate URL parameters
│   ├── parseDotNotation.ts     # Parse dot notation for nested objects
│   └── logger.ts              # Logging utility
│
├── /tests
│   ├── api.test.ts            # Tests for API routes
│   ├── handlers.test.ts       # Tests for request handlers
│   └── utils.test.ts          # Tests for utility functions
│
├── mod.ts                     # Main entry point for the Deno application
├── README.md                  # Project documentation
└── deps.ts                   # Dependency management (if needed)