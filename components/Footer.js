import React from "react";
const UpperFooter = () => {
    return (
                <div className="row">
                    <div className="div">
                        <h3 className="h3" > About Us</h3>
                        <div className="h5">
                        <h5 href="/about"  >Aim</h5>
                        <h5 href="/about" >Vision</h5>
                        <h5 href="/about" >BackGround</h5>
                        </div>

                    </div>
                    <div className="div">
                        <h3 className="h3" > Services</h3>
                        <h5 href="#"  >Contact with Owner</h5>
                        <h5 href="#"  >Accept User Calls</h5>
                        <h5 href="#"  >Chat with Bot</h5>
                    </div>
                    <div className="div">
                        <h3 className="h3" > Contact Us</h3>
                        <h5 href="#"  >Telegram</h5>
                        <h5 href="#"  >Facebook</h5>
                        <h5 href="#"  >LinkedIn</h5>
                    </div>

                    <div className="div">
                        <h3 className="h3" > Learn More</h3>
                        <h5 href="#"  >GitHub </h5>
                        <h5 href="#"  >Upwork </h5>
                        <h5 href="#"  >Leet Code</h5>
                    </div>

                </div>
            
    );
};
export default UpperFooter;
