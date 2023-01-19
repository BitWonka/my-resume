import React, { useState } from "react";

import "./Header.css";

const Header = () => {
  const [copyStatus, setCopySuccess] = useState("Copy");

  const copyToClipBoard = async (copyText) => {
    try {
      await navigator.clipboard.writeText(copyText);
      setCopySuccess("Copied!");
    } catch (err) {
      setCopySuccess("Try Again!");
    }
  };

  const moveFromCopy = () => {
    setCopySuccess("Copy");
  };

  return (
    <div className="container tui-bg-blue-white">
      <div className="row header">
        <div className="flex title">
          <img src="/assets/bitwonka.jpg" alt="" width="100px" height="100px" />
          <p className="title-text">BitWonka's Résumé</p>
        </div>
        <div></div>
        <div className="social">
          <a
            className=" social-item"
            href="https://github.com/BitWonka"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <a
            className=" social-item"
            href="https://twitter.com/BitW0nka"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
          <p className=" flex social-item email">
            <a href="mailto:bitwonka@gmail.com">Email</a>
            <button
              className="tui-button white-168 tooltip copy-button"
              onClick={() => copyToClipBoard("bitwonka@gmail.com")}
              onPointerLeave={() => moveFromCopy()}
            >
              <img className="copy-image" src="/assets/copy.png" alt="" />
              <span className="tooltiptext">{copyStatus}</span>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
