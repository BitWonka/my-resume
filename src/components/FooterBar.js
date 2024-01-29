import React from "react";

const FooterBar = () => {
  return (
    <div className="tui-statusbar footer">
      <ul>
        <li>
          <a href="#!">
            <span className="red-168-text">F1</span> Help
          </a>
        </li>
        <li>
          <a href="#!">
            <span className="red-168-text">F2</span> Save
          </a>
        </li>
        <li>
          <a href="#!">
            <span className="red-168-text">F3</span> Open
          </a>
        </li>
        <li>
          <a href="#!">
            <span className="red-168-text">Alt+F9</span> Compile
          </a>
        </li>
        <span className="tui-statusbar-divider"></span>
        <li>
          <a href="#!">
            <span className="red-168-text">F10</span> Menu
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterBar;
