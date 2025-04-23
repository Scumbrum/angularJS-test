# AngularJS 1.5 Application

A basic AngularJS 1.5 application template with component-based architecture, ES6 modules, and Gulp/Webpack build system.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```
This will:
- Build the application
- Start a development server with live reload
- Watch for file changes

3. For production build:
```bash
npm run build
```

## Project Structure

- `index.html` - Main HTML file
- `app/` - Application directory
  - `app.js` - Main AngularJS application file
  - `vendor.js` - Angular and dependency imports
  - `styles.css` - Global CSS styles
  - `components/` - Component directory
    - `home/` - Home component
      - `home.component.js` - Component logic
      - `home.component.html` - Component template
      - `home.component.css` - Component styles
- `package.json` - Project dependencies and scripts
- `gulpfile.js` - Gulp build configuration
- `webpack.config.js` - Webpack configuration
- `dist/` - Compiled and minified files
  - `js/` - Minified JavaScript files
  - `css/` - Minified CSS files
  - `app/components/` - Component templates

## Features

- AngularJS 1.5.11
- Component-based architecture
- ES6 module imports
- Angular Route for navigation
- Gulp/Webpack build system with:
  - Live reload
  - CSS minification
  - JavaScript bundling and minification
  - Source maps
  - File watching
  - Component template copying
  - Babel transpilation 