import React from "react";

export default function Strong() {
  return (
    <div className="password-strength-total">
      <p className="text-2 uppercase text-my-grey-200">strong</p>
      <div className="all-strength-bars">
        <div className="strength-bar bg-my-green-200 border-none!"></div>
        <div className="strength-bar bg-my-green-200 border-none!"></div>
        <div className="strength-bar bg-my-green-200 border-none!"></div>
        <div className="strength-bar bg-my-green-200 border-none!"></div>
      </div>
    </div>
  );
}
