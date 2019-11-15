import * as React from 'react'

export interface WelcomeProps{
    isAuthenticated: boolean;
    username: string;
}




export default function Welcome(Props: WelcomeProps) {
    if(!Props.isAuthenticated){
        return null
    }
    return (
        
            <li className="navtopLink">
            Welcome {Props.username}</li>

        
    )
}
