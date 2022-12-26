import React, {useState} from 'react';
import {useDocsSidebar} from '@docusaurus/theme-common/internal';
import Layout from '@theme/Layout';
import BackToTopButton from '@theme/BackToTopButton';
import DocPageLayoutSidebar from '@theme/DocPage/Layout/Sidebar';
import DocPageLayoutMain from '@theme/DocPage/Layout/Main';
import styles from './styles.module.css';
import {useEffect, useRef} from 'react';


// import OverviewBannerUrl from '../../../../static/img/docspage-banners/hero-banner.png';

export default function DocPageLayout({children}) {
  const sidebar = useDocsSidebar();
  const [hiddenSidebarContainer, setHiddenSidebarContainer] = useState(false);
  const ref = useRef(null);

  // if ("plugin-id-overview" == true) {

  // useEffect(() => {
  //   console.log('plugin-id-overview', ref.current.className);

  //   // 👇️ check if element contains class
  //   if (ref.current.classList.contains('plugin-id-overview')) {
  //     console.log('Element contains class');
  //   } else {
  //     console.log('Element does NOT contain class');
  //   }
  // }, []);

  // const handleClick = event => {
  //   console.log(event.currentTarget.className);

  //   // 👇️ check if element contains class
  //   if (event.currentTarget.classList.contains('plugin-id-overview')) {
  //     console.log('Element contains overview');
  //   } else if (event.currentTarget.classList.contains('plugin-id-learn')) {
  //     console.log('Element contains learn');
  //   } else {
  //     console.log('Element does NOT contain class');
  //   }
  // };

      return (
        <Layout wrapperClassName={styles.docsWrapper}>
    
          <div className={styles.banner}></div>
    
          {/* <div>
            <div ref={ref} onClick={handleClick}>
              Hello world
            </div>
          </div> */}

          {/* <img src={OverviewBannerUrl} className={styles.banner} /> */}
    
          <BackToTopButton />
          <div className={styles.docPage}>
    
            <DocPageLayoutMain hiddenSidebarContainer={hiddenSidebarContainer}>
    
            <div className={styles.container}>



    
              {sidebar && (
                <DocPageLayoutSidebar
                  sidebar={sidebar.items}
                  hiddenSidebarContainer={hiddenSidebarContainer}
                  setHiddenSidebarContainer={setHiddenSidebarContainer}
                />
              )}


              {children}
    
              </div>
    
    
            </DocPageLayoutMain>
    
          </div>
    
    
        </Layout>
      );
    // } 
}

  
