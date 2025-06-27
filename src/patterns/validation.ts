/deno-google-sheets-to-json
│
├── /api
│   ├── index.ts                # Main API entry point
│   ├── routes.ts               # Define API routes
│   └── handlers.ts             # Request handlers for different endpoints
│
├── /components
│   ├── /data
│   │   ├── parseCSV.ts         # Function to parse CSV data
│   │   └── formatJSON.ts       # Function to format data as JSON
│   │
│   ├── /error
│   │   ├── errorHandler.ts      # Centralized error handling
│   │   └── errorTypes.ts        # Define error types and messages
│   │
│   └── /validation
│       ├── validateParams.ts    # Validate incoming request parameters
│       └── validateRange.ts      # Validate range inputs
│
├── /constants
│   ├── apiConstants.ts          # API-related constants (e.g., status codes)
│   └── regexPatterns.ts         # Common regex patterns used in the project
│
├── /utils
│   ├── fetchUtils.ts            # Utility functions for fetching data
│   └── responseUtils.ts         # Utility functions for formatting responses
│
├── /tests
│   ├── api.test.ts              # Tests for API endpoints
│   ├── utils.test.ts            # Tests for utility functions
│   └── components.test.ts        # Tests for components
│
├── .gitignore                   # Git ignore file
├── deno.json                    # Deno configuration file
└── README.md                    # Project documentation