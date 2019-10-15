import React from "react";

import "./App.css";

function Throwers() {
  return (
    <div className="Container">
      <div className="Container-Text">Looking To Throw?</div>
      <div className="Container-StickFig">
        <div className="Head Color" />
        <div className="Stick Body Color" />
        <div className="Stick Appendage Left Arm Color" />
        <div className="Stick Appendage CatchArm Color StickOneArm" />
        <div className="Stick Appendage Left Leg Color" />
        <div className="Stick Appendage Right Leg Color" />
      </div>
      <div className="Frisbee" />
      <div className="Container-StickFig StickTwo">
        <div className="Head Color" />
        <div className="Stick Body Color" />
        <div className="Stick Appendage Left Arm Color" />
        <div className="Stick Appendage CatchArm Color StickTwoArm" />
        <div className="Stick Appendage Left Leg Color" />
        <div className="Stick Appendage Right Leg Color" />
      </div>
    </div>
  );
}

export default Throwers;
