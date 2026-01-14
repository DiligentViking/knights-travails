import { knightMoves } from "./knight-moves";

const path = knightMoves([0, 0], [7, 7]);

console.log(path);

console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
for (const move of path.toReversed()) {
  console.log(`[${move[0]},${move[1]}]`);
}


// ----------
// Racing:

console.log('\n----------\nRacing:\n\n');

function race100(func1, func2, ...args) {
  console.time(func1.name);
  for (let i = 0; i < 100; i++) func1(...args);
  console.timeEnd(func1.name);
  console.time(func2.name);
  for (let i = 0; i < 100; i++) func2(...args);
  console.timeEnd(func2.name);
}

import { knightMoves2 } from "./other's_solutions/sagar-shrigadi..graph";

race100(knightMoves, knightMoves2, [0, 0], [1, 2]);
race100(knightMoves, knightMoves2, [0, 0], [7, 7]);  // Won 20 out of 23

// console.log('\n');
// import { knightMoves2 } from "./other's_solutions/sagar-shrigadi..graph";

// race100(knightMoves, knightMoves2, [0, 0], [1, 2]);
// race100(knightMoves, knightMoves2, [0, 0], [7, 7]);  // Won 20 out of 23

console.log(knightMoves2([0, 0], [7, 7]));
