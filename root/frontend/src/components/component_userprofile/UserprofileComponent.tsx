
import * as React from 'react'

import '../../styles/UserprofileStyles.scss';

import { AppState } from '../../reducers/ConfigureStore';
import { connect } from 'react-redux';
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from 'redux';


export interface UserprofileProps{

}

export interface LinkStateToProps {
    userData: string;
}

const mapStateToProps = (
    state: AppState,
    ownProps: UserprofileProps
): LinkStateToProps => ({
    userData: state.AuthorizationReducer.username
})
type Props = UserprofileProps & LinkStateToProps
const UserprofileComponent=(Props:Props)=> {
 
    const handleSaveProfile=()=>{
        console.log("saving user profile")
    }
    return (
        <div className="userprofile"  >
            <div className="userprofileLeft">

                <div className="imageWrapper">
                <img src="https://images.unsplash.com/photo-1473621038790-b778b4750efe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80" alt="" />
                </div>
            </div>
            <div className="userprofileRight">

                <div className="settings">
                        <p>username</p> {Props.userData}
                    <p>city</p>
                    <input type="text"/>
                    <p>location</p> <input type="text"/>
                  

                        <p>Text content</p> <textarea name="" id="" ></textarea>                    
                </div>  
                <button onClick={handleSaveProfile}>Save</button>  
            </div>
         
            
        </div>
    )
}
export default connect(mapStateToProps, null)(  UserprofileComponent);