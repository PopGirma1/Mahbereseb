import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Button, ButtonBase } from '@mui/material';
import CustomPopup from './CustomPopup/customPopup';
import { useState } from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import Image from "next/image";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';



const Input = styled('input')({
  display: 'none',
});

export default function Post() {
  const [expanded, setExpanded] = React.useState(false);

  const [visibility, setVisibility] = useState(false);

  const popupCloseHandler = () => {
    setVisibility(false);
  };

  return (
<div className='postPage'>

      <div className='ProfilePhoto'>
            <CardHeader
              avatar={
                <Avatar >
                    <Image src='/images/papa.jpg' width="142px" height="142px"/>
                </Avatar>
              }
              title="RophGirma"
              subheader="3.8K Friends"
            />
      </div>

      <div className='seeNumberOfFriends'>
            <div>
            <Button   variant="contained" fullWidth>Add to Story</Button>
            </div>
            <div>
            <Button  variant="contained" fullWidth> <span style={{marginRight:"10px"}}>upload Photo</span>  <PhotoCamera/> </Button>
            </div>
            <div>
            <Button  variant="contained"  fullWidth> Edit Profile</Button>
            </div>

      </div>
        <Divider/>
      <div className='btnSelection'>
                <div >
                    <Button   variant="outlined" id="subBtnSelection">Post</Button>
                </div>

                <div >
                    <Button  variant="outlined" id="subBtnSelection"> About</Button>
                </div>

                <div >
                    <Button   variant="outlined" id="subBtnSelection">Friends</Button>
                </div>

                <div >
                    <Button  variant="outlined" id="subBtnSelection"> Photos</Button>
                </div>
                <div >
                    <Button   variant="outlined" id="subBtnSelection">Videos</Button>
                </div>

                <div >
                    <Button  variant="outlined" id="subBtnSelection"> More</Button>
                </div>

      </div>

  <div className='postContainer'>
    
      <div className='rightSideContainer'>
          <div className='profileandPostIndex'>
            <Card>
                    <CardContent>
                      <div>
                          <CardHeader
                          className='profileandPost'
                          avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                              <Image src='/images/papa.jpg' width="42px" height="42px"/>
                              
                            </Avatar>
                            
                          }

                          action={
                                  <div>
                                    <Button onClick={() => setVisibility(true)}  style={{background:"#E4E6E9",width:"300px",borderRadius:"16px",color:"#6B727A"}} >What is on your mind? </Button>
                                    <CustomPopup
                                      onClose={popupCloseHandler}
                                      show={visibility}
                                      title="Create Post"
                                      className='postText'
                                    >
                                      <Divider style={{margin:"22px 0 22px 0",borderBottomWidth:"5px"}}/>
                                      <div >
                                      <TextareaAutosize
                                          aria-label="empty textarea"
                                          placeholder=" Write Your Post Hear. "
                                          style={{ width: "100%", border: "none" ,outline: "none",paddingTop:"5px"}}
                                          minRows={10}
                                          />
                                      </div>
                                      <div>
                                      <Button  style={{background:"#E4E6E9",borderRadius:"16px",color:"#6B727A"}} fullWidth > Post </Button>
                                      </div>
                                    </CustomPopup>
                                  </div>     
                          }

                          title="RophGirma"
                        />

                      </div>
                    </CardContent>
            </Card>
          </div>
        <div className="rightSection">
            <Card className='personalInfo'>
              <CardContent>
                  <div>
                        <CardHeader
                          avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                              <Image src='/images/papa.jpg' width="42px" height="42px"/>
                            </Avatar>
                          }
                          action={
                            <IconButton aria-label="settings">
                              <MoreVertIcon />

                            </IconButton>
                          }
                          title="RophGirma"
                          subheader="September 14, 2016"
                        />
                            <ListItem button id="Personalpic">
                                  <Image src="/images/papa1.jpg"  layout='fill'  objectFit='contain'   />
                            </ListItem>

                        </div>
            </CardContent>
                <div className='reactionHolder'>
                  <CardContent className='reaction'>
                    
                        <Button> <span style={{marginRight:"10px"}}><ThumbUpIcon/></span>  <span style={{marginTop:"-5px"}}>like</span> </Button>
                        <Button> <span style={{marginRight:"10px"}}><CommentIcon/></span> <span style={{marginTop:"-5px"}}>comment</span> </Button>
                        <Button> <span style={{marginRight:"10px"}}><ShareIcon/></span> <span style={{marginTop:"-5px"}}>share</span> </Button>
                  </CardContent>
                </div>
            </Card>
            <Card className='personalInfo'>
              <CardContent>
                      <div>
                        <CardHeader
                          avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                              <Image src='/images/papa.jpg' width="42px" height="42px"/>
                            </Avatar>
                          }
                          action={
                            <IconButton aria-label="settings">
                              <MoreVertIcon />
                            </IconButton>
                          }
                          title="RophGirma"
                          subheader="September 14, 2016"
                        />
                            <ListItem button id="Personalpic">
                                  <Image src="/images/papa1.jpg"  layout='fill'  objectFit='contain'   />
                            </ListItem>
                        </div>
            </CardContent>

            <div className='reactionHolder'>
                  <CardContent className='reaction'>
                    
                        <Button> <span style={{marginRight:"10px"}}><ThumbUpIcon/></span>  <span style={{marginTop:"-5px"}}>like</span> </Button>
                        <Button> <span style={{marginRight:"10px"}}><CommentIcon/></span> <span style={{marginTop:"-5px"}}>comment</span> </Button>
                        <Button> <span style={{marginRight:"10px"}}><ShareIcon/></span> <span style={{marginTop:"-5px"}}>share</span> </Button>
                  </CardContent>
                </div>
            </Card>
            <Card className='personalInfo'>
              <CardContent>
                  <div>
                        <CardHeader
                          avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                              <Image src='/images/papa.jpg' width="42px" height="42px"/>
                            </Avatar>
                          }
                          action={
                            <IconButton aria-label="settings">
                              <MoreVertIcon />
                            </IconButton>
                          }
                          title="RophGirma"
                          subheader="September 14, 2016"
                        />
                            <ListItem button id="Personalpic">
                                  <Image src="/images/papa1.jpg"  layout='fill'  objectFit='contain'   />
                            </ListItem>
                        </div>
            </CardContent>

            <div className='reactionHolder'>
                  <CardContent className='reaction'>
                        <Button>like</Button>
                        <Button>comment</Button>
                        <Button>share</Button>
                  </CardContent>
                </div>
            </Card>
            <Card className='personalInfo'>
              <CardContent>
                  <div>
                        <CardHeader
                          avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                              <Image src='/images/papa.jpg' width="42px" height="42px"/>
                            </Avatar>
                          }
                          action={
                            <IconButton aria-label="settings">
                              <MoreVertIcon />
                            </IconButton>
                          }
                          title="RophGirma"
                          subheader="September 14, 2016"
                        />
                            <ListItem button id="Personalpic">
                                  <Image src="/images/papa1.jpg"  layout='fill'  objectFit='contain'   />
                            </ListItem>
                        </div>
            </CardContent>

            <div className='reactionHolder'>
                  <CardContent className='reaction'>
                    
                        <Button> <span style={{marginRight:"10px"}}><ThumbUpIcon/></span>  <span style={{marginTop:"-5px"}}>like</span> </Button>
                        <Button> <span style={{marginRight:"10px"}}><CommentIcon/></span> <span style={{marginTop:"-5px"}}>comment</span> </Button>
                        <Button> <span style={{marginRight:"10px"}}><ShareIcon/></span> <span style={{marginTop:"-5px"}}>share</span> </Button>
                  </CardContent>
                </div>
            </Card>
            <Card className='personalInfo'>
              <CardContent>
                  <div>
                        <CardHeader
                          avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                              <Image src='/images/papa.jpg' width="42px" height="42px"/>
                            </Avatar>
                          }
                          action={
                            <IconButton aria-label="settings">
                              <MoreVertIcon />
                            </IconButton>
                          }
                          title="RophGirma"
                          subheader="September 14, 2016"
                        />
                            <ListItem button id="Personalpic">
                                  <Image src="/images/papa1.jpg"  layout='fill'  objectFit='contain'   />
                            </ListItem>
                          
                  </div>
            </CardContent>
            <div className='reactionHolder'>
                  <CardContent className='reaction'>
                    
                        <Button> <span style={{marginRight:"10px"}}><ThumbUpIcon/></span>  <span style={{marginTop:"-5px"}}>like</span> </Button>
                        <Button> <span style={{marginRight:"10px"}}><CommentIcon/></span> <span style={{marginTop:"-5px"}}>comment</span> </Button>
                        <Button> <span style={{marginRight:"10px"}}><ShareIcon/></span> <span style={{marginTop:"-5px"}}>share</span> </Button>
                  </CardContent>
                </div>
            </Card>
            <Card className='personalInfo'>
              <CardContent>
                  <div>
                        <CardHeader
                          avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                              <Image src='/images/papa.jpg' width="42px" height="42px"/>
                            </Avatar>
                          }
                          action={
                            <IconButton aria-label="settings">
                              <MoreVertIcon />
                            </IconButton>
                          }
                          title="RophGirma"
                          subheader="September 14, 2016"
                        />
                            <ListItem button id="Personalpic">
                                  <Image src="/images/papa1.jpg"  layout='fill'  objectFit='contain'   />
                            </ListItem>
                        </div>
            </CardContent>

            <div className='reactionHolder'>
                  <CardContent className='reaction'>
                    
                        <Button> <span style={{marginRight:"10px"}}><ThumbUpIcon/></span>  <span style={{marginTop:"-5px"}}>like</span> </Button>
                        <Button> <span style={{marginRight:"10px"}}><CommentIcon/></span> <span style={{marginTop:"-5px"}}>comment</span> </Button>
                        <Button> <span style={{marginRight:"10px"}}><ShareIcon/></span> <span style={{marginTop:"-5px"}}>share</span> </Button>
                  </CardContent>
                </div>
            </Card>
            <Card className='personalInfo'>
              <CardContent>
                  <div>
                        <CardHeader
                          avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                              <Image src='/images/papa.jpg' width="42px" height="42px"/>
                            </Avatar>
                          }
                          action={
                            <IconButton aria-label="settings">
                              <MoreVertIcon />
                            </IconButton>
                          }
                          title="RophGirma"
                          subheader="September 14, 2016"
                        />
                            <ListItem button id="Personalpic">
                                  <Image src="/images/papa1.jpg"  layout='fill'  objectFit='contain'   />
                            </ListItem>
                  </div>
            </CardContent>

            <div className='reactionHolder'>
                  <CardContent className='reaction'>
                    
                        <Button> <span style={{marginRight:"10px"}}><ThumbUpIcon/></span>  <span style={{marginTop:"-5px"}}>like</span> </Button>
                        <Button> <span style={{marginRight:"10px"}}><CommentIcon/></span> <span style={{marginTop:"-5px"}}>comment</span> </Button>
                        <Button> <span style={{marginRight:"10px"}}><ShareIcon/></span> <span style={{marginTop:"-5px"}}>share</span> </Button>
                  </CardContent>
                </div>
            </Card>
        </div> 
      </div>
      <div className='leftSection'>
            <div>
              <Card  className='choose'>
                <CardContent>
                  <div>
                  <List>
                      <ListItem button>
                        <ListItemText primary="Add Bio" style={{ color: '#1976D2' }}/>
                      </ListItem>
                      <Divider />
                      <ListItem button divider>
                        <ListItemText primary="Edit Detail" style={{ color: '#1976D2' }} />
                      </ListItem>
                      <ListItem button>
                        <ListItemText primary="Add Hobbies" style={{ color: '#1976D2' }} />
                      </ListItem>
                      <Divider light />
                      <ListItem button>
                        <ListItemText primary="Add Featurd" style={{ color: '#1976D2' }} />
                      </ListItem>

                </List>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className='choose1'>
              <CardContent className='horizonatl'>
                    <ListItem button style={{ color: '#1976D2' ,width:"30%" }}>
                      <ListItemText primary="Photo/Video" />
                    </ListItem>
                    <Divider />
                    <ListItem button style={{ color: '#1976D2', width:"30%" }}>
                      <ListItemText primary="Life Event"/>
                    </ListItem>
                    <ListItem button style={{ color: '#1976D2', width:"30%" }}>
                      <ListItemText primary="Live Event" />
                    </ListItem>
              </CardContent>
              </Card>
            </div>

          <div>
          <Card>
              <CardContent>
                <div className='seePost'>

                      <div className='headerPhoto'>
                        <Button id="headerPhotoSection">Photos</Button>
                      </div>
                      <div className='listOfPhotos'>
                        <ListItem button id="pic">
                          <Image src='/images/papa.jpg'  layout='fill'  objectFit='contain'  />
                        </ListItem>
                        <ListItem button id="pic">
                            <Image src='/images/papa.jpg'  layout='fill'  objectFit='contain'  />
                        </ListItem>
                        <ListItem button id="pic">
                            <Image src='/images/papa.jpg'  layout='fill'  objectFit='contain'  />
                        </ListItem>
                        <ListItem button id="pic">
                            <Image src='/images/papa.jpg'  layout='fill'  objectFit='contain'  />
                        </ListItem>
                        <ListItem button id="pic">
                            <Image src='/images/papa.jpg'  layout='fill'  objectFit='contain'  />
                        </ListItem>
                        <ListItem button id="pic">
                            <Image src='/images/papa.jpg'  layout='fill'  objectFit='contain'  />
                        </ListItem>
                        <ListItem button id="pic">
                            <Image src='/images/papa.jpg'  layout='fill'  objectFit='contain'  />
                        </ListItem>
                        <ListItem button id="pic">
                            <Image src='/images/papa.jpg'  layout='fill'  objectFit='contain'  />
                        </ListItem>
                        <ListItem button id="pic">
                            <Image src='/images/papa.jpg'  layout='fill'  objectFit='contain'  />
                        </ListItem>
                        <ListItem button id="pic">
                            <Image src='/images/papa.jpg'  layout='fill'  objectFit='contain'  />
                        </ListItem>
                        <ListItem button id="pic">
                            <Image src='/images/papa.jpg'  layout='fill'  objectFit='contain'  />
                        </ListItem>
                        <ListItem button id="pic">
                            <Image src='/images/papa.jpg'  layout='fill'  objectFit='contain'  />
                        </ListItem>
                        <ListItem button id="pic">
                            <Image src='/images/papa.jpg'  layout='fill'  objectFit='contain'  />
                        </ListItem>
                        <ListItem button id="pic">
                            <Image src='/images/papa.jpg'  layout='fill'  objectFit='contain'  />
                        </ListItem>
                        <ListItem button id="pic">
                            <Image src='/images/papa.jpg'  layout='fill'  objectFit='contain'  />
                        </ListItem>
                        <ListItem button id="pic">
                            <Image src='/images/papa.jpg'  layout='fill'  objectFit='contain'  />
                        </ListItem>

                      </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
          <Card>
              <CardContent>
                <div className='seePost'>

                      <div className='headerPhoto'>
                        <Button id="headerPhotoSection">Videos</Button>
                      </div>
                      <div className='listOfvideos'>
                        <ListItem button id="videoList">
                        <video  loop style={{ width: '200px', height: '200px' }} controls >
                        <source src="/video/v1.mp4" />
                        </video>
                        </ListItem>
                        <ListItem button id="videoList">
                        <video  loop style={{ width: '200px', height: '200px' }} controls >
                        <source src="/video/v1.mp4" />
                        </video>                 
                        </ListItem>
                        <ListItem button id="videoList">
                        <video  loop style={{ width: '200px', height: '200px' }} controls >
                        <source src="/video/v1.mp4" />
                        </video>                  
                        </ListItem>
                        <ListItem button id="videoList">
                        <video  loop style={{ width: '200px', height: '200px' }} controls >
                        <source src="/video/v1.mp4" />
                        </video>                  
                        </ListItem>
                        <ListItem button id="videoList">
                        <video  loop style={{ width: '200px', height: '200px' }} controls >
                        <source src="/video/v1.mp4" />
                        </video>                 
                        </ListItem>
                        <ListItem button id="videoList">
                        <video  loop style={{ width: '200px', height: '200px' }} controls >
                        <source src="/video/v1.mp4" />
                        </video>                
                        </ListItem>
                        <ListItem button id="videoList">
                        <video  loop style={{ width: '200px', height: '200px' }} controls >
                        <source src="/video/v1.mp4" />
                        </video>                  
                        </ListItem>
                        <ListItem button id="videoList">
                        <video  loop style={{ width: '200px', height: '200px' }} controls >
                        <source src="/video/v1.mp4" />
                        </video>                  
                        </ListItem>
                        <ListItem button id="videoList">
                        <video  loop style={{ width: '200px', height: '200px' }} controls >
                        <source src="/video/v1.mp4" />
                        </video>                  
                        </ListItem>
                        <ListItem button id="videoList">
                        <video  loop style={{ width: '200px', height: '200px' }} controls >
                        <source src="/video/v1.mp4" />
                        </video>                  
                        </ListItem>
                        <ListItem button id="videoList">
                        <video  loop style={{ width: '200px', height: '200px' }} controls >
                        <source src="/video/v1.mp4" />
                        </video>                  
                        </ListItem>
                        <ListItem button id="videoList">
                        <video  loop style={{ width: '200px', height: '200px' }} controls >
                        <source src="/video/v1.mp4" />
                        </video>                  
                        </ListItem>
                        <ListItem button id="videoList">
                        <video  loop style={{ width: '200px', height: '200px' }} controls >
                        <source src="/video/v1.mp4" />
                        </video>                  
                        </ListItem>
                        <ListItem button id="videoList">
                        <video  loop style={{ width: '200px', height: '200px' }} controls >
                        <source src="/video/v1.mp4" />
                        </video>                 
                        </ListItem>
                        <ListItem button id="videoList">
                        <video  loop style={{ width: '200px', height: '200px' }} controls >
                        <source src="/video/v1.mp4" />
                        </video>                  
                        </ListItem>
                        <ListItem button id="videoList">
                        <video  loop style={{ width: '200px', height: '200px' }} controls >
                        <source src="/video/v1.mp4" />
                        </video>                  
                        </ListItem>

                      </div>
                </div>
              </CardContent>
            </Card>
          </div>
      </div>
  </div>
 </div>
    
  );
}
