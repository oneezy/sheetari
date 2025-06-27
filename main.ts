/deno-google-sheets-to-json
│
├── /api
│   ├── mod.ts               # Main API entry point
│   ├── routes.ts           # Define API routes
│   └── handlers.ts         # Request handlers for each route
│
├── /components
│   ├── /header
│   │   ├── mod.ts          # Header component logic
│   │   └── styles.css      # Header styles (if applicable)
│   ├── /footer
│   │   ├── mod.ts          # Footer component logic
│   │   └── styles.css      # Footer styles (if applicable)
│   └── /loading
│       ├── mod.ts          # Loading component logic
│       └── styles.css      # Loading styles (if applicable)
│
├── /constants
│   ├── api.ts              # API constants (e.g., URLs, response messages)
│   └── config.ts           # Configuration constants (e.g., environment variables)
│
├── /utils
│   ├── fetch.ts            # Utility functions for fetching data
│   ├── parse.ts            # CSV parsing utilities
│   └── error.ts            # Error handling utilities
│
├── /regex
│   ├── patterns.ts         # Regular expressions used in the project
│
├── /tests
│   ├── api.test.ts         # Tests for API routes
│   ├── utils.test.ts       # Tests for utility functions
│   └── components.test.ts   # Tests for components
│
├── mod.ts                  # Main entry point for the Deno application
├── README.md               # Project documentation
└── .env                    # Environment variables (if needed)