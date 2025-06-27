# Deno Google Sheets to JSON

### Elevator Pitch

Turn any public Google Sheet into structured JSON using a clean, flexible API. Just plug in the sheet ID and get instant JSON back—ideal for devs, no-coders, and frontend frameworks like SvelteKit.

### Problem & Mission

Accessing Google Sheets as live JSON is a hassle—especially for public sheets. This tool simplifies that into a one-endpoint, zero-auth experience.

### Target Audience

* SvelteKit developers
* Low/no-code builders
* Rapid prototypers
* Data hobbyists

### Core Features

* Public sheet → JSON in one hit
* Flexible URL structure
* Supports sheet name or index
* `mode=row` or `mode=column`
* `headerRange` and `dataRange` params
* Optional dot notation for nested objects
* JSON output only (clean, SvelteKit-friendly)

### High-Level Tech Stack

* **Deno 2.0**: Lightweight, fast, secure-by-default runtime
* **Deno Deploy**: To host API
* **Native Fetch + Google Sheet CSV**: Avoids full Sheets API/auth
* **URL Routing**: Dynamic params for sheet/tab targeting

### Conceptual Data Model (ERD in words)

* **Input**: Sheet ID, optional sheet name/index
* **Transforms**: Range slicing, header detection, row/column mode, optional dot-notation parsing
* **Output**: JSON array (or array with one object in column mode)

### UI Design Principles

* API-first: testable in browser or curl
* Predictable URLs: no guesswork
* Self-explanatory modes & params
* Explicit error messages (e.g., sheet not found, malformed range)

### Security & Compliance Notes

* Public sheets only (no auth/token storage)
* Sanitized inputs to prevent injection
* CORS-friendly headers for frontend use

### Phased Roadmap

**MVP**

* One endpoint, row/column mode
* URL param parsing
* A1 and numeric range support

**V1**

* Format toggle (e.g., JSONL)
* Optional metadata (sheet name, range used)
* Column-mode validation/warnings
* Dot-notation key parsing for nested output

**V2**
* 30 second Caching layer
* Rate limiting

### Risks & Mitigations
* **Ambiguous column mode**: Require 2-column structure (key/value)

---

## Implementation

### Build Sequence

1. Set up Deno project and routing
2. Parse URL params: sheet ID, tab name/index
3. Fetch public CSV from Google Sheets export URL
4. Parse CSV into matrix (2D array)
5. Apply headerRange and dataRange
6. Handle `mode=row` → map headers to rows
7. Handle `mode=column` → map key/value to object
8. Optional: parse dot notation keys into nested objects
9. Return JSON with proper CORS headers
10. Add error handling: 404s, range errors, empty sheets
11. Write tests for both modes and dot parsing

### README Style Guide

* Use H2 for major sections
* Bullets for params, responses, examples
* Links like: [Try example](https://example.com/123456/Sheet1?mode=column)