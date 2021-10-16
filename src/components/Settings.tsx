import React, { useState } from "react";

const Settings = (props: { isOpen: boolean }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={props.isOpen ? "settings active" : "settings"}>
      <div className="settings-content">
        <div className="settings-title">Transaction Settings</div>
        <div className="settings-main">
          <div className="settings-row">
            <div className="settings-title">Slippage tolerance</div>
            <div className="settings-form">
              <button id="Auto">Auto</button>
              <div className="settings-input">
                <input placeholder="0.10" className="form-control" /> %
              </div>
            </div>
          </div>
          <div className="settings-row">
            <div className="settings-title">Transaction deadline</div>
            <div className="settings-form">
              <div className="settings-input">
                <input placeholder="30" className="form-control" />
              </div>
              <div className="settings-title" style={{ marginLeft: "5px" }}>
                minutes
              </div>
            </div>
          </div>
          <div className="settings-title">Interface Settings</div>
          <div className="toggle-mode">
            <div className="settings-title">Toggle Expert Mode</div>
            <div className="toggle-btn-content">
              <span
                onClick={() => setToggle(true)}
                className={toggle ? "toggle-btn active" : "toggle-btn"}
              >
                On
              </span>
              <span
                onClick={() => setToggle(false)}
                className={!toggle ? "toggle-btn active" : "toggle-btn"}
              >
                Off
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
