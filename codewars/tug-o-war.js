// In this Kata we will play a classic game of Tug-o'-War!

// Two teams of 5 members will face off, the strongest of which will prevail. Each team member will be assigned a strength rating (1-9), with the most powerful members having a rating of 9. Your goal is to determine, based on the cumulative strength of the members of each team, which team will win the war.

// The teams will be represented by an array of arrays:

// [[5,0,3,2,1], [1,6,8,2,9]]  // 11 < 26 ; "Team 2 wins!"
// Your task is to return a string with which team won or if it was a tie.

// If team one is stronger, return the string "Team 1 wins!"
// If team two is stronger, return the string "Team 2 wins!"
// If the two teams are of equal strength, the team with the strongest Anchor (the member furthest from the center of the rope) will win. In the above example, the member with strength 5 is team one's Anchor and strength 9 is team two's Anchor.

// If the teams and the Anchors are both of equal strength, return the string "It's a tie!"
// The Anchors are members in each end of the rope.

// more examples:

// [[1,2,3,4,5], [1,2,3,4,5]] // Team 2 has stronger Anchor ; "Team 2 wins!"
// [[1,2,3,4,5], [5,4,3,2,1]] // Teams & Anchors are tied; "It's a tie!"
// Good luck!

function tug_o_war(teams) {
  const reduce = (arr) => {return arr.reduce( (a,b) => a+b)};
  const [a,b] = [reduce(teams[0]), reduce(teams[1])];
  const [t1, t2] = ['Team 1 wins!', 'Team 2 wins!'];
  return a > b ? t1 : b > a ? t2 : teams[0][0] > teams[1][teams[1].length - 1] ? t1 : teams[0][0] < teams[1][teams[1].length - 1] ? t2 : "It's a tie!"
}