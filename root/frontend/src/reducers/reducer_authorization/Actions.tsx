export const CREATE_USER_BEGIN    =    "CREATE_USER_BEGIN"
export const CREATE_USER_SUCCESS  =    "CREATE_USER_SUCCESS"
export const CREATE_USER_ERROR    =    "CREATE_USER_ERROR"

export const LOGIN_USER_BEGIN     =    "LOGIN_USER_BEGIN"
export const LOGIN_USER_SUCCESS =      "LOGIN_USER_SUCCESS"
export const LOGIN_USER_ERROR     =    "LOGIN_USER_ERROR"

export const LOGOUT_USER_BEGIN = "LOGOUT_USER_BEGIN"
export const LOGOUT_USER_SUCCESS = "LOGOUT_USER_SUCCESS"
export const LOGOUT_USER_ERROR = "LOGOUT_USER_ERROR"

export const SELECT_CITY_TO_FETCH = "SELECT_CITY_TO_FETCH"

export interface SelectCityToFetch {
    type: typeof SELECT_CITY_TO_FETCH,
    city: string
}


export interface CreateUserBegin{
    type: typeof CREATE_USER_BEGIN
}

export interface CreateUserSuccess {
    type: typeof CREATE_USER_SUCCESS,
    username:string,
    token: string
   
}

export interface CreateUserError {
    type: typeof CREATE_USER_ERROR
}

export interface LoginUserBegin {
    type: typeof LOGIN_USER_BEGIN
}

export interface LoginUserSuccess {
    type: typeof LOGIN_USER_SUCCESS,
    username: string,
    token:string,
    city: string
}

export interface LoginUserError {
    type: typeof LOGIN_USER_ERROR
}

export interface LogoutUserBegin{
    type: typeof LOGOUT_USER_BEGIN

}
export interface LogoutUserSucces{
    type: typeof LOGOUT_USER_SUCCESS
}
export interface LogoutUserError{
    type: typeof LOGOUT_USER_ERROR
}

export type AuthorizationActionTypes = 
| CreateUserBegin
| CreateUserSuccess
| CreateUserError
| LoginUserBegin
| LoginUserSuccess
| LoginUserError
| LogoutUserBegin
| LogoutUserSucces
| LogoutUserError
| SelectCityToFetch

export type AuthorizationActions = AuthorizationActionTypes