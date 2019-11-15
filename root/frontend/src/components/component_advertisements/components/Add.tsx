import * as React from 'react';

import {Advertisement} from '../../../reducers/reducer_data/Data';

import { connect } from 'react-redux';
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from 'redux';

import { PostAddSelection } from '../../../reducers/actions/AllActions';
import { AllAppActions } from '../../../reducers/actions/AllActionsTypes';
import {AppState} from '../../../reducers/ConfigureStore';
import {OpenModal} from '../../../reducers/actions/AllActions';


export interface AddProps{
    data: Advertisement
}
interface LinkStateToProps{
    isModalOpened: boolean;
}
const mapStateToProps=(
    state: AppState,
    ownProps: AddProps
):LinkStateToProps=>({
    isModalOpened: state.InterfaceReducer.isModalOpened
})
interface LinkDispatchToProps{
    PostAddSelection: (addvertisementId:number)=>void;
    openModal: (images: string[]) => void;
}

const mapDispatchToProps=(
    dispatch: ThunkDispatch<any, any, AllAppActions>,
    ownProps: AddProps
):LinkDispatchToProps=>({
        PostAddSelection: bindActionCreators(PostAddSelection, dispatch),
        openModal: bindActionCreators(OpenModal, dispatch),
})

type Props = AddProps & LinkDispatchToProps & LinkStateToProps;
const Add = (Props: Props)=> {
    const [myTimeout, setTimeOut] = React.useState({ timeout: null }) 
    const handleSaveAdd=()=>{
        Props.PostAddSelection(Props.data.id);
    }

    const handleHoverImage = () => {
        if (!Props.isModalOpened) {
            setTimeOut({
                timeout: window.setTimeout(
                    () => {
                        Props.openModal(Props.data.gallery.split(","));
                    }, 700)
            })
        }
    }
    const handleUnhoverImage = () => {
        clearInterval(myTimeout.timeout)
    }
 
   
    return (
           <div className="advertisement">
                <div className="heading">
                    <div className="left">
                    <p>{Props.data.title}</p>
                    <p>City: {Props.data.city_name}</p>
                    <p>Rent:  {Props.data.price} PLN </p> 

                    </div>

                    <div className="right">
                        <p>Size: {Props.data.size}</p>
                        <p>Date created:{Props.data.dateCreated.substring(0,10)} </p>
                        <p>Adress: {Props.data.adress} </p>

                    </div>
                     
    
                     
            </div>

            <div className="decription">
                <p> {Props.data.description.substring(41, 777)} </p>

            </div>

              <div className="imageWrapper" >
                <img src={Props.data.thumb} onMouseOver={handleHoverImage} onMouseLeave={handleUnhoverImage} alt="" />
            </div>
            <div className="favsaver">
                <button onClick={handleSaveAdd}>Save!</button>
            </div>
        </div>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(Add);




{/* 
              <div className="addSaver">
                  <button onClick={handleSaveAdd}>Save favourite</button>
            </div> */}