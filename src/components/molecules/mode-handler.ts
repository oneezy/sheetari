/deno-google-sheets-to-json
│
├── /api
│   ├── index.ts                # Main API entry point
│   ├── routes.ts               # Define API routes
│   └── handlers.ts             # Request handlers for each route
│
├── /components
│   ├── /dataTransformers        # Components for transforming data
│   │   ├── index.ts            # Exports for data transformers
│   │   ├── rowMapper.ts         # Logic for mapping rows
│   │   └── columnMapper.ts      # Logic for mapping columns
│   │
│   └── /errorHandlers           # Components for error handling
│       ├── index.ts            # Exports for error handlers
│       └── errorResponses.ts    # Standardized error responses
│
├── /constants
│   ├── index.ts                # Exports for constants
│   └── apiConstants.ts         # API-specific constants (e.g., status codes)
│
├── /utils
│   ├── index.ts                # Exports for utility functions
│   ├── fetchUtils.ts           # Functions for fetching data
│   └── csvParser.ts            # CSV parsing utilities
│
├── /regex
│   ├── index.ts                # Exports for regex patterns
│   └── patterns.ts             # Common regex patterns used in the project
│
├── /tests
│   ├── api.test.ts             # Tests for API endpoints
│   ├── utils.test.ts           # Tests for utility functions
│   └── components.test.ts       # Tests for components
│
├── .gitignore                   # Git ignore file
├── deno.json                    # Deno configuration file
└── README.md                    # Project documentation