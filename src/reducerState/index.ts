/** Export everything from the './store/store' file, which includes the store configuration 
 * and the store instance */
export * from './store/store';

/** Export all action creators from the './actionCreators/actionCreators' file under the 'actionCreators' namespace
This allows you to access action creators using the 'actionCreators' prefix when importing them */
export * as actionCreators from './actionCreators/actionCreators';

/** Export everything from the './reducers/combinedReducers' file, 
 * which includes the combined reducers (root reducer) and potentially any 
 * additional exports related to reducers */
export * from './reducers/combinedReducers';

/**
 * By using this central distribution file, you can avoid importing individual Redux components
 * from their specific files throughout your application. 
 * Instead, you can import everything you need from this single file, 
 * making your code more organized and easier to understand. 
 * This approach is particularly helpful when your application grows, 
 * and the number of Redux-related files increases. */