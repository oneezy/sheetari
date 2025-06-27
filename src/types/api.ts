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
│   ├── /errorHandlers           # Components for error handling
│   │   ├── index.ts            # Export all error handlers
│   │   └── errorHandler.ts      # Centralized error handling logic
│   │
│   └── /responseFormatters      # Components for formatting responses
│       ├── index.ts            # Export all response formatters
│       └── jsonFormatter.ts     # Logic for formatting JSON responses
│
├── /constants
│   ├── index.ts                # Export all constants
│   └── apiConstants.ts         # API-related constants (e.g., status codes)
│
├── /utils
│   ├── index.ts                # Export all utility functions
│   ├── fetchUtils.ts           # Utility functions for fetching data
│   └── validationUtils.ts       # Utility functions for input validation
│
├── /regex
│   ├── index.ts                # Export all regex patterns
│   └── patterns.ts             # Common regex patterns used in the project
│
├── /tests
│   ├── api.test.ts             # Tests for API endpoints
│   ├── transformers.test.ts     # Tests for data transformers
│   └── utils.test.ts           # Tests for utility functions
│
├── .gitignore                   # Git ignore file
├── README.md                    # Project documentation
└── main.ts                     # Entry point for the Deno application