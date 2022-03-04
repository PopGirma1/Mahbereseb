import Link from 'next/link'
import { useState } from "react";
import styles from "../styles/Layout.module.css";
import styles2 from '../styles/Home.module.css'
import Image from 'next/image';
import { FaBeer } from 'react-icons/fa';
import ContactsIcon from '@material-ui/icons/Contacts';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatIcon  from'@material-ui/icons/Chat';
import GroupsIcon  from "@material-ui/icons/Group";
import InfoIcon  from "@material-ui/icons/Info";
import HomeIcon  from "@material-ui/icons/Home"
import Search from "./search"
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';

export default function Layout({children}){



    const [hover, setHover] = useState(false);

    const onHover = () => {
      setHover(true);
    };
  
    const onLeave = () => {
      setHover(false);
    };

    const [isOpen,setIsOpen] = useState(false);
    const openMenu= ()=> setIsOpen(!isOpen);
    return <> 
            <header className={styles2.header} >
                <nav className={styles.navbar}>


                    <span className="logo">
                    <Search/>
                    </span>

                    <ul>
                    <button className={isOpen === false ? 
                                        styles.hamburger : styles.hamburger+' '+styles.active}
                                        onClick={openMenu}
                                        >
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                    </button>
                    </ul>
               

                <ul className={isOpen === false ?  styles.navmenu : styles.navmenu +' '+ styles.active}>

                    <li className={styles.navitem}>
                    <Link href="/">
                    <a className={isOpen === false ? 
                                    styles.navlink : styles.navlink+' '+styles.active}
                                    onClick={openMenu}>
                         Home
                        </a>
                    </Link>
                    </li>


                    <li className={styles.navitem}>
                    <Link href="/videos">
                    <a className={isOpen === false ? 
                                    styles.navlink : styles.navlink+' '+styles.active}
                                    onClick={openMenu}>
                         Photos
                        </a>
                    </Link>
                    </li>

                    <li className={styles.navitem}>
                    <Link href="/post">
                    <a className={isOpen === false ? 
                                    styles.navlink : styles.navlink+' '+styles.active}
                                    onClick={openMenu}>
                         User Post
                        </a>
                    </Link>
                    </li>

                    <li className={styles.navitem}>
                    <Link href="/chat">
                    <a className={isOpen === false ? 
                                    styles.navlink : styles.navlink+' '+styles.active}
                                    onClick={openMenu}>
                         Chat
                        </a>
                    </Link>
                    </li>


                    <li className={styles.navitem}>
                    <Link href="/group">
                    <a className={isOpen === false ? 
                                    styles.navlink : styles.navlink+' '+styles.active}
                                    onClick={openMenu}>
                         Group
                        </a>
                    </Link>
                    </li>

                    <li className={styles.navitem}>
                    <Link href="/groupChannel">
                    <a className={isOpen === false ? 
                                    styles.navlink : styles.navlink+' '+styles.active}
                                    onClick={openMenu}>
                        Channel
                        </a>
                    </Link>
                    </li>

                    <li className={styles.navitem}>
                    <Link href="/newUser/new">
                    <a className={isOpen === false ? 
                                    styles.navlink : styles.navlink+' '+styles.active}
                                    onClick={openMenu}>
                        Account
                        </a>
                    </Link>
                    </li>

                    <li className={styles.navitem}>
                    <Link href="/viewAccount/Index">
                    <a className={isOpen === false ? 
                                    styles.navlink : styles.navlink+' '+styles.active}
                                    onClick={openMenu}>
                        Users
                        </a>
                    </Link>
                    </li>

                    <li className={styles.navitem}>
                    <Link href="/notification">
                    <a className={isOpen === false ? 
                                    styles.navlink : styles.navlink+' '+styles.active}
                                    onClick={openMenu}>
                        Notifications
                        </a>
                    </Link>
                    </li>

                <li className={styles.navitem}>
                    <Dropdown align="end" > 
                        <Dropdown.Toggle variant="dark"  className='dropDown'>
                         Other Options
                        </Dropdown.Toggle>
                        <Dropdown.Menu >
                        <Dropdown.Item href="/liveVideos" >
                           Live Videos
                        </Dropdown.Item>

                        <Dropdown.Item href="/contact" >
                            Contact
                        </Dropdown.Item>

                        <Dropdown.Item href="/memories" >
                          Memories
                        </Dropdown.Item>

                        <Dropdown.Item href="/yourPages" >
                         Your Page
                        </Dropdown.Item>

                        <Dropdown.Item href="/uploadedVideos" >
                         Uploaded Videos
                        </Dropdown.Item>

                        <Dropdown.Item href="/tagedVideos" >
                        Taged Videos
                        </Dropdown.Item>
                        <Dropdown.Item href="/tagedPhotos" >
                        Taged Photos
                        </Dropdown.Item>

                        <Dropdown.Item href="/invitedGroups" >
                        Invited Groups
                        </Dropdown.Item>
                        <Dropdown.Item  href="/watchVideos" >
                        Watch
                        </Dropdown.Item>

                        <Dropdown.Item href="/addPerson" >
                        Add Person
                        </Dropdown.Item>

                        <Dropdown.Item href="/removePerson" >
                        Remove Person
                        </Dropdown.Item>

                        <Dropdown.Item href="/addgroup" >
                        Add Group
                        </Dropdown.Item>

                        <Dropdown.Item href="/removeGroup" >
                        Remove Group 
                        </Dropdown.Item>

                        <Dropdown.Item href="/about" >
                            About
                        </Dropdown.Item>

                        </Dropdown.Menu>
                    </Dropdown>
                </li>

                </ul>
                </nav>

                
            </header>
        {children}

     </>
}