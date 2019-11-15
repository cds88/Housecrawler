
import { AuthorizationActionTypes } from './Actions';
import { Authorization } from './Authorization';

import {LOGIN_USER_BEGIN, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR,
LOGOUT_USER_BEGIN, LOGOUT_USER_SUCCESS, LOGOUT_USER_ERROR, CREATE_USER_BEGIN,
CREATE_USER_SUCCESS, CREATE_USER_ERROR, SELECT_CITY_TO_FETCH} from './Actions';


const AuthorizationReducerDefaultState: Authorization = {
    isAuthorized: false,
    username: "", 
    city: "Gdansk"
    
};
const AuthorizationReducer = (
    state = AuthorizationReducerDefaultState,
    action: AuthorizationActionTypes): Authorization => {
    switch (action.type) {
        case CREATE_USER_BEGIN:
            return state
        case CREATE_USER_SUCCESS:
            return {...state, isAuthorized:true, token:action.token, username:action.username}
        case CREATE_USER_ERROR:
            return state 
        case LOGIN_USER_BEGIN:
            return state
        case LOGIN_USER_SUCCESS:
            return {...state, username:action.username, token: action.token, isAuthorized:true, city:action.city}
        case LOGIN_USER_ERROR:
            return state
        case LOGOUT_USER_BEGIN:
            return state
        case LOGOUT_USER_SUCCESS:
            return {...state, isAuthorized:false, username: null, token:null}
        case LOGOUT_USER_ERROR:
            return state
        case SELECT_CITY_TO_FETCH:
            return {...state, city:action.city}
        default:
            return state
    }
}

export { AuthorizationReducer }
