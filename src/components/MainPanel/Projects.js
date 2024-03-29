import React from "react";

const Projects = () => {
  return (
    <React.Fragment>
      <div className="tui-divider mt-3"></div>
      <legend className="center my-1 purple">Experience / Projects</legend>
      <div className="tui-divider"></div>

      <div>
        <br />
        <p className="my-1 purple">Octav:</p>
        <div className="tui-divider"></div>
        <br />
        <li>Referral System:</li>
        <p>
          New job, first task. I had to do the frontend for a referral system.
          Simple and easy.
        </p>
        <li>NFT Dashboard:</li>
        <p>
          Jumping into this project was a wild ride! I got to handle both the
          frontend and backend of our NFT dashboard, which was pretty daunting
          since I was new to backend stuff. But hey, I love picking up new
          skills! I even added a cool feature that lets users sell their NFTs
          right from the dashboard. Seeing everything come together in the end
          was awesome, and I couldn't be prouder of what I achieved and learnt.
        </p>
        <li>
          {" "}
          <a href="https://frentech.octav.fi" target="_blank" rel="noreferrer">
            FrenTech
          </a>
          :
        </li>
        <p>
          Working on the FrenTech dashboard was absolutely epic. Just as
          Friend.Tech started making waves, my boss and I decided to craft this
          killer dashboard. I hit the ground running one Sunday, and after a
          marathon of coding (and way too much coffee), FrenTech was ready to
          rock by Wednesday. This wasn't just a small update; I built this baby
          from scratch. I used NextJS for the frontend and backend, MongoDB for
          keeping our data straight, and a Node/Express server for the heavy
          lifting. Seeing FrenTech become the go-to dashboard for Friend.Tech
          users was mind-blowing. It wasn't just a win for me; it put our
          company in the spotlight and drew in loads of new users.
        </p>
        <li>Other Works:</li>
        <p>3rd Party Integrations</p>
        <p>Payment System</p>
        <p>Labelling System</p>
        <p>Payment System</p>
        <p>Admin Panel overhaul</p>
      </div>

      <div>
        <br />
        <p className="my-1 purple">Elastos:</p>
        <div className="tui-divider"></div>
        <br />
        <li>Migrated Website from React-static to NextJS:</li>
        <p>
          This project was a thrilling experience for me. I had the opportunity
          to work with two new frameworks and gain more experience with Styled
          Components. The website was built with React-Static and was plagued by
          a pesky error that would pop up every now and again (diagnosed as a{" "}
          <a
            href="https://github.com/react-static/react-static/issues/1203"
            target="_blank"
            rel="noreferrer"
          >
            known bug
          </a>{" "}
          in React-Static). The website had multiple pages at the time and
          internationalized routing, and it had to be a completely static
          website. I proposed migrating to NextJS as it offered similar features
          to React-Static. The internationalized routing presented a bit of a
          challenge, but where's the fun without a little difficulty? Overall,
          this project allowed me to expand my skills and gain valuable
          experience in website migration.
        </p>
        <li>Crafting a Landing Page for Ads from Figma Design:</li>
        <p>
          I was provided with a Figma design file and tasked with creating a
          pixel-perfect landing page for all marketing ads. It was an enjoyable
          project that allowed me to showcase my attention to detail and
          design-to-code skills. I was proud of the final outcome.
        </p>
        <li>Strip down the entire site:</li>
        <p>
          All good things come to an end. Strategy change from the team and I
          was now tasked with stripping down the whole website to a simple
          one-pager.
        </p>
        <li>Other Works:</li>
        <p>Fixing numerous pre-existing frontend bugs</p>
      </div>

      <div>
        <p className="my-1 purple">LPI DAO:</p>
        <div className="tui-divider"></div>
        <br />
        <li>
          Building a Token Sale Page{" "}
          <a href="https://sale.lpi.finance/" target="_blank" rel="noreferrer">
            Frontend
          </a>{" "}
          and{" "}
          <a
            href="https://bscscan.com/address/0x7b404dc36da18702ea4afe1194fb4258c8fa1467#code"
            target="_blank"
            rel="noreferrer"
          >
            Smart Contract
          </a>
          :
        </li>
        <p>
          Armed with my recently acquired solidity knowledge, I was excited to
          tackle this project. I was particularly excited to learn how to link
          the front-end to smart contracts. I was provided with a competitor's
          site as a reference and tasked with creating a similar product. The
          smart contract code was open-source, which made it easy to fork and
          manipulate, but I had to be careful to avoid errors due to
          immutability. The frontend was built using React, EthersJS, MaterialUI
          and Styled Components. It was a valuable experience to learn EtherJS
          on the fly and I was able to complete the development by the deadline.
        </p>
        <li>
          Building a Staking Page{" "}
          <a
            href="https://staking.lpi.finance/#/stake"
            target="_blank"
            rel="noreferrer"
          >
            Frontend
          </a>{" "}
          and{" "}
          <a
            href="https://bscscan.com/address/0x0fc038C0B61B86CaB3E7099b65eFc8249cb61aFD#code"
            target="_blank"
            rel="noreferrer"
          >
            Smart Contracts
          </a>
          :
        </li>
        <p>
          I was given the task of building a staking page with no design
          provided, but with specific requirements for the smart contract. Being
          a Degen, I had knowledge of multiple open-source frontends and smart
          contracts that could fit the criteria, and suggested to use a fork of
          Float Protocol. The smart contract fit the criteria perfectly, but the
          frontend was a thrilling challenge as it was in TypeScript and Web3JS,
          both of which I had not encountered before. I considered building the
          frontend from scratch, but where's the fun in that? This project gave
          me the chance to learn more and expand my skills. Web3JS was very
          similar to EthersJS, so that was manageable, but it was a bit
          difficult to understand TypeScript at first. However, after watching
          enough YouTube videos, it all made sense. Mission Accomplished and I
          had a blast doing it.
        </p>
        <li>
          Building a Vesting Page{" "}
          <a href="https://claim.lpi.finance/" target="_blank" rel="noreferrer">
            Frontend
          </a>{" "}
          and{" "}
          <a
            href="https://bscscan.com/address/0x64AF31bD9dEA62977DCd19b627eCdDF043A5ebc4#code"
            target="_blank"
            rel="noreferrer"
          >
            Smart Contract
          </a>
          :
        </li>
        <p>
          After my previous experiences, this task was a breeze. I used a
          vesting contract from SuperFarm (which I discovered had a bug and
          corrected it to rescue other tokens mistakenly deposited) and then
          built a simple Frontend from scratch in React to claim Vested tokens
          and show the status of vesting. During further updates, I even got to
          learn how to handle Multichain handoff. It was a great opportunity to
          put my skills to the test and come up with a functional and
          user-friendly solution.
        </p>
        <li>
          Build a Complete onchain launchpad platform, Smart Contract and
          Frontend:
        </li>
        <p>
          I was tasked with creating a smart contract and frontend that could
          handle all aspects of a launchpad platform. It was a challenging
          project, but I was excited to take it on. However, as the saying goes,
          good things always come to an end. Due to a market crash, development
          had to be halted not too far in the development.
        </p>
      </div>

      <div>
        <p className="my-1 purple">Side Works:</p>
        <div className="tui-divider"></div>
        <br />
        <li>Boring course projects</li>
        <li>Minor frontend works</li>
        <li>
          <a
            href="https://twitter.com/bitw0nka/status/1430780755555364869"
            target="_blank"
            rel="noreferrer"
          >
            Wrapper
          </a>{" "}
          for Ancient NFT:
        </li>
        <p>
          During a time when the NFT market was on the hunt for archeological
          NFT's, I was excited to put my love for digging and finding to the
          test. I dove into the search and spent days combing through Etherscan
          contracts and old Google searches. I finally struck gold and found a
          pre-historic ERC20 NFT on @DevOps199. I discovered the image hashed
          into the contract and figured out how to redeem the NFT. I took a
          couple for myself and shared the discovery with others. Within
          minutes, all were claimed. As the finder, I had to now make this NFT
          tradeable, so I forked the Curio Cards wrapper for this NFT the same
          night to list it on OpenSea. Unfortunately, after the initial hype,
          there was no interest and I did not proceed to build a frontend.
        </p>
        <li>Flashbots:</li>
        <p>
          As NFT minting was becoming increasingly profitable, I decided to
          explore the world of flashbots to gain an advantage. Familiar with
          NodeJS and Hardhat, I found it comfortable and similar to frontend
          development. Unfortunately, my first attempt encountered a bug in my
          smart contract and it did not work. Additionally, the implementation
          of EIP-1559 and restricted mint amounts decreased the profitability,
          leading me to abandon the project.
        </p>
        <li>Building my resume:</li>
        <p>
          During a bear market, opportunities are scarce, so I decided to grind
          and focus on building my resume. With hundreds of applications for job
          listings, I wanted to create something that would make me stand out
          and showcase my talents. Being a Degen, I was drawn to the retro
          aesthetic, and so I created this site using React and the amazing
          TuiCSS library.
        </p>
      </div>
    </React.Fragment>
  );
};

export default Projects;
