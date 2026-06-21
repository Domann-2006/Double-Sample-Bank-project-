# Vault · Banking Dashboard

A premium, modern single-page static banking application representing a secure visual dashboard for personal transactions, analytics, and funds services.

This project is a clean, properly structured refactoring of a single-file design into a scalable multi-file architecture with modular, reusable components.

---

## 📂 Project Structure

```text
├── index.html        # Clean HTML markup skeleton, loaded with external resources
├── css/
│   └── styles.css    # Comprehensive dark-mode design rules and media query adaptions
└── js/
    ├── app.js        # Main entrypoint; bridges modules, mounts window callbacks & clock ticker
    ├── utils.js      # Utility clock updates and system tickers
    ├── toast.js      # Global timed toast trigger controls
    ├── navigation.js # SPA view managers & container transition faders
    └── feature.js    # Dynamic forms setup (Send, Request, Receive) and transaction list filters
```

---

## 🚀 How to Run the Project

Since this project utilizes native **ES Module system** (`import` / `export` syntax) for clean code splitting, browsers require standard web servers to load the scripts without cross-origin blocks (`CORS`).

### Option 1: running via standard Vite development compiler (Recommended)
This workspace is already pre-configured to build and serve the application using Vite.
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the local server:
   ```bash
   npm run dev
   ```

### Option 2: running via a standard static server (e.g. Node.js `http-server` or Python)
Alternatively, you can run it directly as a pure static front-end bundle using any static web server.

- **Using Node.js**:
  ```bash
  npx http-server .
  ```
- **Using Python 3**:
  ```bash
  python -m http-server 3000
  ```
- **Using VS Code Extension**:
  Right-click `index.html` and click **"Open with Live Server"**.
