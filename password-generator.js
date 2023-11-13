import {
  specialSigns,
  uppercaseLetters,
  lowercaseLetters,
  numbersArray,
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

export function passwordGenerator(amountCharacters, settings) {
  let passwordLetters = [];
  const { letters, numbers, signs } = settings;
  console.log("Inner settings are:", letters, numbers, signs);

  if (letters) {
    passwordLetters.push(
      getRandomCharacters(amountCharacters, uppercaseLetters)
    );
    passwordLetters.push(
      getRandomCharacters(amountCharacters, lowercaseLetters)
    );
  }
  if (numbers) {
    passwordLetters.push(getRandomCharacters(amountCharacters, numbersArray));
  }
  if (signs) {
    passwordLetters.push(getRandomCharacters(amountCharacters, specialSigns));
  }

  // console.log("thats password letters", passwordLetters);
  let newCon = passwordLetters.flat();
  // console.log("concat", newCon);
  let password = getRandomCharacters(amountCharacters, newCon).join("");
  const startsWithSign = (password) =>
    specialSigns.some((sign) => password.startsWith(sign));

  console.log("Does it starts with a sign?", startsWithSign(password));
  while (startsWithSign(password)) {
    console.log("It was a sign");
    password = getRandomCharacters(amountCharacters, newCon).join("");
  }

  return password;
}
