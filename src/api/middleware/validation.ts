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
│   └── /footer
│       ├── mod.ts           # Footer component logic
│       └── styles.css       # Styles for footer component
│
├── /constants
│   ├── api.ts               # API constants (e.g., URLs, headers)
│   └── messages.ts          # Common messages and error strings
│
├── /utils
│   ├── fetchCSV.ts          # Utility to fetch CSV from Google Sheets
│   ├── parseCSV.ts          # Utility to parse CSV into a matrix
│   ├── response.ts          # Utility for formatting JSON responses
│   └── errorHandler.ts      # Utility for handling errors
│
├── /regex
│   ├── patterns.ts          # Regex patterns for validation
│   └── validators.ts        # Validation functions using regex
│
├── /tests
│   ├── api.test.ts          # Tests for API routes
│   ├── utils.test.ts        # Tests for utility functions
│   └── components.test.ts    # Tests for components
│
├── .env                      # Environment variables
├── deno.json                 # Deno configuration file
└── README.md                 # Project documentation