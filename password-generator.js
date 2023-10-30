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

export function passwordGenerator(
  amountCharacters,
  useLetters,
  useNumbers,
  useSpecial
) {
  let passwordLetters = [];

  if (useLetters) {
    passwordLetters.push(
      getRandomCharacters(amountCharacters, uppercaseLetters)
    );
    passwordLetters.push(
      getRandomCharacters(amountCharacters, lowercaseLetters)
    );
  }
  if (useNumbers) {
    passwordLetters.push(getRandomCharacters(amountCharacters, numbers));
  }
  if (useSpecial) {
    passwordLetters.push(getRandomCharacters(amountCharacters, specialSigns));
  }

  // console.log("thats password letters", passwordLetters);
  let newCon = passwordLetters.flat();
  // console.log("concat", newCon);

  const password = getRandomCharacters(amountCharacters, newCon).join("");

  return password;
}

console.log("Password is:", passwordGenerator(20, true, true, false));
