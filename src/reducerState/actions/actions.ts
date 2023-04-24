// Import ActionTypes enum to ensure consistent action types.
import { ActionType } from "../actionTypes/actionTypes";

// Interface for the SearchRepositories action.
interface SearchRepositoriesAction {
    type: ActionType.SEARCH_REPOSITORIES;
}
// Interface for the SearchRepositoriesSuccess action with payload
interface SearchRepositoriesSuccessAction {
    type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
    payload: string[];
}
// Interface for the SearchRepositoriesError action with payload
interface SearchRepositoriesErrorAction {
    type: ActionType.SEARCH_REPOSITORIES_ERROR;
    payload: string;
}

// Export a union type for all possible action objects.
export type Action =
    | SearchRepositoriesAction
    | SearchRepositoriesSuccessAction
    | SearchRepositoriesErrorAction;