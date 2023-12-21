import React from "react";
import './Client.css';

const Sample=()=>{
    return(
<div className="main-div">
    <div className="inner-first">
        <div className="submain">
            <h1 className="head">Clients</h1>
        </div>
        <div className="submain">
        <button className="buttn1">X</button>
        </div>
    </div>
    <div className="inner-second">
        <img src="public\650e1a1a176d7d39ec048659_xp.png"></img>
    </div>
    <div className="inner-third">
        <h1 className="head1">Fellow</h1>
        <p>We recently helped Fellow off the ground, <div/>the first one we built using Design System as a Service.<div/> Available in React, Web Components, <div/>and of course Figma.</p>
    </div>
    <div className="inner-fourth">
        <div className="ininnerdiv">
            <img src="public\download.jpg"></img>
            <h3>Worko</h3>
        </div>
        <div className="ininnerdiv">
            <img src="public\download (1).jpg"></img>
            <h3>Fellow</h3>
        </div>
        <div className="ininnerdiv">
        
        </div>

    </div>
    <div className="inner-fifth">
        <h4>Partner with Us</h4> <h2>We can help in many ways, including helping you see what you really need.</h2>
        <button className="buttn2">Let's Talk!</button>
    </div>
    

</div>
    )
}

export default Sample;