import { Advertisement, City } from "./Data";

// action strings
 
export const FETCH_DATA_BEGIN = "FETCH_DATA_BEGIN"
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS"
export const FETCH_DATA_ERROR = "FETCH_DATA_ERROR"

export const FETCH_CITIES_BEGIN = "FETCH_CITIES_BEGIN"
export const FETCH_CITIES_SUCCESS = "FETCH_CITIES_SUCCESS"
export const FETCH_CITIES_ERROR = "FETCH_CITIES_ERROR"


export interface FetchDataBegin {
    type: typeof FETCH_DATA_BEGIN

}


export interface FetchDataSuccess {
    type: typeof FETCH_DATA_SUCCESS,
    advertisements: Advertisement[]

}

export interface FetchDataError {
    type: typeof FETCH_DATA_ERROR

}

export interface FetchCitiesBegin{
    type: typeof FETCH_CITIES_BEGIN
}
export interface FetchCitiesSuccess {
    type: typeof FETCH_CITIES_SUCCESS,
    cities: City[]
}
export interface FetchCitiesError {
    type: typeof FETCH_CITIES_ERROR
}
export type DataActionTypes =
    | FetchDataBegin
    | FetchDataSuccess
    | FetchDataError
    | FetchCitiesBegin
    | FetchCitiesSuccess
    | FetchCitiesError
   

export type AppActions = DataActionTypes;
