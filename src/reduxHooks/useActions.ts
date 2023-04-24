/* Import the useDispatch hook from react-redux,
   which allows you to dispatch actions in functional components */
   import { useDispatch } from "react-redux";

   /* Import the bindActionCreators utility function from redux,
      which helps in binding multiple action creators to the dispatch function */
   import { bindActionCreators } from "redux";
   
   /* Import action creators (functions that return action objects)
      from the centralReduxDistribution file */
   import { actionCreators } from "../reducerState/centralReduxDistribution";
   
   /* Export a custom React hook called useActions */
   export const useActions = () => {
     // Get the dispatch function from the Redux store using the useDispatch hook
     const dispatch = useDispatch();
   
     /* Return the bindActionCreators result, which is an object containing
        the action creators bound to the dispatch function.
        This allows you to dispatch actions directly by calling the action creator
        functions, without having to manually dispatch the action objects */
     return bindActionCreators(actionCreators, dispatch);
   };
   
