import { passwordGenerator } from "./password-generator";

describe("Regular password outcomes", () => {
  it("should give correct number characters", () => {
    const settings = {
      letters: true,
      numbers: true,
      signs: true,
    };
    expect(passwordGenerator(20, settings)).toHaveLength(20);
    expect(passwordGenerator(15, settings)).toHaveLength(15);
  });
  it("should have only numbers", () => {
    const settings = {
      letters: false,
      numbers: true,
      signs: false,
    };
    expect(passwordGenerator(15, settings)).toMatch(/^\d+$/);
  });
  it("should have numbers but can have letters and signs", () => {
    const settings = {
      letters: true,
      numbers: true,
      signs: true,
    };
    expect(passwordGenerator(15, settings)).toMatch(/^(?=.*\d)[\w\W]*$/);
  });
  it("must have numbers and sign but can't have letters", () => {
    const settings = {
      letters: false,
      numbers: true,
      signs: true,
    };
    expect(passwordGenerator(15, settings)).toMatch(/^(?=.*\d)[\w\W]*$/);
  });
  it("should not have numbers, can have letters and signs", () => {
    const settings = {
      letters: true,
      numbers: false,
      signs: true,
    };
    expect(passwordGenerator(15, settings)).toMatch(/^[^0-9]+$/);
  });

  it("should not have numbers and signs", () => {
    const settings = {
      letters: true,
      numbers: false,
      signs: false,
    };
    expect(passwordGenerator(15, settings)).toMatch(/^[A-Za-z]+$/);
  });
  it("should not have sign, but numbers and letters", () => {
    const settings = {
      letters: true,
      numbers: true,
      signs: false,
    };
    expect(passwordGenerator(15, settings)).toMatch(/^[A-Za-z0-9]+$/);
  });
});
