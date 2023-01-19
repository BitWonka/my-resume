import React from "react";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import MainPanel from "./components/MainPanel";
import FooterBar from "./components/FooterBar";

import "./App.css";
import "tuicss/dist/tuicss.min.css";

function App() {
  return (
    <div className="App tui-bg-blue-black">
      <Header />
      <div className="tui-screen-1024-768 bordered tui-bg-blue-black main-div">
        <Navbar />

        <MainPanel />

        <FooterBar />
      </div>
    </div>
  );
}

export default App;
