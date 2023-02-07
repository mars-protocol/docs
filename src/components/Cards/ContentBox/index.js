import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Box from './Box';

import AstronautUrl from '../../../../static/img/icons/astronaut.png';
import BalanceUrl from '../../../../static/img/icons/balance.png';
import BuildingUrl from '../../../../static/img/icons/building.png';
import DiamondUrl from '../../../../static/img/icons/diamond.png';
import ErrorUrl from '../../../../static/img/icons/error.png';
import Globe1Url from '../../../../static/img/icons/globe-1.png';
import Globe2Url from '../../../../static/img/icons/globe-2.png';
import HubUrl from '../../../../static/img/icons/hub.png';
import MarsUrl from '../../../../static/img/icons/mars.png';
import Mushroom1Url from '../../../../static/img/icons/mushroom-1.png';
import Mushroom2Url from '../../../../static/img/icons/mushroom-2.png';
import PioneerUrl from '../../../../static/img/icons/pioneer.png';
import Rocket1Url from '../../../../static/img/icons/rocket-1.png';
import Rocket2Url from '../../../../static/img/icons/rocket-2.png';
import Rover1Url from '../../../../static/img/icons/rover-1.png';
import Rover2Url from '../../../../static/img/icons/rover-2.png';
import SatelliteUrl from '../../../../static/img/icons/satellite.png';
import SpaceshipUrl from '../../../../static/img/icons/spaceship.png';

// import LaunchUrl from '../../../static/img/launch.png';

const boxProps = {
  learn: {
    marsHub: {
      title: "Mars Hub", 
      description: "Deep dive into the Cosmos-SDK appchain that administers activity on Mars’ intergalactic outposts.", 
      image: HubUrl
    }, 
    redBank: {
      title: "Red Bank", 
      description: "Enter the decentralized & fully automated, on-chain credit facility that can be deployed throughout the Cosmos.", 
      image: Globe2Url
    }, 
    rover: {
      title: "Rover", 
      description: "Abandon centralized exchanges and ride Mars’  new generalised credit primitive called Rover.", 
      image: Rover1Url
    }, 
    vaults: {
      title: "Vaults", 
      description: "Learn how Mars implements automated strategies in a firewalled container.", 
      image: DiamondUrl
    }, 
    workstation: {
      title: "Workstation", 
      description: "Beginner guides to Mars Protocol with astronaut-approved step-by-step screenshots.", 
      image: AstronautUrl
    }
  },
  govern: {
    martianCouncil: {
      title: "Martian Council", 
      description: "Mars Protocol’s governing body.", 
      image: BalanceUrl
    },
    marsImprovementProposals: {
      title: "Mars Improvement Proposals", 
      description: "The framework that empowers Council participants to submit and approve on-chain governance proposals.", 
      image: Rocket2Url
    }, 
    marsRiskFramework: {
      title: "Mars Risk Framework", 
      description: "A framework for determining the risk parameters associated with assets and credit lines on Mars.", 
      image: ErrorUrl
    }, 
    onChainSubmission: {
      title: "On-chain Submission", 
      description: "Submit a proposal on-chain and take it to a vote.", 
      image: Rocket1Url
    }
  }, 
  develop: {
    marsCLI: {
      title: "Mars CLI", 
      description: "Interact with Mars' functions via the terminal.", 
      image: BuildingUrl
    }, 
    contracts: {
      title: "Contracts", 
      description: "Overview of all Martian smart contracts.", 
      image: Globe1Url
    }, 
    modules: {
      title: "Modules", 
      description: "Enter the realm of CosmosSDK, CosmWasm, and IBC modules.", 
      image: MarsUrl
    }, 
    backend: {
      title: "Backend", 
      description: "Insights and details on the red backend", 
      image: SatelliteUrl
    }
  }, 
  validate: {
    nodeOperators: {
      title: "Node Operators", 
      description: "Set up a Martian node.", 
      image: Rocket1Url
    }, 
    validators: {
      title: "Validators", 
      description: "Spin up a Martian validator.", 
      image: PioneerUrl
    }, 
    relayers: {
      title: "IBC Relayers", 
      description: "Get started with IBC Relayers.", 
      image: SpaceshipUrl
    }
  }, 
  security: {
    audits: {
      title: "Audits", 
      description: "Review the audit reports on Mars Hub and outpost infrastructure.", 
      image: ErrorUrl
    },
    bugBountyProgram: {
      title: "Bug Bounty", 
      description: "Join the Rug Defense Force and search for bugs in Mars' codebase.", 
      image: Mushroom1Url
    }
  }, 
  legal: {
    disclaimersAndDisclosures: {
      title: "Disclaimers & Disclosures", 
      description: "Before interacting with Mars, please carefully review these disclaimers.", 
      image: BuildingUrl
    }, 
    termsOfService: {
      title: "Terms of Service", 
      description: "Review the Terms of Service associated with Marsprotocol.io.", 
      image: BalanceUrl
    }, 
    privacyPolicy: {
      title: "Privacy Policy", 
      description: "Review the Privacy Policy associated with Marsprotocol.io.",
      image: DiamondUrl
    }, 
    cookiePolicy: {
      title: "Cookie Policy", 
      description: "Review the Cookie Policy associated with Marsprotocol.io.", 
      image: MarsUrl
    }
  }, 
  marsHub: {
    marsHubArchitecture: {
      title: "Mars Hub Architecture", 
      description: "Learn more about the hub-outpost topology that underpins  Mars Protocol.", 
      image: HubUrl
    }, 
    martianCouncil: {
      title: "Martian Council", 
      description: "Enter the chamber of Mars Protocol's governing body, the Martian Council.", 
      image: BalanceUrl
    }, 
    safetyFund: {
      title: "Safety Fund", 
      description: "Learn how the Mars Safety Fund helps secure the protocol.", 
      image: ErrorUrl
    }, 
    marsToken: {
      title: "Mars Token", 
      description: "Learn more about the role of the MARS token in the Mars ecosystem.", 
      image: MarsUrl
    }
  }, 
  marsToken: {
    marsTokenAndDistribution: {
      title: "Distribution", 
      description: "Learn how MARS accrues value and is distributed between its critical stakeholders.", 
      image: MarsUrl
    }, 
    staking: {
      title: "Staking", 
      description: "Discover how to stake MARS, secure Mars Hub, govern outposts, and earn protocol fees.", 
      image: PioneerUrl
    }, 
    feesAndValueFlows: {
      title: "Fees & Value Flows", 
      description: "Dive into the distribution of fees across the Mars Protocol.", 
      image: BuildingUrl
    }
  }, 
  redBank: {
    redBankArchitecture: {
      title: "Red Bank Architecture", 
      description: "Discover the components that make up the Red Bank.", 
      image: Globe2Url
    }, 
    collateralisedBorrowing: {
      title: "Collateralised Borrowing", 
      description: "Learn how to borrow assets listed on the Red Bank using your deposits as collateral.", 
      image: Globe1Url
    }, 
    c2cLending: {
      title: "Contract-to-Contract Lending", 
      description: "Dive into the C2C loans that empower applications to utilise  Mars’ credit.", 
      image: Rover1Url
    }, 
    twoSlopeInterestRateModel: {
      title: "Interest Rates", 
      description: "Learn how the Red Bank's two-slope interest rate model works", 
      image: BuildingUrl
    }, 
    redBankLiquidations: {
      title: "Red Bank Liquidations", 
      description: "Understand how the Red Bank handles liquidations", 
      image: SpaceshipUrl
    }, 
    differencesFromTradFiCreditAgreements: {
      title: "Differences from TradFi", 
      description: "Understand how the Red Bank's functionality differs from traditional credit arrangements.", 
      image: PioneerUrl
    }
  }, 
  rover: {
    roverArchitecture: {
      title: "Rover Architecture", 
      description: "Discover the components that make up Mars' new primitive: Rover.", 
      image: Rover1Url
    }, 
    nftCreditAccounts: {
      title: "NFT Credit Accounts", 
      description: "Learn about Mars' new NFT-based credit accounts.", 
      image: Rover2Url
    }, 
    trading: {
      title: "Trading", 
      description: "Use Rover credit accounts to trade on outposts with leverage.", 
      image: PioneerUrl
    }, 
    roverLiquidations: {
      title: "Rover Liquidations", 
      description: "Explore how Rover credit accounts handle liquidations.", 
      image: SpaceshipUrl
    }
  }, 
  trading: {
    spot: {
      title: "Spot", 
      description: "Simple (non-leveraged) spot trades within a credit account.", 
      image: Rocket1Url
    }, 
    margin: {
      title: "Margin", 
      description: "Leveraged longs and shorts within a credit account.", 
      image: Rover2Url
    }
  }, 
  vaults: {
    vaultsArchitecture: {
      title: "Vaults Architecture", 
      description: "Discover the components that make up Mars' vaults.", 
      image: DiamondUrl
    }, 
    fieldsOfMars: {
      title: "Fields of Mars", 
      description: "Venture into the Fields of Mars and leveraged yield-farming.", 
      image: Globe2Url
    }, 
    vaultsLiquidations: {
      title: "Vaults Liquidations", 
      description: "Explore how Mars vaults handle liquidations.", 
      image: SpaceshipUrl
    }
  }, 
  workstation: {
    basics: {
      title: "Basics", 
      description: "Explore Cosmos wallets and learn how to connect to the Mars web-app.", 
      image: AstronautUrl
    }, 
    airdrop: {
      title: "Airdrop", 
      description: "Learn how to claim the MARS airdrop.", 
      image: PioneerUrl
    }, 
    governance: {
      title: "Governance", 
      description: "Participate in Mars Protocol’s decision making and be  part of  the Martian Council.", 
      image: BalanceUrl
    }, 
    redBank: {
      title: "Red Bank", 
      description: "Enter the decentralized & fully automated, on-chain credit facility that can be deployed throughout the Cosmos.", 
      image: Globe2Url
    }, 
    rover: {
      title: "Rover", 
      description: "Abandon centralized exchanges and ride Mars’ new generalised credit primitive called Rover.", 
      image: Rover1Url
    }, 
    vaults: {
      title: "Vaults", 
      description: "Learn how Mars implements automated strategies in a firewalled container.", 
      image: DiamondUrl
    }
  }, 
  basics: {
    installingAWallet: {
      title: "Installing a Wallet", 
      description: "From zero to hero: Learn the basics of creating a Cosmos wallet.", 
      image: PioneerUrl
    }, 
    fundingAWallet: {
      title: "Funding a Wallet", 
      description: "Get started by funding your new wallet.", 
      image: MarsUrl
    }, 
    connectingAWallet: {
      title: "Connecting a Wallet", 
      description: "Connect your new wallet to the Mars web app.", 
      image: Rocket1Url
    }
  }, 
  installingAWallet: {
    keplr: {
      title: "Keplr", 
      description: "Create a Keplr wallet.", 
      image: AstronautUrl
    }, 
    station: {
      title: "Station", 
      description: "Create a Station wallet.", 
      image: SatelliteUrl
    }, 
    xdefi: {
      title: "XDEFI", 
      description: "Create an XDEFI wallet.", 
      image: Rocket2Url
    }, 
    leap: {
      title: "Leap", 
      description: "Create a Leap wallet.", 
      image: BuildingUrl
    }
  }, 
  governance: {
    staking: {
      title: "Staking", 
      description: "Discover how to join the Martian Council and stake MARS.", 
      image: MarsUrl
    }, 
    voting: {
      title: "Voting", 
      description: "Take part in the Martian Council’s governance process.", 
      image: PioneerUrl
    }, 
    submittingAProposal: {
      title: "Submitting a Proposal", 
      description: "Learn to submit on-chain governance proposals.", 
      image: BalanceUrl
    }
  }, 
  redBank2: {
    lending: {
      title: "Lending", 
      description: "Learn how to lend assets in the Red Bank. ", 
      image: MarsUrl
    }, 
    borrowing: {
      title: "Borrowing", 
      description: "Learn how to borrow assets from the Red Bank.", 
      image: PioneerUrl
    }, 
    managingPositions: {
      title: "Managing Positions", 
      description: "Learn how to modify and maintain your Red Bank assets.", 
      image: BalanceUrl
    }
  }, 
  rover2: {
    creatingACreditAccount: {
      title: "Creating a Credit Account", 
      description: "Learn how to create a Rover credit account.", 
      image: Rover1Url
    }, 
    managingCreditAccounts: {
      title: "Managing Credit Accounts", 
      description: "Discover how to repay loans, switch between credit accounts and more.", 
      image: Rover2Url
    }, 
    trading: {
      title: "Trading", 
      description: "Use Rover credit accounts to trade on outposts with leverage.", 
      image: PioneerUrl
    }
  }, 
  trading2: {
    spot: {
      title: "Spot", 
      description: "Simple (non-leveraged) spot trades within a credit account.", 
      image: Rocket1Url
    }, 
    margin: {
      title: "Margin", 
      description: "Leveraged longs and shorts within a credit account.", 
      image: Rover2Url
    }
  }, 
  vaults2: {
    fieldsOfMars: {
      title: "Fields of Mars", 
      description: "Venture into the Fields of Mars and leveraged yield-farming.", 
      image: Globe2Url
    }
  }, 



  marsCLI: {
    publicEndpoints: {
      title: "Public Endpoints", 
      description: "Utilise Mars Protocol’s' public endpoints.", 
      image: SatelliteUrl
    }, 
    marsd: {
      title: "Marsd", 
      description: "A command-line interface tool for interacting with Mars Hub.", 
      image: Globe1Url
    }, 
    generatingSigningAndBroadcastingTransactions: {
      title: "Transact", 
      description: "Learn how to Transact using the Mars CLI.", 
      image: PioneerUrl
    }
  }, 
  contracts: {
    marsHub2: {
      title: "Mars Hub", 
      description: "Deep dive into the Cosmos-SDK based appchain that underpins activity on Mars Protocol.", 
      image: HubUrl
    }, 
    outposts: {
      title: "Red Bank", 
      description: "Learn more about the bundle of smart contracts that comprise an outpost.", 
      image: Globe2Url
    }
  }, 
  marsHub2: {
    airdrop: {
      title: "airdrop", 
      description: "Distributes the MARS token airdrop to holders of Mars Protocol on Terra.", 
      image: SpaceshipUrl
    }, 
    delegator: {
      title: "delegator", 
      description: "Enhances the security of the Mars Hub blockchain at launch.", 
      image: PioneerUrl
    }, 
    vesting: {
      title: "vesting", 
      description: "Distributes the MARS token to Mars contributors.", 
      image: BuildingUrl
    }
  }, 
  outposts: {
    addressProvider: {
      title: "address-provider", 
      description: "Holds addresses of the main contracts of the core protocol.", 
      image: BuildingUrl
    }, 
    incentives: {
      title: "incentives", 
      description: "Manages MARS incentives for depositors.", 
      image: MarsUrl
    }, 
    oracle: {
      title: "oracle", 
      description: "Provides prices in uusd for assets used in the protocol.", 
      image: Globe1Url
    }, 
    redBank: {
      title: "red-bank", 
      description: "Exposes all interactions that are done between the user and the money market.", 
      image: Globe2Url
    }, 
    rewardsCollector: {
      title: "rewards-collector", 
      description: "Receives protocol revenue in various coins from the Red Bank.", 
      image: SatelliteUrl
    }
  }, 
  oracle: {
    base: {
      title: "base", 
      description: "Chain-agnostic logics for the Oracle contract.", 
      image: MarsUrl
    }, 
    osmosis: {
      title: "osmosis", 
      description: "Provides prices denominated in uosmo for assets used in the protocol.", 
      image: Globe1Url
    }
  }, 
  rewardsCollector: {
    base: {
      title: "base", 
      description: "Chain-agnostic logics for the Rewards Collector contract.", 
      image: MarsUrl
    }, 
    osmosis: {
      title: "osmosis", 
      description: "Inherits logics from the base contract, with the Osmosis plugins.", 
      image: Globe1Url
    }
  }, 
  modules: {
    moduleAccounts: {
      title: "Module Accounts", 
      description: "An overview of the modules that power Mars Hub.", 
      image: BuildingUrl
    }, 
    customModules: {
      title: "Custom Modules", 
      description: "Custom modules built for Mars Hub.", 
      image: MarsUrl
    }, 
    cosmosSDKModules: {
      title: "Cosmos SDK Modules", 
      description: "Core Cosmos SDK modules.", 
      image: Globe1Url
    }, 
    cosmWasmModule: {
      title: "CosmWasm Module", 
      description: "CosmWasm module which enables CosmWasm smart contracts.", 
      image: Rocket1Url
    }, 
    IBCModules: {
      title: "IBC Modules", 
      description: "IBC modules which enable IBC transactions between Cosmos blockchains.", 
      image: SatelliteUrl
    }
  }, 
  customModules: {
    gov: {
      title: "gov", 
      description: "A wrapper module around the vanilla governance module within the Cosmos SDK.", 
      image: BalanceUrl
    }, 
    incentives: {
      title: "incentives", 
      description: "Facilitates staking rewards on Mars Hub.", 
      image: MarsUrl
    }, 
    safety: {
      title: "safety", 
      description: "Receives a fraction of an outpost’s revenues denominated in stablecoins.", 
      image: ErrorUrl
    }
  }, 
  cosmosSDKModules: {
    auth: {
      title: "auth", 
      description: "Authentication of accounts and transactions.", 
      image: HubUrl
    }, 
    authz: {
      title: "authz", 
      description: "Authorization for accounts to perform actions on behalf of other accounts.", 
      image: AstronautUrl
    }, 
    bank: {
      title: "bank", 
      description: "Token transfer functionalities.", 
      image: DiamondUrl
    }, 
    capability: {
      title: "capability", 
      description: "Object capability implementation.", 
      image: Mushroom2Url
    }, 
    crisis: {
      title: "crisis", 
      description: "Halting the blockchain.", 
      image: ErrorUrl
    }, 
    distribution: {
      title: "distribution", 
      description: "Fee and staking token provision distribution.", 
      image: SatelliteUrl
    }, 
    evidence: {
      title: "evidence", 
      description: "Evidence handling for misbehavior.", 
      image: BalanceUrl
    }, 
    feegrant: {
      title: "feegrant", 
      description: "Fee allowances.", 
      image: Rocket2Url
    }, 
    group: {
      title: "group", 
      description: "On-chain multisig accounts.", 
      image: Globe2Url
    }, 
    mint: {
      title: "mint", 
      description: "Creation of new units of MARS.", 
      image: MarsUrl
    }, 
    nft: {
      title: "nft", 
      description: "NFT support.", 
      image: Rover1Url
    }, 
    params: {
      title: "params", 
      description: "Globally available parameter store.", 
      image: Globe1Url
    }, 
    slashing: {
      title: "slashing", 
      description: "Validator punishment mechanisms.", 
      image: Rocket1Url
    }, 
    staking: {
      title: "staking", 
      description: "Proof-of-Stake (PoS) system.", 
      image: PioneerUrl
    }, 
    upgrade: {
      title: "upgrade", 
      description: "Software upgrades.", 
      image: SpaceshipUrl
    }, 
    vesting: {
      title: "vesting", 
      description: "Vesting account implementation.", 
      image: BuildingUrl
    }
  }, 
  cosmWasmModule: {
    wasm: {
      title: "wasm", 
      description: "CosmWasm smart contracts.", 
      image: HubUrl
    }
  }, 
  IBCModules: {
    interchainAccounts: {
      title: "interchain-accounts", 
      description: "Cross-chain account management.", 
      image: SatelliteUrl
    }, 
    transfer: {
      title: "transfer", 
      description: "Cross-chain fungible token transfers.", 
      image: SpaceshipUrl
    }
  }, 
  backend: {
    liquidationBots: {
      title: "Liquidation Bots", 
      description: "Explore the architecture of Mars' public cross-chain liquidation bots.", 
      image: BuildingUrl
    }
  }, 
  liquidationBots: {
    overview: {
      
    }
  }, 


  nodeOperators: {
    settingUpANode: {
      title: "Setting Up a Node", 
      description: "Discover how to join the network and set up a Martian node.", 
      image: HubUrl
    }, 
    interactingWithANode: {
      title: "Interacting With a Node", 
      description: "Explore the network and learn how to interact with your node.", 
      image: SatelliteUrl
    },
    settingUpCosmovisor: {
      title: "Setting Up Cosmovisor", 
      description: "Set up Cosmovisor to monitor incoming chain upgrade proposals. ", 
      image: Globe1Url
    }
  }, 
  validators: {
    becomingAValidator: {
      title: "Becoming A Validator", 
      description: "Discover how to turn your node into a validator on Mars Hub.", 
      image: AstronautUrl
    }, 
    managingYourValidator: {
      title: "Managing your Validator", 
      description: "Learn how to manage your validator.", 
      image: BalanceUrl
    }, 
    sentryNodeArchitecture: {
      title: "Sentry Node Architecture", 
      description: "Dive into sentry node architecture to improve your security.", 
      image: SatelliteUrl
    }, 
    keyManagement: {
      title: "Key Management", 
      description: "Key management essentials for validators.", 
      image: PioneerUrl
    }, 
    validatorsFAQ: {
      title: "Validators FAQ", 
      description: "Answers to some of the most common questions for validators.", 
      image: BuildingUrl
    }
  }, 
  keyManagement: {
    basics: {
      title: "Basics", 
      description: "Create, import, export and delete keys using the CLI.", 
      image: AstronautUrl
    }, 
    settingUpKeyring: {
      title: "Setting Up Keyring", 
      description: "Guide to setting up keyring.", 
      image: DiamondUrl
    }, 
    hardwareSecurityModules: {
      title: "Hardware Security Modules", 
      description: "Hardware security modules for validators.", 
      image: BuildingUrl
    }, 
    multisig: {
      title: "Multisig", 
      description: "", 
      image: SpaceshipUrl
    },
    TMKMS: {
      title: "TMKMS", 
      description: "", 
      image: HubUrl
    }
  }, 
  IBCRelayers: {
    channelsForMars: {
      title: "Channels for Mars", 
      description: "IBC channels for Mars.", 
      image: SatelliteUrl
    }, 
    relayersGuide: {
      title: "Relayers Guide", 
      description: "Activacte interstellar communication between the Cosmos.", 
      image: PioneerUrl
    }
  }, 

  missionControl: {
    launchSequence: {
      title: "Launch Sequence", 
      description: "Stay up to date with the Mars launch sequence.", 
      image: SatelliteUrl
    }, 
    deployedOutposts: {
      title: "Deployed Outposts", 
      description: "Discover Mars' deployed outposts.", 
      image: PioneerUrl
    },
    riskParameters: {
      title: "Risk Parameters", 
      description: "Learn about Mars' risk parameters.", 
      image: PioneerUrl
    }
  }

}

export default function ContentBox(props) {

  if (props.title == 'Getting Started') {
    return (
      <div className="grid md:grid-cols-2 gap-3">
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
    );
  } else if (props.title == "Learn") {
    return (
      <div className="grid md:grid-cols-2 gap-3">
        

        <a className={styles.links} href="../../../docs/learn/mars-hub/mars-hub-intro"> 
        <Box 
        title={boxProps.learn.marsHub.title}
        description={boxProps.learn.marsHub.description}
        image={boxProps.learn.marsHub.image}
        />
        </a>

        <a className={styles.links} href="../../../docs/learn/red-bank/red-bank-intro">
        <Box 
        title={boxProps.learn.redBank.title}
        description={boxProps.learn.redBank.description}
        image={boxProps.learn.redBank.image}
        /> 
        </a>

        <a className={styles.links} href="../../../docs/learn/rover/rover-intro">
        <Box 
        title={boxProps.learn.rover.title}
        description={boxProps.learn.rover.description}
        image={boxProps.learn.rover.image}
        />
        </a>

        <a className={styles.links} href="../../../docs/learn/vaults/vaults-intro">
        <Box 
        title={boxProps.learn.vaults.title}
        description={boxProps.learn.vaults.description}
        image={boxProps.learn.vaults.image}
        />
        </a>

        <a className={styles.links} href="../../../docs/learn/workstation/workstation-intro">
        <Box 
        title={boxProps.learn.workstation.title}
        description={boxProps.learn.workstation.description}
        image={boxProps.learn.workstation.image}
        />
        </a>
        
      </div>
    );
  } else if (props.title == 'Govern') {
    return (
      <div className="grid md:grid-cols-2 gap-3">

        <a className={styles.links} href="../../../docs/govern/martian-council">
          <Box 
            title={boxProps.govern.martianCouncil.title}
            description={boxProps.govern.martianCouncil.description}
            image={boxProps.govern.martianCouncil.image}
          />
        </a>

        <a className={styles.links} href="../../../docs/govern/mars-improvement-proposals">
          <Box 
            title={boxProps.govern.marsImprovementProposals.title}
            description={boxProps.govern.marsImprovementProposals.description}
            image={boxProps.govern.marsImprovementProposals.image}
          />
        </a>

        <a className={styles.links} href="../../../docs/govern/mars-risk-framework">
          <Box 
            title={boxProps.govern.marsRiskFramework.title}
            description={boxProps.govern.marsRiskFramework.description}
            image={boxProps.govern.marsRiskFramework.image}
          />
        </a>

        <a className={styles.links} href="../../../docs/govern/on-chain-submission">
          <Box 
            title={boxProps.govern.onChainSubmission.title}
            description={boxProps.govern.onChainSubmission.description}
            image={boxProps.govern.onChainSubmission.image}
          />
        </a>

      </div>
    );
  } else if (props.title == 'Develop') {
    return (
      <div className="grid md:grid-cols-2 gap-3">

        <a className={styles.links} href="../../../docs/develop/mars-cli/mars-cli-intro">
          <Box 
            title={boxProps.develop.marsCLI.title}
            description={boxProps.develop.marsCLI.description}
            image={boxProps.develop.marsCLI.image}
          />
        </a>

        <a className={styles.links} href="../../../docs/develop/contracts/contracts-intro">
          <Box 
            title={boxProps.develop.contracts.title}
            description={boxProps.develop.contracts.description}
            image={boxProps.develop.contracts.image}
          />
        </a>

        <a className={styles.links} href="../../../docs/develop/modules/modules-intro">
          <Box 
            title={boxProps.develop.modules.title}
            description={boxProps.develop.modules.description}
            image={boxProps.develop.modules.image}
          />
        </a>

        <a className={styles.links} href="../../../docs/develop/backend/backend-intro">
          <Box 
            title={boxProps.develop.backend.title}
            description={boxProps.develop.backend.description}
            image={boxProps.develop.backend.image}
          />
        </a>

      </div>
    );
  } else if (props.title == 'Validate') {
    return (
      <div className="grid md:grid-cols-2 gap-3">

        <a className={styles.links} href="../../../docs/validate/node-operators/node-operators-intro">
          <Box 
            title={boxProps.validate.nodeOperators.title}
            description={boxProps.validate.nodeOperators.description}
            image={boxProps.validate.nodeOperators.image}
          />
        </a>

        <a className={styles.links} href="../../../docs/validate/validators/validators-intro">
          <Box 
            title={boxProps.validate.validators.title}
            description={boxProps.validate.validators.description}
            image={boxProps.validate.validators.image}
          />
        </a>

        <a className={styles.links} href="../../../docs/validate/ibc-relayers/ibc-relayers-intro">
          <Box 
            title={boxProps.validate.relayers.title}
            description={boxProps.validate.relayers.description}
            image={boxProps.validate.relayers.image}
          />
        </a>

      </div>
    );
  }

  else if (props.title == 'Security') {
    return (
      <div className="grid md:grid-cols-2 gap-3">

        <a className={styles.links} href="../../../docs/overview/security/audits">
          <Box 
            title={boxProps.security.audits.title}
            description={boxProps.security.audits.description}
            image={boxProps.security.audits.image}
          />
        </a>

        <a className={styles.links} href="../../../docs/overview/security/bug-bounty-program">
          <Box 
            title={boxProps.security.bugBountyProgram.title}
            description={boxProps.security.bugBountyProgram.description}
            image={boxProps.security.bugBountyProgram.image}
          />
        </a>

      </div>
    );
  }


  else if (props.title == 'Legal') {
    return (
      <div className="grid md:grid-cols-2 gap-3">

        <a className={styles.links} href="../../../docs/overview/legal/disclaimers-and-disclosures">
          <Box 
            title={boxProps.legal.disclaimersAndDisclosures.title}
            description={boxProps.legal.disclaimersAndDisclosures.description}
            image={boxProps.legal.disclaimersAndDisclosures.image}
          />
        </a>

        <a className={styles.links} href="../../../docs/overview/legal/terms-of-service">
          <Box 
            title={boxProps.legal.termsOfService.title}
            description={boxProps.legal.termsOfService.description}
            image={boxProps.legal.termsOfService.image}
            list={boxProps.legal.termsOfService.list}
          />
        </a>

        <a className={styles.links} href="../../../docs/overview/legal/privacy-policy">
          <Box 
            title={boxProps.legal.privacyPolicy.title}
            description={boxProps.legal.privacyPolicy.description}
            image={boxProps.legal.privacyPolicy.image}
          />
        </a>

        <a className={styles.links} href="../../../docs/overview/legal/cookie-policy">
          <Box 
            title={boxProps.legal.cookiePolicy.title}
            description={boxProps.legal.cookiePolicy.description}
            image={boxProps.legal.cookiePolicy.image}
          />
        </a>

      </div>
    );
  }

  else if (props.title == 'Mars Hub') {
    return (
      <div className="grid md:grid-cols-2 gap-3">

        <a className={styles.links} href="../../../docs/learn/mars-hub/mars-hub-architecture">
          <Box 
            title={boxProps.marsHub.marsHubArchitecture.title}
            description={boxProps.marsHub.marsHubArchitecture.description}
            image={boxProps.marsHub.marsHubArchitecture.image}
          />
        </a>

        <a className={styles.links} href="../../../docs/learn/mars-hub/martian-council">
          <Box 
            title={boxProps.marsHub.martianCouncil.title}
            description={boxProps.marsHub.martianCouncil.description}
            image={boxProps.marsHub.martianCouncil.image}
          />
        </a>

        <a className={styles.links} href="../../../docs/learn/mars-hub/safety-fund">
          <Box 
            title={boxProps.marsHub.safetyFund.title}
            description={boxProps.marsHub.safetyFund.description}
            image={boxProps.marsHub.safetyFund.image}
          />
        </a>

        <a className={styles.links} href="../../../docs/learn/mars-hub/mars-token/mars-token-intro">
          <Box 
            title={boxProps.marsHub.marsToken.title}
            description={boxProps.marsHub.marsToken.description}
            image={boxProps.marsHub.marsToken.image}
          />
        </a>

      </div>
    );
  }

  else if (props.title == 'Mars Token') {
    return (
      <div className="grid md:grid-cols-2 gap-3">

        <a className={styles.links} href="../../../learn/mars-hub/mars-token/mars-token-and-distribution">
          <Box 
            title={boxProps.marsToken.marsTokenAndDistribution.title}
            description={boxProps.marsToken.marsTokenAndDistribution.description}
            image={boxProps.marsToken.marsTokenAndDistribution.image}
          />
        </a>

        <a className={styles.links} href="../../../learn/mars-hub/mars-token/staking">
          <Box 
            title={boxProps.marsToken.staking.title}
            description={boxProps.marsToken.staking.description}
            image={boxProps.marsToken.staking.image}
          />
        </a>

        <a className={styles.links} href="../../../learn/mars-hub/mars-token/fees-and-value-flows">
          <Box 
            title={boxProps.marsToken.feesAndValueFlows.title}
            description={boxProps.marsToken.feesAndValueFlows.description}
            image={boxProps.marsToken.feesAndValueFlows.image}
          />
        </a>

      </div>
    );
  }

  else if (props.title == 'Red Bank') {
    return (
      <div className="grid md:grid-cols-2 gap-3">

        <a className={styles.links} href="../../../docs/learn/red-bank/red-bank-architecture">
          <Box 
            title={boxProps.redBank.redBankArchitecture.title}
            description={boxProps.redBank.redBankArchitecture.description}
            image={boxProps.redBank.redBankArchitecture.image}
          />
        </a>

        <a className={styles.links} href="../../../docs/learn/red-bank/collateralised-borrowing">
          <Box 
            title={boxProps.redBank.collateralisedBorrowing.title}
            description={boxProps.redBank.collateralisedBorrowing.description}
            image={boxProps.redBank.collateralisedBorrowing.image}
          />
        </a>

        <a className={styles.links} href="../../../docs/learn/red-bank/contract-to-contract-lending">
          <Box 
            title={boxProps.redBank.c2cLending.title}
            description={boxProps.redBank.c2cLending.description}
            image={boxProps.redBank.c2cLending.image}
          />
        </a>

        <a className={styles.links} href="../../../docs/learn/red-bank/two-slope-interest-rate-model">
          <Box 
            title={boxProps.redBank.twoSlopeInterestRateModel.title}
            description={boxProps.redBank.twoSlopeInterestRateModel.description}
            image={boxProps.redBank.twoSlopeInterestRateModel.image}
          />
        </a>

        <a className={styles.links} href="../../../docs/learn/red-bank/red-bank-liquidations">
          <Box 
            title={boxProps.redBank.redBankLiquidations.title}
            description={boxProps.redBank.redBankLiquidations.description}
            image={boxProps.redBank.redBankLiquidations.image}
          />
        </a>

        <a className={styles.links} href="../../../docs/learn/red-bank/differences-from-tradfi-credit-agreements">
          <Box 
            title={boxProps.redBank.differencesFromTradFiCreditAgreements.title}
            description={boxProps.redBank.differencesFromTradFiCreditAgreements.description}
            image={boxProps.redBank.differencesFromTradFiCreditAgreements.image}
          />
        </a>

      </div>
    );
  }

  else if (props.title == 'Rover') {
    return (
      <div className="grid md:grid-cols-2 gap-3">

        <a className={styles.links} href="../../../docs/learn/rover/rover-architecture">
          <Box 
            title={boxProps.rover.roverArchitecture.title}
            description={boxProps.rover.roverArchitecture.description}
            image={boxProps.rover.roverArchitecture.image}
          />
        </a>

        <a className={styles.links} href="../../../docs/learn/rover/nft-credit-accounts">
          <Box 
            title={boxProps.rover.nftCreditAccounts.title}
            description={boxProps.rover.nftCreditAccounts.description}
            image={boxProps.rover.nftCreditAccounts.image}
          />
        </a>

        <a className={styles.links} href="../../../docs/learn/rover/trading/trading-intro">
          <Box 
            title={boxProps.rover.trading.title}
            description={boxProps.rover.trading.description}
            image={boxProps.rover.trading.image}
          />
        </a>

        <a className={styles.links} href="../../../docs/learn/rover/rover-liquidations">
          <Box 
            title={boxProps.rover.roverLiquidations.title}
            description={boxProps.rover.roverLiquidations.description}
            image={boxProps.rover.roverLiquidations.image}
          />
        </a>

      </div>
    );
  }

  else if (props.title == 'Trading') {
    return (
      <div className="grid md:grid-cols-2 gap-3">

        <a className={styles.links} href="../../../learn/rover/trading/spot">
          <Box 
            title={boxProps.trading.spot.title}
            description={boxProps.trading.spot.description}
            image={boxProps.trading.spot.image}
          />
        </a>

        <a className={styles.links} href="../../../learn/rover/trading/margin">
          <Box 
            title={boxProps.trading.margin.title}
            description={boxProps.trading.margin.description}
            image={boxProps.trading.margin.image}
          />
        </a>

      </div>
    );
  }

  else if (props.title == 'Vaults') {
    return (
      <div className="grid md:grid-cols-2 gap-3">

        <a className={styles.links} href="../../../docs/learn/vaults/vaults-architecture">
          <Box 
            title={boxProps.vaults.vaultsArchitecture.title}
            description={boxProps.vaults.vaultsArchitecture.description}
            image={boxProps.vaults.vaultsArchitecture.image}
          />
        </a>

        <a className={styles.links} href="../../../docs/learn/vaults/fields-of-mars">
          <Box 
            title={boxProps.vaults.fieldsOfMars.title}
            description={boxProps.vaults.fieldsOfMars.description}
            image={boxProps.vaults.fieldsOfMars.image}
          />
        </a>

        <a className={styles.links} href="../../../docs/learn/vaults/vaults-liquidations">
          <Box 
            title={boxProps.vaults.vaultsLiquidations.title}
            description={boxProps.vaults.vaultsLiquidations.description}
            image={boxProps.vaults.vaultsLiquidations.image}
          />
        </a>

      </div>
    );
  }

  else if (props.title == 'Workstation') {
    return (
      <div className="grid md:grid-cols-2 gap-3">

        <a className={styles.links} href="../../../docs/learn/workstation/basics/basics-intro">
          <Box 
            title={boxProps.workstation.basics.title}
            description={boxProps.workstation.basics.description}
            image={boxProps.workstation.basics.image}
          />
        </a>

        <a className={styles.links} href="../../../docs/learn/workstation/airdrop">
          <Box 
            title={boxProps.workstation.airdrop.title}
            description={boxProps.workstation.airdrop.description}
            image={boxProps.workstation.airdrop.image}
          />
        </a>

        <a className={styles.links} href="../../../docs/learn/workstation/governance/governance-intro">
          <Box 
            title={boxProps.workstation.governance.title}
            description={boxProps.workstation.governance.description}
            image={boxProps.workstation.governance.image}
          />
        </a>

        <a className={styles.links} href="../../../docs/learn/workstation/red-bank/red-bank-intro">
          <Box 
            title={boxProps.workstation.redBank.title}
            description={boxProps.workstation.redBank.description}
            image={boxProps.workstation.redBank.image}
          />
        </a>

        <a className={styles.links} href="../../../docs/learn/workstation/rover/rover-intro">
          <Box 
            title={boxProps.workstation.rover.title}
            description={boxProps.workstation.rover.description}
            image={boxProps.workstation.rover.image}
          />
        </a>

        <a className={styles.links} href="../../../docs/learn/workstation/vaults/vaults-intro">
          <Box 
            title={boxProps.workstation.vaults.title}
            description={boxProps.workstation.vaults.description}
            image={boxProps.workstation.vaults.image}
          />
        </a>

      </div>
    );
  }

  else if (props.title == 'Basics') {
    return (
      <div className="grid md:grid-cols-2 gap-3">

        <a className={styles.links} href="../../../learn/workstation/basics/installing-a-wallet/installing-a-wallet-intro">
          <Box 
            title={boxProps.basics.installingAWallet.title}
            description={boxProps.basics.installingAWallet.description}
            image={boxProps.basics.installingAWallet.image}
          />
        </a>

        <a className={styles.links} href="../../../learn/workstation/basics/funding-a-wallet">
          <Box 
            title={boxProps.basics.fundingAWallet.title}
            description={boxProps.basics.fundingAWallet.description}
            image={boxProps.basics.fundingAWallet.image}
          />
        </a>

        <a className={styles.links} href="../../../learn/workstation/basics/connecting-a-wallet">
          <Box 
            title={boxProps.basics.connectingAWallet.title}
            description={boxProps.basics.connectingAWallet.description}
            image={boxProps.basics.connectingAWallet.image}
          />
        </a>

      </div>
    );
  }

  else if (props.title == 'Installing a Wallet') {
    return (
      <div className="grid md:grid-cols-2 gap-3">

        <a className={styles.links} href="../../../workstation/basics/installing-a-wallet/keplr">
          <Box 
            title={boxProps.installingAWallet.keplr.title}
            description={boxProps.installingAWallet.keplr.description}
            image={boxProps.installingAWallet.keplr.image}
          />
        </a>

        <a className={styles.links} href="../../../workstation/basics/installing-a-wallet/station">
          <Box 
            title={boxProps.installingAWallet.station.title}
            description={boxProps.installingAWallet.station.description}
            image={boxProps.installingAWallet.station.image}
          />
        </a>

        <a className={styles.links} href="../../../workstation/basics/installing-a-wallet/xdefi">
          <Box 
            title={boxProps.installingAWallet.xdefi.title}
            description={boxProps.installingAWallet.xdefi.description}
            image={boxProps.installingAWallet.xdefi.image}
          />
        </a>

        <a className={styles.links} href="../../../workstation/basics/installing-a-wallet/leap">
          <Box 
            title={boxProps.installingAWallet.leap.title}
            description={boxProps.installingAWallet.leap.description}
            image={boxProps.installingAWallet.leap.image}
          />
        </a>

      </div>
    );
  }

  else if (props.title == 'Governance') {
    return (
      <div className="grid md:grid-cols-2 gap-3">

        <a className={styles.links} href="../../../learn/workstation/governance/staking">
          <Box 
            title={boxProps.governance.staking.title}
            description={boxProps.governance.staking.description}
            image={boxProps.governance.staking.image}
          />
        </a>

        <a className={styles.links} href="../../../learn/workstation/governance/voting">
          <Box 
            title={boxProps.governance.voting.title}
            description={boxProps.governance.voting.description}
            image={boxProps.governance.voting.image}
          />
        </a>

        <a className={styles.links} href="../../../learn/workstation/governance/submitting-a-proposal">
          <Box 
            title={boxProps.governance.submittingAProposal.title}
            description={boxProps.governance.submittingAProposal.description}
            image={boxProps.governance.submittingAProposal.image}
          />
        </a>

      </div>
    );
  }

  else if (props.title == 'Red Bank 2') {
    return (
      <div className="grid md:grid-cols-2 gap-3">

        <a className={styles.links} href="../../../learn/workstation/red-bank/lending">
          <Box 
            title={boxProps.redBank2.lending.title}
            description={boxProps.redBank2.lending.description}
            image={boxProps.redBank2.lending.image}
          />
        </a>

        <a className={styles.links} href="../../../learn/workstation/red-bank/borrowing">
          <Box 
            title={boxProps.redBank2.borrowing.title}
            description={boxProps.redBank2.borrowing.description}
            image={boxProps.redBank2.borrowing.image}
          />
        </a>

        <a className={styles.links} href="../../../learn/workstation/red-bank/managing-positions">
          <Box 
            title={boxProps.redBank2.managingPositions.title}
            description={boxProps.redBank2.managingPositions.description}
            image={boxProps.redBank2.managingPositions.image}
          />
        </a>

      </div>
    );
  }

  else if (props.title == 'Rover 2') {
    return (
      <div className="grid md:grid-cols-2 gap-3">

        <a className={styles.links} href="../../../learn/workstation/rover/creating-a-credit-account">
          <Box 
            title={boxProps.rover2.creatingACreditAccount.title}
            description={boxProps.rover2.creatingACreditAccount.description}
            image={boxProps.rover2.creatingACreditAccount.image}
          />
        </a>

        <a className={styles.links} href="../../../learn/workstation/rover/managing-credit-accounts">
          <Box 
            title={boxProps.rover2.managingCreditAccounts.title}
            description={boxProps.rover2.managingCreditAccounts.description}
            image={boxProps.rover2.managingCreditAccounts.image}
          />
        </a>

        <a className={styles.links} href="../../../learn/workstation/rover/trading/trading-intro">
          <Box 
            title={boxProps.rover2.trading.title}
            description={boxProps.rover2.trading.description}
            image={boxProps.rover2.trading.image}
          />
        </a>

      </div>
    );
  }

  else if (props.title == 'Trading 2') {
    return (
      <div className="grid md:grid-cols-2 gap-3">

        <a className={styles.links} href="../../../workstation/rover/trading/spot">
          <Box 
            title={boxProps.trading2.spot.title}
            description={boxProps.trading2.spot.description}
            image={boxProps.trading2.spot.image}
          />
        </a>

        <a className={styles.links} href="../../../workstation/rover/trading/margin">
          <Box 
            title={boxProps.trading2.margin.title}
            description={boxProps.trading2.margin.description}
            image={boxProps.trading2.margin.image}
          />
        </a>

      </div>
    );
  }

  else if (props.title == 'Vaults 2') {
    return (
      <div className="grid md:grid-cols-2 gap-3">

        <a className={styles.links} href="../../../learn/workstation/vaults/fields-of-mars">
          <Box 
            title={boxProps.vaults2.fieldsOfMars.title}
            description={boxProps.vaults2.fieldsOfMars.description}
            image={boxProps.vaults2.fieldsOfMars.image}
          />
        </a>

      </div>
    );
  }

  else if (props.title == 'Mars CLI') {
    return (
      <div className="grid md:grid-cols-2 gap-3">

        <a className={styles.links} href="../../../docs/develop/mars-cli/public-endpoints">
          <Box 
            title={boxProps.marsCLI.publicEndpoints.title}
            description={boxProps.marsCLI.publicEndpoints.description}
            image={boxProps.marsCLI.publicEndpoints.image}
          />
        </a>

        <a className={styles.links} href="../../../docs/develop/mars-cli/marsd">
          <Box 
            title={boxProps.marsCLI.marsd.title}
            description={boxProps.marsCLI.marsd.description}
            image={boxProps.marsCLI.marsd.image}
          />
        </a>

        <a className={styles.links} href="../../../docs/develop/mars-cli/generating-signing-and-broadcasting-transactions">
          <Box 
            title={boxProps.marsCLI.generatingSigningAndBroadcastingTransactions.title}
            description={boxProps.marsCLI.generatingSigningAndBroadcastingTransactions.description}
            image={boxProps.marsCLI.generatingSigningAndBroadcastingTransactions.image}
          />
        </a>

      </div>
    );
  }

  else if (props.title == 'Contracts') {
    return (
      <div className="grid md:grid-cols-2 gap-3">

        <a className={styles.links} href="../../../docs/develop/contracts/mars-hub/mars-hub-intro">
          <Box 
            title={boxProps.contracts.marsHub2.title}
            description={boxProps.contracts.marsHub2.description}
            image={boxProps.contracts.marsHub2.image}
          />
        </a>

        <a className={styles.links} href="../../../docs/develop/contracts/red-bank/red-bank-intro">
          <Box 
            title={boxProps.contracts.outposts.title}
            description={boxProps.contracts.outposts.description}
            image={boxProps.contracts.outposts.image}
          />
        </a>

      </div>
    );
  }

  else if (props.title == 'Mars Hub 2') {
    return (
      <div className="grid md:grid-cols-2 gap-3">

        {/* <a className={styles.links} href="../../../develop/contracts/mars-hub/airdrop">
          <Box 
            title={boxProps.marsHub2.airdrop.title}
            description={boxProps.marsHub2.airdrop.description}
            image={boxProps.marsHub2.airdrop.image}
          />
        </a> */}

        <a className={styles.links} href="../../../develop/contracts/mars-hub/delegator">
          <Box 
            title={boxProps.marsHub2.delegator.title}
            description={boxProps.marsHub2.delegator.description}
            image={boxProps.marsHub2.delegator.image}
          />
        </a>

        <a className={styles.links} href="../../../develop/contracts/mars-hub/vesting">
          <Box 
            title={boxProps.marsHub2.vesting.title}
            description={boxProps.marsHub2.vesting.description}
            image={boxProps.marsHub2.vesting.image}
          />
        </a>

      </div>
    );
  }

  else if (props.title == 'Outposts') {
    return (
      <div className="grid md:grid-cols-2 gap-3">

        <a className={styles.links} href="../../../develop/contracts/red-bank/address-provider">
          <Box 
            title={boxProps.outposts.addressProvider.title}
            description={boxProps.outposts.addressProvider.description}
            image={boxProps.outposts.addressProvider.image}
          />
        </a>

        <a className={styles.links} href="../../../develop/contracts/red-bank/incentives">
          <Box 
            title={boxProps.outposts.incentives.title}
            description={boxProps.outposts.incentives.description}
            image={boxProps.outposts.incentives.image}
          />
        </a>

        <a className={styles.links} href="../../../develop/contracts/red-bank/oracle/oracle-intro">
          <Box 
            title={boxProps.outposts.oracle.title}
            description={boxProps.outposts.oracle.description}
            image={boxProps.outposts.oracle.image}
          />
        </a>

        <a className={styles.links} href="../../../develop/contracts/red-bank/">
          <Box 
            title={boxProps.outposts.redBank.title}
            description={boxProps.outposts.redBank.description}
            image={boxProps.outposts.redBank.image}
          />
        </a>

        <a className={styles.links} href="../../../develop/contracts/red-bank/rewards-collector/rewards-collector-intro">
          <Box 
            title={boxProps.outposts.rewardsCollector.title}
            description={boxProps.outposts.rewardsCollector.description}
            image={boxProps.outposts.rewardsCollector.image}
          />
        </a>

      </div>
    );
  }

  else if (props.title == 'Oracle') {
    return (
      <div className="grid md:grid-cols-2 gap-3">

        <a className={styles.links} href="../../../contracts/red-bank/oracle/base">
          <Box 
            title={boxProps.oracle.base.title}
            description={boxProps.oracle.base.description}
            image={boxProps.oracle.base.image}
          />
        </a>

        <a className={styles.links} href="../../../contracts/red-bank/oracle/osmosis">
          <Box 
            title={boxProps.oracle.osmosis.title}
            description={boxProps.oracle.osmosis.description}
            image={boxProps.oracle.osmosis.image}
          />
        </a>

      </div>
    );
  }

  else if (props.title == 'Rewards Collector') {
    return (
      <div className="grid md:grid-cols-2 gap-3">

        <a className={styles.links} href="../../../contracts/red-bank/rewards-collector/base">
          <Box 
            title={boxProps.rewardsCollector.base.title}
            description={boxProps.rewardsCollector.base.description}
            image={boxProps.rewardsCollector.base.image}
          />
        </a>

        <a className={styles.links} href="../../../contracts/red-bank/rewards-collector/osmosis">
          <Box 
            title={boxProps.rewardsCollector.osmosis.title}
            description={boxProps.rewardsCollector.osmosis.description}
            image={boxProps.rewardsCollector.osmosis.image}
          />
        </a>

      </div>
    );
  }


  else if (props.title == 'Modules') {
    return (
      <div className="grid md:grid-cols-2 gap-3">

        <a className={styles.links} href="../../../docs/develop/modules/module-accounts">
          <Box 
            title={boxProps.modules.moduleAccounts.title}
            description={boxProps.modules.moduleAccounts.description}
            image={boxProps.modules.moduleAccounts.image}
          />
        </a>

        <a className={styles.links} href="../../../docs/develop/modules/custom-modules/custom-modules-intro">
          <Box 
            title={boxProps.modules.customModules.title}
            description={boxProps.modules.customModules.description}
            image={boxProps.modules.customModules.image}
          />
        </a>

        <a className={styles.links} href="../../../docs/develop/modules/cosmos-sdk-modules/cosmos-sdk-modules-intro">
          <Box 
            title={boxProps.modules.cosmosSDKModules.title}
            description={boxProps.modules.cosmosSDKModules.description}
            image={boxProps.modules.cosmosSDKModules.image}
          />
        </a>

        <a className={styles.links} href="../../../docs/develop/modules/cosmwasm-module/cosmwasm-module-intro">
          <Box 
            title={boxProps.modules.cosmWasmModule.title}
            description={boxProps.modules.cosmWasmModule.description}
            image={boxProps.modules.cosmWasmModule.image}
          />
        </a>

        <a className={styles.links} href="../../../docs/develop/modules/ibc-modules/ibc-modules-intro">
          <Box 
            title={boxProps.modules.IBCModules.title}
            description={boxProps.modules.IBCModules.description}
            image={boxProps.modules.IBCModules.image}
          />
        </a>

      </div>
    );
  }


  else if (props.title == 'Custom Modules') {
    return (
      <div className="grid md:grid-cols-2 gap-3">

        <a className={styles.links} href="../../../develop/modules/custom-modules/gov">
          <Box 
            title={boxProps.customModules.gov.title}
            description={boxProps.customModules.gov.description}
            image={boxProps.customModules.gov.image}
          />
        </a>

        <a className={styles.links} href="../../../develop/modules/custom-modules/incentives">
          <Box 
            title={boxProps.customModules.incentives.title}
            description={boxProps.customModules.incentives.description}
            image={boxProps.customModules.incentives.image}
          />
        </a>

        <a className={styles.links} href="../../../develop/modules/custom-modules/safety">
          <Box 
            title={boxProps.customModules.safety.title}
            description={boxProps.customModules.safety.description}
            image={boxProps.customModules.safety.image}
          />
        </a>

      </div>
    );
  }

  else if (props.title == 'Cosmos SDK Modules') {
    return (
      <div className="grid md:grid-cols-2 gap-3">

        <a className={styles.links} href="../../../develop/modules/cosmos-sdk-modules/auth">
          <Box 
            title={boxProps.cosmosSDKModules.auth.title}
            description={boxProps.cosmosSDKModules.auth.description}
            image={boxProps.cosmosSDKModules.auth.image}
          />
        </a>

        <a className={styles.links} href="../../../develop/modules/cosmos-sdk-modules/authz">
          <Box 
            title={boxProps.cosmosSDKModules.authz.title}
            description={boxProps.cosmosSDKModules.authz.description}
            image={boxProps.cosmosSDKModules.authz.image}
          />
        </a>

        <a className={styles.links} href="../../../develop/modules/cosmos-sdk-modules/bank">
          <Box 
            title={boxProps.cosmosSDKModules.bank.title}
            description={boxProps.cosmosSDKModules.bank.description}
            image={boxProps.cosmosSDKModules.bank.image}
          />
        </a>

        <a className={styles.links} href="../../../develop/modules/cosmos-sdk-modules/capability">
          <Box 
            title={boxProps.cosmosSDKModules.capability.title}
            description={boxProps.cosmosSDKModules.capability.description}
            image={boxProps.cosmosSDKModules.capability.image}
          />
        </a>

        <a className={styles.links} href="../../../develop/modules/cosmos-sdk-modules/crisis">
          <Box 
            title={boxProps.cosmosSDKModules.crisis.title}
            description={boxProps.cosmosSDKModules.crisis.description}
            image={boxProps.cosmosSDKModules.crisis.image}
          />
        </a>

        <a className={styles.links} href="../../../develop/modules/cosmos-sdk-modules/distribution">
          <Box 
            title={boxProps.cosmosSDKModules.distribution.title}
            description={boxProps.cosmosSDKModules.distribution.description}
            image={boxProps.cosmosSDKModules.distribution.image}
          />
        </a>

        <a className={styles.links} href="../../../develop/modules/cosmos-sdk-modules/evidence">
          <Box 
            title={boxProps.cosmosSDKModules.evidence.title}
            description={boxProps.cosmosSDKModules.evidence.description}
            image={boxProps.cosmosSDKModules.evidence.image}
          />
        </a>

        <a className={styles.links} href="../../../develop/modules/cosmos-sdk-modules/feegrant">
          <Box 
            title={boxProps.cosmosSDKModules.feegrant.title}
            description={boxProps.cosmosSDKModules.feegrant.description}
            image={boxProps.cosmosSDKModules.feegrant.image}
          />
        </a>

        <a className={styles.links} href="../../../develop/modules/cosmos-sdk-modules/group">
          <Box 
            title={boxProps.cosmosSDKModules.group.title}
            description={boxProps.cosmosSDKModules.group.description}
            image={boxProps.cosmosSDKModules.group.image}
          />
        </a>

        <a className={styles.links} href="../../../develop/modules/cosmos-sdk-modules/mint">
          <Box 
            title={boxProps.cosmosSDKModules.mint.title}
            description={boxProps.cosmosSDKModules.mint.description}
            image={boxProps.cosmosSDKModules.mint.image}
          />
        </a>

        <a className={styles.links} href="../../../develop/modules/cosmos-sdk-modules/nft">
          <Box 
            title={boxProps.cosmosSDKModules.nft.title}
            description={boxProps.cosmosSDKModules.nft.description}
            image={boxProps.cosmosSDKModules.nft.image}
          />
        </a>

        <a className={styles.links} href="../../../develop/modules/cosmos-sdk-modules/params">
          <Box 
            title={boxProps.cosmosSDKModules.params.title}
            description={boxProps.cosmosSDKModules.params.description}
            image={boxProps.cosmosSDKModules.params.image}
          />
        </a>

        <a className={styles.links} href="../../../develop/modules/cosmos-sdk-modules/slashing">
          <Box 
            title={boxProps.cosmosSDKModules.slashing.title}
            description={boxProps.cosmosSDKModules.slashing.description}
            image={boxProps.cosmosSDKModules.slashing.image}
          />
        </a>

        <a className={styles.links} href="../../../develop/modules/cosmos-sdk-modules/staking">
          <Box 
            title={boxProps.cosmosSDKModules.staking.title}
            description={boxProps.cosmosSDKModules.staking.description}
            image={boxProps.cosmosSDKModules.staking.image}
          />
        </a>

        <a className={styles.links} href="../../../develop/modules/cosmos-sdk-modules/upgrade">
          <Box 
            title={boxProps.cosmosSDKModules.upgrade.title}
            description={boxProps.cosmosSDKModules.upgrade.description}
            image={boxProps.cosmosSDKModules.upgrade.image}
          />
        </a>

        <a className={styles.links} href="../../../develop/modules/cosmos-sdk-modules/vesting">
          <Box 
            title={boxProps.cosmosSDKModules.vesting.title}
            description={boxProps.cosmosSDKModules.vesting.description}
            image={boxProps.cosmosSDKModules.vesting.image}
          />
        </a>

      </div>
    );
  }

  else if (props.title == 'CosmWasm Module') {
    return (
      <div className="grid md:grid-cols-2 gap-3">

        <a className={styles.links} href="../../../develop/modules/cosmwasm-module/wasm">
          <Box 
            title={boxProps.cosmWasmModule.wasm.title}
            description={boxProps.cosmWasmModule.wasm.description}
            image={boxProps.cosmWasmModule.wasm.image}
          />
        </a>

      </div>
    );
  }

  else if (props.title == 'IBC Modules') {
    return (
      <div className="grid md:grid-cols-2 gap-3">

        <a className={styles.links} href="../../../develop/modules/ibc-modules/interchain-accounts">
          <Box 
            title={boxProps.IBCModules.interchainAccounts.title}
            description={boxProps.IBCModules.interchainAccounts.description}
            image={boxProps.IBCModules.interchainAccounts.image}
          />
        </a>

        <a className={styles.links} href="../../../develop/modules/ibc-modules/transfer">
          <Box 
            title={boxProps.IBCModules.transfer.title}
            description={boxProps.IBCModules.transfer.description}
            image={boxProps.IBCModules.transfer.image}
          />
        </a>

      </div>
    );
  }

  else if (props.title == 'Backend') {
    return (
      <div className="grid md:grid-cols-2 gap-3">

        <a className={styles.links} href="../../../docs/develop/backend/liquidation-bots/liquidation-bots-intro">
          <Box 
            title={boxProps.backend.liquidationBots.title}
            description={boxProps.backend.liquidationBots.description}
            image={boxProps.backend.liquidationBots.image}
          />
        </a>

      </div>
    );
  }


  else if (props.title == 'Node Operators') {
    return (
      <div className="grid md:grid-cols-2 gap-3">

        <a className={styles.links} href="../../../docs/validate/node-operators/setting-up-a-node">
          <Box 
            title={boxProps.nodeOperators.settingUpANode.title}
            description={boxProps.nodeOperators.settingUpANode.description}
            image={boxProps.nodeOperators.settingUpANode.image}
          />
        </a>

        <a className={styles.links} href="../../../docs/validate/node-operators/interacting-with-your-node">
          <Box 
            title={boxProps.nodeOperators.interactingWithANode.title}
            description={boxProps.nodeOperators.interactingWithANode.description}
            image={boxProps.nodeOperators.interactingWithANode.image}
          />
        </a>

        <a className={styles.links} href="../../../docs/validate/node-operators/setting-up-cosmovisor">
          <Box 
            title={boxProps.nodeOperators.settingUpCosmovisor.title}
            description={boxProps.nodeOperators.settingUpCosmovisor.description}
            image={boxProps.nodeOperators.settingUpCosmovisor.image}
          />
        </a>

      </div>
    );
  }


  else if (props.title == 'Validators') {
    return (
      <div className="grid md:grid-cols-2 gap-3">

        <a className={styles.links} href="../../../docs/validate/validators/becoming-a-validator">
          <Box 
            title={boxProps.validators.becomingAValidator.title}
            description={boxProps.validators.becomingAValidator.description}
            image={boxProps.validators.becomingAValidator.image}
          />
        </a>

        <a className={styles.links} href="../../../docs/validate/validators/managing-your-validator">
          <Box 
            title={boxProps.validators.managingYourValidator.title}
            description={boxProps.validators.managingYourValidator.description}
            image={boxProps.validators.managingYourValidator.image}
          />
        </a>

        <a className={styles.links} href="../../../docs/validate/validators/sentry-node-architecture">
          <Box 
            title={boxProps.validators.sentryNodeArchitecture.title}
            description={boxProps.validators.sentryNodeArchitecture.description}
            image={boxProps.validators.sentryNodeArchitecture.image}
          />
        </a>

        <a className={styles.links} href="../../../docs/validate/validators/key-management/key-management-intro">
          <Box 
            title={boxProps.validators.keyManagement.title}
            description={boxProps.validators.keyManagement.description}
            image={boxProps.validators.keyManagement.image}
          />
        </a>

        <a className={styles.links} href="../../../docs/validate/validators/validators-faq">
          <Box 
            title={boxProps.validators.validatorsFAQ.title}
            description={boxProps.validators.validatorsFAQ.description}
            image={boxProps.validators.validatorsFAQ.image}
          />
        </a>

      </div>
    );
  }

  else if (props.title == 'Key Management') {
    return (
      <div className="grid md:grid-cols-2 gap-3">

        <a className={styles.links} href="../../../validate/validators/key-management/basics">
          <Box 
            title={boxProps.keyManagement.basics.title}
            description={boxProps.keyManagement.basics.description}
            image={boxProps.keyManagement.basics.image}
          />
        </a>

        <a className={styles.links} href="../../../validate/validators/key-management/setting-up-keyring">
          <Box 
            title={boxProps.keyManagement.settingUpKeyring.title}
            description={boxProps.keyManagement.settingUpKeyring.description}
            image={boxProps.keyManagement.settingUpKeyring.image}
          />
        </a>

        <a className={styles.links} href="../../../validate/validators/key-management/hardware-security-modules">
          <Box 
            title={boxProps.keyManagement.hardwareSecurityModules.title}
            description={boxProps.keyManagement.hardwareSecurityModules.description}
            image={boxProps.keyManagement.hardwareSecurityModules.image}
          />
        </a>

        <a className={styles.links} href="../../../validate/validators/key-management/multisig">
          <Box 
            title={boxProps.keyManagement.multisig.title}
            description={boxProps.keyManagement.multisig.description}
            image={boxProps.keyManagement.multisig.image}
          />
        </a>

        <a className={styles.links} href="../../../validate/validators/key-management/tmkms">
          <Box 
            title={boxProps.keyManagement.TMKMS.title}
            description={boxProps.keyManagement.TMKMS.description}
            image={boxProps.keyManagement.TMKMS.image}
          />
        </a>

      </div>
    );
  }
  
  else if (props.title == 'IBC Relayers') {
    return (
      <div className="grid md:grid-cols-2 gap-3">

        <a className={styles.links} href="../../../docs/validate/ibc-relayers/channels-for-mars">
          <Box 
            title={boxProps.IBCRelayers.channelsForMars.title}
            description={boxProps.IBCRelayers.channelsForMars.description}
            image={boxProps.IBCRelayers.channelsForMars.image}
          />
        </a>

        <a className={styles.links} href="../../../docs/validate/ibc-relayers/relayers-guide">
          <Box 
            title={boxProps.IBCRelayers.relayersGuide.title}
            description={boxProps.IBCRelayers.relayersGuide.description}
            image={boxProps.IBCRelayers.relayersGuide.image}
          />
        </a>

      </div>
    );
  }

  else if (props.title == 'Mission Control') {
    return (
      <div className="grid md:grid-cols-2 gap-3">

        <a className={styles.links} href="../../../docs/overview/mission-control/launch-sequence">
          <Box 
            title={boxProps.missionControl.launchSequence.title}
            description={boxProps.missionControl.launchSequence.description}
            image={boxProps.missionControl.launchSequence.image}
          />
        </a>

        <a className={styles.links} href="../../../docs/overview/mission-control/deployed-outposts">
          <Box 
            title={boxProps.missionControl.deployedOutposts.title}
            description={boxProps.missionControl.deployedOutposts.description}
            image={boxProps.missionControl.deployedOutposts.image}
          />
        </a>

        <a className={styles.links} href="../../../docs/overview/mission-control/risk-parameters">
          <Box 
            title={boxProps.missionControl.riskParameters.title}
            description={boxProps.missionControl.riskParameters.description}
            image={boxProps.missionControl.riskParameters.image}
          />
        </a>

      </div>
    );
  }



}



