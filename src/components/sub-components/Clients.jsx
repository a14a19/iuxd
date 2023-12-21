import React from "react";
import './Client.css';

const Sample = () => {
    return (
        <div className="main-div">
            <div className="inner-first">
                
                    <h1 className="head">Clients</h1>
                
                
                    <button className="buttn1">X</button>
                
            </div>
            <div className="inner-second">
                <img src="public\Screenshot (31).png" width={'1000px'} height={'500px'} style={{marginLeft:'13%'}}></img>
            </div>
            <div className="inner-third">
                <h1 className="head1">Worko</h1>
                <p className="para1">We recently helped Worko off the ground, <div />the first one we built using Design System as a Service.<div /> Available in React, Web Components, <div />and of course Figma.</p>
            </div>
            <div className="inner-fourth">
                <div className="ininnerdiv">
                    <img src="public\download.jpg"></img>
                    <h3 className="head3">Worko</h3>
                </div>
                <div className="ininnerdiv">
                    <img src="public\threeonezeroseven_logo.jpg"></img>
                    <h3 className="head3">3007</h3>
                </div>
                <div className="ininnerdiv">
                    <img src="public\download (1).jpg"></img>
                    <h3 className="head3">Fellow</h3>
                </div>
                

            </div>
            <div className="inner-fifth">
                <h4 className="head4">Partner with Us</h4> <h2 className="head2">We can help in many ways, including helping you see what you really need.</h2>
               
            </div>
            <button className="buttn2">Let's Talk!</button>


        </div>
    )
}

export default Sample;