# JavaScript Modules Practice

## Running in the CLI

Run this in the Terminal Node.js:

```bash
node cli.js
```

This will execute the module imports and display the results in your terminal.

## Running in the Browser

ES modules require a web server to run. Start a local server using one of these methods:


**Node.js http-server**
```bash
npx http-server
```

Then open your browser and navigate to:
```
http://localhost:8000
```

**Note:** You cannot open `index.html` directly in the browser using `file://` because browsers block ES modules for security reasons.

## What is a Module?

A **module** is a JavaScript file that can export functions, objects, or values for use in other files. Modules help you:

- **Organize code** into separate files
- **Reuse code** across different parts of your application
- **Keep code private** - only exported items are accessible from other files

### Key Concepts:

- **Export**: Makes code available to other files using `export` or `export default`
- **Import**: Brings code from another module into your file using `import`
- **Named exports**: Multiple items exported individually (e.g., `export { add, sum }`)
- **Default export**: One main item exported per module (e.g., `export default MyMath`)

In this project:
- `math.mjs` exports both named exports (`add`, `sum`) and a default export (`MyMath`)
- `subtract.mjs` exports a default export (`subtract`)
- `snake.mjs` exports a named export (`snake`)

