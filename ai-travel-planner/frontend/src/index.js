// index.js
import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client"; // Use `react-dom/client` for React 18
import { BrowserRouter } from "react-router-dom";
import "./index.css"; // Ensure this file exists
import ErrorBoundary from "./components/ErrorBoundary"; // Custom error handler
import { createServer } from "http"; // Add server-related imports if needed
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import authenticationController from './controllers/authenticationController'; // Corrected file name

// Set up Express server
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Use authenticationController for authentication routes
app.use('/api/auth', authenticationController);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Lazy load the App component for better performance
const App = lazy(() => import("./App"));

// Create Root and render the React app
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        {/* Suspense for lazy loading */}
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <App />
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
);
