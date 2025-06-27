/deno-google-sheets-to-json
│
├── /api
│   ├── index.ts                # Main API entry point
│   ├── routes.ts               # Define API routes
│   └── handlers.ts             # Request handlers for different endpoints
│
├── /components
│   ├── /data
│   │   ├── fetchData.ts        # Fetch data from Google Sheets
│   │   └── parseData.ts        # Parse CSV data into JSON
│   │
│   ├── /response
│   │   ├── sendResponse.ts      # Send JSON response with CORS headers
│   │   └── errorResponse.ts      # Handle error responses
│   │
│   └── /validation
│       ├── validateParams.ts    # Validate URL parameters
│       └── validateRange.ts      # Validate range inputs
│
├── /constants
│   ├── apiConstants.ts          # API-related constants (e.g., error messages)
│   └── regexPatterns.ts         # Common regex patterns used in the project
│
├── /utils
│   ├── logger.ts                # Logging utility
│   └── config.ts                # Configuration settings (e.g., environment variables)
│
├── /tests
│   ├── api.test.ts              # Tests for API endpoints
│   ├── utils.test.ts            # Tests for utility functions
│   └── components.test.ts        # Tests for components
│
├── .env                          # Environment variables
├── deno.json                     # Deno configuration file
└── README.md                     # Project documentation