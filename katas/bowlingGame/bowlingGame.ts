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
 * 2. assign totalScore = 0;
 * 3. When STRIKE is in the frame then
 *      totalScore+ = strike value 'X' + next to balls score
 *  (3b) IF frame has a STRIKE followed by SPARE '/' then
 *      totalScore += StrikeValue + only SPAR value = 10 +10
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
  let totalScore = 0;

  rolls.forEach((ball, index) => {
    // IF X then get the next two balls score
    if (ball === "X" && index < rolls.length - 2) {
      const bonusBall1 = rolls[index + 1] as keyof SCORES;
      const bonusBall2 = rolls[index + 2] as keyof SCORES;
      // For STRIKE 'X' followed by SPAR '/'
      // IF the bonus ball is to be a SPARE then just add SPARE value i.e., 10
      // ELSE add both bonus ball scores to the totalScore
      if (bonusBall2 === "/") totalScore += scoreLookup[ball] + 10;
      else {
        totalScore +=
          scoreLookup[ball] + scoreLookup[bonusBall1] + scoreLookup[bonusBall2];
      }
    }
    // IF SPAR '/' then adding the next ball
    if (ball === "/" && index < rolls.length - 1) {
      const bonusBall = rolls[index + 1];
      totalScore += scoreLookup[ball] + scoreLookup[bonusBall as keyof SCORES];
    }

    // If it is not 'X' or '/' then it might be a number or '-' so add it to the score
    if (ball !== "X" && ball !== "/" && rolls[index + 1] !== "/") {
      // IF the last roll is SPARE then ignore the bonus roll and do NOTHING
      // as it was already taken care by the SPAR IF statement above
      // ELSE add it to the total score
      if (index === rolls.length - 1 && rolls[index - 1] === "/") {
      } else {
        totalScore += scoreLookup[ball as keyof SCORES];
      }
    }
  });
  return totalScore;
}
