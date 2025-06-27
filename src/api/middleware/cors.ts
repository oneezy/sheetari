/deno-google-sheets-to-json
│
├── /api
│   ├── index.ts                # Main API entry point
│   ├── routes.ts               # Define API routes
│   └── handlers.ts             # Request handlers for different endpoints
│
├── /components
│   ├── /dataTransformers        # Components for transforming data
│   │   ├── index.ts            # Export all transformers
│   │   ├── rowTransformer.ts    # Logic for row mode transformation
│   │   └── columnTransformer.ts # Logic for column mode transformation
│   │
│   └── /errorHandlers           # Components for error handling
│       ├── index.ts            # Export all error handlers
│       └── errorHandler.ts      # Centralized error handling logic
│
├── /constants
│   ├── index.ts                # Export all constants
│   └── apiConstants.ts         # API-related constants (e.g., error messages, status codes)
│
├── /utils
│   ├── index.ts                # Export all utility functions
│   ├── fetchUtils.ts           # Functions for fetching data from Google Sheets
│   ├── csvParser.ts            # CSV parsing logic
│   └── urlParser.ts            # URL parameter parsing logic
│
├── /regex
│   ├── index.ts                # Export all regex patterns
│   └── patterns.ts             # Common regex patterns used in the project
│
├── /tests
│   ├── api.test.ts             # Tests for API routes
│   ├── transformers.test.ts     # Tests for data transformers
│   └── utils.test.ts           # Tests for utility functions
│
├── .gitignore                   # Git ignore file
├── deno.json                    # Deno configuration file
└── README.md                    # Project documentation