import * as React from 'react'

import { Link, NavLink } from 'react-router-dom';
import GridBackground from './components/Gridbackground'; 
import Submenu from './components/Submenu';
import Logout from './components/Logout';
import Login from './components/Login';
import Profile  from './components/Profile';
import Welcome from './components/Welcome';
import Anchor from './components/Anchor';
 
import CitySelector from './components/CitySelector';
import axios from 'axios';

import {Authorization} from '../../reducers/reducer_authorization/Authorization';
import {LoginUser} from '../../reducers/actions/AllActions';

import {DebugAction, ToggleNavtop} from '../../reducers/actions/AllActions';

import { AppState } from '../../reducers/ConfigureStore';


import { AllAppActions } from '../../reducers/actions/AllActionsTypes';
import { connect } from 'react-redux';
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from 'redux';
import '../../styles/NavtopStyles.scss';
 


import {City} from '../../reducers/reducer_data/Data';

export interface NavtopProps{

    authorization: Authorization;
    debugContent?:any;
    isNavtopOpened:boolean;
}

interface LinkStateToProps{
    Cities: City[]
}
const mapStateToProps=(
    state: AppState,
    ownProps: NavtopProps
):LinkStateToProps=>({
    Cities: state.DataReducer.Cities
})
export interface LinkDispatchToProps{
    loginUser: (username:string, password:string)=>void;
    toggleNavtop: ()=>void;
    debugAction : ()=>void;
 
}

const mapDispatchToProps=(
    dispatch: ThunkDispatch<any, any, AllAppActions>,
    ownProps: NavtopProps):LinkDispatchToProps=>({
        loginUser: bindActionCreators(LoginUser, dispatch ),
        toggleNavtop : bindActionCreators(ToggleNavtop, dispatch),
        debugAction: bindActionCreators(DebugAction, dispatch)
       
    })



type Props = NavtopProps & LinkDispatchToProps & LinkStateToProps;

const NavtopComponent=(Props:Props)=> {
   
    
    const toggleNavtop=()=>{
        Props.toggleNavtop()
    }
 
    const toggleDebuger=()=>{
//   console.log(store.getState().DataReducer.Advertisements);
        console.log(Props.Cities);
    }
    console.log("Its ok");
    return (
        <div className={`navtop ${Props.isNavtopOpened? ('') : ('hidden')}`} >
            <div className="navtopImageContainer">

                {/* <img src="https://upload.wikimedia.org/wikipedia/commons/8/8f/Wide_San_Diego_Night.jpg" alt="" /> */}

            {/* <img src="https://images.unsplash.com/photo-1461609027498-7c0524aba788?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80" alt="" /> */}

                <img src="https://images.unsplash.com/photo-1414694762283-acccc27bca85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2079&q=80" alt=""/>

            </div>



            



                    <GridBackground/>
            <ul >
              
                <Anchor title="Welcome" link="/"/>
                <Anchor title="Map" link="/map" />
                <Anchor title="Adds" link="/advertisements"/>
              
                
             
                <CitySelector Cities={Props.Cities}/>

                <Login isAuthorized={Props.authorization.isAuthorized}/> 
                
                <Logout isAuthorized={Props.authorization.isAuthorized}/> 
                
                <Welcome isAuthenticated={Props.authorization.isAuthorized}
                    username={Props.authorization.username}/>
                <Profile isAuthenticated={Props.authorization.isAuthorized}/>
                 
                <li className="circleIcon" >
                    <img src="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png" alt="" />

                </li>
             
            </ul>

            <button className="NavtopControll"
onClick={toggleNavtop}>{Props.isNavtopOpened? ('Close') : ('Open')}</button>
           

        </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(NavtopComponent);