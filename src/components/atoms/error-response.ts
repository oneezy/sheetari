/deno-google-sheets-to-json
│
├── /api
│   ├── index.ts               # Main API entry point
│   ├── routes.ts              # Define API routes
│   ├── handlers
│   │   ├── fetchSheet.ts      # Handler for fetching Google Sheets
│   │   ├── parseCSV.ts        # Handler for parsing CSV data
│   │   └── errorHandler.ts     # Centralized error handling
│   └── middlewares
│       ├── cors.ts            # CORS middleware
│       └── logger.ts          # Logging middleware
│
├── /components
│   ├── /jsonResponse
│   │   ├── index.ts           # JSON response component
│   │   └── types.ts           # Types for JSON response
│   └── /errorResponse
│       ├── index.ts           # Error response component
│       └── types.ts           # Types for error response
│
├── /constants
│   ├── api.ts                 # API constants (e.g., status codes)
│   └── regex.ts               # Regex patterns used in the project
│
├── /utils
│   ├── fetch.ts               # Utility for fetching data
│   ├── parse.ts               # Utility for parsing data
│   └── validate.ts            # Utility for input validation
│
├── /tests
│   ├── api.test.ts            # Tests for API endpoints
│   ├── utils.test.ts          # Tests for utility functions
│   └── components.test.ts      # Tests for components
│
├── .gitignore                  # Git ignore file
├── deno.json                   # Deno configuration file
└── README.md                   # Project documentation