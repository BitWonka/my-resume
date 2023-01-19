import React, { useState } from "react";

import ModalRetro from "../../ModalRetro";
import TextArt from "./TextArt";

const Introduction = () => {
  const [showHelloModal, setHelloModal] = useState(false);
  const [showWhoAmIModal, setWhoAmIModal] = useState(false);
  const [showQualificationsModal, setQualificationsModal] = useState(false);
  const [showAchievementsModal, setAchievementsModal] = useState(false);

  function openModal(modalName) {
    switch (modalName) {
      case "HelloModal":
        setHelloModal(true);
        break;
      case "WhoAmIModal":
        setWhoAmIModal(true);
        break;
      case "QualificationsModal":
        setQualificationsModal(true);
        break;
      case "AchievementsModal":
        setAchievementsModal(true);
        break;
      default:
        console.log("NO Modal");
    }
  }

  function closeModal(modalName) {
    switch (modalName) {
      case "HelloModal":
        setHelloModal(false);
        break;
      case "WhoAmIModal":
        setWhoAmIModal(false);
        break;
      case "QualificationsModal":
        setQualificationsModal(false);
        break;
      case "AchievementsModal":
        setAchievementsModal(false);
        break;
      default:
        console.log("NO Modal");
    }
  }
  return (
    <React.Fragment>
      <TextArt />
      <pre>{`function sayHello() {
  return (

    "HENLO HOOMAN, WELCOME"

    "If you dont like reading code, just press the button"

  )
}       

              `}</pre>
      <ModalRetro
        openModal={() => openModal("HelloModal")}
        closeModal={() => closeModal("HelloModal")}
        modalIsOpen={showHelloModal}
        title={"Say Hello"}
      >
        HENLO HOOMAN, WELCOME <br />
        If you dont like reading code, just press the button <br /> {";-)"}
      </ModalRetro>
      <button
        className="tui-button tui-modal-button purple-bg"
        onClick={() => openModal("HelloModal")}
      >
        ◄ Say Hello ►
      </button>
      <pre>
        {`

function whoAMI() {
  return ([

    "As a passionate cryptocurrency enthusiast since 2017, I am constantly seeking new ways to contribute to the space. In 2019, I decided to take the initiative and become a self-taught developer by enrolling in online programming courses on Udemy. My skillset includes proficiency in various frameworks and libraries, particularly React.",

    "I am a collaborative team player, a self-motivated learner, and a problem-solver. My boundless curiosity drives me to constantly seek out new challenges and opportunities for growth. I am comfortable with remote work and always eager to expand my knowledge and skills. I am a versatile individual who is willing to take on multiple roles and lend a helping hand whenever and wherever needed."
    
    'Curiosity killed the cat but taught me how to code',

    'Jack of all trades'


  ])
}

`}
      </pre>
      <ModalRetro
        openModal={() => openModal("WhoAmIModal")}
        closeModal={() => closeModal("WhoAmIModal")}
        modalIsOpen={showWhoAmIModal}
        title={"Who Am I?"}
      >
        As a passionate cryptocurrency enthusiast since 2017, I am constantly
        seeking new ways to contribute to the space. In 2019, I decided to take
        the initiative and become a self-taught developer by enrolling in online
        programming courses on Udemy. My skillset includes proficiency in
        various frameworks and libraries, particularly React.
        <br />
        <br />
        I am a collaborative team player, a self-motivated learner, and a
        problem-solver. My boundless curiosity drives me to constantly seek out
        new challenges and opportunities for growth. I am comfortable with
        remote work and always eager to expand my knowledge and skills. I am a
        versatile individual who is willing to take on multiple roles and lend a
        helping hand whenever and wherever needed.
        <br />
        <br />
        "Curiosity killed the cat but taught me how to code"
        <br />
        <br />
        "Jack of all trades"
      </ModalRetro>
      <button
        className="tui-button tui-modal-button purple-bg"
        onClick={() => openModal("WhoAmIModal")}
      >
        ◄ Who Am I? ►
      </button>
      <pre>
        {`

function getQualifications () {
  return ([

    "Bachelors degree in non relevant Field",

    "Self-taught Developer"
    
  ])
}

`}
      </pre>
      <ModalRetro
        openModal={() => openModal("QualificationsModal")}
        closeModal={() => closeModal("QualificationsModal")}
        modalIsOpen={showQualificationsModal}
        title={"My Qualifications"}
      >
        Bachelors degree in non relevant Field
        <br />
        <br />
        Self-taught Developer (see Technologies)
      </ModalRetro>
      <button
        className="tui-button tui-modal-button purple-bg"
        onClick={() => openModal("QualificationsModal")}
      >
        ◄ Qualifications ►
      </button>
      <pre>
        {`
                
function getAchievements () {
  return ([

    "OG Top 200 Degen as per DegenScore (When it was cool)",

    "Archeological @DevOps199 NFT Discovery from 2017"

    "Completed Ethernaut CTF"

  ])
}


`}
      </pre>
      <ModalRetro
        openModal={() => openModal("AchievementsModal")}
        closeModal={() => closeModal("AchievementsModal")}
        modalIsOpen={showAchievementsModal}
        title={"My Achievements"}
      >
        Bachelors degree in non relevant Field
        <br />
        <br />
        Self taught Developer
        <br />
        <br />
        Completed Ethernaut CTF
      </ModalRetro>
      <button
        className="tui-button tui-modal-button purple-bg"
        onClick={() => openModal("AchievementsModal")}
      >
        ◄ Achievements ►
      </button>
    </React.Fragment>
  );
};

export default Introduction;
