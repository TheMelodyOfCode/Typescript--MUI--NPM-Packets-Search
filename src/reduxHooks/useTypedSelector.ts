/* Import the useSelector hook and the TypedUseSelectorHook type
   from react-redux, which allows you to select state from the Redux
   store in functional components with TypeScript support */
   import { useSelector, TypedUseSelectorHook } from "react-redux";

   /* Import the RootState type from the centralReduxDistribution file,
      which represents the shape of the entire Redux state */
   import { RootState } from "../reducerState/centralReduxDistribution";
   
   /* Export a custom React hook called useTypedSelector, which is a
      typed version of the useSelector hook. It is defined by assigning
      useSelector to the useTypedSelector constant and specifying
      the RootState type as its generic type argument */
   export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
   