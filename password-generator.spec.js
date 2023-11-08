import { passwordGenerator } from "./password-generator";

describe("Regular password generator", () => {
  it("should give correct number characters", () => {
    expect(passwordGenerator(20, true, true, true)).toHaveLength(20);
    expect(passwordGenerator(15, true, true, true)).toHaveLength(15);
  });
  it("should have only numbers", () => {
    expect(passwordGenerator(15, false, true, false)).toMatch(/^\d+$/);
  });
  it("should have numbers but can have letters and signs", () => {
    expect(passwordGenerator(15, true, true, true)).toMatch(
      /^(?=.*\d)[\w\W]*$/
    );
  });
  it("must have numbers and sign but can't have letters", () => {
    expect(passwordGenerator(15, false, true, true)).toMatch(
      /^(?=.*\d)[\w\W]*$/
    );
  });
  it("should not have numbers, can have letters and signs", () => {
    expect(passwordGenerator(15, true, false, true)).toMatch(/^[^0-9]+$/);
  });
  it("should not have numbers and letters", () => {
    expect(passwordGenerator(15, false, false, true)).toMatch(
      /^[^A-Za-z0-9]+$/
    );
  });
  it("should not have numbers and signs", () => {
    expect(passwordGenerator(15, true, false, false)).toMatch(/^[A-Za-z]+$/);
  });
  it("should not have sign, but numbers and letters", () => {
    expect(passwordGenerator(15, true, true, false)).toMatch(/^[A-Za-z0-9]+$/);
  });
});
