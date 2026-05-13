import "./index.css";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { useState } from "react";
import CopiedIcon from "./assets/images/icon-copy.svg";
import Checkbox from "./Components/Checkbox";
import { MdArrowForward } from "react-icons/md";
import { getSpecialChar, getRandomChar } from "./Components/Utils";
import TooWeak from "./Components/PasswordStrengths/TooWeak";
import Weak from "./Components/PasswordStrengths/Weak";
import Medium from "./Components/PasswordStrengths/Medium";
import Strong from "./Components/PasswordStrengths/Strong";
import Default from "./Components/PasswordStrengths/Default";

function App() {
  const [password, setPassword] = useState("P4$5WOrD!");
  const [isCopied, setIsCopied] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [passwordValues, setPasswordValues] = handlePasswordValueChange({
    length: 0,
    uppercase: false,
    lowercase: false,
    number: false,
    symbol: false,
  });

  const passwordFields = [
    { field: passwordValues.uppercase, getChar: () => getRandomChar(65, 90) },
    { field: passwordValues.lowercase, getChar: () => getRandomChar(97, 122) },
    { field: passwordValues.number, getChar: () => getRandomChar(48, 57) },
    { field: passwordValues.symbol, getChar: () => getSpecialChar() },
  ];

  function handlePasswordValueChange(initialValues) {
    const [passwordValues, setPasswordValues] = useState(initialValues);

    return [
      passwordValues,
      (e) => {
        setPasswordValues({
          ...passwordValues,
          [e.target.name]:
            e.target.type === "checkbox" ? e.target.checked : e.target.value,
        });
      },
    ];
  }

  function generatePassword(e) {
    e.preventDefault();
    let generatedPassword = "";
    const checkedFields = passwordFields.filter(({ field }) => field);

    for (let i = 0; i < passwordValues.length; i++) {
      const index = Math.floor(Math.random() * checkedFields.length);
      console.log(checkedFields.length);
      setPasswordStrength(checkedFields.length);
      const letter = checkedFields[index]?.getChar();

      if (letter) {
        generatedPassword += letter;
      }
    }
    if (generatedPassword) {
      setPassword(generatedPassword);
    }
    setIsCopied(false);

    if (
      !passwordValues.uppercase &&
      !passwordValues.lowercase &&
      !passwordValues.number &&
      !passwordValues.symbol
    ) {
      alert("Please select an attribute for your password");
    }
    if (passwordValues.length === 0) {
      alert("Please increase the length of your password");
    }
  }

  return (
    <>
      <main>
        <h1 className="text-2 text-my-grey-600">Password Generator</h1>
        <div className="flex flex-col gap-6">
          <div className="password-outcome-container">
            <p
              className={`text-1 ${password === "P4$5WOrD!" ? "text-my-grey-700" : "text-my-grey-200"}`}
            >
              {password}
            </p>
            <div className="flex gap-4 items-center">
              {isCopied ? (
                <p className="text-3 text-my-green-200">COPIED</p>
              ) : (
                ""
              )}
              <button
                onClick={() => {
                  setIsCopied(true);
                  navigator.clipboard.writeText(password);
                }}
              >
                <img
                  src={CopiedIcon}
                  alt="copied icon"
                  className="cursor-pointer"
                />
              </button>
            </div>
          </div>
          <div className="password-input-main-container">
            <div className="password-length-main-container">
              <div className="password-length-title-container">
                <p className="text-3 text-my-grey-200">Character Length</p>
                <p className="text-1 text-my-green-200">
                  {passwordValues.length}
                </p>
              </div>
              <input
                type="range"
                id="length"
                min={0}
                max={20}
                name="length"
                defaultValue={passwordValues.length}
                onChange={setPasswordValues}
              />
            </div>
            <div className="checkbox-container">
              <Checkbox
                id={"uppercase-letters"}
                text={"include Uppercase Letters"}
                name={"uppercase"}
                checked={passwordValues.uppercase}
                handleChange={setPasswordValues}
              />
              <Checkbox
                id={"lowercase-letters"}
                text={"Include Lowercase Letters"}
                name={"lowercase"}
                checked={passwordValues.lowercase}
                handleChange={setPasswordValues}
              />
              <Checkbox
                id={"numbers"}
                text={"Include Numbers"}
                name={"number"}
                checked={passwordValues.number}
                handleChange={setPasswordValues}
              />
              <Checkbox
                id={"symbols"}
                text={"Include Symbols"}
                name={"symbol"}
                checked={passwordValues.symbol}
                handleChange={setPasswordValues}
              />
            </div>
            <div className="strength-and-button-container">
              <div className="password-strength-container">
                <p className="text-3 uppercase text-my-grey-600">strength</p>
                {passwordStrength === 0 && <Default />}
                {passwordStrength === 1 && <TooWeak />}
                {passwordStrength === 2 && <Weak />}
                {passwordStrength === 3 && <Medium />}
                {passwordStrength === 4 && <Strong />}
              </div>
              <button
                onClick={generatePassword}
                type="submit"
                className="btn-1 text-3 uppercase text-my-grey-800 hover:text-my-green-200"
              >
                generate
                <MdArrowForward className="button-generate-icon" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
