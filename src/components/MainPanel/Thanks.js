import React from "react";

const Thanks = () => {
  return (
    <React.Fragment>
      <div className="tui-divider"></div>
      <p>Thanks for visiting Fren !!!</p>
      <p>Reach out to me on:</p>
      <p>bitwonka@gmail.com</p>

      <p>
        <a
          className="mx-1"
          href="https://github.com/BitWonka"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>

        <a
          className="mx-1"
          href="https://twitter.com/BitW0nka"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>
      </p>
    </React.Fragment>
  );
};

export default Thanks;
