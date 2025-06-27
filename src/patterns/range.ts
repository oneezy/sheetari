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
│   │   └── styles.css       # Styles for header component
│   ├── /footer
│   │   ├── mod.ts           # Footer component logic
│   │   └── styles.css       # Styles for footer component
│   └── /loading
│       ├── mod.ts           # Loading component logic
│       └── styles.css       # Styles for loading component
│
├── /constants
│   ├── api.ts               # API constants (e.g., base URLs, response messages)
│   └── regex.ts             # Regular expressions used in the project
│
├── /utils
│   ├── fetch.ts             # Utility functions for fetching data
│   ├── parseCsv.ts          # CSV parsing utility
│   ├── validate.ts          # Validation functions for inputs
│   └── errorHandler.ts       # Error handling utilities
│
├── /patterns
│   ├── regexPatterns.ts      # Centralized regex patterns
│   └── validationPatterns.ts  # Validation patterns for inputs
│
├── /tests
│   ├── api.test.ts          # Tests for API routes
│   ├── utils.test.ts        # Tests for utility functions
│   └── components.test.ts    # Tests for components
│
├── .env                      # Environment variables
├── .gitignore                # Git ignore file
├── README.md                 # Project documentation
└── mod.ts                    # Deno entry point for the application