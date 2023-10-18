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
      title: "Mars v2",
      description: "Abandon centralized exchanges and ride Mars’ new generalised credit primitive called Rover.",
      listItems: [
        {
          href: "../../../../docs/learn/mars-v2/credit-accounts",
          label: "Credit Accounts",
        },
  
        {
          href: "../../../../docs/learn/mars-v2/trade/trade-intro",
          label: "Trade",
        },

        {
          href: "../../../../docs/learn/mars-v2/farm",
          label: "Farm",
        },

      ],
    },

    {
      title: "Tutorials",
      description: "Beginner guides to Mars Protocol with Martian-approved step-by-step screenshots.",
      listItems: [
        {
          href: "../../../../docs/learn/tutorials/credit-accounts/credit-accounts-intro",
          label: "Credit Accounts",
        },

        {
          href: "../../../../docs/learn/tutorials/trading/trading-intro",
          label: "Trading",
        },

        {
          href: "../../../../docs/learn/tutorials/farming/farming-intro",
          label: "Farming",
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
      title: "Mars Improvement Proposal Framework",
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
      title: "Connect",
      description: "Interact with Mars' function via the terminal or scripts.",
      listItems: [
        {
          href: "../../../../docs/develop/connect/endpoints",
          label: "Endpoints",
        },
  
        {
          href: "../../../../docs/develop/connect/mars-cli/mars-cli-intro",
          label: "Mars CLI",
        },
  
        {
          href: "../../../../docs/develop/connect/cosmjs",
          label: "CosmJS",
        },
      ],
    },
    {
      title: "Contracts",
      description: "Overview of all Martian smart contracts.",
      listItems: [
        {
          href: "../../../../docs/develop/contracts/red-bank/red-bank-intro",
          label: "Red Bank",
        },

        {
          href: "../../../../docs/develop/contracts/rover/rover-intro",
          label: "Farm Vaults",
        },

        {
          href: "../../../../docs/develop/contracts/liquidation-helpers/liquidation-helpers-intro",
          label: "Liquidation Helpers",
        },

        {
          href: "../../../../docs/develop/contracts/mars-hub/mars-hub-intro",
          label: "Periphery",
        },

      ],
    },
    {
      title: "Contracts API",
      description: "Interact with Mars' contracts directly through the smart contracts API.",
      listItems: [
        {
          href: "../../../../docs/develop/contracts-api/execute-msgs",
          label: "Execute Messages",
        }
      ],
    },
    {
      title: "Liquidations",
      description: "Insights and details on Mars' liquidation bot.",
      listItems: [
        {
          label: "Liquidation Bots",
          href: "../../../../docs/develop/liquidation-bots/liquidation-bots-intro",
        },
      ],
    }
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
    }
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