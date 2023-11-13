import "./style.css";
import { passwordGenerator } from "./password-generator";

const resultParagraph = document.getElementById("result-window");
const resultButton = document.getElementById("result-button");

const getAmountChar = () => {
  const numChar = document.getElementById("amount").value;
  const parsedNr = Number(numChar);
  return parsedNr;
};

const getSettings = () => {
  const checkedBoxLetters = document.querySelector("#letters").checked;
  const checkedBoxNumbers = document.querySelector("#numbers").checked;
  const checkedBoxSigns = document.querySelector("#signs").checked;
  console.log(
    "The settings are:",
    checkedBoxLetters,
    checkedBoxNumbers,
    checkedBoxSigns
  );
  return {
    letters: checkedBoxLetters,
    numbers: checkedBoxNumbers,
    signs: checkedBoxSigns,
  };
};

resultButton.addEventListener("click", () => {
  const settings = getSettings();
  console.log("The settings", settings);
  const amountChar = getAmountChar();
  resultParagraph.innerText = passwordGenerator(amountChar, settings);
  console.log("amount characters is:", amountChar);
});
