import React, { useState, useEffect} from 'react';

import clsx from 'clsx';
import styles from './styles.modules.css';
import Navbar from '../../Navbar';

// import MarsLogoSvgUrl from '../../../../static/img/mars-logo.svg';
import MarsLogoPngUrl from '../../../../static/img/mars-logo.png';


export default function GlobalNavbar(props) {

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const handleScroll = () => {
        // find current scroll position
        const currentScrollPos = window.pageYOffset;
    
        // set state based on location info (explained in more detail below)
        setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);
    
        // set state to new scroll position
        setPrevScrollPos(currentScrollPos);
      };
    
      // new useEffect:
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll);
    
      }, [prevScrollPos, visible, handleScroll]);

      const navbarStyles = {
        position: 'fixed',
        width: '100%',
        transition: 'top 0.6s',
        zIndex: '10000',
      }

    // const [sticky, setSticky] = useState(false);

    // useEffect(() => {
    //   const handleScroll = () => {
    //     setSticky(window.scrollY > 200);
    //   };
    //   window.addEventListener("scroll", handleScroll);
    //   return () => window.removeEventListener("scroll", handleScroll);
    // });

    return (
        // <nav className={styles.sticky}>

        <nav style={{...navbarStyles, top: visible ? '0' : '-60px' }}>


        <div className={styles.topNav}>

        {/* <img src={MarsLogoSvgUrl} className={styles.marsLogo}/> */}
        <img src={MarsLogoPngUrl} className={styles.marsLogo}/>

      
            <div className={styles.linkers}>
                <a href="https://blog.marsprotocol.io/">Blog</a>
                {/* <a href="@site">Docs</a> */}
                <a href="https://app.marsprotocol.io/#/council">Forum</a>
                <a href="https://app.marsprotocol.io/">
                    <button className={styles.launchButton}>Launch App</button>
                </a>
                
            </div>
        </div>
        
        {/* <div className={styles.nav-inner}>
            <span className={styles.logo}>Logo.</span>
            <div className={styles.linkers}>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Projects</a>
                <a href="#">Contact</a>
            </div>
        </div> */}

        <Navbar />

      </nav>
    )
}
  