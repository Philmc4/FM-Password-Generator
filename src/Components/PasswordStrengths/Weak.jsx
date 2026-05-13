import React from "react";

export default function Weak() {
  return (
    <div className="password-strength-total">
      <p className="text-2 uppercase text-my-grey-200">weak</p>
      <div className="all-strength-bars">
        <div className="strength-bar bg-my-orange-400 border-none!"></div>
        <div className="strength-bar bg-my-orange-400 border-none!"></div>
        <div className="strength-bar"></div>
        <div className="strength-bar"></div>
      </div>
    </div>
  );
}
