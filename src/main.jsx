import React from 'react';
import ReactDOM from 'react-dom/client';  // Use 'client' for React 18+
import App from './App';
import './index.css';  

const root = document.getElementById('root'); // Ensure the root element exists

if (root) {
    ReactDOM.createRoot(root).render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
} else {
    console.error("Root element not found in index.html");
}
