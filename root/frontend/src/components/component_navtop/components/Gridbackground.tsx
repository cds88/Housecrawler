import * as React from 'react';
 
const GridBackground = () => {


    var rows = [];
    for (var i = 0; i < 12; i++) {
        rows.push(<div/>)
    }





    return (
        <div id="grid-background">
           
        {rows}

        </div>
    )
}
export default GridBackground;