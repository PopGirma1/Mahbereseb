import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import {  Card, CardContent } from 'semantic-ui-react';
import { Button } from "@mui/material";
import React, { useState } from "react";
import { IconButton } from "@mui/material";
import {MoreVertIcon} from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';


const Result = ({ posts }) => {

  return (
    <div className="post-container">

      <div className="gridPost">
        {posts.reverse().map(note => {
          return (
            <div key={note._id} >
              <Card className='postCard'>
                 <CardContent className='descrption'>
                 <Card.Header className='titleHolder'>
                    <Link href={`/createPost/${note._id}`}>
                      <a>{note.title.toUpperCase()}</a>
                    </Link>
                  </Card.Header>
                 {note.descrption}
                 </CardContent>
            

                <Card.Content extra className='viewAndEdit'>
                  
                  <Link href={`/createPost/${note._id}`}>
                    <Button variant="contained">View</Button>
                  </Link>
                  <Link href={`/createPost/${note._id}/edit`}>
                    <Button variant="contained">Edit</Button>
                  </Link>
                </Card.Content>

                <div className='reactionHolder'>
                  <CardContent className='reaction'>
                    
                        <Button> <span style={{marginRight:"10px"}}><ThumbUpIcon/></span>  <span style={{marginTop:"-5px"}}>like</span> </Button>
                        <Button> <span style={{marginRight:"10px"}}><CommentIcon/></span> <span style={{marginTop:"-5px"}}>comment</span> </Button>
                        <Button> <span style={{marginRight:"10px"}}><ShareIcon/></span> <span style={{marginTop:"-5px"}}>share</span> </Button>
                  </CardContent>
              </div>

              </Card>
            </div>
          )
        })}
      </div>
    </div>
  )
}

Result.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/createpost');
  const { data } = await res.json();

  return { posts: data }
}

export default Result;