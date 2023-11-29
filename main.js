import "./style.css";
import { passwordGenerator } from "./password-generator";

const resultOutput = document.getElementById("result-window");
const resultButton = document.getElementById("result-button");
const form = document.getElementById("form");
const btn = document.getElementById("btn");

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

resultButton.addEventListener("click", (event) => {
  event.preventDefault();
  const settings = getSettings();
  const amountChar = getAmountChar();
  resultOutput.value = passwordGenerator(amountChar, settings);
});

form.addEventListener("change", () => {
  const settings = getSettings();
  const onlySignSet = () => {
    if (settings.signs && !settings.letters && !settings.numbers) {
      return true;
    }
  };
  const nothingSet = () => {
    if (!settings.signs && !settings.letters && !settings.numbers) {
      return true;
    }
  };
  resultButton.disabled = false;
  if (onlySignSet() || nothingSet()) {
    resultButton.disabled = true;
  }
});

const copyContent = async () => {
  try {
    await navigator.clipboard.writeText(resultOutput.value);
    console.log("Content copied to clipboard");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};

btn.addEventListener("click", () => {
  copyContent();
});
