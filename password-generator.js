import {
  specialSigns,
  uppercaseLetters,
  lowercaseLetters,
  numbers,
} from "./src/data.js";

const getRandomCharacters = (amountCharacters, charactersArray) => {
  let passwordLetters = [];

  for (let i = 0; i < amountCharacters; i++) {
    const randomNumber = Math.floor(Math.random() * charactersArray.length);
    const randomCharacter = charactersArray[randomNumber];
    passwordLetters.push(randomCharacter);
  }
  return passwordLetters;
};
console.log(getRandomCharacters(10, numbers));
export function passwordGenerator() {}
