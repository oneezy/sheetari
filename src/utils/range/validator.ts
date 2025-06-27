/deno-google-sheets-to-json
│
├── /api
│   ├── index.ts               # Main API entry point
│   ├── routes.ts              # Define API routes
│   └── handlers.ts            # Request handlers for different endpoints
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
│   └── regexConstants.ts       # Regex patterns used in the application
│
├── /utils
│   ├── fetchUtils.ts           # Utility functions for fetching data
│   ├── csvParser.ts            # CSV parsing utility
│   └── responseUtils.ts        # Utility functions for formatting responses
│
├── /regex
│   ├── patterns.ts             # Common regex patterns used in the application
│
├── /tests
│   ├── api.test.ts             # Tests for API endpoints
│   ├── utils.test.ts           # Tests for utility functions
│   └── components.test.ts       # Tests for components
│
├── .gitignore                   # Git ignore file
├── deno.json                    # Deno configuration file
└── README.md                    # Project documentation