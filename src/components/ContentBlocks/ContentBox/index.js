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
      description: "Deep dive into the Martian chain that administers activity on its Outposts.", 
      image: HubUrl, 
      list: "Mars Hub"
    }, 
    redBank: {
      title: "Red Bank", 
      description: "Enter the decentralized & fully automated, on-chain credit facility.", 
      image: Globe2Url, 
      list: "Red Bank"
    }, 
    rover: {
      title: "Rover", 
      description: "Ride the new primitive based on Mars's generalized leverage module called Rover.", 
      image: Rover1Url, 
      list: "Rover"
    }, 
    vaults: {
      title: "Vaults", 
      description: "Learn essential insights on the container for assets implementing automated strategies.", 
      image: DiamondUrl, 
      list: "Vaults"
    }, 
    workstation: {
      title: "Workstation", 
      description: "Beginner guides to Mars Protocol with astronaut-approved step-by-step screenshots.", 
      image: AstronautUrl, 
      list: "Workstation"
    }
  },
  govern: {
    marsImprovementProposals: {
      title: "Mars Improvement Proposals", 
      description: "The framework that empowers Council participants for on-chain governance proposals.", 
      image: BalanceUrl, 
      list: "Mars Improvement Proposals"
    }, 
    marsRiskFramework: {
      title: "Mars Risk Framework", 
      description: "A framework to determine the risk parameters of protocols and assets for Mars.", 
      image: ErrorUrl, 
      list: "Mars Risk Framework"
    }
  }, 
  develop: {
    marsCLI: {
      title: "Mars CLI", 
      description: "Interact with Mars'endpoints.", 
      image: BuildingUrl, 
      list: "Mars CLI"
    }, 
    contracts: {
      title: "Contracts", 
      description: "Overview of all Martian contracts.", 
      image: Globe1Url, 
      list: "Contracts"
    }, 
    modules: {
      title: "Modules", 
      description: "Core and third-party modules that make up Mars Hub.", 
      image: MarsUrl, 
      list: "Modules"
    }, 
    backend: {
      title: "Backend", 
      description: "Insights and detailed information on the red backend.", 
      image: SatelliteUrl, 
      list: "Backend"
    }
  }, 
  infrastructure: {
    nodeOperators: {
      title: "Node Operators", 
      description: "Set up a Martian node.", 
      image: Rocket1Url,
      list:"Node Operators"
    }, 
    validators: {
      title: "Validators", 
      description: "Learn how to become a Validator for Mars Hub.", 
      image: PioneerUrl,
      list:"Validators"
    }, 
    relayers: {
      title: "IBC Relayers", 
      description: "Getting started with IBC Relayers.", 
      image: SpaceshipUrl,
      list:"IBC Relayers"
    }
  }
}

export default function ContentBox(props) {

  if (props.title == 'Getting Started') {
    return (
      <div className={styles.box}>
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
    );
  } else if (props.title == "Learn") {
    return (
      <div className={styles.box}>

        <a className={styles.links} href="../../../docs/learn/category/mars-hub"> 
        <Box 
        title={boxProps.learn.marsHub.title}
        description={boxProps.learn.marsHub.description}
        image={boxProps.learn.marsHub.image}
        list={boxProps.learn.marsHub.list}
        />
        </a>

        <a className={styles.links} href="../../../docs/learn/category/red-bank">
        <Box 
        title={boxProps.learn.redBank.title}
        description={boxProps.learn.redBank.description}
        image={boxProps.learn.redBank.image}
        list={boxProps.learn.redBank.list}
        /> 
        </a>

        <a className={styles.links} href="../../../docs/learn/category/rover">
        <Box 
        title={boxProps.learn.rover.title}
        description={boxProps.learn.rover.description}
        image={boxProps.learn.rover.image}
        list={boxProps.learn.rover.list}
        />
        </a>

        <a className={styles.links} href="../../../docs/learn/category/vaults">
        <Box 
        title={boxProps.learn.vaults.title}
        description={boxProps.learn.vaults.description}
        image={boxProps.learn.vaults.image}
        list={boxProps.learn.vaults.list}
        />
        </a>

        <a className={styles.links} href="../../../docs/learn/category/workstation">
        <Box 
        title={boxProps.learn.workstation.title}
        description={boxProps.learn.workstation.description}
        image={boxProps.learn.workstation.image}
        list={boxProps.learn.workstation.list}
        />
        </a>
        
      </div>
    );
  } else if (props.title == 'Govern') {
    return (
      <div className={styles.box}>

        <a className={styles.links} href="../../../docs/govern/mars-improvement-proposals">
          <Box 
            title={boxProps.govern.marsImprovementProposals.title}
            description={boxProps.govern.marsImprovementProposals.description}
            image={boxProps.govern.marsImprovementProposals.image}
            list={boxProps.govern.marsImprovementProposals.list}
          />
        </a>

        <a className={styles.links} href="../../../docs/govern/mars-risk-framework">
          <Box 
            title={boxProps.govern.marsRiskFramework.title}
            description={boxProps.govern.marsRiskFramework.description}
            image={boxProps.govern.marsRiskFramework.image}
            list={boxProps.govern.marsRiskFramework.list}
          />
        </a>

      </div>
    );
  } else if (props.title == 'Develop') {
    return (
      <div className={styles.box}>

        <a className={styles.links} href="../../../docs/develop/category/mars-cli">
          <Box 
            title={boxProps.develop.marsCLI.title}
            description={boxProps.develop.marsCLI.description}
            image={boxProps.develop.marsCLI.image}
            list={boxProps.develop.marsCLI.list}
          />
        </a>

        <a className={styles.links} href="../../../docs/develop/contracts/contracts-intro">
          <Box 
            title={boxProps.develop.contracts.title}
            description={boxProps.develop.contracts.description}
            image={boxProps.develop.contracts.image}
            list={boxProps.develop.contracts.list}
          />
        </a>

        <a className={styles.links} href="../../../docs/develop/category/modules">
          <Box 
            title={boxProps.develop.modules.title}
            description={boxProps.develop.modules.description}
            image={boxProps.develop.modules.image}
            list={boxProps.develop.modules.list}
          />
        </a>

        <a className={styles.links} href="../../../docs/develop/category/modules">
          <Box 
            title={boxProps.develop.backend.title}
            description={boxProps.develop.backend.description}
            image={boxProps.develop.backend.image}
            list={boxProps.develop.backend.list}
          />
        </a>

      </div>
    );
  } else if (props.title == 'Infrastructure') {
    return (
      <div className={styles.box}>

        <a className={styles.links} href="../../../docs/join-the-network/category/node-operators">
          <Box 
            title={boxProps.infrastructure.nodeOperators.title}
            description={boxProps.infrastructure.nodeOperators.description}
            image={boxProps.infrastructure.nodeOperators.image}
            list={boxProps.infrastructure.nodeOperators.list}
          />
        </a>

        <a className={styles.links} href="../../../docs/join-the-network/category/validators">
          <Box 
            title={boxProps.infrastructure.validators.title}
            description={boxProps.infrastructure.validators.description}
            image={boxProps.infrastructure.validators.image}
            list={boxProps.infrastructure.validators.list}
          />
        </a>

        <a className={styles.links} href="../../../docs/join-the-network/category/ibc-relayers">
          <Box 
            title={boxProps.infrastructure.relayers.title}
            description={boxProps.infrastructure.relayers.description}
            image={boxProps.infrastructure.relayers.image}
            list={boxProps.infrastructure.relayers.list}
          />
        </a>

      </div>
    );
  }

}