/deno-google-sheets-to-json
│
├── /api
│   ├── mod.ts                # Main API entry point
│   ├── routes.ts            # Define API routes and handlers
│   └── handlers
│       ├── fetchSheet.ts    # Handler for fetching Google Sheets
│       ├── parseCSV.ts      # Handler for parsing CSV data
│       └── errorHandler.ts   # Centralized error handling
│
├── /components
│   ├── /jsonResponse
│   │   ├── mod.ts           # JSON response component
│   │   └── types.ts         # Type definitions for JSON response
│   └── /urlParams
│       ├── mod.ts           # URL parameters component
│       └── types.ts         # Type definitions for URL parameters
│
├── /constants
│   ├── api.ts               # API constants (e.g., base URL, endpoints)
│   └── messages.ts          # Common messages and error strings
│
├── /utils
│   ├── fetch.ts             # Utility for fetching data
│   ├── csvParser.ts         # Utility for parsing CSV data
│   └── validation.ts        # Utility for input validation
│
├── /regex
│   ├── patterns.ts          # Regex patterns used in the project
│
├── /tests
│   ├── api.test.ts          # Tests for API endpoints
│   ├── utils.test.ts        # Tests for utility functions
│   └── components.test.ts    # Tests for components
│
├── mod.ts                   # Main entry point for the Deno application
├── README.md                # Project documentation
└── deps.ts                  # Dependency management (if needed)