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
│   ├── api.ts               # API constants (e.g., base URLs, error messages)
│   └── regex.ts             # Regular expressions used in the project
│
├── /utils
│   ├── fetchCSV.ts          # Utility for fetching CSV from Google Sheets
│   ├── parseCSV.ts          # Utility for parsing CSV into a matrix
│   ├── errorHandler.ts       # Utility for handling errors
│   └── responseFormatter.ts  # Utility for formatting JSON responses
│
├── /patterns
│   ├── urlPatterns.ts       # Regex patterns for URL validation
│   └── dataPatterns.ts      # Patterns for validating data formats
│
├── /tests
│   ├── api.test.ts          # Tests for API routes
│   ├── utils.test.ts        # Tests for utility functions
│   └── components.test.ts    # Tests for components
│
├── .gitignore                # Git ignore file
├── README.md                 # Project documentation
└── deps.ts                  # Dependency management (if using third-party modules)