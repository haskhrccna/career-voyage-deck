import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css' // This assumes you have a global CSS file - we can create one if needed

// Ensure the root element exists in your HTML
const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error(
    'Root element not found. Please add a <div id="root"></div> to your HTML'
  )
}

// Create a root and render the app
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
