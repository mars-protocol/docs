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

  if (props.list == 'Astro Pools') {
    return (
      <div className={styles.box}>
  
  
        <div className={styles.fig}>
          <img src={props.image} />
        </div>
  
        <div className={styles.text}>
          <p className={styles.title}>{props.title}</p>
          <p className={styles.subtext}>{props.description}</p>
          <ul className={styles.list}>
            <li> 
              <a className={styles.links} href="../../../../docs/learn/astro-pools/constant-product-pools">Constant Product Pools</a>
            </li>

            <li>
              <a className={styles.links} href="../../../../docs/learn/astro-pools/stableswap-pools">Stableswap Pools</a>
            </li>
            
          </ul>
        </div>
  
      </div>
    );
  } else if (props.list == 'Astro Generators') {
    return (
      <div className={styles.box}>
  
  
        <div className={styles.fig}>
          <img src={props.image} />
        </div>
  
        <div className={styles.text}>
          <p className={styles.title}>{props.title}</p>
          <p className={styles.subtext}>{props.description}</p>
          <ul className={styles.list}>
            <li>Proxy Contracts</li>
            <li>Dual Rewards</li>
          </ul>
        </div>
  
      </div>
    );
  } else if (props.list == 'Astro Assembly') {
    return (
      <div className={styles.box}>
  
  
        <div className={styles.fig}>
          <img src={props.image} />
        </div>
  
        <div className={styles.text}>
          <p className={styles.title}>{props.title}</p>
          <p className={styles.subtext}>{props.description}</p>
          <ul className={styles.list}>
            
            <li>
              <a className={styles.links} href="../../../../docs/learn/astral-assembly">Overview</a>
            </li>

          </ul>
        </div>
  
      </div>
    );
  } else if (props.list == 'Astro Tokenomics') {
    return (
      <div className={styles.box}>
  
  
        <div className={styles.fig}>
          <img src={props.image} />
        </div>
  
        <div className={styles.text}>
          <p className={styles.title}>{props.title}</p>
          <p className={styles.subtext}>{props.description}</p>
          <ul className={styles.list}>

            <li>
              <a className={styles.links} href="../../../../docs/learn/tokenomics/fees">Fees</a>
            </li>

            <li>
              <a className={styles.links} href="../../../../docs/learn/tokenomics/staking-and-locking">Staking & Locking</a>
            </li>

            <li>
              <a className={styles.links} href="../../../../docs/learn/tokenomics/allocation">Allocation</a>
            </li>
          </ul>
        </div>
  
      </div>
    );
  } else if (props.list == "AIPF") {
    return (
      <div className={styles.box}>
  
  
        <div className={styles.fig}>
          <img src={props.image} />
        </div>
  
        <div className={styles.text}>
          <p className={styles.title}>{props.title}</p>
          <p className={styles.subtext}>{props.description}</p>
          <ul className={styles.list}>
            <li>AIP Lifecycle</li>
            <li>AIP Templates</li>
          </ul>
        </div>
  
      </div>
    );
  } else if (props.list == "AIF") {
    return (
      <div className={styles.box}>
  
  
        <div className={styles.fig}>
          <img src={props.image} />
        </div>
  
        <div className={styles.text}>
          <p className={styles.title}>{props.title}</p>
          <p className={styles.subtext}>{props.description}</p>
          <ul className={styles.list}>
            <li>Overview</li>
            <li>AIF Template</li>
          </ul>
        </div>
  
      </div>
    );
  } else if (props.list == 'Proposal Messages') {
    return (
      <div className={styles.box}>
  
  
        <div className={styles.fig}>
          <img src={props.image} />
        </div>
  
        <div className={styles.text}>
          <p className={styles.title}>{props.title}</p>
          <p className={styles.subtext}>{props.description}</p>
          <ul className={styles.list}>
            <li>
              <a className={styles.links} href="../../../../docs/govern/proposal-messages/fine-tuning-allocation-points">ASTRO Emissions</a>
            </li>

            <li>
              <a className={styles.links} href="../../../../docs/govern/proposal-messages/integrating-proxy-contracts">Integrating Proxy Contracts</a>
            </li>

            <li>
              <a className={styles.links} href="../../../../docs/govern/proposal-messages/integrating-dual-rewards">Dual Rewards</a>
            </li>

          </ul>
        </div>
  
      </div>
    );
  } else if (props.list == 'Smart Contracts') {
    return (
      <div className={styles.box}>
  
  
        <div className={styles.fig}>
          <img src={props.image} />
        </div>
  
        <div className={styles.text}>
          <p className={styles.title}>{props.title}</p>
          <p className={styles.subtext}>{props.description}</p>
          <ul className={styles.list}>
            {/* <li>
            <a className={styles.links} href="../../../../docs/develop/category/smart-contracts">Overview</a>
            </li> */}

            <li>
              <a className={styles.links} href="../../../../docs/develop/smart-contracts/astroport-contract-addresses">Astroport Contract Addresses</a>
            </li>

            <li>
              <a className={styles.links} href="../../../../docs/develop/smart-contracts/factory">Astroport Factory</a>
            </li>

            <li>
              <a className={styles.links} href="../../../../docs/develop/category/swap-pairs">Swap Pairs</a>
            </li>

          </ul>
        </div>
  
      </div>
    );
  } 
  

  
  else if (props.list == 'Node Operators') {
    return (
      <div className={styles.box}>

        <div className={styles.titleBanner}>
        <p className={styles.title}>{props.title}</p>
        </div>

        <div className={styles.boxContainer}> 

          <div className={styles.fig}>
            <img src={props.image} />
          </div>
          <div className={styles.text}>
            <p className={styles.subtext}>{props.description}</p>
            <ul className={styles.list}>
              <li>
                <a className={styles.links} href="../../../../docs/join-the-network/node-operators/setting-up-a-node">Setting up a Node</a>
              </li>

              <li>
                <a className={styles.links} href="../../../../docs/join-the-network/node-operators/interacting-with-your-node">Interacting with your Node</a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    );
  } else if (props.list == 'Validators') {
    return (
      <div className={styles.box}>

        <div className={styles.titleBanner}>
          <p className={styles.title}>{props.title}</p>
        </div>
  
        <div className={styles.boxContainer}> 
          <div className={styles.fig}>
            <img src={props.image} />
          </div>
  
          <div className={styles.text}>
            <p className={styles.subtext}>{props.description}</p>
            <ul className={styles.list}>

              <li>
                <a className={styles.links} href="../../../../docs/join-the-network/validators/becoming-a-validator">Becoming a Validator</a>
              </li>

              <li>
                <a className={styles.links} href="../../../../docs/join-the-network/validators/managing-your-validator">Managing your Validator</a>
              </li>

              <li>
                <a className={styles.links} href="../../../../docs/join-the-network/validators/validators-faq">Validators FAQ</a>
              </li>

            </ul>
          </div>
        </div>
  
      </div>
    );
  } else if (props.list == 'IBC Relayers') {
    return (
      <div className={styles.box}>

        <div className={styles.titleBanner}>
          <p className={styles.title}>{props.title}</p>
        </div>
  
      
      
        <div className={styles.boxContainer}> 
          <div className={styles.fig}>
            <img src={props.image} />
          </div>
    
          <div className={styles.text}>
            <p className={styles.subtext}>{props.description}</p>
            <ul className={styles.list}>

              <li>
                <a className={styles.links} href="../../../../docs/join-the-network/ibc-relayers/channels-for-mars">Channels for Mars</a>
              </li>

              <li>
                <a className={styles.links} href="../../../../docs/join-the-network/ibc-relayers/relayers-guide">Relayers Guide</a>
              </li>

            </ul>
          </div>
        </div>
      </div>
    );
  } else if (props.list == 'Mars CLI') {
    return (
      <div className={styles.box}>

        <div className={styles.titleBanner}>
          <p className={styles.title}>{props.title}</p>
        </div>
  

        <div className={styles.boxContainer}> 
          <div className={styles.fig}>
            <img src={props.image} />
          </div>
    
          <div className={styles.text}>
            <p className={styles.subtext}>{props.description}</p>
            <ul className={styles.list}>

              <li>
                <a className={styles.links} href="../../../../docs/develop/mars-cli/public-endpoints">Public Endpoints</a>
              </li>

              <li>
                <a className={styles.links} href="../../../../docs/develop/mars-cli/marsd">Marsd</a>
              </li>

              <li>
                <a className={styles.links} href="../../../../docs/develop/mars-cli/generating-signing-and-broadcasting-transactions">Broadcasting Transactions</a>
              </li>

            </ul>
          </div>
        </div>

      </div>
    );
  } else if (props.list == 'Contracts') {
    return (
      <div className={styles.box}>
  
        <div className={styles.titleBanner}>
          <p className={styles.title}>{props.title}</p>
        </div>

        <div className={styles.boxContainer}> 
          <div className={styles.fig}>
            <img src={props.image} />
          </div>
    
          <div className={styles.text}>
            <p className={styles.subtext}>{props.description}</p>
            <ul className={styles.list}>

              <li>
                <a className={styles.links} href="../../../../docs/develop/category/mars-hub">Mars Hub</a>
              </li>

              <li>
                <a className={styles.links} href="../../../../docs/develop/category/outposts">Outposts</a>
              </li>

            </ul>
          </div>
        </div>
  
      </div>
    );
  } else if (props.list == 'Modules') {
    return (
      <div className={styles.box}>

        <div className={styles.titleBanner}>
          <p className={styles.title}>{props.title}</p>
        </div>
  
        <div className={styles.boxContainer}> 
          <div className={styles.fig}>
            <img src={props.image} />
          </div>
    
          <div className={styles.text}>
            <p className={styles.subtext}>{props.description}</p>
            <ul className={styles.list}>

              {/* <li>
                <a className={styles.links} href="../../../../docs/infrastructure/ibc-relayers/channels-for-mars">Module Accounts</a>
              </li> */}

              <li>
                <a className={styles.links} href="../../../../docs/develop/category/custom-modules">Custom Modules</a>
              </li>

              <li>
                <a className={styles.links} href="../../../../docs/develop/category/cosmos-sdk-modules">Cosmos SDK Modules</a>
              </li>

            </ul>
          </div>
        </div>
  
      </div>
    );
  } else if (props.list == 'Backend') {
    return (
      <div className={styles.box}>
  
        <div className={styles.titleBanner}>
          <p className={styles.title}>{props.title}</p>
        </div>

  
        <div className={styles.boxContainer}> 
          <div className={styles.fig}>
            <img src={props.image} />
          </div>
    
          <div className={styles.text}>
            <p className={styles.subtext}>{props.description}</p>
            <ul className={styles.list}>

              <li>
                <a className={styles.links} href="../../../../docs/develop/category/liquidation-bots">Liquidation Bots</a>
              </li>

            </ul>
          </div>
        </div>

      </div>
    );
  } else if (props.list == 'Mars Improvement Proposals') {
    return (
      <div className={styles.box}>

        <div className={styles.titleBanner}>
          <p className={styles.title}>{props.title}</p>
        </div>
  
        <div className={styles.boxContainer}> 
          <div className={styles.fig}>
            <img src={props.image} />
          </div>
    
          <div className={styles.text}>
            <p className={styles.subtext}>{props.description}</p>
            <ul className={styles.list}>

              <li>
                <a className={styles.links} href="../../../../docs/govern/mars-improvement-proposals#templates">Templates</a>
              </li>

              <li>
                <a className={styles.links} href="../../../../docs/govern/mars-improvement-proposals#proposing">Proposing</a>
              </li>

            </ul>
          </div>
        </div>
  
      </div>
    );
  } else if (props.list == 'Mars Risk Framework') {
    return (
      <div className={styles.box}>

        <div className={styles.titleBanner}>
          <p className={styles.title}>{props.title}</p>
        </div>
  
        <div className={styles.boxContainer}> 
          <div className={styles.fig}>
            <img src={props.image} />
          </div>
    
          <div className={styles.text}>
            <p className={styles.subtext}>{props.description}</p>
            <ul className={styles.list}>

              <li>
                <a className={styles.links} href="../../../../docs/govern/mars-risk-framework#framework-summary">Framework Summary</a>
              </li>

              <li>
                <a className={styles.links} href="../../../../docs/govern/mars-risk-framework#supporting-new-assets-and-lp-tokens">Supporting New Assets and LP Tokens</a>
              </li>

            </ul>
          </div>
        </div>
  
      </div>
    );
  } else if (props.list == 'Mars Hub') {
    return (
      <div className={styles.box}>

        <div className={styles.titleBanner}>
          <p className={styles.title}>{props.title}</p>
        </div>
  
        <div className={styles.boxContainer}> 
          <div className={styles.fig}>
            <img src={props.image} />
          </div>
    
          <div className={styles.text}>
            <p className={styles.subtext}>{props.description}</p>
            <ul className={styles.list}>

              <li>
                <a className={styles.links} href="../../../../docs/learn/mars-hub/martian-council">Martian Council</a>
              </li>

              <li>
                <a className={styles.links} href="../../../../docs/learn/mars-hub/safety-fund">Safety Fund</a>
              </li>

              <li>
                <a className={styles.links} href="../../../../docs/learn/category/tokenomics">Tokenomics</a>
              </li>

            </ul>
          </div>
        </div>
  
      </div>
    );
  } else if (props.list == 'Red Bank') {
    return (
      <div className={styles.box}>

        <div className={styles.titleBanner}>
          <p className={styles.title}>{props.title}</p>
        </div>
  
        <div className={styles.boxContainer}> 
          <div className={styles.fig}>
            <img src={props.image} />
          </div>
    
          <div className={styles.text}>
            <p className={styles.subtext}>{props.description}</p>
            <ul className={styles.list}>

              <li>
                <a className={styles.links} href="../../../../docs/learn/red-bank/collateralised-borrowing">Collateralised Borrowing</a>
              </li>

              <li>
                <a className={styles.links} href="../../../../docs/learn/red-bank/contract-to-contract-lending">Contract-to-Contract Lending</a>
              </li>

              {/* <li>
                <a className={styles.links} href="../../../../docs/govern/mars-risk-framework#framework-summary">Two Slope Interest Rate Model</a>
              </li> */}

            </ul>
          </div>
        </div>
  
      </div>
    );
  } else if (props.list == 'Rover') {
    return (
      <div className={styles.box}>

        <div className={styles.titleBanner}>
          <p className={styles.title}>{props.title}</p>
        </div>
  
        <div className={styles.boxContainer}> 
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
        </div>
  
      </div>
    );
  } else if (props.list == 'Vaults') {
    return (
      <div className={styles.box}>

        <div className={styles.titleBanner}>
          <p className={styles.title}>{props.title}</p>
        </div>
  
        <div className={styles.boxContainer}> 
        <div className={styles.fig}>
          <img src={props.image} />
        </div>
  
        <div className={styles.text}>
          <p className={styles.subtext}>{props.description}</p>
          <ul className={styles.list}>

            <li>
              <a className={styles.links} href="../../../../docs/learn/vaults/fields-of-mars">Fields of Mars</a>
            </li>

          </ul>
        </div>
        </div>
  
      </div>
    );
  } 

  else if (props.list == 'Workstation') {
    return (
      <div className={styles.box}>

        <div className={styles.titleBanner}>
          <p className={styles.title}>{props.title}</p>
        </div>
  
        <div className={styles.boxContainer}> 
        <div className={styles.fig}>
          <img src={props.image} />
        </div>
  
        <div className={styles.text}>
          <p className={styles.subtext}>{props.description}</p>
          <ul className={styles.list}>

            <li>
              <a className={styles.links} href="../../../../docs/learn/category/basics">Basics</a>
            </li>

            <li>
              <a className={styles.links} href="../../../../docs/learn/category/governance">Governance</a>
            </li>


            <li>
              <a className={styles.links} href="../../../../docs/learn/category/red-bank-1">Red Bank</a>
            </li>

          </ul>
        </div>
        </div>
  
      </div>
    );
  } 




}


























