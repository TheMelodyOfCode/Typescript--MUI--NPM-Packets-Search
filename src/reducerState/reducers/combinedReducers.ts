import { combineReducers } from "redux";
import  repositoriesReducer  from "./reducers";

/**
 * Use the combineReducers function to combine multiple reducers into a single rootReducer 
 * In this case, we only have one reducer (repositoriesReducer)
 * The key 'repositories' will be used to access the state managed by this reducer */
const reducers = combineReducers({
    repositories: repositoriesReducer,
});

// Export the combined reducers as the default export for this module
export default reducers;


/** The RootState type is defined using the ReturnType utility type. 
 * It automatically infers the type of state returned by the rootReducer. 
 * This RootState type is useful for typing other parts of the application that need to access the store's state, 
 * like mapStateToProps functions in connected components, 
 * or for typing custom hooks that use the useSelector hook from the React-Redux library. */
export type RootState = ReturnType<typeof reducers>;