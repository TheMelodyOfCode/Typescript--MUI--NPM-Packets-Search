// Import configureStore from @reduxjs/toolkit for easier store configuration
import { configureStore } from '@reduxjs/toolkit';
// Import thunk middleware for handling async actions
import thunk from 'redux-thunk';
// Import the combined reducers (root reducer)
import reducers from '../reducers/combinedReducers';

// Create the Redux store using configureStore from @reduxjs/toolkit
export const store = configureStore({
  // Pass the root reducer to the store configuration
  reducer: reducers,
  // Configure the middleware by using getDefaultMiddleware to get the default middleware,
  // then concatenating the imported thunk middleware.
  // This is only necessary if you want to use a specific instance of redux-thunk or configure it in some way.
  // Otherwise, you can omit this line, and @reduxjs/toolkit will include redux-thunk by default.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});


