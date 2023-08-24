/*
 * Following is the link from where I have taken some score for other test cases
 * https://serg.cs.lth.se/fileadmin/serg/Experiment_Instruction_TDD.pdf
 */
import { bowlingGame } from "./bowlingGame";

describe("bowlingGame", () => {
  test("Returns the score of the game", () => {
    //Arrange
    let rolls = "X X X X X X X X X X X X";
    //Action and Assert
    expect(bowlingGame(rolls)).toBe(300);

    //Arrange
    rolls = "9- 9- 9- 9- 9- 9- 9- 9- 9- 9-";
    //Action and Assert
    expect(bowlingGame(rolls)).toBe(90);

    //Arrange
    rolls = "5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/5";
    //Action and Assert
    expect(bowlingGame(rolls)).toBe(150);

    //Arrange
    rolls = "15 36 72 36 44 53 33 45 81 26";
    //Action and Assert
    expect(bowlingGame(rolls)).toBe(81);

    //Arrange
    rolls = "X 36 72 36 44 53 33 45 81 26";
    //Action and Assert
    expect(bowlingGame(rolls)).toBe(94);

    //Arrange
    rolls = "1/ 36 72 36 44 53 33 45 81 26";
    //Action and Assert
    expect(bowlingGame(rolls)).toBe(88);

    //Arrange
    //rolls = "X 4/ 72 36 44 53 33 45 81 26";
    rolls = "X 4/ 72 36 44 53 33 45 81 26";
    // //Action and Assert
    expect(bowlingGame(rolls)).toBe(103);
  });
});
