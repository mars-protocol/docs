import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
// import BannerUrl from '@site/static/img/banner.png';
// import ChadUrl from '@site/static/img/astrochad.png';
// import PepeUrl from '@site/static/img/astropepe.png';
// import AssemblyUrl from '@site/static/img/assembly.png';
import SearchBar  from '@theme/SearchBar';
import ContentBlocks from '../components/ContentBlocks';

// import LearnFigUrl from '@site/static/img/homepage-figs/learn.png';
// import GovernFigUrl from '@site/static/img/homepage-figs/govern.png';
// import DevelopFigUrl from '@site/static/img/homepage-figs/develop.png';
// import InfrastructureFigUrl from '@site/static/img/homepage-figs/infrastructure.png';

import BannerFigUrl from '@site/static/img/icons/mars.png';
import LearnFigUrl from '@site/static/img/icons/hub.png';
import GovernFigUrl from '@site/static/img/icons/balance.png';
import DevelopFigUrl from '@site/static/img/icons/pioneer.png';
import InfrastructureFigUrl from '@site/static/img/icons/satellite.png';

import ContentBox from "../components/ContextBox";

const subheaderClasses = "opacity-60 md:px-[25%] mb-10 text-lg text-center";


import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (

    <header className={styles.heroBanner}>
      <div className={styles.bannerText}>
        {/* <div className={styles.bannerFig}>
          <img src={BannerFigUrl} />
        </div>  */}
        <h1 className={styles.hero__title}>Mars Protocol Docs</h1>
        {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}
        <p className={styles.subtext}>Discover the autonomous credit protocol of the Cosmos universe</p>
        {/* <p>You've arrived at the Mars Codex, the central information station for Mars Protocol.   or discover more below </p> <a href="../docs/overview/intro-to-mars-protocol/intro-to-mars-protocol-intro">Read more about MARS</a> */}


        <div className={styles.arrows}></div>

      </div>

    </header>



    // <header className={clsx('hero hero--primary', styles.heroBanner)}>
    //   <div className="container">
    //     {/* <div className={styles.bannerFig}>
    //       <img src={BannerFigUrl} />
    //     </div>  */}
    //     <h1 className={styles.hero__title}>Mars Protocol Docs</h1>
    //     {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}
    //     <p className={styles.subtext}>Discover the autonomous credit protocol of the Cosmos universe</p>
    //     {/* <p>You've arrived at the Mars Codex, the central information station for Mars Protocol.   or discover more below </p> <a href="../docs/overview/intro-to-mars-protocol/intro-to-mars-protocol-intro">Read more about MARS</a> */}


    //     {/* <div className={clsx(styles.arrows)}></div> */}


    //   </div>
    // </header>
  );
}

// function HomepageHeader() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//       <div className="container">
//         <h1 className="hero__title">{siteConfig.title}</h1>
//         <div className={styles.buttons}>
//           <Link
//             className="button button--secondary button--lg"
//             to="/docs/overview/intro-to-mars-protocol/intro-to-mars-protocol-intro">
//             Search Docs
//           </Link>
//         </div>
//         <div className={clsx(styles.arrows)}></div>
//       </div>
//   );
// }

const contentBlockProps = {
  learn: {
    banner: false,
    image: LearnFigUrl,
    title: 'Learn',
    text: 'Get ready to explore the vast fields & outposts of Mars. Discover ways to deepen your understanding, whether you are a DeFi enthusiast, a validator, or a seasoned trader looking to expand your proficiency.',
    footer: false
  },
  govern: {
    banner: false,
    image: GovernFigUrl,
    title: 'Govern',
    text: 'Discover how to propose contributions as an active community member to the Mars Protocol governing body, the Martian Council.',
    footer: false
  }, 
  develop: {
    banner: false,
    image: DevelopFigUrl,
    title: 'Develop',
    text: "Expand your developer skills and explore the exciting realm of Mars Protocol's code base with detailed explanations and tutorials.",
    footer: false
  },
  infrastructure: {
    banner: false,
    image: InfrastructureFigUrl,
    title: 'Validate',
    text: 'Understand how to become a node operator, relayer, or validator on Mars Hub.',
    footer: true
  }
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (

    // <div className={clsx(styles.layout)}> 
    <Layout 
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      
      <main className="z-10 lg:py-12 overflow-x-hidden">
        <HomepageHeader />

        {/* flex flex-col gap-y-10 px-4 w-full mx-auto */}
        <div className={styles.ContentBlocks}>
          <div>

            <div className={styles.figs}>
              <img src={LearnFigUrl} />
            </div>

            <h2 className={styles.title}>Learn</h2>
            <p className={subheaderClasses}>
            Explore the outposts of Mars. Discover ways to deepen your understanding, whether you are a DeFi enthusiast, a validator, or a seasoned trader looking to expand your proficiency. 
            </p>
            <ContentBox title="Learn" />
          </div>

          <div>
            <div className={styles.figs}>
              <img src={DevelopFigUrl} />
            </div>

            <h2 className={styles.title}>Develop</h2>
            <p className={subheaderClasses}>
            Expand your developer skills and explore the exciting realm of Mars Protocol's code base with detailed explanations and tutorials.
            </p>
            <ContentBox title="Develop" />
          </div>
          <div>

          <div>
            <div className={styles.figs}>
              <img src={GovernFigUrl} />
            </div>

            <h2 className={styles.title}>Govern</h2>
            <p className={subheaderClasses}>
            Discover how to become an active community member of the Mars Protocol governing body, the Martian Council, and help steer the future of Mars.
            </p>
            <ContentBox title="Govern" />
          </div>

            <div className={styles.figs}>
              <img src={InfrastructureFigUrl} />
            </div>

            <h2 className={styles.title}>Validate</h2>
            <p className={subheaderClasses}>
            Learn how to become a node operator, relayer, or validator on Mars Hub.
            </p>
            <ContentBox title="Validate" />
          </div>

        </div>

        {/* <div className={styles.ContentBlocks}> 

        <ContentBlocks 
          banner={contentBlockProps.learn.banner}
          image={contentBlockProps.learn.image}
          title={contentBlockProps.learn.title}
          text={contentBlockProps.learn.text}
          footer={contentBlockProps.learn.footer}
        />

        <ContentBlocks 
          banner={contentBlockProps.govern.banner}
          image={contentBlockProps.govern.image}
          title={contentBlockProps.govern.title}
          text={contentBlockProps.govern.text}
          footer={contentBlockProps.govern.footer}
        />

        <ContentBlocks 
          banner={contentBlockProps.develop.banner}
          image={contentBlockProps.develop.image}
          title={contentBlockProps.develop.title}
          text={contentBlockProps.develop.text}
          footer={contentBlockProps.develop.footer}
        />

        <ContentBlocks 
          banner={contentBlockProps.infrastructure.banner}
          image={contentBlockProps.infrastructure.image}
          title={contentBlockProps.infrastructure.title}
          text={contentBlockProps.infrastructure.text}
          footer={contentBlockProps.infrastructure.footer}
        />
      
      </div> */}


      </main>

    </Layout>
    // </div>

  );
}

