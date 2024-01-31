# Simplified Logger

A lightweight and easy-to-use logging utility for Node.js.

## Installation

```bash
npm install simplified-logger
```

## Usage
```bash
const createLogger = require('simplified-logger');

// Create a logger instance
const table = createLogger("table");

// Log a message with color and background styling
table([{id: 1, name: "Hello"}, {id: 2, name: "world"}]);
```

## Features
- Simple API for binding console methods.
- Customizable text color and background styling.

