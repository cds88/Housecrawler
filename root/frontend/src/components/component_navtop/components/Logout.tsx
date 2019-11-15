import * as React from 'react'



import { LogoutUser } from '../../../reducers/actions/AllActions';

import { AllAppActions } from '../../../reducers/actions/AllActionsTypes';
import { AppState } from '../../../reducers/ConfigureStore';
import { connect } from 'react-redux';
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from 'redux';
import {Authorization} from '../../../reducers/reducer_authorization/Authorization';
export interface LogoutProps{
    isAuthorized: boolean

}
interface LinkDispatchToProps{
    logoutUser:()=>void;
}
const MapDispatchToProps=(
    dispatch: ThunkDispatch<any, any, AllAppActions>,
    ownProps: LogoutProps): LinkDispatchToProps=>({
        logoutUser: bindActionCreators(LogoutUser, dispatch)
    })
type Props = LogoutProps & LinkDispatchToProps;
const Logout=(Props: Props)=> {


const handleLogout=()=>{

Props.logoutUser();


}

    if(Props.isAuthorized){
        
        return <li className="navtopLink"><button onClick={handleLogout}>Logout</button></li>
    }
    else{
        return null
    }
     
}
export default connect(null, MapDispatchToProps)(Logout);