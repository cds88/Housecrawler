import * as React from 'react'
 
import '../../styles/MainStyles.scss';
import { YellowBox } from 'react-native';

export default function MainComponent() {
 
    return (
        <div className="welcomeWrapper"  >
            <h1 className="welcomeHeader">Welcome   </h1>

                <div className="leftside">

                 
                <div className="imageWrapper">
                    <div className="shader"></div>
                <img src="https://images.unsplash.com/photo-1544236296-1ad3cf4edbf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="" />
                </div>
                <div className="slanted b"></div>
                </div>

                <div className="rightside">
                    <div className="rightsideTop"></div>
                        <div className="rightsideHeader">
                    <p>  ... to the Housecrawler! </p>
                        </div>
                      
                        <div className="rightsideContent">
                         
                          <p> This site is dedicated to an idea of making it possible for everyone to choose a proper house to rent. <br/>
                           You can: <br/> easily select the adds that interest you the most, <br/> save them in your profile pocket, <br/>  draw location on map and see if the location suits You. 
                           <br/> <br/>  Currently I'm working on the mobile page as well, so that renting a place to live will be easier than ever before!
                           </p>
                           <br/>
                        </div>
                        <div className="rightsideFooter">
                            qwe
                        </div>
                <div className="rightsideBottom">
                   
                        </div>

                </div>
                  
        </div>  
    )
}


