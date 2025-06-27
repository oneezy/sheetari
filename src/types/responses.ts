/deno-google-sheets-to-json
│
├── /api
│   ├── mod.ts                # Main API entry point
│   ├── routes.ts            # Define API routes
│   └── handlers.ts          # Request handlers for different endpoints
│
├── /components
│   ├── /jsonResponse.ts      # Component for formatting JSON responses
│   ├── /errorHandler.ts      # Component for handling errors
│   └── /validator.ts         # Component for validating input parameters
│
├── /constants
│   ├── index.ts              # Export constants used throughout the project
│   └── apiConstants.ts       # API-specific constants (e.g., error messages)
│
├── /utils
│   ├── fetchCsv.ts           # Utility for fetching CSV from Google Sheets
│   ├── parseCsv.ts           # Utility for parsing CSV into a matrix
│   └── formatJson.ts         # Utility for formatting data into JSON
│
├── /regex
│   ├── index.ts              # Export regex patterns used throughout the project
│   └── urlPatterns.ts        # Regex patterns for validating URLs and parameters
│
├── /tests
│   ├── api.test.ts           # Tests for API endpoints
│   ├── utils.test.ts         # Tests for utility functions
│   └── components.test.ts     # Tests for components
│
├── .env                       # Environment variables (if needed)
├── .gitignore                 # Git ignore file
├── README.md                  # Project documentation
└── deps.ts                   # Dependency management (if using third-party modules)