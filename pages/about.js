
import { Card, CardContent, divContent, Typography } from "@mui/material"
import  Image  from "next/image"
export default function About(){
    return(
        <div className="AboutContainer">
             <div className="about">
                
                        <div className="aboutPage" >
                        <Typography className="Title">Mission</Typography>
                       
                          <Card>
                              <CardContent>
                              <Image src="/images/1.png" width={200} height={200} className="imageHolder" />
                             <Typography className="texts"> 
                                 This text is styled with some of the text formatting properties.
                            The heading uses the text-align, text-transform, and color properties.
                            The paragraph is indented, aligned, and the space between characters is specified.
                            The underline is removed from this colored "Try it Yourself" link.
                            </Typography>
                            </CardContent>
                            </Card>
                        </div>
                
                            <div className="aboutPage" >
                             <Typography  className="Title">Vission</Typography>
                             <Card>
                                 <CardContent>
                             <Image src="/images/2.png" width={200} height={200} className="imageHolder" />
                             <Typography className="texts"> 
                                 This text is styled with some of the text formatting properties.
                            The heading uses the text-align, text-transform, and color properties.
                            The paragraph is indented, aligned, and the space between characters is specified.
                            The underline is removed from this colored "Try it Yourself" link.
                            </Typography>
                            </CardContent>
                            </Card>
                            </div>
                       
                    </div>
                        <div className="about">
                            <div className="aboutPage" >
                            <Typography  className="Title"> Values</Typography>
                          
                            <Card>
                              <CardContent>
                              <Image src="/images/3.png" width={200} height={200} className="imageHolder"/>
                             <Typography className="texts"> 
                                 This text is styled with some of the text formatting properties.
                            The heading uses the text-align, text-transform, and color properties.
                            The paragraph is indented, aligned, and the space between characters is specified.
                            The underline is removed from this colored "Try it Yourself" link.
                            </Typography>
                            </CardContent>
                            </Card>
                            
                            </div>
                      
                        <div className="aboutPage" >
                            <Typography className="Title">Who are we?</Typography>
                           
                            <Card>
                              <CardContent>
                              <Image src="/images/4.png" width={200} height={200} className="imageHolder"/>
                             <Typography className="texts"> 
                                 This text is styled with some of the text formatting properties.
                            The heading uses the text-align, text-transform, and color properties.
                            The paragraph is indented, aligned, and the space between characters is specified.
                            The underline is removed from this colored "Try it Yourself" link.
                            </Typography>
                            </CardContent>
                            </Card>
                        </div> 
               
                         </div>

                         <div className="about">
                      
                        <div className="aboutPage" >
                            <Typography className="Title">Developer Profile</Typography>
                           
                            <Card>
                              <CardContent>
                              <Image src="/images/5.png" width={200} height={200} className="imageHolder"/>
                             <Typography className="texts"> 
                             <a href="@rophGirma">Telegram </a>
                             <a href="#">Facebook </a>
                             <a href="#">LinkedIn </a>
                             <a href="#">GitHub </a>
                             <a href="#">Upwork </a>
                             <a href="#">Leet Code</a>
                            </Typography>
                            </CardContent>
                            </Card>
                        </div> 
               
                         </div>
        </div>
    )
}