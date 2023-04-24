
/** Export an enumeration for action types to maintain consistency across the app.

@enum {string} An enum (short for enumeration) is a collection of named values that represent distinct 
elements in a set. It makes code more readable and helps prevent errors by allowing you to 
use these named values instead of hardcoding their corresponding values (like numbers or strings).

@property {string} SEARCH_REPOSITORIES - Action type for searching repositories.
@property {string} SEARCH_REPOSITORIES_SUCCESS - Action type for successful repository search.
@property {string} SEARCH_REPOSITORIES_ERROR - Action type for failed repository search.
*/

export enum ActionType {
    SEARCH_REPOSITORIES = 'search_repositories',
    SEARCH_REPOSITORIES_SUCCESS = 'search_repositories_success',
    SEARCH_REPOSITORIES_ERROR = 'search_repositories_error',
}