import React, { useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Layout.module.css";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ContactsIcon from '@material-ui/icons/Contacts';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatIcon  from'@material-ui/icons/Chat';
import GroupsIcon from '@mui/icons-material/Groups';
import InfoIcon  from "@material-ui/icons/Info";
import HomeIcon  from "@material-ui/icons/Home";
import Image from "next/dist/client/image";
import { useState } from "react";
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import MovieIcon from '@mui/icons-material/Movie';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import GroupRemoveIcon from '@mui/icons-material/GroupRemove';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import MemoryIcon from '@mui/icons-material/Memory';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import PagesIcon from '@mui/icons-material/Pages';
import UploadIcon from '@mui/icons-material/Upload';
import TagIcon from '@mui/icons-material/Tag';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import PersonIcon from '@mui/icons-material/Person';
import PhotoIcon from '@mui/icons-material/Photo';
import {
  faInfo,
  faLaptop,
} from "@fortawesome/free-solid-svg-icons";

export const SideNavigation = () => {

  return (
    <div className="sideNavigation">
      <h1 className="sideNavigation__logo">
        <FontAwesomeIcon></FontAwesomeIcon>
        <Link href='/'>
      
        <a>
        
        <div style={{width:"95%",padding:"auto"}} className="logoandText">
        <Image src="/images/axsum.jpg" alt="Mahberesb"  width={72} height={72} />
        <div className="mahberesb">
        <span style={{color:"#DB4437"}}>Mah</span><span style={{color:"#F4B400"}}>Bere</span><span style={{color:"#DB4437"}}>Seb</span>
        </div>
        </div>

        </a>
      
        </Link>
      </h1>
      <div className="sideNavigation__links">
        <Link href="/channels/CalebTheVideoMaker2">
        <a>
            <PersonalVideoIcon/>Videos
          </a>
          </Link>
        <Link href="/videos">
          
        <a>
            <PhotoIcon/>Photos
          </a>
        </Link>
        <Link href="/post">
          <a>
            <PersonIcon/>User Post
          </a>
        </Link>
        <Link href="/chat">
          <a>
           <ChatIcon/> Chat/Message
          </a>
        </Link>

        <Link href="/group">
          <a>
           <GroupsIcon/> Group/Message
          </a>
        </Link>
        <Link href="/groupChannel">
          <a>
           <GroupsIcon/> Channel/Message
          </a>
        </Link>

        <Link href="/contact">
          <a>
           <ContactsIcon/> Contact
          </a>
        </Link>
        <Link href="/notification">
          <a>
           <NotificationsIcon/> Notification
          </a>
        </Link>

        <Link href="/account">
          <a>
           <ManageAccountsIcon/> Account
          </a>
        </Link>

        <Link href="/friends">
          <a>
           <PeopleOutlineIcon/> Friends
          </a>
        </Link>


        <Link href="/memories">
          <a>
           <MemoryIcon/> Memories
          </a>
        </Link>


        <Link href="/liveVideos">
          <a>
           <LiveTvIcon/> Live Videos
          </a>
        </Link>

        <Link href="/yourPages">
          <a>
           <PagesIcon/> Your Pages 
          </a>
        </Link>


        <Link href="/uploadedVideos">
          <a>
           <UploadIcon/> Uploaded Videos
          </a>
        </Link>


        <Link href="/tagedVideos">
          <a>
           <TagIcon/> Taged Videos
          </a>
        </Link>

        <Link href="/tagedPhotos">
          <a>
           <TagIcon/> Taged Photos
          </a>
        </Link>
        <Link href="/invitedGroups">
          <a>
           <InfoIcon/> Invited Groups
          </a>
        </Link>

        <Link href="/watchVideos">
          <a>
           <MovieIcon/> Watch
          </a>
        </Link>

        <Link href="/addPerson">
          <a>
           <PersonAddIcon/> Add Person
          </a>
        </Link>      

        <Link href="/removePerson">
          <a>
           <PersonRemoveIcon/> Remove Person
          </a>
        </Link>

        <Link href="/addgroup">
          <a>
           <GroupAddIcon/> Add Group
          </a>
        </Link>      

        <Link href="/removeGroup">
          <a>
           <GroupRemoveIcon/> Remove Group 
          </a>
        </Link>
        <div className="sideNavigation__divider">

        <Link href="/about">
          <a>
           <InfoIcon/> About
          </a>
        </Link>
        </div>
      </div>
    </div>
  );
};
