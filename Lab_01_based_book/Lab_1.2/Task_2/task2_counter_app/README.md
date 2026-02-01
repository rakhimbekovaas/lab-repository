# My React App - Task 1: Project Setup

## Project Information

This React application was created using **Vite** as the build tool.
## Environment Details

- **Node Version:** v24.13.0
- **npm Version:** 11.6.2
- **React Version:** 19.2.0
- **Vite Version:** 7.2.5
- **Build Tool:** Vite

## Setup Commands Used

The following exact commands were used to create and set up this project:

```bash

npm create vite@latest task2_counter_app -- --template react # Create the project using Vite with React template

cd task2_counter_app # Navigate to project directory

npm install # Install dependencies
```

## How to Run the Application

### Development Mode

To run the application in development mode:

# Navigate to: 
Lab_1.2/Task_2/task2_couter_app

```bash
npm run dev
```

The application will start on `http://localhost:5173/` (default Vite port).

## Project Structure

```
my-app/
├── node_modules/          # Project dependencies
├── public/                # Static assets
│   └── vite.svg          # Vite logo
├── src/                   # Source code
│   ├── assets/           # Images and other assets
│   ├── App.css           # App component styles
│   ├── App.jsx           # Main App component
│   ├── index.css         # Global styles
│   └── main.jsx          # Application entry point
├── .gitignore            # Git ignore rules
├── eslint.config.js      # ESLint configuration
├── index.html            # HTML template
├── package.json          # Project dependencies and scripts
├── package-lock.json     # Locked dependency versions
├── README.md             # This file
└── vite.config.js        # Vite configuration
```

