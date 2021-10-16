import React, { useState } from "react";

import Settings from "./Settings";
import Icon1 from "../assets/logo.png";
import Icon2 from "../assets/usdt.png";

const Content = () => {
  const [swapChange, setSwapChange] = useState(false);
  const [settingOpen, toggleSetting] = useState(false);

  return (
    <div className="app-container">
      <div className="app-main">
        <div className="app-main-header">
          <div className="app-main-header-title">Exchange</div>
          <div
            className="app-main-header-button"
            onClick={() => toggleSetting(!settingOpen)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#f4f4f4"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="sc-gqPbQI izYinA"
            >
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
            </svg>
          </div>
          <Settings isOpen={settingOpen} />
        </div>
        <div className="app-main-content">
          <div
            className={
              swapChange ? "app-main-container-reverse" : "app-main-container"
            }
          >
            <div className="form-group">
              <div className="form-group-icon">
                <img alt="icon" src={Icon1} className="icon" />
                <span className="text">REPO</span>
              </div>
              <input
                id="amount"
                className="form-control"
                autoComplete="off"
                autoCorrect="off"
                type="text"
                pattern="^[0-9]*[.,]?[0-9]*$"
                placeholder="0.0"
                minLength={1}
                maxLength={79}
              />
            </div>
            <div className="form-group">
              <div className="form-group-icon">
                <img alt="icon" src={Icon2} className="icon" />
                <span className="text">USDT</span>
              </div>
              <input
                id="amount"
                className="form-control"
                autoComplete="off"
                autoCorrect="off"
                type="text"
                pattern="^[0-9]*[.,]?[0-9]*$"
                placeholder="0.0"
                minLength={1}
                maxLength={79}
              />
            </div>
            <div
              onClick={() => setSwapChange(!swapChange)}
              className={swapChange ? "swapp_changer active" : "swapp_changer"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#8F96AC"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </div>
          </div>
          <div className="form-btn">
            <button className="connect-btn">Connect Wallet</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
