import { ActionType } from "../actionTypes/actionTypes";
import { Action } from "../actions/actions";

// Interface for the RepositoriesState object to maintain consistent state structure.
interface RepositoriesState {
    loading: boolean;
    error: string | null;
    data: string[];
}
// Initial state for the repositories reducer.
const initialState = {
    loading: false,
    error: null,
    data: [],
};

// Repositories reducer to handle repository search actions and update the state.
const repositoriesReducer = (
    state: RepositoriesState = initialState ,
    action: Action
): RepositoriesState => {
    switch (action.type) {
        case ActionType.SEARCH_REPOSITORIES:
            return { loading: true, error: null, data: [] };
        case ActionType.SEARCH_REPOSITORIES_SUCCESS:
            return { loading: false, error: null, data: action.payload };
        case ActionType.SEARCH_REPOSITORIES_ERROR:
            return { loading: false, error: action.payload, data: [] };
        default:
            return state;
    }
};

export default repositoriesReducer;
