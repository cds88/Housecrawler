

import * as React from 'react'


import { LoginUser } from '../../../reducers/actions/AllActions';

import { AllAppActions } from '../../../reducers/actions/AllActionsTypes';
import { AppState } from '../../../reducers/ConfigureStore';
import { connect } from 'react-redux';
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from 'redux';
import { Link, NavLink } from 'react-router-dom';

export interface LoginProps{
    isAuthorized: boolean
}

export interface LinkDispatchToProps{
    loginUser: (username: string, password: string) => void;
}


const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AllAppActions>,
    ownProps: LoginProps): LinkDispatchToProps => ({
        loginUser: bindActionCreators(LoginUser, dispatch)
    })




type Props = LoginProps & LinkDispatchToProps;

const Login=(Props:Props)=> {
    const getCSRFToken = () => {
        var token = document.cookie.split(';')[0];
        token = token.split('=')[1];
        return token
    }
const handleLogin=(e:any)=>{
    e.preventDefault();
    var login = e.target[0].value;
    var pass = e.target[1].value;
 
    Props.loginUser(login, pass);
   


}
if(!Props.isAuthorized){
    return (
         
        <li className="navtopLink  ">
            <div className="loginContainer">
                <form action="" onSubmit={handleLogin}>
                    Login <input type="text"/>
                    Password <input type="text"/>
                    <input type="submit"/>
                    
                </form>
               
                <NavLink to="/accounts"> Create account</NavLink>
            </div>
        </li>
    )
}
else{
    return null
}
}
export default connect(null, mapDispatchToProps)(Login);