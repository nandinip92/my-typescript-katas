import { bowlingGame } from "./bowlingGame";

describe("bowlingGame", () => {
  test("Returns the score of the game", () => {
    let rolls = "X X X X X X X X X X X X";
    expect(bowlingGame(rolls)).toBe(300);

    rolls = "9- 9- 9- 9- 9- 9- 9- 9- 9- 9-";
    expect(bowlingGame(rolls)).toBe(90);

    rolls = "5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/5";
    expect(bowlingGame(rolls)).toBe(150);
  });
});
