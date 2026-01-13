export function knightMoves(start, end) {
  const queue = [{coord: start, parent: null}];
  const map = {};
  let pos = start;
  let i = 0;
  while (true) {
    if (i > 1000) {
      console.log('FIREBREAK');
      break;
    }
    // Find possible positions from current positions
    const [posX, posY] = pos;
    const mapKey = posX.toString() + posY.toString();
    map[mapKey] = 0;
    const moves = [[posX-1, posY+2], [posX+1, posY+2], [posX+2, posY+1], [posX+2, posY-1], [posX+1, posY-2], [posX-1, posY+2], [posX-2, posY-1], [posX-2, posY+1]];
    // Add valid positions
    for (const [x, y] of moves) {
      if (x < 0 || x > 7 || y < 0 || y > 7) {
        continue;
      }
      if (map[`${x}${y}`]) {
        continue;
      }
      queue.push({coord: [x, y], parent: i});
      map[mapKey]++;
      // Check if end position found, then return path
      if (x === end[0] && y === end[1]) {
        const path = [];
        path.push([x, y]);
        while (queue[i].parent !== null) {
          path.push(queue[i].coord);
          i = queue[i].parent;
        }
        path.push(start);
        return path;
      }
    };
    // Go to next position in line
    do {
      i++;
      pos = queue[i].coord;
    } while (map[`${pos[0]}${pos[1]}`]);
  }
}
