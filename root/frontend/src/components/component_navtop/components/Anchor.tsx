import * as  React from 'react'
import {NavLink} from 'react-router-dom';

export interface AnchorProps{
    title: string;
    link: string;
}


export default function Anchor(Props: AnchorProps) {
    return (
          <li className="navtopLink">
            <NavLink className=""
            to={Props.link}
            >
            {Props.title}
         
        
          </NavLink>
        </li>
    )
}
