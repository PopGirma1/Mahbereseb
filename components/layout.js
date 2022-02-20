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
export default function Layout({children}){

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

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
                    <Link href="/contact">
                    <a className={isOpen === false ? 
                                    styles.navlink : styles.navlink+' '+styles.active}
                                    onClick={openMenu}>
                         Contact
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
                    <Link href="/notification">
                    <a className={isOpen === false ? 
                                    styles.navlink : styles.navlink+' '+styles.active}
                                    onClick={openMenu}>
                      Notification
                        </a>
                    </Link>
                    </li>

                    <li className={styles.navitem}>
                    <Link href="/account">
                    <a className={isOpen === false ? 
                                    styles.navlink : styles.navlink+' '+styles.active}
                                    onClick={openMenu}>
                       Account
                        </a>
                    </Link>
                    </li>

                    <li className={styles.navitem}>
                    <Link href="/about">
                    <a className={isOpen === false ? 
                                    styles.navlink : styles.navlink+' '+styles.active}
                                    onClick={openMenu}>
                         About
                        </a>
                    </Link>
                    </li>
                </ul>

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

                </nav>
            </header>
        {children}
        <div className={styles2.container}>
            <footer className={styles.footer}>
              <span style={{margin:"20px"}} className={styles.date}>
            <p> © 2020</p> <p>-</p>  <p>{date} </p>   <p> {month}</p>  <p> {year}</p>
              </span>
            </footer>
        </div>
     </>
}