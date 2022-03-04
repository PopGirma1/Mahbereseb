import React, { useState,useEffect } from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Button, ButtonBase } from '@mui/material';
import CustomPopup from './CustomPopup/customPopup';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Image from "next/image";
import fetch from 'isomorphic-unfetch';
import {  Form, Loader } from 'semantic-ui-react';
import { useRouter } from 'next/router';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Result from "./viewCreatedPost/Result";


const Post = ({ posts }) => {

  const [visibility, setVisibility] = useState(false);
  const [form, setForm] = useState({ title: '',descrption:'' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  useEffect(() => {
      if (isSubmitting) {
          if (Object.keys(errors).length === 0) {
              createNote();
          }
          else {
              setIsSubmitting(false);
          }
      }
  }, [errors])

  const createNote = async () => {
      try {
          const res = await fetch('http://localhost:3000/api/createpost', {
              method: 'POST',
              headers: {
                  "Accept": "application/json",
                  "Content-Type": "application/json"
              },
              body: JSON.stringify(form)
          })
          router.push("/");
      } catch (error) {
          console.log(error);
      }
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      let errs = validate();
      setErrors(errs);
      setIsSubmitting(true);
  }

  const handleChange = (e) => {
      setForm({
          ...form,
          [e.target.name]: e.target.value
      })
  }

  const validate = () => {
      let err = {};

      if (!form.title) {
          err.title = 'title is required';
      }
      if (!form.descrption) {
          err.descrption = 'descrption is required';
      }
      return err;
  }


  const popupCloseHandler = () => {
    setVisibility(false);
  };

  return (
<div className='wholePostPageContainer'>

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

      <div className='status'>
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
      <div className='rightAndLeftContainer'>
              <div className='rightSection'>
                    <Result  posts={posts}/>
              </div>
              <div className='leftSection'>
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
                                                      className="popupPost"
                                                    >
                                                      <Divider style={{margin:"22px 0 22px 0",borderBottomWidth:"5px"}}/>
                                                        <div className="form-container">
                                                            <div>
                                                              {
                                                                isSubmitting
                                                                    ? <Loader active inline='centered' />
                                                                    : <Form onSubmit={handleSubmit} className="container-Form">
                                                                        <Form.Input
                                                                            fluid
                                                                            error={errors.title ? { content: 'Please enter a title', pointing: 'below' } : null}
                                                                            label='title'
                                                                            placeholder='title'
                                                                            name='title'
                                                                            onChange={handleChange}
                                                                        />
                                                                          <TextareaAutosize
                                                                            error={errors.descrption ? { content: 'Please enter a descrption', pointing: 'up' } : null}
                                                                            aria-label="descrption"
                                                                            minRows={15}
                                                                            name='descrption'
                                                                            onChange={handleChange}                                                                            
                                                                            placeholder="descrption"
                                                                            style={{ width: 400, height:80 }}
                                                                          /> 
                                                                          <Button  style={{background:"#E4E6E9",borderRadius:"16px",color:"#6B727A"}} fullWidth type="submit" > Post </Button> 
                                                                    </Form>
                                                                }
                                                            </div>
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
                          
                      <div>
                              <Card>
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

Post.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/createpost');
  const { data } = await res.json();

  return { posts: data }
}

export default Post;