
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import NavtopComponent from './components/component_navtop/NavtopComponent';
import MainComponent from './components/component_main/MainComponent';
import UserprofileComponent from './components/component_userprofile/UserprofileComponent';
import AccountsComponent from './components/components_accounts/AccountsComponent';
import MapComponent from './components/component_map/MapComponent';
import FooterComponent from './components/component_footer/FooterComponent';
 
import styled from "styled-components";
import { BrowserRouter, Route, Link } from 'react-router-dom';

import { AppState } from './reducers/ConfigureStore';
import {connect} from 'react-redux'; 
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from 'redux';
import { AllAppActions } from './reducers/actions/AllActionsTypes';


import {FetchData} from './reducers/actions/AllActions';

import {Authorization} from './reducers/reducer_authorization/Authorization';

import './styles/MasterStyles.scss';
 

import {useRef, useEffect} from 'react';
import AdvertisementsComponent from './components/component_advertisements/AdvertisementsComponent';

 

import { City } from './reducers/reducer_data/Data';
import {FetchCities } from './reducers/actions/AllActions';
  import ModalComponent from './components/component_modal/ModalComponent';
export interface MasterProps {
     
}

 
export interface LinkStateToProps{
    authorization: Authorization;
    isNavtopOpened: boolean;
    isModalOpened: boolean;
}
const mapStateToProps=(
    state: AppState,
    ownProps: MasterProps
):LinkStateToProps=>({
    authorization: state.AuthorizationReducer,
    isNavtopOpened: state.InterfaceReducer.isNavtopOpened,
    isModalOpened: state.InterfaceReducer.isModalOpened
})
interface LinkDispatchToProps{
    fetchCities:()=>void
}
const mapDispatchToProps=(
    dispatch: ThunkDispatch<any, any, AllAppActions>,
    ownProps: MasterProps
):LinkDispatchToProps=>({
    fetchCities:bindActionCreators(FetchCities, dispatch)
})
 
 
type Props = MasterProps & LinkStateToProps & LinkDispatchToProps ;

const Master =(Props:Props)=>{ 

    const mnsc = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        Props.fetchCities();
    },[])
    
        return (
        
            <BrowserRouter>
                
                    <div className="wrapper" ref={mnsc}>
                    

                    <NavtopComponent  
                    isNavtopOpened={Props.isNavtopOpened}
                    authorization={Props.authorization} 
                        debugContent={mnsc.current? mnsc.current.clientHeight : "any"}
                    />
 
                            
                    <Route exact path='/' component={MainComponent} />
                    <Route path='/der' component={UserprofileComponent} />
                    <Route path='/accounts' render={()=><AccountsComponent/>} />
                    <Route path='/map' component={MapComponent} />
                    <Route path='/profile' component={UserprofileComponent}/>
                    <Route path='/advertisements' component={ AdvertisementsComponent}/>
                    <ModalComponent isModalOpened={Props.isModalOpened}/>
                  
                    </div>

                  
            </BrowserRouter>
             
        );
     
}

export default connect(mapStateToProps, mapDispatchToProps)( Master);

 


