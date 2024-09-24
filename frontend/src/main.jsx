import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';

// Get the root element from the DOM
const rootElement = document.getElementById('root');

// Create a root and render the App component inside Router and StrictMode
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <Router>
      <StrictMode>
        <App />
      </StrictMode>
    </Router>

);

}