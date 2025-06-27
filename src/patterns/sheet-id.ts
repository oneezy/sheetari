/deno-google-sheets-to-json
│
├── /api
│   ├── index.ts               # Main API entry point
│   ├── routes.ts              # Define API routes
│   └── handlers.ts            # Request handlers for different endpoints
│
├── /components
│   ├── /jsonResponse
│   │   ├── index.ts           # JSON response formatting
│   │   └── types.ts           # Types for JSON response
│   ├── /errorHandling
│   │   ├── index.ts           # Error handling logic
│   │   └── types.ts           # Types for error responses
│   └── /csvParser
│       ├── index.ts           # CSV parsing logic
│       └── types.ts           # Types for parsed CSV data
│
├── /constants
│   ├── api.ts                 # API constants (e.g., base URL, headers)
│   └── regex.ts               # Regular expressions used in the project
│
├── /utils
│   ├── fetch.ts               # Utility for fetching data
│   ├── urlParser.ts           # URL parameter parsing logic
│   └── validation.ts          # Input validation functions
│
├── /tests
│   ├── api.test.ts            # Tests for API endpoints
│   ├── utils.test.ts          # Tests for utility functions
│   └── components.test.ts      # Tests for components
│
├── .gitignore                  # Git ignore file
├── README.md                   # Project documentation
└── deps.ts                    # Dependency management (if using third-party modules)