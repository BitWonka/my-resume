import React from "react";

const Testimonials = () => {
  return (
    <React.Fragment>
      <div className="tui-divider"></div>
      <legend className="center my-1 purple">Testimonials</legend>
      <div className="tui-divider"></div>
      <div>
        <div className="tui-window black-255 white-168-text">
          <fieldset className="tui-fieldset tui-border-dashed mt-3 purple">
            <legend>
              <span className="white-255-text">
                Zach W - ex-Elastos Info Lead
              </span>{" "}
            </legend>
            "We worked with BitWonka on our project’s main website and we were
            extremely pleased with the results. Working with him was always
            professional. He communicates clearly, produces top notch work
            quickly, and is quite simply, easy to work with. I highly recommend
            him as a developer with a large skillset for various projects."
          </fieldset>
        </div>
        <div className="tui-window black-255 white-168-text">
          <fieldset className="tui-fieldset tui-border-dashed mt-3 purple">
            <legend>
              <span className="white-255-text">
                Lance White - LPI DAO (Project Lead)
              </span>{" "}
            </legend>
            "If you're looking for a front-end and solidity developer who is
            skilled in the latest technologies and has a passion for web design,
            you've found your match with BitWonka. He has a keen eye for detail
            and a knack for finding innovative solutions to problems. He's
            always up for a challenge and is always willing to go the extra mile
            to identify ways in which the project requirements can be achieved.
            <br />
            <br />
            BitWonka has worked on our project's front-end and solidity
            development in a highly professional manner being able to satisfy
            all the design requirements for our platform. He has proven himself
            to be able to handle the stressors of short notice and work under
            pressure to meet deadlines. I would not hesitate to recommend
            BitWonka to anyone looking for a skilled and professional front-end
            or solidity developer."
          </fieldset>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Testimonials;
