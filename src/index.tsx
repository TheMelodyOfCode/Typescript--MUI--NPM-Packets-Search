/* 
  Import necessary libraries and components:
  - React: A JavaScript library for building user interfaces.
  - ReactDOM: A library for rendering React components in the DOM.
  - Provider: A component from react-redux that allows connecting the Redux store to the React application.
*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

/* 
  Import the central store from the reducerState folder, which manages the global state for the application.
*/
import { store } from './reducerState/centralReduxDistribution';

// Import the main App component, which serves as the root component for the application.
import App from './App';

/*
  Create a root element for the React application by selecting the DOM element with the 'root' id.
*/
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

/*
  Render the React application, wrapping the App component with the Redux Provider and StrictMode components.
  - The Provider component connects the Redux store to the application.
  - React.StrictMode checks for potential problems in the application during development.
*/
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
