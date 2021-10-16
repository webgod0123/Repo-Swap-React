import React from "react";
import imgLogo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="app-header">
      <div className="app-header-logo">
        <img src={imgLogo} className="app-logo" alt="logo" />
        <div className="app-header-title">RepoSwap</div>
      </div>
      <div>
        <button className="connect-btn">Connect Wallet</button>
      </div>
    </div>
  );
};

export default Header;
