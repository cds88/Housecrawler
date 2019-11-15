import * as React from 'react'

import { Link, NavLink } from 'react-router-dom';



export interface ProfileProps{
    isAuthenticated: boolean
}

const Profile = (Props: ProfileProps)=> {

    if(!Props.isAuthenticated){
        return null
    }

    return (
      <li className="navtopLink"> 
          <NavLink to='/profile' >

              <div className="imageWrapper">  <img src="https://cdn4.iconfinder.com/data/icons/auto-tools/59/screw-driver-french-key-tool-512.png" alt=""/>
              </div>
              </NavLink> 

        </li>
    )
}
export default Profile ;