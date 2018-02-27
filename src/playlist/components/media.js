import React from "react";
import "./media.css"


class Media extends React.Component{
    render(){
        return(
            <div className="Media">
                <div>
                    <img src="./images/328.jpg" alt="" width={260} height={160}/>
                    <h3>React</h3>
                    <p>NehemiasEC</p>
                </div>
            </div>
        )
    }
}


export default Media;


