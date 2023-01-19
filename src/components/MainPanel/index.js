import React from "react";

import Introduction from "./Introduction";
import Technologies from "./Tech";
import Testimonials from "./Testimonials";
import Projects from "./Projects";
import Thanks from "./Thanks";

import "./MainPanel.css";

const MainPanel = () => {
  return (
    <div className="tui-window full-width tui-no-shadow main-panel">
      <fieldset className="tui-fieldset">
        <legend className="center purple">MY-RESUME.JS</legend>
        <span className="tui-fieldset-button">
          <span className="green-255-text">↕</span>
        </span>
        <span className="tui-fieldset-button left">
          <span className="green-255-text">■</span>
        </span>
        <span className="tui-fieldset-text top right mr-3">1</span>
        <span className="tui-fieldset-text ml-3">&nbsp;1:1&nbsp;</span>
        <div className="tui-textarea full-width in-panel white-168-text">
          <Introduction />
          <Technologies />
          <Testimonials />
          <Projects />
          <Thanks />
        </div>
      </fieldset>
    </div>
  );
};

export default MainPanel;
