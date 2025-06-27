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
│   │   ├── formatResponse.ts  # Format JSON response
│   │   └── errorResponse.ts    # Handle error responses
│   │
│   └── /validation
│       ├── validateParams.ts  # Validate URL parameters
│       └── validateData.ts     # Validate parsed data
│
├── /constants
│   ├── apiConstants.ts        # API-related constants (e.g., error messages)
│   └── regexPatterns.ts       # Common regex patterns used in the project
│
├── /utils
│   ├── logger.ts              # Logging utility
│   └── helpers.ts             # General helper functions
│
├── /tests
│   ├── api.test.ts            # Tests for API endpoints
│   ├── data.test.ts           # Tests for data fetching and parsing
│   └── validation.test.ts      # Tests for validation functions
│
├── .env                        # Environment variables (e.g., API keys)
├── .gitignore                  # Git ignore file
├── README.md                   # Project documentation
└── mod.ts                      # Deno module entry point