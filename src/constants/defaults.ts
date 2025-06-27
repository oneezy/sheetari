/deno-google-sheets-to-json
│
├── /api
│   ├── mod.ts                # Main API entry point
│   ├── routes.ts            # Define API routes
│   └── handlers.ts          # Request handlers for each route
│
├── /components
│   ├── /header
│   │   ├── mod.ts           # Header component logic
│   │   └── types.ts         # Type definitions for headers
│   ├── /data
│   │   ├── mod.ts           # Data component logic
│   │   └── types.ts         # Type definitions for data
│   └── /error
│       ├── mod.ts           # Error handling component
│       └── types.ts         # Type definitions for errors
│
├── /constants
│   ├── api.ts               # API constants (e.g., base URLs, response messages)
│   └── regex.ts             # Regular expressions used in the project
│
├── /utils
│   ├── fetch.ts             # Utility functions for fetching data
│   ├── parse.ts             # CSV parsing utilities
│   └── validate.ts          # Input validation utilities
│
├── /tests
│   ├── api.test.ts          # Tests for API routes
│   ├── utils.test.ts        # Tests for utility functions
│   └── components.test.ts    # Tests for components
│
├── mod.ts                   # Main entry point for the Deno application
├── README.md                # Project documentation
└── deps.ts                 # Dependency management (if needed)