// type definition for dispatch function
import {Dispatch} from 'redux';
import { ActionType } from '../actionTypes/actionTypes';
import { Action } from '../actions/actions';

// An asynchronous action creator function that takes a search term as input
export const searchRepositories = (term: string) => {
  // The function returns another function that takes dispatch as a parameter
    return async (dispatch: Dispatch<Action>  ) => {
  // Dispatch an action with type SEARCH_REPOSITORIES to indicate the search has started
        dispatch({
          type: ActionType.SEARCH_REPOSITORIES,
        });
  // Fetch data from the npm registry API and handle any errors that may occur  
        try {
          const response = await fetch(
            `https://registry.npmjs.org/-/v1/search?text=${term}`
          );
  // If the response is not okay, throw an error with the status   
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
  // Parse the response as JSON
          const data = await response.json();
  // Extract package names and descriptions from the data   
          const names = data.objects.map((result: any) => {
            return [result.package.name, result.package.description]
          });
  // Dispatch a successful search action with the extracted names as the payload
          dispatch({
            type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
            payload: names, 
          });
  // Catch any errors and dispatch an error action with the error message as the payload
        } catch (err) {
            if (err instanceof Error) {
                dispatch({
                    type: ActionType.SEARCH_REPOSITORIES_ERROR,
                    payload: err.message,
                  });
            }
        }
      };
      
}


