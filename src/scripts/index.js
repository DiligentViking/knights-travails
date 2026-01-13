import { knightMoves } from "./knight-moves";

const path = knightMoves([0, 0], [7, 7]);

console.log(path);

console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
for (const move of path.toReversed()) {
  console.log(`[${move[0]},${move[1]}]`);
}
