import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import ContentBox from './ContentBox';
// import LaunchUrl from '../../../static/img/launch.png';

const contentBoxProps = {
  learn: {
    title: 'Learn',
  },
  govern: {
    title: 'Govern',
  }, 
  develop: {
    title: 'Develop',
  }, 
  infrastructure: {
    title: 'Infrastructure'
  }
}

export default function ContentBlocks(props) {

  if (props.banner == true) {
    return (
      <div className={styles.blocks}>
        {/* <div className={styles.banner}>
          <img src={props.image}/>
        </div> */}
        <h2 className={styles.title}>{props.title}</h2>
        <p className={styles.text}>{props.text}</p>
        <ContentBox title={contentBoxProps.learn.title} />
      </div>
    );
  } else if (props.title == 'Learn') {
    return (
      <div className={styles.blocks}>
        {/* <div className={styles.figs}>
          <img src={props.image}/>
        </div> */}
        <h2 className={styles.title}>{props.title}</h2>
        <p className={styles.text}>{props.text}</p>
        <ContentBox title={contentBoxProps.learn.title} />
      </div>
    );
  } else if (props.title == 'Govern') {
    return (
      <div className={styles.blocks}>
        {/* <div className={styles.figs}>
          <img src={props.image}/>
        </div> */}
        <h2 className={styles.title}>{props.title}</h2>
        <p className={styles.text}>{props.text}</p>
        <ContentBox title={contentBoxProps.govern.title} />
      </div>
    );
  } else if (props.title == 'Develop') {
    return (
      <div className={styles.blocks}>
        {/* <div className={styles.figs}>
          <img src={props.image}/>
        </div> */}
        <h2 className={styles.title}>{props.title}</h2>
        <p className={styles.text}>{props.text}</p>
        <ContentBox title={contentBoxProps.develop.title} />
      </div>
    );
  } else if (props.footer == true) {
    return (
      <div className={styles.footerSpacing}>
        {/* <div className={styles.figs}>
          <img src={props.image}/>
        </div> */}
        <h2 className={styles.title}>{props.title}</h2>
        <p className={styles.text}>{props.text}</p>
        <ContentBox title={contentBoxProps.infrastructure.title} />

        {/* <div className={styles.footer}>
          <img src={LaunchUrl}/>
        </div> */}
      </div>
    );
  }
  
}