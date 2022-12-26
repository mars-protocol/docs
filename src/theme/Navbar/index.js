import React from 'react';
import Navbar from '@theme-original/Navbar';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

import MarsLogoPngUrl from '../../../static/img/mars-logo.png';

export default function NavbarWrapper(props) {
  return (
    <>
      <div className={styles.topNav}>
        <Link href="/" className="h-[32px] mr-auto">
          <img src={MarsLogoPngUrl} alt="logo" className={styles.marsLogo}/>
        </Link>

          <div className={styles.linkers}>
              <a href="https://blog.marsprotocol.io/">Blog</a>
              {/* <a href="@site">Docs</a> */}
              <a href="https://app.marsprotocol.io/#/council">Forum</a>
              <a href="https://app.marsprotocol.io/">
                  <button className={styles.launchButton}>Launch App</button>
              </a>
          </div>

      </div>

      <Navbar {...props} />
    </>
  );
}