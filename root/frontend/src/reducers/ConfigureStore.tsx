
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
 
import { InterfaceReducer } from './reducer_userinterface/UserInterfaceReducer';
import {AuthorizationReducer} from './reducer_authorization/AuthorizationReducer';
import {DataReducer} from './reducer_data/DataReducer';
import {PostReducer} from './reducer_post/PostReducer';
import { AllAppActions } from "./actions/AllActionsTypes";


export const rootReducer = combineReducers({
    InterfaceReducer, AuthorizationReducer, DataReducer, PostReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk as ThunkMiddleware<AppState, AllAppActions>)
);


