import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
// import IntroUrl from '../../../../../static/img/intro.png';

// export default function Box(props) {

//     return (
//       <div className={styles.box}>


//         <div className={styles.fig}>
//           <img src={props.image} />
//         </div>

//         <div className={styles.text}>
//           <p className={styles.title}>{props.title}</p>
//           <p className={styles.subtext}>{props.description}</p>
//           <ul className={styles.list}>
//             <li>a</li>
//             <li>a</li>
//             <li>a</li>
//           </ul>
//         </div>

//       </div>
//     );
// }

export default function Box(props) {
  
  return (
    // <div className={styles.box}>


    //   <div className={styles.titleBanner}>
    //       <p className={styles.title}>{props.title}</p>
    //     </div>

    //   <div className={styles.fig}>
    //     <img src={props.image} />
    //   </div>

    //   <div className={styles.text}>
    //     <p className={styles.title}>{props.title}</p>
    //     <p className={styles.subtext}>{props.description}</p>
    //   </div>

    // </div>

    <div className={styles.box}>

    <div className={styles.titleBanner}>
      <p className={styles.title}>{props.title}</p>
    </div>

    <p className={styles.subtext}>{props.description}</p>


    {/* <div className={styles.boxContainer}> 
      <div className={styles.fig}>
        <img src={props.image} />
      </div>

      <div className={styles.text}>
        <p className={styles.subtext}>{props.description}</p>
        <ul className={styles.list}>

          <li>
            <a className={styles.links} href="../../../../docs/learn/rover/nft-credit-accounts">NFT Credit Accounts</a>
          </li>

          <li>
            <a className={styles.links} href="../../../../docs/learn/category/trading">Trading</a>
          </li>

        </ul>
      </div>

      
    </div> */}

  </div>



  );

}


























