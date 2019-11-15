import * as React from 'react';

import { AllAppActions } from '../../reducers/actions/AllActionsTypes';
import { AppState } from '../../reducers/ConfigureStore';
import { connect } from 'react-redux';
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from 'redux';

import {CreateUser, FetchCities} from '../../reducers/actions/AllActions';
import {City} from '../../reducers/reducer_data/Data';
import CitySelector from '../../components/component_navtop/components/CitySelector';
import {useState, useEffect} from 'react';
import '../../styles/AccountsStyles.scss';
 
import { withRouter, Redirect } from "react-router-dom";

export interface AccountData  {
    name: string;
    password1: string;
    password2: string;

}

export interface AccountsProps{

}
interface LinkDispatchToProps{
    createUser:(username:string, password1:string, password2:string, city:string)=>void,
    
}
const mapDispatchToProps=(
    dispatch: ThunkDispatch<any, any, AllAppActions>,
    ownProps: AccountsProps
): LinkDispatchToProps=>({
    createUser: bindActionCreators(CreateUser, dispatch),
   
})

type Props = AccountsProps & LinkDispatchToProps
const AccountsComponent =(Props:Props)=> {

 

     const getCSRFToken = () => {
        var token = document.cookie.split(';')[0];
        token = token.split('=')[1];
        return token
    }

    const [accountData, setAccountData] = useState<AccountData>({
        name:'',
        password1:'',
        password2:''
    })

    const [selectedCity, setSelectedCity] = useState<string>(null);
    const [shouldRedirect, setShouldRedirect] = useState<boolean>(false);
    const handleSelectCity = (e: any) => {


        setSelectedCity(e.currentTarget.dataset.city)
    }

    const handleSubmit=(e:any)=>{
        e.preventDefault();
        var username = e.target[0].value;
        var pass1 = e.target[1].value;
        var pass2 = e.target[2].value;
        Props.createUser(username, pass1, pass2, selectedCity);
        setAccountData({
            name:"",
            password1:"",
            password2:""
        })
        setShouldRedirect(true);
        
    }
    console.log(Props);
    if(shouldRedirect){
        return <Redirect to="/advertisements"></Redirect>
    }
    return (
       
         <div className="accountWrapper">
             <div className="leftdiv">
                <div className="textWrapper">
                     <h1>Create your user account</h1>
                     <p>Choose your login and city, and begin using housecrawler already ! </p>
                </div>
                 
                <div className="formWrapper">

                    <form action="" onSubmit={handleSubmit} >

                      Name <br/>
                        <input type="text"
                            name="name"
                            value={accountData.name}
                            onChange={e => { setAccountData({ ...accountData, name: e.target.value }) }} />
                        <br/>
                        Password 
                        <input type="text"
                            name="password1"
                            value={accountData.password1}
                            onChange={e => { setAccountData({ ...accountData, password1: e.target.value }) }} />
                        <br />
                        Password
                        <input type="text"
                            name="password2"
                            value={accountData.password2}
                            onChange={e => { setAccountData({ ...accountData, password2: e.target.value }) }} />
                            <br/>
                        <br/>


                        {/* <ul className="citySelector">    
                            {selectedCity? selectedCity : ("Select City")}
                            <li onClick={handleSelectCity} data-city="Lodz">Lodz</li>
                            <li onClick={handleSelectCity} data-city="Warszawa">Warszawa</li>
                            <li onClick={handleSelectCity} data-city="Gdansk">Gdansk</li>
                        </ul> */}
                        

                        <br/>
                        <input type="submit" />
                    </form>
                    
           

                </div>

             </div>
            <div className="rightdiv">
      
                <div className="rightdivImage">
                    <img 
                    className="image" src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1273&q=80" alt="" />
                </div>
                <div className="curtain">  
                <img 
                    className="cover" src="https://user-images.githubusercontent.com/2279051/36819127-dc9e33ea-1c9c-11e8-9a93-0d3c0a674f02.png" alt=""/>  
                </div> 
                <div className="slanted a"></div>
             </div>
          
            <div className="accountHeader"> Create account</div>


         </div>

                
    )
}
export default connect(null, mapDispatchToProps)(AccountsComponent);

 










 





 