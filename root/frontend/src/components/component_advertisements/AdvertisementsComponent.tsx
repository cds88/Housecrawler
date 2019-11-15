import * as React from 'react'
 
import FooterComponent from '../component_footer/FooterComponent';

import '../../styles/AdvertisementsStyles.scss';

 
import {AppState} from '../../reducers/ConfigureStore';
import { Advertisement } from '../../reducers/reducer_data/Data';

import Add from './components/Add';
 
import { connect } from 'react-redux';
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from 'redux';

import { FetchData } from '../../reducers/actions/AllActions';
import { AllAppActions } from '../../reducers/actions/AllActionsTypes';


export interface AdvertisementProps{

}

interface LinkStateToProps{
    advertisements: Advertisement[],
    isFetching: boolean
    
}
const mapStateToProps=(
    state:AppState,
    ownProps: AdvertisementProps
):LinkStateToProps=>({
    isFetching: state.DataReducer.isFetching,
    advertisements: state.DataReducer.Advertisements
})

interface LinkDispatchToProps{
    fetchData : ()=>void;
}
const mapDispatchToProps=(
    dispatch:ThunkDispatch<any,any,AllAppActions>,
    ownProps: AdvertisementProps
):LinkDispatchToProps=>({
        fetchData: bindActionCreators(FetchData, dispatch)
})
type Props= AdvertisementProps & LinkStateToProps & LinkDispatchToProps;
const AdvertisementsComponent=(Props: Props)=> {

    React.useEffect(() => {
       
        Props.fetchData() ; 

    }, []);

    if(Props.isFetching || !Props.advertisements){
        return(
            <h1>Loading data</h1>
        )
    }
    if(Props.advertisements.length==0){
        return(
            <h1>No data</h1>
        )
    }


    const results = Props.advertisements;
    const adds = results.map((add)=>{
        return(
            <Add data={add}/>
        )
        
    })
    return (
        <div className="advertisementWrapper">
 
     {adds}
          

        <FooterComponent/>
        </div>


    )
}


export default connect(mapStateToProps, mapDispatchToProps)(AdvertisementsComponent);