### Project Structure

```
/deno-google-sheets-to-json
│
├── /api
│   ├── index.ts               # Main API entry point
│   ├── routes.ts              # Define API routes
│   └── handlers.ts            # Request handlers for different routes
│
├── /components
│   ├── /Header
│   │   ├── Header.ts          # Header component logic
│   │   └── Header.test.ts     # Tests for Header component
│   ├── /Row
│   │   ├── Row.ts             # Row component logic
│   │   └── Row.test.ts        # Tests for Row component
│   └── /Column
│       ├── Column.ts          # Column component logic
│       └── Column.test.ts     # Tests for Column component
│
├── /constants
│   ├── apiConstants.ts        # API-related constants (e.g., error messages)
│   └── regexPatterns.ts       # Common regex patterns used in the project
│
├── /utils
│   ├── fetchUtils.ts          # Utility functions for fetching data
│   ├── csvParser.ts           # CSV parsing utility
│   └── errorHandler.ts        # Error handling utilities
│
├── /tests
│   ├── api.test.ts            # API tests
│   ├── utils.test.ts          # Utility tests
│   └── components.test.ts      # Component tests
│
├── .gitignore                  # Git ignore file
├── deno.json                   # Deno configuration file
└── README.md                   # Project documentation
```

### Description of Each Directory/File

- **/api**: Contains all API-related files.
  - `index.ts`: The main entry point for the API, where the server is initialized.
  - `routes.ts`: Defines the routes for the API and maps them to handlers.
  - `handlers.ts`: Contains the logic for handling requests for each route.

- **/components**: Contains modular components that can be reused.
  - Each component (Header, Row, Column) has its own directory with the component logic and tests.

- **/constants**: Holds constant values used throughout the application.
  - `apiConstants.ts`: Contains constants like error messages and status codes.
  - `regexPatterns.ts`: Contains common regex patterns used in the application.

- **/utils**: Contains utility functions that can be reused across the application.
  - `fetchUtils.ts`: Functions for making fetch requests.
  - `csvParser.ts`: Functions for parsing CSV data into a usable format.
  - `errorHandler.ts`: Functions for handling errors consistently.

- **/tests**: Contains test files for different parts of the application.
  - `api.test.ts`: Tests for the API endpoints.
  - `utils.test.ts`: Tests for utility functions.
  - `components.test.ts`: Tests for component logic.

- **.gitignore**: Specifies files and directories that should be ignored by Git.

- **deno.json**: Configuration file for Deno, specifying dependencies and settings.

- **README.md**: Documentation for the project, including setup instructions and usage.

This structure promotes modularity and reusability, making it easier to maintain and scale the project as needed.