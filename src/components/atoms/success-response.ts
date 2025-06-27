/deno-google-sheets-to-json
│
├── /api
│   ├── index.ts                # Main API entry point
│   ├── routes.ts               # Define API routes
│   └── handlers.ts             # Request handlers for different endpoints
│
├── /components
│   ├── /dataTransformers        # Components for transforming data
│   │   ├── index.ts            # Exports for data transformers
│   │   ├── rowMapper.ts         # Logic for row mapping
│   │   └── columnMapper.ts      # Logic for column mapping
│   │
│   ├── /errorHandlers           # Components for error handling
│   │   ├── index.ts            # Exports for error handlers
│   │   └── errorResponses.ts    # Standardized error responses
│   │
│   └── /responseFormatters      # Components for formatting responses
│       ├── index.ts            # Exports for response formatters
│       └── jsonFormatter.ts     # Logic for formatting JSON responses
│
├── /constants
│   ├── index.ts                 # Exports for constants
│   └── apiConstants.ts          # API-related constants (e.g., status codes)
│
├── /utils
│   ├── index.ts                 # Exports for utility functions
│   ├── fetchUtils.ts            # Utility functions for fetching data
│   └── validationUtils.ts       # Utility functions for input validation
│
├── /regex
│   ├── index.ts                 # Exports for regex patterns
│   └── patterns.ts              # Common regex patterns used in the project
│
├── /tests
│   ├── api.test.ts              # Tests for API endpoints
│   ├── dataTransformers.test.ts  # Tests for data transformation logic
│   └── utils.test.ts            # Tests for utility functions
│
├── .env                          # Environment variables (if needed)
├── deno.json                     # Deno configuration file
└── README.md                     # Project documentation