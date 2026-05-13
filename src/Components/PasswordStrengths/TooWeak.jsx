import React from "react";

export default function TooWeak() {
  return (
    <div className="password-strength-total">
      <p className="text-2 uppercase text-my-grey-200">too weak!</p>
      <div className="all-strength-bars">
        <div className="strength-bar bg-my-red-500 border-none!"></div>
        <div className="strength-bar"></div>
        <div className="strength-bar"></div>
        <div className="strength-bar"></div>
      </div>
    </div>
  );
}
