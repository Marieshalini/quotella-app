Quotella
A React-based Quote Generator App that allows users to view random quotes, add their own quotes, delete quotes, and share quotes on X. The app features a modern UI with a black, baby pink, and white theme, using Poppins font and Tailwind CSS.
Features

Display a random quote on button click.
Add custom quotes with an author.
Delete quotes from a dedicated "Your Quotes" page.
Share quotes on X via tweet intent.
Persist quotes in localStorage for retention after page refresh.
Responsive design with centered content (max-width: 600px), soft shadows, and rounded containers (border-radius: 16px).
Navigation between home and "Your Quotes" page using React Router.

How to Run

Clone the repository or set up a new React project:npx create-react-app quote-app
cd quote-app


Install dependencies:npm install -D tailwindcss
npm install react-router-dom
npx tailwindcss init


Replace/create files with the provided code:
src/App.js, src/App.css, public/index.html, tailwind.config.js
src/components/QuoteForm.js, src/components/QuoteItem.js, src/components/YourQuotes.js


Start the development server:npm start


Open http://localhost:3000 in your browser.

React Concepts Used

Components: Modular components (App, QuoteForm, QuoteItem, YourQuotes).
State Management: useState for managing quotes and form inputs.
Side Effects: useEffect for localStorage persistence.
Props: Passing data and functions between components.
Routing: React Router for navigating between home and "Your Quotes" pages.
Event Handling: Handling form submissions, button clicks, and quote sharing.
Styling: Tailwind CSS with Poppins font, soft shadows, and rounded containers.

