import "./style.css";
import { passwordGenerator } from "./password-generator";

const resultParagraph = document.getElementById("result-window");
const resultButton = document.getElementById("result-button");

resultButton.addEventListener("click", () => {
  resultParagraph.innerText = passwordGenerator(20, true, true, true);
});
