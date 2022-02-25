import { Card, CardContent, divContent, Typography } from "@mui/material"
import Search from "../components/search"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Image from "next/image"
import AddIcon from '@mui/icons-material/Add';
export default function Group(){
  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  let k=`${date}-${month}-${year}`
    return(
        <div className="chatContainer">
         <Card className="messageList">
             <CardContent>
              <Typography className="Title">Group Messanger</Typography>
              <Search/>
           <List>
           <ListItem disablePadding>
            <ListItemButton className="totalFriends">
              <ListItemIcon>
                     <CardHeader
                   
                          avatar={
                            <Avatar>
                              <Image src='/images/group.png' width="42px" height="42px"/>
                            </Avatar>
                          }

                          title="National Engineers Week"
                          subheader={k}
                        />
              </ListItemIcon>
                            <IconButton aria-label="settings">
                              <MoreVertIcon />
                            </IconButton>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton className="totalFriends">
              <ListItemIcon>
                       <CardHeader
                        
                          avatar={
                            <Avatar >
                              <Image src='/images/group.png' width="42px" height="42px"/>
                            </Avatar>
                          }

                          title="National Engineers Week"
                          subheader={k}
                        />
              </ListItemIcon>
                            <IconButton aria-label="settings">
                              <MoreVertIcon />
                            </IconButton>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton className="totalFriends">
              <ListItemIcon>
                     <CardHeader
                      
                          avatar={
                            <Avatar >
                              <Image src='/images/group.png' width="42px" height="42px"/>
                            </Avatar>
                          }
                          title="National Engineers Week"
                          subheader={k}
                        />
              </ListItemIcon>
                            <IconButton aria-label="settings">
                              <MoreVertIcon />
                            </IconButton>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton className="totalFriends">
              <ListItemIcon>
                   <CardHeader
                    
                          avatar={
                            <Avatar >
                              <Image src='/images/group.png' width="42px" height="42px"/>
                            </Avatar>
                          }
                          title="National Engineers Week"
                          subheader={k}
                        />
              </ListItemIcon>
                            <IconButton aria-label="settings">
                              <MoreVertIcon />
                            </IconButton>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton className="totalFriends">
              <ListItemIcon>
                       <CardHeader
                        
                          avatar={
                            <Avatar >
                              <Image src='/images/group.png' width="42px" height="42px"/>
                            </Avatar>
                          }
  
                          title="National Engineers Week"
                          subheader={k}
                        />
              </ListItemIcon>
                            <IconButton aria-label="settings">
                              <MoreVertIcon />
                            </IconButton>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton className="totalFriends">
              <ListItemIcon>
                   <CardHeader
                    
                          avatar={
                            <Avatar >
                              <Image src='/images/group.png' width="42px" height="42px"/>
                            </Avatar>
                          }
                          title="National Engineers Week"
                          subheader={k}
                        />
              </ListItemIcon>
                             <IconButton aria-label="settings">
                              <MoreVertIcon />
                            </IconButton>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton className="totalFriends">
              <ListItemIcon>
                      <CardHeader
                       
                          avatar={
                            <Avatar >
                              <Image src='/images/group.png' width="42px" height="42px"/>
                            </Avatar>
                          }
                          title="National Engineers Week"
                          subheader={k}
                        />
              </ListItemIcon>
                             <IconButton aria-label="settings">
                              <MoreVertIcon />
                            </IconButton>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton className="totalFriends">
              <ListItemIcon>
                     <CardHeader
                      
                          avatar={
                            <Avatar >
                              <Image src='/images/group.png' width="42px" height="42px"/>
                            </Avatar>
                          }
                          title="National Engineers Week"
                          subheader={k}
                        />
              </ListItemIcon>
                            <IconButton aria-label="settings">
                              <MoreVertIcon />
                            </IconButton>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton className="totalFriends">
              <ListItemIcon>
                   <CardHeader
                    
                          avatar={
                            <Avatar >
                              <Image src='/images/group.png' width="42px" height="42px"/>
                            </Avatar>
                          }
                          title="National Engineers Week"
                          subheader={k}
                        />
              </ListItemIcon>
                           <IconButton aria-label="settings">
                              <MoreVertIcon />
                            </IconButton>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton className="totalFriends">
              <ListItemIcon>
                     <CardHeader
                      
                          avatar={
                            <Avatar >
                              <Image src='/images/group.png' width="42px" height="42px"/>
                            </Avatar>
                          }
                          title="National Engineers Week"
                          subheader={k}
                        />
              </ListItemIcon>
                            <IconButton aria-label="settings">
                              <MoreVertIcon />
                            </IconButton>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton className="totalFriends">
              <ListItemIcon>
                   <CardHeader
                    
                          avatar={
                            <Avatar >
                              <Image src='/images/group.png' width="42px" height="42px"/>
                            </Avatar>
                          }
                          title="National Engineers Week"
                          subheader={k}
                        />
              </ListItemIcon>
                              <IconButton aria-label="settings">
                              <MoreVertIcon />
                            </IconButton>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton className="totalFriends">
              <ListItemIcon>
                        <CardHeader
                          avatar={
                            <Avatar >
                              <Image src='/images/group.png' width="42px" height="42px"/>
                            </Avatar>
                          }
                          title="National Engineers Week"
                          subheader={k}
                        />
              </ListItemIcon>
                            <IconButton aria-label="settings">
                              <MoreVertIcon />
                            </IconButton>
            </ListItemButton>
          </ListItem>
          
           </List>
             </CardContent>
         </Card>
       
       
       
         <Card className="messageList">
             <CardContent>
             <Typography className="Title">Group Lists</Typography>
           <List>
           <ListItem disablePadding>
            <ListItemButton className="totalFriends">
              <ListItemIcon>
                       <CardHeader
                          avatar={
                            <Avatar >
                              <Image src='/images/group.png' width="42px" height="42px"/>
                            </Avatar>
                          }

                          title="National Engineers Week"
                        />
              </ListItemIcon>
              <AddIcon/> 
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton className="totalFriends">
              <ListItemIcon>
                                        <CardHeader
                          avatar={
                            <Avatar >
                              <Image src='/images/group.png' width="42px" height="42px"/>
                            </Avatar>
                          }
                          title="National Engineers Week"
                        />
              </ListItemIcon>
              <AddIcon/> 
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton className="totalFriends">
              <ListItemIcon>
                                        <CardHeader
                          avatar={
                            <Avatar >
                              <Image src='/images/group.png' width="42px" height="42px"/>
                            </Avatar>
                          }
                          title="National Engineers Week"
                        />
              </ListItemIcon>
              <AddIcon/> 
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton className="totalFriends">
              <ListItemIcon>
                                        <CardHeader
                          avatar={
                            <Avatar >
                              <Image src='/images/group.png' width="42px" height="42px"/>
                            </Avatar>
                          }
                          title="National Engineers Week"
                        />
              </ListItemIcon>
              <AddIcon/> 
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton className="totalFriends">
              <ListItemIcon>
                                        <CardHeader
                          avatar={
                            <Avatar >
                              <Image src='/images/group.png' width="42px" height="42px"/>
                            </Avatar>
                          }
                          title="National Engineers Week"
                        />
              </ListItemIcon>
              <AddIcon/> 
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton className="totalFriends">
              <ListItemIcon>
                                        <CardHeader
                          avatar={
                            <Avatar >
                              <Image src='/images/group.png' width="42px" height="42px"/>
                            </Avatar>
                          }

                          title="National Engineers Week"
                        />
              </ListItemIcon>
              <AddIcon/> 
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton className="totalFriends">
              <ListItemIcon>
                                        <CardHeader
                          avatar={
                            <Avatar >
                              <Image src='/images/group.png' width="42px" height="42px"/>
                            </Avatar>
                          }

                          title="National Engineers Week"
                        />
              </ListItemIcon>
              <AddIcon/> 
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton className="totalFriends">
              <ListItemIcon>
                                        <CardHeader
                          avatar={
                            <Avatar >
                              <Image src='/images/group.png' width="42px" height="42px"/>
                            </Avatar>
                          }
                
                          title="National Engineers Week"
                        />
              </ListItemIcon>
              <AddIcon/> 
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton className="totalFriends">
              <ListItemIcon>
                     <CardHeader
                          avatar={
                            <Avatar >
                              <Image src='/images/group.png' width="42px" height="42px"/>
                            </Avatar>
                          }
                          title="National Engineers Week"
                        />
              </ListItemIcon>
              <AddIcon/> 
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton className="totalFriends">
              <ListItemIcon>
                                        <CardHeader
                          avatar={
                            <Avatar >
                              <Image src='/images/group.png' width="42px" height="42px"/>
                            </Avatar>
                          }
                         
                          title="National Engineers Week"
                        />
              </ListItemIcon>
              <AddIcon/> 
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton className="totalFriends">
              <ListItemIcon>
                                        <CardHeader
                          avatar={
                            <Avatar >
                              <Image src='/images/group.png' width="42px" height="42px"/>
                            </Avatar>
                          }
                        
                          title="National Engineers Week"
                        />
              </ListItemIcon>
              <AddIcon/> 
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton className="totalFriends">
              <ListItemIcon>
                                        <CardHeader
                          avatar={
                            <Avatar >
                              <Image src='/images/group.png' width="42px" height="42px"/>
                            </Avatar>
                          }
                         
                          title="National Engineers Week"
                        />
              </ListItemIcon>
              <AddIcon/> 
            </ListItemButton>
          </ListItem>
          
           </List>
             </CardContent>
         </Card>
        </div>
    )
}
