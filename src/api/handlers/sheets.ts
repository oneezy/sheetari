/deno-google-sheets-to-json
│
├── /api
│   ├── index.ts                # Main API entry point
│   ├── routes.ts               # Define API routes
│   └── handlers.ts             # Request handlers for different endpoints
│
├── /components
│   ├── /header
│   │   ├── Header.ts           # Header component logic
│   │   └── Header.test.ts      # Tests for Header component
│   ├── /data
│   │   ├── Data.ts             # Data component logic
│   │   └── Data.test.ts        # Tests for Data component
│   └── /error
│       ├── ErrorHandler.ts      # Error handling component
│       └── ErrorHandler.test.ts # Tests for ErrorHandler component
│
├── /constants
│   ├── apiConstants.ts         # API-related constants (e.g., error messages)
│   └── regexConstants.ts       # Regex patterns used in the project
│
├── /utils
│   ├── fetchUtils.ts           # Utility functions for fetching data
│   ├── parseUtils.ts           # Utility functions for parsing CSV
│   └── validationUtils.ts      # Utility functions for input validation
│
├── /patterns
│   ├── regexPatterns.ts         # Regex patterns for validation and parsing
│
├── /tests
│   ├── api.test.ts             # Tests for API routes
│   ├── utils.test.ts           # Tests for utility functions
│   └── components.test.ts       # Tests for components
│
├── .env                         # Environment variables (if needed)
├── deno.json                    # Deno configuration file
└── README.md                    # Project documentation