import { passwordGenerator } from "./password-generator";

describe("TEST", () => {
  it("should not pass", () => {
    expect(passwordGenerator()).toBe("johnie is dead");
  });
});
