import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const learnContent = [
    {
      title: "Mars Hub",
      description: "Deep dive into the Cosmos-SDK appchain that administers activity on Mars’ intergalactic outposts.",
      listItems: [
        {
          href: "../../../../docs/learn/mars-hub/martian-council",
          label: "Martian Council",
        },
  
        {
          href: "../../../../docs/learn/mars-hub/safety-fund",
          label: "Safety Fund",
        },

        {
          href: "../../../../docs/learn/mars-hub/mars-token/mars-token-intro",
          label: "Mars Token",
        },
      ],
    },
    {
      title: "Red Bank",
      description: "Enter the decentralized & fully automated, on-chain credit facility that can be deployed throughout the Cosmos.",
      listItems: [
        {
          href: "../../../../docs/learn/red-bank/collateralised-borrowing",
          label: "Collateralised Borrowing",
        },
  
        {
          href: "../../../../docs/learn/red-bank/contract-to-contract-lending",
          label: "Contract-to-Contract Lending",
        },

      ],
    },
    {
      title: "Rover",
      description: "Abandon centralized exchanges and ride Mars’ new generalised credit primitive called Rover.",
      listItems: [
        {
          href: "../../../../docs/learn/rover/nft-credit-accounts",
          label: "NFT Credit Accounts",
        },
  
        {
          href: "../../../../docs/learn/rover/trading/trading-intro",
          label: "Trading",
        },

      ],
    },

    {
      title: "Vaults",
      description: "Learn how Mars implements automated strategies in a firewalled container.",
      listItems: [
        {
          href: "../../../../docs/learn/vaults/fields-of-mars",
          label: "Fields of Mars",
        },

      ],
    },

    {
      title: "Workstation",
      description: "Tutorials and beginner guides to Mars Protocol with Martian-approved step-by-step screenshots.",
      listItems: [
        {
          href: "../../../../docs/learn/workstation/basics/basics-intro",
          label: "Basics",
        },

        {
          href: "../../../../docs/learn/workstation/airdrop",
          label: "Airdrop",
        },

        {
          href: "../../../../docs/learn/workstation/red-bank/red-bank-intro",
          label: "Red Bank",
        },

      ],
    },

  ]
  
  const governContent = [
    {
      title: "Martian Council",
      description: "Mars Protocol’s governing body.",
      listItems: [
        {
          href: "../../../../docs/govern/martian-council",
          label: "Overview",
        },

      ],
    },

    {
      title: "Mars Improvement Proposals",
      description: "The blueprint that empowers Council participants to submit and approve on-chain governance proposals.",
      listItems: [
        {
          href: "../../../../docs/govern/mars-improvement-proposals#templates",
          label: "Templates",
        },

        {
          href: "../../../../docs/govern/mars-improvement-proposals#proposing",
          label: "Proposing",
        },

      ],
    },

    {
      title: "Mars Risk Framework",
      description: "A framework for determining the risk parameters associated with assets and credit lines on Mars.",
      listItems: [
        {
          href: "../../../../docs/govern/mars-risk-framework#framework-summary",
          label: "Framework Summary",
        },

        {
          href: "../../../../docs/govern/mars-risk-framework#supporting-new-assets-and-lp-tokens",
          label: "Supporting New Assets and LP Tokens",
        },

      ],
    },

    {
      title: "On-chain Submission",
      description: "Submit a proposal on-chain and take it to a vote.",
      listItems: [
        {
          href: "../../../../docs/govern/on-chain-submission#base-level-proposal",
          label: "Base Level Proposal",
        },

        {
          href: "../../../../docs/govern/on-chain-submission#param-change-proposal",
          label: "Param Change Proposal",
        },

        {
          href: "../../../../docs/govern/on-chain-submission#wasm-binary-proposal",
          label: "Wasm Binary Proposal",
        },

      ],
    },

  ];
  
  const developContent = [
    {
      title: "Mars CLI",
      description: "Interact with Mars' function via the terminal.",
      listItems: [
        {
          href: "../../../../docs/develop/mars-cli/public-endpoints",
          label: "Public Endpoints",
        },
  
        {
          href: "../../../../docs/develop/mars-cli/marsd",
          label: "Marsd",
        },
  
        {
          href: "../../../../docs/develop/mars-cli/generating-signing-and-broadcasting-transactions",
          label: "Broadcasting Transactions",
        },
      ],
    },
    {
      title: "Contracts",
      description: "Overview of all Martian smart contracts.",
      listItems: [
        {
          href: "../../../../docs/develop/contracts/mars-hub/mars-hub-intro",
          label: "Periphery",
        },
  
        {
          href: "../../../../docs/develop/contracts/red-bank/red-bank-intro",
          label: "Red Bank",
        },

        {
          href: "../../../../docs/develop/contracts/liquidation-helpers/liquidation-helpers-intro",
          label: "Liquidation Helpers",
        },

      ],
    },
    {
      title: "Modules",
      description: "Enter the realm of CosmosSDK, CosmWasm, and IBC modules.",
      listItems: [
        {
          href: "../../../../docs/develop/modules/module-accounts",
          label: "Module Accounts",
        },
  
        {
          href: "../../../../docs/develop/modules/custom-modules/custom-modules-intro",
          label: "Custom Modules",
        },
  
        {
          href: "../../../../docs/develop/modules/cosmos-sdk-modules/cosmos-sdk-modules-intro",
          label: "Cosmos SDK Modules",
        },
      ],
    },
    {
      title: "Backend",
      description: "Insights and details on the red backend.",
      listItems: [
        {
          label: "Liquidation Bots",
          href: "../../../../docs/develop/backend/liquidation-bots/liquidation-bots-intro",
        },
      ],
    },
    {
      title: "Frontend",
      description: "Discover Mars Protocol's open-source frontend.",
      listItems: [
        {
          label: "Osmosis Outpost Frontend",
          href: "../../../../docs/develop/frontend/osmosis-outpost-frontend",
        },
      ],
    },
  ];

  const validateContent = [
    {
      title: "Node Operators",
      description: "Set up a Martian node.",
      listItems: [
        {
          href: "../../../../docs/validate/node-operators/setting-up-a-node",
          label: "Setting up a Node",
        },
  
        {
          href: "../../../../docs/validate/node-operators/interacting-with-your-node",
          label: "Interacting with your Node",
        },
  
      ],
    },
    {
      title: "Validators",
      description: "Spin up a Martian validator.",
      listItems: [
        {
          href: "../../../../docs/validate/validators/becoming-a-validator",
          label: "Becoming a Validator",
        },
  
        {
          href: "../../../../docs/validate/validators/managing-your-validator",
          label: "Managing your Validator",
        },

        {
          href: "../../../../docs/validate/validators/validators-faq",
          label: "Validators FAQ",
        },
  
      ],
    },
    {
      title: "IBC Relayers",
      description: "Get started with IBC Relayers.",
      listItems: [
        {
          href: "../../../../docs/validate/ibc-relayers/channels-for-mars",
          label: "Channels for Mars",
        },
  
        {
          href: "../../../../docs/validate/ibc-relayers/relayers-guide",
          label: "Relayers Guide",
        },
  
      ],
    },
  ];
  

const Card = ({ children }) => <div className="max-w-[550px] w-full h-[250px]">{children}</div>;

export default function ContentBox(props) {
    if (props.title == "Learn") {
      return (
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {learnContent.map((entry) => (
            <Card key={entry.title}>
              {/* <a className={styles.links} href="../../../../docs/learn/overview"> */}
                <div className={styles.box}>
                  {/* <img src={entry.image} height={76} width={76} className="opacity-50 self-start mt-4" /> */}
                  <div className={styles.titleBanner}>
                      <p className={styles.title}>{entry.title}</p>
                  </div>

                  <div>
                    {/* <p className={styles.title}>{entry.title}</p> */}
                    <p className={styles.subtext}>{entry.description}</p>
                    <ul className={styles.list}>
                      {entry.listItems.map((item) => (
                        <li key={item.label}>
                          <a className={styles.links} href={item.href}>
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              {/* </a> */}
            </Card>
          ))}
        </div>
      );
    } else if (props.title == "Govern") {
      return (
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {governContent.map((entry) => (
            <Card key={entry.title}>
              {/* <a className={styles.links} href="../../../../docs/govern/overview"> */}
                <div className={styles.box}>
                  {/* <img src={entry.image} height={76} width={76} className="opacity-50 self-start mt-4" /> */}
                  <div className={styles.titleBanner}>
                      <p className={styles.title}>{entry.title}</p>
                  </div>
                  
                  <div>
                    {/* <p className={styles.title}>{entry.title}</p> */}
                    <p className={styles.subtext}>{entry.description}</p>
                    <ul className={styles.list}>
                      {entry.listItems.map((item) => (
                        <li key={item.label}>
                          <a className={styles.links} href={item.href}>
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              {/* </a> */}
            </Card>
          ))}
        </div>
      );
    } else if (props.title == "Develop") {
      return (
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {developContent.map((entry) => (
            <Card key={entry.title}>
              {/* <a className={styles.links} href="../../../../docs/develop/overview"> */}
                <div className={styles.box}>
                  {/* <img src={entry.image} height={76} width={76} className="opacity-50 self-start mt-4" /> */}
                  <div className={styles.titleBanner}>
                      <p className={styles.title}>{entry.title}</p>
                  </div>

                  <div>
                    {/* <p className={styles.title}>{entry.title}</p> */}
                    <p className={styles.subtext}>{entry.description}</p>
                    <ul className={styles.list}>
                      {entry.listItems.map((item) => (
                        <li key={item.label}>
                          <a className={styles.links} href={item.href}>
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              {/* </a> */}
            </Card>
          ))}
        </div>
      );
    } else if (props.title == "Validate") {
      return (
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {validateContent.map((entry) => (
            <Card key={entry.title}>
              {/* <a className={styles.links} href="../../../../docs/validate/overview"> */}
                <div className={styles.box}>
                  {/* <img src={entry.image} height={76} width={76} className="opacity-50 self-start mt-4" /> */}
                  <div className={styles.titleBanner}>
                      <p className={styles.title}>{entry.title}</p>
                  </div>
                  
                  <div>
                    {/* <p className={styles.title}>{entry.title}</p> */}
                    <p className={styles.subtext}>{entry.description}</p>
                    <ul className={styles.list}>
                      {entry.listItems.map((item) => (
                        <li key={item.label}>
                          <a className={styles.links} href={item.href}>
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              {/* </a> */}
            </Card>
          ))}
        </div>
      );
    }
  }