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
import CloseIcon from '@mui/icons-material/Close';
export default function Notification(){
  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  let k=`${date}-${month}-${year}`
    return(
        <div className="notificationContainer">
           <List >

                <ListItem className="notification" >
                    <ListItemIcon >
                    <CardContent className="notificationContent" > 
                     <div>
                     In publishing and graphic design,
                     Lorem ipsum is a placeholder text commonly used to demonstrate 
                     the visual form of a document or a typeface without
                     relying on meaningful content. Lorem ipsum may
                     be used as a placeholder before the final copy is available
                     </div>
                      </CardContent>               
                    </ListItemIcon>
                <ListItemButton className="closeBtn">
                    <CloseIcon style={{alignContent:"flex-end"}}/>  
                    </ListItemButton>
                </ListItem>

                <ListItem className="notification">
                    <ListItemIcon >
                     <CardContent className="notificationContent" > 
                     <div>
                     In publishing and graphic design,
                     Lorem ipsum is a placeholder text commonly used to demonstrate 
                     the visual form of a document or a typeface without
                     relying on meaningful content. Lorem ipsum may
                     be used as a placeholder before the final copy is available
                     </div>
                      </CardContent>              
                    </ListItemIcon>
               <ListItemButton className="closeBtn">
                    <CloseIcon/>  
                    </ListItemButton>
                </ListItem>
                <ListItem className="notification">
                    <ListItemIcon >
                     <CardContent className="notificationContent" > 
                     <div>
                     In publishing and graphic design,
                     Lorem ipsum is a placeholder text commonly used to demonstrate 
                     the visual form of a document or a typeface without
                     relying on meaningful content. Lorem ipsum may
                     be used as a placeholder before the final copy is available
                     </div>
                      </CardContent>              
                    </ListItemIcon>
               <ListItemButton className="closeBtn">
                    <CloseIcon/>  
                    </ListItemButton>
                </ListItem>

                <ListItem className="notification">
                    <ListItemIcon >
                    <CardContent className="notificationContent" > 
                     <div>
                     In publishing and graphic design,
                     Lorem ipsum is a placeholder text commonly used to demonstrate 
                     the visual form of a document or a typeface without
                     relying on meaningful content. Lorem ipsum may
                     be used as a placeholder before the final copy is available
                     </div>
                      </CardContent>              
                    </ListItemIcon>
               <ListItemButton className="closeBtn">
                    <CloseIcon/>  
                    </ListItemButton>
                </ListItem>
                <ListItem className="notification">
                    <ListItemIcon >
                    <CardContent className="notificationContent" > 
                     <div>
                     In publishing and graphic design,
                     Lorem ipsum is a placeholder text commonly used to demonstrate 
                     the visual form of a document or a typeface without
                     relying on meaningful content. Lorem ipsum may
                     be used as a placeholder before the final copy is available
                     </div>
                      </CardContent>              
                    </ListItemIcon>
               <ListItemButton className="closeBtn">
                    <CloseIcon/>  
                    </ListItemButton>
                </ListItem>

                <ListItem className="notification">
                    <ListItemIcon >
                     <CardContent className="notificationContent" > 
                     <div>
                     In publishing and graphic design,
                     Lorem ipsum is a placeholder text commonly used to demonstrate 
                     the visual form of a document or a typeface without
                     relying on meaningful content. Lorem ipsum may
                     be used as a placeholder before the final copy is available
                     </div>
                      </CardContent>              
                    </ListItemIcon>
               <ListItemButton className="closeBtn">
                    <CloseIcon/>  
                    </ListItemButton>
                </ListItem>

                <ListItem className="notification">
                    <ListItemIcon >
                    <CardContent className="notificationContent" > 
                     <div>
                     In publishing and graphic design,
                     Lorem ipsum is a placeholder text commonly used to demonstrate 
                     the visual form of a document or a typeface without
                     relying on meaningful content. Lorem ipsum may
                     be used as a placeholder before the final copy is available
                     </div>
                      </CardContent>              
                    </ListItemIcon>
               <ListItemButton className="closeBtn">
                    <CloseIcon/>  
                    </ListItemButton>
                </ListItem>

                <ListItem className="notification">
                    <ListItemIcon >
                    <CardContent className="notificationContent" > 
                     <div>
                     In publishing and graphic design,
                     Lorem ipsum is a placeholder text commonly used to demonstrate 
                     the visual form of a document or a typeface without
                     relying on meaningful content. Lorem ipsum may
                     be used as a placeholder before the final copy is available
                     </div>
                      </CardContent>              
                    </ListItemIcon>
               <ListItemButton className="closeBtn">
                    <CloseIcon/>  
                    </ListItemButton>
                </ListItem>
                <ListItem className="notification">
                    <ListItemIcon >
                     <CardContent className="notificationContent" > 
                     <div>
                     In publishing and graphic design,
                     Lorem ipsum is a placeholder text commonly used to demonstrate 
                     the visual form of a document or a typeface without
                     relying on meaningful content. Lorem ipsum may
                     be used as a placeholder before the final copy is available
                     </div>
                      </CardContent>              
                    </ListItemIcon>
               <ListItemButton className="closeBtn">
                    <CloseIcon/>  
                    </ListItemButton>
                </ListItem>

                <ListItem className="notification">
                    <ListItemIcon >
                   <CardContent className="notificationContent" > 
                     <div>
                     In publishing and graphic design,
                     Lorem ipsum is a placeholder text commonly used to demonstrate 
                     the visual form of a document or a typeface without
                     relying on meaningful content. Lorem ipsum may
                     be used as a placeholder before the final copy is available
                     </div>
                      </CardContent>              
                    </ListItemIcon>
               <ListItemButton className="closeBtn">
                    <CloseIcon/>  
                    </ListItemButton>
                </ListItem>
                <ListItem className="notification">
                    <ListItemIcon >
                   <CardContent className="notificationContent" > 
                     <div>
                     In publishing and graphic design,
                     Lorem ipsum is a placeholder text commonly used to demonstrate 
                     the visual form of a document or a typeface without
                     relying on meaningful content. Lorem ipsum may
                     be used as a placeholder before the final copy is available
                     </div>
                      </CardContent>              
                    </ListItemIcon>
               <ListItemButton className="closeBtn">
                    <CloseIcon/>  
                    </ListItemButton>
                </ListItem>

                <ListItem className="notification">
                    <ListItemIcon >
                   <CardContent className="notificationContent" > 
                     <div>
                     In publishing and graphic design,
                     Lorem ipsum is a placeholder text commonly used to demonstrate 
                     the visual form of a document or a typeface without
                     relying on meaningful content. Lorem ipsum may
                     be used as a placeholder before the final copy is available
                     </div>
                      </CardContent>              
                    </ListItemIcon>
               <ListItemButton className="closeBtn">
                    <CloseIcon/>  
                    </ListItemButton>
                </ListItem>

                <ListItem className="notification">
                    <ListItemIcon >
                   <CardContent className="notificationContent" > 
                     <div>
                     In publishing and graphic design,
                     Lorem ipsum is a placeholder text commonly used to demonstrate 
                     the visual form of a document or a typeface without
                     relying on meaningful content. Lorem ipsum may
                     be used as a placeholder before the final copy is available
                     </div>
                      </CardContent>              
                    </ListItemIcon>
               <ListItemButton className="closeBtn">
                    <CloseIcon/>  
                    </ListItemButton>
                </ListItem>

                <ListItem className="notification">
                    <ListItemIcon >
                    <CardContent className="notificationContent" > 
                     <div>
                     In publishing and graphic design,
                     Lorem ipsum is a placeholder text commonly used to demonstrate 
                     the visual form of a document or a typeface without
                     relying on meaningful content. Lorem ipsum may
                     be used as a placeholder before the final copy is available
                     </div>
                      </CardContent>              
                    </ListItemIcon>
               <ListItemButton className="closeBtn">
                    <CloseIcon/>  
                    </ListItemButton>
                </ListItem>

                <ListItem className="notification">
                    <ListItemIcon >
                   <CardContent className="notificationContent" > 
                     <div>
                     In publishing and graphic design,
                     Lorem ipsum is a placeholder text commonly used to demonstrate 
                     the visual form of a document or a typeface without
                     relying on meaningful content. Lorem ipsum may
                     be used as a placeholder before the final copy is available
                     </div>
                      </CardContent>              
                    </ListItemIcon>
               <ListItemButton className="closeBtn">
                    <CloseIcon/>  
                    </ListItemButton>
                </ListItem>
                <ListItem className="notification">
                    <ListItemIcon >
                    <CardContent className="notificationContent" > 
                     <div>
                     In publishing and graphic design,
                     Lorem ipsum is a placeholder text commonly used to demonstrate 
                     the visual form of a document or a typeface without
                     relying on meaningful content. Lorem ipsum may
                     be used as a placeholder before the final copy is available
                     </div>
                      </CardContent>              
                    </ListItemIcon>
               <ListItemButton className="closeBtn">
                    <CloseIcon/>  
                    </ListItemButton>
                </ListItem>
                <ListItem className="notification">
                    <ListItemIcon >
                  <CardContent className="notificationContent" > 
                     <div>
                     In publishing and graphic design,
                     Lorem ipsum is a placeholder text commonly used to demonstrate 
                     the visual form of a document or a typeface without
                     relying on meaningful content. Lorem ipsum may
                     be used as a placeholder before the final copy is available
                     </div>
                      </CardContent>              
                    </ListItemIcon>
               <ListItemButton className="closeBtn">
                    <CloseIcon/>  
                    </ListItemButton>
                </ListItem>

                <ListItem className="notification">
                    <ListItemIcon >
                    <CardContent className="notificationContent" > 
                     <div>
                     In publishing and graphic design,
                     Lorem ipsum is a placeholder text commonly used to demonstrate 
                     the visual form of a document or a typeface without
                     relying on meaningful content. Lorem ipsum may
                     be used as a placeholder before the final copy is available
                     </div>
                      </CardContent>              
                    </ListItemIcon>
               <ListItemButton className="closeBtn">
                    <CloseIcon/>  
                    </ListItemButton>
                </ListItem>

                <ListItem className="notification">
                    <ListItemIcon >
                   <CardContent className="notificationContent" > 
                     <div>
                     In publishing and graphic design,
                     Lorem ipsum is a placeholder text commonly used to demonstrate 
                     the visual form of a document or a typeface without
                     relying on meaningful content. Lorem ipsum may
                     be used as a placeholder before the final copy is available
                     </div>
                      </CardContent>              
                    </ListItemIcon>
               <ListItemButton className="closeBtn">
                    <CloseIcon/>  
                    </ListItemButton>
                </ListItem>

                <ListItem className="notification">
                    <ListItemIcon >
                  <CardContent className="notificationContent" > 
                     <div>
                     In publishing and graphic design,
                     Lorem ipsum is a placeholder text commonly used to demonstrate 
                     the visual form of a document or a typeface without
                     relying on meaningful content. Lorem ipsum may
                     be used as a placeholder before the final copy is available
                     </div>
                      </CardContent>              
                    </ListItemIcon>
               <ListItemButton className="closeBtn">
                    <CloseIcon/>  
                    </ListItemButton>
                </ListItem>

                <ListItem className="notification">
                    <ListItemIcon >
                     <CardContent className="notificationContent" > 
                     <div>
                     In publishing and graphic design,
                     Lorem ipsum is a placeholder text commonly used to demonstrate 
                     the visual form of a document or a typeface without
                     relying on meaningful content. Lorem ipsum may
                     be used as a placeholder before the final copy is available
                     </div>
                      </CardContent>              
                    </ListItemIcon>
               <ListItemButton className="closeBtn">
                    <CloseIcon/>  
                    </ListItemButton>
                </ListItem>

                <ListItem className="notification">
                    <ListItemIcon >
                 <CardContent className="notificationContent" > 
                     <div>
                     In publishing and graphic design,
                     Lorem ipsum is a placeholder text commonly used to demonstrate 
                     the visual form of a document or a typeface without
                     relying on meaningful content. Lorem ipsum may
                     be used as a placeholder before the final copy is available
                     </div>
                      </CardContent>              
                    </ListItemIcon>
               <ListItemButton className="closeBtn">
                    <CloseIcon/>  
                    </ListItemButton>
                </ListItem>

                <ListItem className="notification">
                    <ListItemIcon >
                  <CardContent className="notificationContent" > 
                     <div>
                     In publishing and graphic design,
                     Lorem ipsum is a placeholder text commonly used to demonstrate 
                     the visual form of a document or a typeface without
                     relying on meaningful content. Lorem ipsum may
                     be used as a placeholder before the final copy is available
                     </div>
                      </CardContent>              
                    </ListItemIcon>
               <ListItemButton className="closeBtn">
                    <CloseIcon/>  
                    </ListItemButton>
                </ListItem>

                <ListItem className="notification">
                    <ListItemIcon >
                  <CardContent className="notificationContent" > 
                     <div>
                     In publishing and graphic design,
                     Lorem ipsum is a placeholder text commonly used to demonstrate 
                     the visual form of a document or a typeface without
                     relying on meaningful content. Lorem ipsum may
                     be used as a placeholder before the final copy is available
                     </div>
                      </CardContent>              
                    </ListItemIcon>
               <ListItemButton className="closeBtn">
                    <CloseIcon/>  
                    </ListItemButton>
                </ListItem>

                <ListItem className="notification">
                    <ListItemIcon >
                 <CardContent className="notificationContent" > 
                     <div>
                     In publishing and graphic design,
                     Lorem ipsum is a placeholder text commonly used to demonstrate 
                     the visual form of a document or a typeface without
                     relying on meaningful content. Lorem ipsum may
                     be used as a placeholder before the final copy is available
                     </div>
                      </CardContent>              
                    </ListItemIcon>
               <ListItemButton className="closeBtn">
                    <CloseIcon/>  
                    </ListItemButton>
                </ListItem>

                <ListItem className="notification">
                    <ListItemIcon >
                 <CardContent className="notificationContent" > 
                     <div>
                     In publishing and graphic design,
                     Lorem ipsum is a placeholder text commonly used to demonstrate 
                     the visual form of a document or a typeface without
                     relying on meaningful content. Lorem ipsum may
                     be used as a placeholder before the final copy is available
                     </div>
                      </CardContent>              
                    </ListItemIcon>
               <ListItemButton className="closeBtn">
                    <CloseIcon/>  
                    </ListItemButton>
                </ListItem>

                <ListItem className="notification">
                    <ListItemIcon >
                   <CardContent className="notificationContent" > 
                     <div>
                     In publishing and graphic design,
                     Lorem ipsum is a placeholder text commonly used to demonstrate 
                     the visual form of a document or a typeface without
                     relying on meaningful content. Lorem ipsum may
                     be used as a placeholder before the final copy is available
                     </div>
                      </CardContent>              
                    </ListItemIcon>
               <ListItemButton className="closeBtn">
                    <CloseIcon/>  
                    </ListItemButton>
                </ListItem>
           </List>

        </div>
    )
}
