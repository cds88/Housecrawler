import {CREATE_USER_BEGIN, CREATE_USER_SUCCESS, CREATE_USER_ERROR,
LOGIN_USER_BEGIN, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR,
LOGOUT_USER_BEGIN, LOGOUT_USER_SUCCESS, LOGOUT_USER_ERROR, SELECT_CITY_TO_FETCH} from '../reducer_authorization/Actions';
import { AllAppActions } from './AllActionsTypes';
import {DEBUG_ACTION, TOGGLE_NAVTOP} from '../reducer_userinterface/Actions';
import {FETCH_DATA_BEGIN, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR, FETCH_CITIES_BEGIN, FETCH_CITIES_ERROR, FETCH_CITIES_SUCCESS} from '../reducer_data/Actions';

import {POST_ADD_SELECT_BEGIN, POST_ADD_SELECT_ERROR, POST_ADD_SELECT_SUCCESS} from '../reducer_post/Actions';

import {Advertisement, City} from '../reducer_data/Data';
import axios from 'axios';
    import { Dispatch, bindActionCreators } from "redux";
    import { AppState } from '../ConfigureStore';
import {OPEN_MODAL, CLOSE_MODAL} from '../reducer_userinterface/Actions';

export const OpenModal = (images: string[]):AllAppActions=>({
    type: OPEN_MODAL,
        images
})
export const CloseModal = (): AllAppActions => ({
    type: CLOSE_MODAL,

})
export const ToggleNavtop =():AllAppActions=>({
    type: TOGGLE_NAVTOP
})

export const DebugAction =( ):AllAppActions=>({
    type: DEBUG_ACTION,
    
})

export const CreateUserBegin=():AllAppActions=>({
    type: CREATE_USER_BEGIN
})

export const CreateUserSuccess = (username:string, token:string): AllAppActions => ({
    type: CREATE_USER_SUCCESS,
    username,
    token
 

})
export const CreateUserError = (): AllAppActions => ({
    type: CREATE_USER_ERROR
})

export const SelectCityToFetch = (city:string):AllAppActions=>({
    type: SELECT_CITY_TO_FETCH,
    city
})
export const LoginUserBegin = (): AllAppActions => ({
    type: LOGIN_USER_BEGIN
})
export const LoginUserSuccess = (username: string, token:string,
    city:string): AllAppActions => ({
    type: LOGIN_USER_SUCCESS,               
    username,
    token,
    city
})
export const LoginUserError= (): AllAppActions => ({
    type: LOGIN_USER_ERROR
})

export const LogoutUserBegin=():AllAppActions=>({
    type: LOGOUT_USER_BEGIN
})
export const LogoutUserSuccess = (): AllAppActions => ({
    type: LOGOUT_USER_SUCCESS
})
export const LogoutUserError= (): AllAppActions => ({
    type: LOGOUT_USER_ERROR
})

export const FetchDataBegin=():AllAppActions=>({
    type: FETCH_DATA_BEGIN
})
export const FetchDataSuccess = (advertisements:Advertisement[]): AllAppActions => ({
    type: FETCH_DATA_SUCCESS,
    advertisements
})

export const FetchDataError = ():AllAppActions=>({
    type:FETCH_DATA_ERROR
})

export const FetchCitiesBegin=():AllAppActions=>({
    type:FETCH_CITIES_BEGIN
})
export const FetchCitiesSuccess = (cities: City[]): AllAppActions => ({
    type: FETCH_CITIES_SUCCESS,
    cities
})
export const FetchCitiesError = (): AllAppActions => ({
    type: FETCH_CITIES_ERROR
})

export const PostAddSelectBegin = (): AllAppActions=>({
    type: POST_ADD_SELECT_BEGIN
})

export const PostAddSelectSuccess = (): AllAppActions => ({
    type: POST_ADD_SELECT_SUCCESS
})
export const PostAddSelectError = (): AllAppActions => ({
    type: POST_ADD_SELECT_ERROR
})
const getCSRFToken = () => {
    var token = document.cookie.split(';')[0];
    token = token.split('=')[1];
    return token
}
export const LoginUser=(username:string, password:string)=>{
    

    return(dispatch: Dispatch<AllAppActions>, getState:()=>AppState)=>{
 
        dispatch(LoginUserBegin());
        fetch('/accounts/login/', {
            method: 'post',
            headers: {
                // 'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': getCSRFToken()

            },
            body: JSON.stringify({
                'username': username,
                'password': password,

            })



        })
        .then(response=>{
            if(response.status>=500){
                console.log("server error");
                throw response
            }
            if(response.status>=400 && response.status<500){
                console.log("auth error");
                throw response
            }
            else{return response}
        }) 
        .then(response=>{if(response.status>=200 && response.status<=300)
        {return response.json()}})
        .then( e=>{dispatch(LoginUserSuccess(username, e.token, e.city) ) ; return e} )
        .then(e=>console.log(e))
 
        
        

    }
}   

export const LogoutUser =()=>{
    return(dispatch: Dispatch<AllAppActions>, getState:()=>AppState)=>{
        const token = getState().AuthorizationReducer.token
        dispatch(LogoutUserBegin());
        fetch('/accounts/logout/', {
            method: 'get',
            headers:{
                'Authorization': `Token ${token}`,
                'Content-Type': 'application/json',
                'X-CSRFToken': getCSRFToken()
            }

        })
        .then(e=>dispatch(LogoutUserSuccess()))
        .catch(e=>dispatch(LogoutUserError()))

    }
}


export const CreateUser =(username:string, password1:string, password2:string, city:string)=>{
    return(dispatch: Dispatch<AllAppActions>, getState:()=>AppState)=>{
        dispatch(CreateUserBegin())
        fetch('/accounts/register/', {
            method: 'post',
            headers: {
                // 'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': getCSRFToken()

            },
            body: JSON.stringify({
                'username': username,
                'password': password1,
                'password2': password2,
                'city': city
            })



        })
        .then(e=>e.json())
        .then(e=>dispatch(CreateUserSuccess(username, e.token)))
        .catch(error=>dispatch(CreateUserError()))

    }
}

export const FetchData=()=>{
    return(dispatch:Dispatch<AllAppActions>, getState:()=>AppState)=>{
         
        dispatch(FetchDataBegin())
        axios(`/data/adds/?city__title=${getState().AuthorizationReducer.city }`)
        .then(resp=>resp.data)
            .then(e => dispatch(FetchDataSuccess(e)))
 
    }
}

export const FetchCities=()=>{
    return(dispatch:Dispatch<AllAppActions>, getState:()=>AppState)=>{
        dispatch(FetchCitiesBegin())
        axios('/data/cities/')
        .then(resp=>resp.data)
    
        .then(e=>dispatch(FetchCitiesSuccess(e)))

        
    }
}

export const PostAddSelection=(addvertisementId:number)=>{
    return(dispatch: Dispatch<AllAppActions>, getState:()=>AppState)=>{
        dispatch(PostAddSelectBegin())
        var token = getState().AuthorizationReducer.token;
        console.log(token);
        axios.post('/data/userselection/',
        {advertisement:addvertisementId },
        {
            headers:{
                'X-CSRFToken': getCSRFToken(),
                'Authorization': `Token ${getState().AuthorizationReducer.token}`

            }
        }
        
        ).then(response=>console.log(response))
    }}




// export const PostAddSelection = () => {
//     return (dispatch: Dispatch<AllAppActions>, getState: () => AppState) => {
//         dispatch(PostAddSelectBegin())
//         fetch('/data/userselection/', {
//             method: 'post',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'X-CSRFToken': getCSRFToken()
//             },
//             body: JSON.stringify({
//                 'advertisement': 1,
//                 'user': 'ser'
//             })
//         })


//     }
// }