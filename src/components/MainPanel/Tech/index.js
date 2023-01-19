import React from "react";

import tech from "./content";

const Technologies = () => {
  return (
    <React.Fragment>
      <div className="tui-divider mt-3"></div>
      <legend className="center my-1 purple">Technologies</legend>
      <div className="tui-divider"></div>
      <br />
      {tech.map((e) => {
        return (
          <React.Fragment key={e.tech}>
            {e.tech}
            <div className="tui-progress-bar inline-block valign-right white-168">
              <span
                className="tui-progress purple-bg"
                style={{ width: e.progress }}
              ></span>
            </div>
            <br /> <br />
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};

export default Technologies;
