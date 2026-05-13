import React from "react";

export default function Medium() {
  return (
    <div className="password-strength-total">
      <p className="text-2 uppercase text-my-grey-200">medium</p>
      <div className="all-strength-bars">
        <div className="strength-bar bg-my-yellow-300 border-none!"></div>
        <div className="strength-bar bg-my-yellow-300 border-none!"></div>
        <div className="strength-bar bg-my-yellow-300 border-none!"></div>
        <div className="strength-bar"></div>
      </div>
    </div>
  );
}
