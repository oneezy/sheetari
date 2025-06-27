/deno-google-sheets-to-json
│
├── /api
│   ├── index.ts               # Main API entry point
│   ├── routes.ts              # Define API routes
│   └── handlers.ts            # Request handlers for each route
│
├── /components
│   ├── /dataTransformers       # Components for transforming data
│   │   ├── index.ts           # Export all transformers
│   │   ├── rowTransformer.ts   # Handle row mode transformation
│   │   └── columnTransformer.ts # Handle column mode transformation
│   │
│   └── /errorHandlers          # Components for error handling
│       ├── index.ts           # Export all error handlers
│       └── errorHandler.ts     # General error handling logic
│
├── /constants
│   ├── index.ts               # Export all constants
│   └── apiConstants.ts        # API-related constants (e.g., error messages)
│
├── /utils
│   ├── index.ts               # Export all utility functions
│   ├── fetchUtils.ts          # Utility functions for fetching data
│   └── csvParser.ts           # CSV parsing utility
│
├── /regex
│   ├── index.ts               # Export all regex patterns
│   └── patterns.ts            # Common regex patterns used in the project
│
├── /tests
│   ├── api.test.ts            # Tests for API endpoints
│   ├── transformers.test.ts    # Tests for data transformers
│   └── utils.test.ts          # Tests for utility functions
│
├── .gitignore                  # Git ignore file
├── deno.json                   # Deno configuration file
└── README.md                   # Project documentation