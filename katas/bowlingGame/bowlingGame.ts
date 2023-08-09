type SCORES = {
  "-": 0;
  "1": 1;
  "2": 2;
  "3": 3;
  "4": 4;
  "5": 5;
  "6": 6;
  "7": 7;
  "8": 8;
  "9": 9;
  X: 10;
  "/": 10;
};

/*
 *  *-------*
 *  | RULES |
 *  *-------*
 *
 * 1. 10 Frames for a bowler. In each frame bowler gets upto two tries.
 *
 * 2. If first ball is STRIKE ----> you will get next two balls as bonus.
 *    Eg: Frame1= X and Frame2= 7 1 then
 *          Scores for Frame1= 10+7+1 = 18 and Frame2= 8
 *          so, TotalScore after 2 frames is 10+8= 26
 *
 * 3. If SPARE in first frame ----> you will get the values of the next balls as bonus.
 *      Eg: Fame1= 6 4 = STRIKE (/) and Frame2= 8 1
 *          Scores for Frame1= 6+4+8= 18 and Frame2= 8+1= 9
 *          so, TotalScore after two frames is 18+9 = 27
 *
 * 4. For FINAL FRAME:
 *      4.1 If STRIKE in the first delivery ----> opportunity to strike int he remaining two and have three deliveries
 *          4.1.1 If scored STRIKES in each of your final three deliveries, the score for the final frame world be 30(10+10+10)
 *      4.2 If SPARE in the final frame ----> You will get thirs delivery as bonus
 * Eg: a SPARE 9 and 1 followed by a strike = 20 (9+1+10)
 *
 *
 *   *------------*
 *   | Psudo code |
 *   *------------*
 * 1. Get the input of the game in string and split it by space
 *
 *
 *
 *
 *
 */

export function bowlingGame(inputRolls: string): number {
  const scoreLookup: SCORES = {
    "-": 0,
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    X: 10,
    "/": 10,
  };

  let rolls = inputRolls.replace(/\s+/g, "").split("");
  //   const frameCount = inputRolls.split(" ").length;

  //   //checking the length of the frames and number of rolls
  //   if (rolls.length > frameCount) {
  //     const bonusRollsCount = rolls.length - frameCount;
  //   }
  //console.log(rolls);

  let totalScore = 0;

  rolls.forEach((ball, index) => {
    //if X then get the next two balls score
    if (ball === "X" && index < rolls.length - 2) {
      const bonusBall1 = rolls[index + 1];
      const bonusBall2 = rolls[index + 2];
      totalScore +=
        scoreLookup[ball] +
        scoreLookup[bonusBall1 as keyof SCORES] +
        scoreLookup[bonusBall2 as keyof SCORES];
    }
    // If it is not 'X' or '/' then it might be a number or '-' so add to the scores
    if (ball !== "X" && ball !== "/") {
      totalScore += scoreLookup[ball as keyof SCORES];
    }
  });
  return totalScore;
}
