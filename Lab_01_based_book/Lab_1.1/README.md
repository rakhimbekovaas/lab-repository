# React Counter App - Lab Assignment

## Overview

This project contains two versions of a counter application demonstrating different React concepts.

## Prerequisites

- react (version: 19.2.0)
- npm (version: 11.6.2)

## Project Structure
```
Lab_1.1/
├── Task_1/
│   └── index.html/            # Imperative Implementation of toggle highlight
└── Task_2/
    └── task2_declarative/     # Declarative Implementation of toggle highlight with React 
```

## How to Run

### Version 1 - highlight toggle - Imperative Implementation  (Task 1)
```bash
# Navigate to Task 1
cd Lab_1.1/Task_1

# Double-click "index.html" file
# Or type "start index.html" in terminal (PowerShell)
# from bash terminal it can be a bit tricky because I use wsl as I am using Windows, so I need to install several additional packages. It is easier to just double-click it in folder =)

### Version 2 - Counter App (Task 2)
```bash
# Navigate to Task 2
cd Lab_1.1/Task_2/task2_declarative

# Install dependencies (first time only)
npm install

# Run development server
npm run dev

# Open browser to: http://localhost:5173/
```

## Stopping the Server

Press `Ctrl + C` in the terminal to stop the development server.

## Troubleshooting

### Port Already in Use
```bash
# Error: Port 5173 is already in use
# Solution: Stop the other server or use a different port
npm run dev -- --port 5174
```

### Dependencies Issues
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Clear Cache
```bash
npm run dev -- --force
```