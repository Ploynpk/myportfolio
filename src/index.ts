import React from 'react';
import ReactDOM from 'react-dom/client';

// Create a simple functional component
const App = () => {
  return <h1>Hello, Ploynapa!</h1>;
};

// Get the root element from the HTML
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  // Render the App component inside React.StrictMode
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Failed to find the root element');
}
