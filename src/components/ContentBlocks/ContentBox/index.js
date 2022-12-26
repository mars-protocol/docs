import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Box from './Box';

import Icon1Url from '../../../../static/img/homepage-icons/icon-1.png';
import Icon2Url from '../../../../static/img/homepage-icons/icon-2.png';
import Icon3Url from '../../../../static/img/homepage-icons/icon-3.png';
import Icon4Url from '../../../../static/img/homepage-icons/icon-4.png';
import Icon5Url from '../../../../static/img/homepage-icons/icon-5.png';
import Icon6Url from '../../../../static/img/homepage-icons/icon-6.png';
import Icon7Url from '../../../../static/img/homepage-icons/icon-7.png';

// import LaunchUrl from '../../../static/img/launch.png';

const boxProps = {
  learn: {
    marsHub: {
      title: "Mars Hub", 
      description: "Today, the doors of Astroport’s governing body, the Astral Assembly, open.", 
      image: Icon1Url, 
      list: "Mars Hub"
    }, 
    redBank: {
      title: "Red Bank", 
      description: "Today, the doors of Astroport’s governing body, the Astral Assembly, open.", 
      image: Icon7Url, 
      list: "Red Bank"
    }, 
    rover: {
      title: "Rover", 
      description: "Today, the doors of Astroport’s governing body, the Astral Assembly, open.", 
      image: Icon6Url, 
      list: "Rover"
    }, 
    vaults: {
      title: "Vaults", 
      description: "Today, the doors of Astroport’s governing body, the Astral Assembly, open.", 
      image: Icon3Url, 
      list: "Vaults"
    }
  },
  govern: {
    marsImprovementProposals: {
      title: "Mars Improvement Proposals", 
      description: "Today, the doors of Astroport’s governing body, the Astral Assembly, open.", 
      image: Icon2Url, 
      list: "Mars Improvement Proposals"
    }, 
    marsRiskFramework: {
      title: "Mars Risk Framework", 
      description: "Today, the doors of Astroport’s governing body, the Astral Assembly, open.", 
      image: Icon4Url, 
      list: "Mars Risk Framework"
    }
  }, 
  develop: {
    marsCLI: {
      title: "Mars CLI", 
      description: "Today, the doors of Astroport’s governing body, the Astral Assembly, open.", 
      image: Icon7Url, 
      list: "Mars CLI"
    }, 
    contracts: {
      title: "Contracts", 
      description: "Today, the doors of Astroport’s governing body, the Astral Assembly, open.", 
      image: Icon6Url, 
      list: "Contracts"
    }, 
    modules: {
      title: "Modules", 
      description: "Today, the doors of Astroport’s governing body, the Astral Assembly, open.", 
      image: Icon3Url, 
      list: "Modules"
    }, 
    backend: {
      title: "Backend", 
      description: "Today, the doors of Astroport’s governing body, the Astral Assembly, open.", 
      image: Icon5Url, 
      list: "Backend"
    }
  }, 
  infrastructure: {
    nodeOperators: {
      title: "Node Operators", 
      description: "Today, the doors of Astroport’s governing body, the Astral Assembly, open.", 
      image: Icon2Url,
      list:"Node Operators"
    }, 
    validators: {
      title: "Validators", 
      description: "Today, the doors of Astroport’s governing body, the Astral Assembly, open.", 
      image: Icon1Url,
      list:"Validators"
    }, 
    relayers: {
      title: "IBC Relayers", 
      description: "Today, the doors of Astroport’s governing body, the Astral Assembly, open.", 
      image: Icon4Url,
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