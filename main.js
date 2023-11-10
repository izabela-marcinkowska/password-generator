import "./style.css";
import { passwordGenerator } from "./password-generator";

const resultParagraph = document.getElementById("result-window");
const resultButton = document.getElementById("result-button");

const getAmountChar = () => {
  const numChar = document.getElementById("amount").value;
  const parsedNr = Number(numChar);
  return parsedNr;
};

resultButton.addEventListener("click", () => {
  const amountChar = getAmountChar();
  resultParagraph.innerText = passwordGenerator(20, true, false, true);
  console.log("amount characters is:", amountChar);
});
