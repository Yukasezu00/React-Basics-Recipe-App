# React Basics Recipe App 🍲📱

![Winc Academy Badge](https://img.shields.io/badge/academy-Winc-blue)
![License](https://img.shields.io/badge/license-MIT-green)

This React application was built as the final project for the React Basics module at Winc Academy.  
The app displays a restaurant’s recipe overview, allowing users to search, filter, and view detailed recipe information.

## Features ✨

- 📋 Responsive grid layout showing recipes with names, images, diet labels, cautions, meal types, and dish types  
- 📖 Detailed recipe pages with ingredients, servings, total cooking time, nutritional info, and more  
- 🔍 Search and filter recipes by name and health/diet labels (vegan, vegetarian, pescatarian, gluten-free, etc.)  
- 🚪 Navigation between overview and recipe detail pages using React Router  
- ⚛️ Built with React function components, props, state, and hooks following best practices  
- 🎨 Styled with Chakra UI for clean and accessible UI components  
- ♿ Includes keyboard accessible checkboxes and responsive images

## Installation and Usage 🛠️

1. Clone this repository or download the source code.  
2. Make sure you have Node.js installed (version 14 or higher recommended).  
3. In the project directory, install dependencies:

- npm install
   
4. Start the development server:

- npm start

5. Open http://localhost:3000 in your browser to use the app.

## Project Structure 🏗️
- src/App.jsx – main app component managing routing and global state

- src/components/ – reusable components like RecipeListPage, RecipePage, and SearchBar

- src/utils/data.js – mock data source with recipe objects

- Styling handled by Chakra UI components and theming

## Improvements Based on Feedback 💡
The app received a positive review with a passing grade from Winc Academy. Based on feedback, the following improvements have been implemented:

- Adjusted recipe images on narrow viewports to improve layout and prevent excessive height

- Recipes with zero total cooking time now display "Unknown" instead of "0 minutes"

- Nutritional values rounded to 1 or 2 decimal places for better readability

- Added user feedback message "No recipes found" when search or filters yield no results

- Enhanced visibility of health label checkboxes by increasing contrast for accessibility

## What I Learned 📚
During this project, I improved my skills in:

- React fundamentals: function components, props, state, event handling, and conditional rendering

- Managing lists and keys efficiently for stable and performant UI updates

- Implementing client-side routing with React Router

- Using a design system (Chakra UI) to build responsive and accessible interfaces

- Handling user input and dynamic filtering

- Debugging and testing React apps with React Developer Tools

## Future Enhancements 🚀
- Add more complex filters and sorting options

- Implement user authentication and profiles with favorites

- Enhance UI/UX with animations and accessibility improvements

- Connect to a real backend API for dynamic data fetching

## Author ✍️

Yunus Yildiz


Thank you for reviewing my project! 🙏
