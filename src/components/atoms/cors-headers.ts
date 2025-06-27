/deno-google-sheets-to-json
│
├── /api
│   ├── index.ts                # Main API entry point
│   ├── routes.ts               # Define API routes
│   └── handlers.ts             # Request handlers for different routes
│
├── /components
│   ├── /header
│   │   ├── Header.ts           # Header component logic
│   │   └── Header.test.ts      # Tests for Header component
│   └── /footer
│       ├── Footer.ts           # Footer component logic (if needed)
│       └── Footer.test.ts      # Tests for Footer component
│
├── /constants
│   ├── apiConstants.ts         # API-related constants (e.g., error messages)
│   └── regexPatterns.ts        # Common regex patterns used in the project
│
├── /utils
│   ├── fetchUtils.ts           # Utility functions for fetching data
│   ├── csvParser.ts            # CSV parsing utility
│   └── errorHandler.ts         # Error handling utilities
│
├── /tests
│   ├── api.test.ts             # Tests for API endpoints
│   ├── utils.test.ts           # Tests for utility functions
│   └── components.test.ts      # Tests for components
│
├── /public                     # Static files (if needed)
│   └── README.md               # Project documentation
│
├── .env                        # Environment variables (if needed)
├── deno.json                   # Deno configuration file
└── main.ts                     # Entry point for the application