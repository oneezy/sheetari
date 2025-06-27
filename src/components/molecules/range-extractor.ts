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
│   ├── fetchCSV.ts          # Utility to fetch CSV from Google Sheets
│   ├── parseCSV.ts          # Utility to parse CSV into a matrix
│   ├── errorHandler.ts       # Utility for error handling
│   └── responseFormatter.ts  # Utility to format JSON responses
│
├── /tests
│   ├── api.test.ts          # Tests for API routes
│   ├── utils.test.ts        # Tests for utility functions
│   └── components.test.ts    # Tests for components
│
├── /public                   # Static files (if needed)
│   └── index.html           # Example HTML file for testing
│
├── .gitignore                # Git ignore file
├── deno.json                 # Deno configuration file
└── README.md                 # Project documentation