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
  validate: {
    title: 'Validate'
  }, 
  security: {
    title: 'Security'
  }, 
  legal: {
    title: 'Legal'
  }, 
  marsHub: {
    title: 'Mars Hub'
  }, 
  marsToken: {
    title: 'Mars Token'
  }, 
  redBank: {
    title: 'Red Bank'
  }, 
  rover: {
    title: 'Rover'
  }, 
  trading: {
    title: 'Trading'
  }, 
  vaults: {
    title: 'Vaults'
  }, 
  workstation: {
    title: 'Workstation'
  },
  basics: {
    title: 'Basics'
  }, 
  installingAWallet: {
    title: 'Installing a Wallet'
  }, 
  governance: {
    title: 'Governance'
  }, 
  redBank2: {
    title: 'Red Bank 2'
  }, 
  rover2: {
    title: 'Rover 2'
  }, 
  trading2: {
    title: 'Trading 2'
  }, 
  vaults2: {
    title: 'Vaults 2'
  }, 



  marsCLI: {
    title: 'Mars CLI'
  }, 
  contracts: {
    title: 'Contracts'
  }, 
  marsHub2: {
    title: 'Mars Hub 2'
  }, 
  outposts: {
    title: 'Outposts'
  }, 
  oracle: {
    title: 'Oracle'
  }, 
  rewardsCollector: {
    title: 'Rewards Collector'
  }, 
  modules: {
    title: 'Modules'
  },
  customModules: {
    title: 'Custom Modules'
  }, 
  cosmosSDKModules: {
    title: 'Cosmos SDK Modules'
  }, 
  CosmWasmModule: {
    title: 'CosmWasm Module'
  }, 
  IBCModules: {
    title: 'IBC Modules'
  }, 
  backend: {
    title: 'Backend'
  }, 
  liquidationBots: {
    title: 'Liquidation Bots'
  }, 


  nodeOperators: {
    title: 'Node Operators'
  }, 
  validators: {
    title: 'Validators'
  }, 
  keyManagement: {
    title: 'Key Management'
  }, 
  IBCRelayers: {
    title: 'IBC Relayers'
  },

  onChainSubmission: {
    title: 'On-chain Submission'
  }, 

  missionControl: {
    title: "Mission Control"
  }, 

  liquidationHelpers: {
    title: "Liquidation Helpers"
  }, 

  frontend: {
    title: "Frontend"
  }, 

  farmVaultsContracts: {
    title: "Farm Vaults Contracts"
  }, 

  swapper: {
    title: "Swapper"
  }, 

  zapper: {
    title: "Zapper"
  }, 

  marsV2: {
    title: "Mars v2"
  },

  tutorials: {
    title: "Tutorials"
  },

  basicsV2: {
    title: "Basics"
  }, 

  creditAccounts: {
    title: "Credit Accounts"
  },

  tradingV2: {
    title: "Trading v2"
  },
  
  lendingV2: {
    title: "Lending v2"
  },

  farmingV2: {
    title: "Farming v2"
  },
  
  borrowingV2: {
    title: "Borrowing v2"
  }

}

export default function Cards(props) {

  if (props.banner == true) {
    return (
      <div>
        {/* <div className={styles.banner}>
          <img src={props.image}/>
        </div>
        <h2 className={styles.title}>{props.title}</h2>
        <p className={styles.text}>{props.text}</p> */}
        <ContentBox title={contentBoxProps.learn.title} />
      </div>
    );
  } else if (props.title == 'Learn') {
    return (
      <div>
        <ContentBox title={contentBoxProps.learn.title} />
      </div>
    );
  } else if (props.title == 'Govern') {
    return (
      <div>
        <ContentBox title={contentBoxProps.govern.title} />
      </div>
    );
  } else if (props.title == 'Develop') {
    return (
      <div>
        <ContentBox title={contentBoxProps.develop.title} />
      </div>
    );
  } else if (props.title == 'Validate') {
    return (
      <div>
        <ContentBox title={contentBoxProps.validate.title} />
      </div>
    );
  } else if (props.title == 'Security') {
    return (
      <div>
        <ContentBox title={contentBoxProps.security.title} />
      </div>
    );
  } else if (props.title == 'Legal') {
    return (
      <div>
        <ContentBox title={contentBoxProps.legal.title} />
      </div>
    );
  } else if (props.title == 'Mars Hub') {
    return (
      <div>
        <ContentBox title={contentBoxProps.marsHub.title} />
      </div>
    );
  } else if (props.title == 'Mars Token') {
    return (
      <div>
        <ContentBox title={contentBoxProps.marsToken.title} />
      </div>
    );
  } else if (props.title == 'Red Bank') {
    return (
      <div>
        <ContentBox title={contentBoxProps.redBank.title} />
      </div>
    );
  } else if (props.title == 'Rover') {
    return (
      <div>
        <ContentBox title={contentBoxProps.rover.title} />
      </div>
    );
  } else if (props.title == 'Trading') {
    return (
      <div>
        <ContentBox title={contentBoxProps.trading.title} />
      </div>
    );
  } else if (props.title == 'Vaults') {
    return (
      <div>
        <ContentBox title={contentBoxProps.vaults.title} />
      </div>
    );
  } else if (props.title == 'Workstation') {
    return (
      <div>
        <ContentBox title={contentBoxProps.workstation.title} />
      </div>
    );
  } else if (props.title == 'Basics') {
    return (
      <div>
        <ContentBox title={contentBoxProps.basics.title} />
      </div>
    );
  } else if (props.title == 'Installing a Wallet') {
    return (
      <div>
        <ContentBox title={contentBoxProps.installingAWallet.title} />
      </div>
    );
  } else if (props.title == 'Governance') {
    return (
      <div>
        <ContentBox title={contentBoxProps.governance.title} />
      </div>
    );
  } else if (props.title == 'Red Bank 2') {
    return (
      <div>
        <ContentBox title={contentBoxProps.redBank2.title} />
      </div>
    );
  } else if (props.title == 'Rover 2') {
    return (
      <div>
        <ContentBox title={contentBoxProps.rover2.title} />
      </div>
    );
  } else if (props.title == 'Trading 2') {
    return (
      <div>
        <ContentBox title={contentBoxProps.trading2.title} />
      </div>
    );
  } else if (props.title == 'Vaults 2') {
    return (
      <div>
        <ContentBox title={contentBoxProps.vaults2.title} />
      </div>
    );
  }
  


  else if (props.title == 'Mars CLI') {
    return (
      <div>
        <ContentBox title={contentBoxProps.marsCLI.title} />
      </div>
    );
  } else if (props.title == 'Contracts') {
    return (
      <div>
        <ContentBox title={contentBoxProps.contracts.title} />
      </div>
    );
  } else if (props.title == 'Mars Hub 2') {
    return (
      <div>
        <ContentBox title={contentBoxProps.marsHub2.title} />
      </div>
    );
  } else if (props.title == 'Outposts') {
    return (
      <div>
        <ContentBox title={contentBoxProps.outposts.title} />
      </div>
    );
  } else if (props.title == 'Oracle') {
    return (
      <div>
        <ContentBox title={contentBoxProps.oracle.title} />
      </div>
    );
  } else if (props.title == 'Rewards Collector') {
    return (
      <div>
        <ContentBox title={contentBoxProps.rewardsCollector.title} />
      </div>
    );
  }   else if (props.title == 'Modules') {
    return (
      <div>
        <ContentBox title={contentBoxProps.modules.title} />
      </div>
    );
  } else if (props.title == 'Custom Modules') {
    return (
      <div>
        <ContentBox title={contentBoxProps.customModules.title} />
      </div>
    );
  } else if (props.title == 'Cosmos SDK Modules') {
    return (
      <div>
        <ContentBox title={contentBoxProps.cosmosSDKModules.title} />
      </div>
    );
  } else if (props.title == 'CosmWasm Module') {
    return (
      <div>
        <ContentBox title={contentBoxProps.CosmWasmModule.title} />
      </div>
    );
  } else if (props.title == 'IBC Modules') {
    return (
      <div>
        <ContentBox title={contentBoxProps.IBCModules.title} />
      </div>
    );
  } else if (props.title == 'Backend') {
    return (
      <div>
        <ContentBox title={contentBoxProps.backend.title} />
      </div>
    );
  } else if (props.title == 'Liquidation Bots') {
    return (
      <div>
        <ContentBox title={contentBoxProps.liquidationBots.title} />
      </div>
    );
  }


  else if (props.title == 'Node Operators') {
    return (
      <div>
        <ContentBox title={contentBoxProps.nodeOperators.title} />
      </div>
    );
  } else if (props.title == 'Validators') {
    return (
      <div>
        <ContentBox title={contentBoxProps.validators.title} />
      </div>
    );
  } else if (props.title == 'Key Management') {
    return (
      <div>
        <ContentBox title={contentBoxProps.keyManagement.title} />
      </div>
    );
  } else if (props.title == 'IBC Relayers') {
    return (
      <div>
        <ContentBox title={contentBoxProps.IBCRelayers.title} />
      </div>
    );
  } else if (props.title == 'On-chain Submission') {
    return (
      <div>
        <ContentBox title={contentBoxProps.onChainSubmission.title} />
      </div>
    );
  } else if (props.title == 'Mission Control') {
    return (
      <div>
        <ContentBox title={contentBoxProps.missionControl.title} />
      </div>
    );
  } else if (props.title == 'Liquidation Helpers') {
    return (
      <div>
        <ContentBox title={contentBoxProps.liquidationHelpers.title} />
      </div>
    );
  } else if (props.title == 'Frontend') {
    return (
      <div>
        <ContentBox title={contentBoxProps.frontend.title} />
      </div>
    );
  } else if (props.title == 'Farm Vaults Contracts') {
    return (
      <div>
        <ContentBox title={contentBoxProps.farmVaultsContracts.title} />
      </div>
    );
  } else if (props.title == 'Swapper') {
    return (
      <div>
        <ContentBox title={contentBoxProps.swapper.title} />
      </div>
    );
  } else if (props.title == 'Zapper') {
    return (
      <div>
        <ContentBox title={contentBoxProps.zapper.title} />
      </div>
    );
  } else if (props.title == 'Mars v2') {
    return (
      <div>
        <ContentBox title={contentBoxProps.marsV2.title} />
      </div>
    );
  } else if (props.title == 'Tutorials') {
    return (
      <div>
        <ContentBox title={contentBoxProps.tutorials.title} />
      </div>
    );
  } else if (props.title == 'Basics') {
    return (
      <div>
        <ContentBox title={contentBoxProps.basicsV2.title} />
      </div>
    );
  } else if (props.title == 'Credit Accounts') {
    return (
      <div>
        <ContentBox title={contentBoxProps.creditAccounts.title} />
      </div>
    );
  } else if (props.title == 'Trading v2') {
    return (
      <div>
        <ContentBox title={contentBoxProps.tradingV2.title} />
      </div>
    );
  } else if (props.title == 'Lending v2') {
    return (
      <div>
        <ContentBox title={contentBoxProps.lendingV2.title} />
      </div>
    );
  } else if (props.title == 'Farming v2') {
    return (
      <div>
        <ContentBox title={contentBoxProps.farmingV2.title} />
      </div>
    );
  } else if (props.title == 'Borrowing v2') {
    return (
      <div>
        <ContentBox title={contentBoxProps.borrowingV2.title} />
      </div>
    );
  }






  




  // else if (props.footer == true) {
  //   return (
  //     <div className={styles.footerSpacing}>
  //       <ContentBox title={contentBoxProps.infrastructure.title} />

  //       {/* <div className={styles.footer}>
  //         <img src={LaunchUrl}/>
  //       </div> */}
  //     </div>
  //   );
  // }
  
}