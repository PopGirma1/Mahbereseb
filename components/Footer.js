import React from "react";
const UpperFooter = () => {

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return (
        <div className="footerContainerPage">

                {/* <div className="row">
                    <div className="div">
                        <h3 className="h3" > About Us</h3>
                        <div className="links">
                        <a href="/about"  >Aim</a>
                        <a href="/about" >Vision</a>
                        <a href="/about" >BackGround</a>
                        </div>
                    </div>
                    <div className="div">
                        <h3 className="h3" > Services</h3>
                        <div className="links">
                        <a href="/about"  >Contact with Owner</a>
                        <a href="/about"  >Accept User Calls</a>
                        <a href="/about"  >Chat with Bot</a>
                        </div>
                    </div>
                    <div className="div">
                        <h3 className="h3" > Contact Us</h3>
                        <div className="links">
                        <a href="/about"  >Telegram</a>
                        <a href="/about"  >Facebook</a>
                        <a href="/about"  >LinkedIn</a>
                        </div>
                    </div>

                    <div className="div">
                        <h3 className="h3" > Learn More</h3>
                        <div className="links">
                        <a href="/about"  >GitHub </a>
                        <a href="/about"  >Upwork </a>
                        <a href="/about"  >Leet Code</a>
                        </div>
                    </div>    
                </div> */}

                  <div>
                    <footer> 
                    <span style={{margin:"20px",display:"flex",flexDirection:"row",justifyContent:"center",gap:"5px"}}>
                     <p>© {date} _ {month} _ {year} All Right Reserved By Mahbereseb</p>
                    </span>
                   
                    </footer>
                  </div>
        </div>

            
    );
};
export default UpperFooter;
