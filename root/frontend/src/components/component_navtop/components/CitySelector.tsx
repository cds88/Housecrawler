import * as React from 'react'

import { City} from '../../../reducers/reducer_data/Data';

import {connect} from 'react-redux';
import {AppState} from '../../../reducers/ConfigureStore';
import {FetchData, SelectCityToFetch} from '../../../reducers/actions/AllActions';

import { AllAppActions } from '../../../reducers/actions/AllActionsTypes';

import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from 'redux';
export interface CitySelectorProps{
    Cities: City[]
}
interface LinkStateToProps{

} 
interface LinkDispatchToProps{
    fetchData : ()=>void;
    selectCityToFetch: (city:string)=>void;
}
const mapDispatchToProps=(
    dispatch: ThunkDispatch<any, any, AllAppActions>,
    ownProps: CitySelectorProps
): LinkDispatchToProps=>({
    fetchData: bindActionCreators(FetchData, dispatch),
    selectCityToFetch: bindActionCreators(SelectCityToFetch, dispatch)
})
type Props = CitySelectorProps & LinkDispatchToProps;
const CitySelector=(Props:Props)=> {

    if(!Props.Cities){
        return null
    }
    
    const options = Props.Cities.map((el)=>{
    return <option value={el.title}> {el.title}</option>
    })

    const handleSelectChange=(e:any)=>{
        Props.selectCityToFetch(e.target.value);
        Props.fetchData();
        
    }

    return (
        <li className="navtopLink">
        <select name="" id="" onChange={handleSelectChange}>
            {options}

        </select>
        </li>
    )
}
export default connect(null, mapDispatchToProps)( CitySelector);