import React from "react";
import preloader from "../assets/preloader.gif";



const Preloader = (props) => {
    return (
        <div style={ {backgroundColor: 'white'} }>
            <img src={preloader} alt="not found" style={ {width: '100px', height: "100px"} }/>
        </div>
    )
}

export default Preloader;