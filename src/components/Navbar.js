import React from "react";

const Navbar = () => {
  return (
    <nav className="tui-nav relative">
      <span className="tui-datetime" data-format="h:m:s a"></span>
      <ul>
        <li className="tui-sidenav-button red-168-text">≡</li>
        <li className="tui-dropdown">
          <span className="red-168-text">F</span>ile
          <div className="tui-dropdown-content">
            <ul>
              <li>
                <a href="#!">
                  <span className="red-168-text">N</span>ew
                </a>
              </li>
              <li>
                <a href="#!">
                  <span className="red-168-text">O</span>pen...
                  <span className="tui-shortcut">F3</span>
                </a>
              </li>
              <li>
                <a href="#!">
                  <span className="red-168-text">S</span>ave
                  <span className="tui-shortcut">F2</span>
                </a>
              </li>
              <li>
                <a href="#!">
                  S<span className="red-168-text">a</span>ve as...
                </a>
              </li>
              <li>
                <a href="#!">
                  Save a<span className="red-168-text">l</span>l
                </a>
              </li>
              <div className="tui-black-divider"></div>

              {/* <!-- SUBMENU --> */}

              <li className="tui-dropdown block">
                <span className="right">►</span>
                <span className="red-168-text">M</span>ore
                <div className="tui-dropdown-content">
                  <ul>
                    <li>
                      <a href="#!">
                        <span className="red-168-text">C</span>hange dir...
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <span className="red-168-text">P</span>rint
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <span className="red-168-text">D</span>OS shell
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <div className="tui-black-divider"></div>
              <li>
                <a href="#!">
                  <span className="red-168-text">Q</span>uit
                  <span className="tui-shortcut">F10</span>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="tui-dropdown">
          <span className="red-168-text">E</span>dit
        </li>
        <li className="tui-dropdown">
          <span className="red-168-text">V</span>iew
        </li>
        <li className="tui-dropdown">
          <span className="red-168-text">H</span>elp
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
