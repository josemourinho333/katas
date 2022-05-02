const blocksAway = function(directions) {

  const output = {
    east: 0,
    north: 0,
  }

  let facing;

  const findDirection = (directions, facing) => {
    for (let i = 2; i < directions.length; i += 2) {

      if (facing === 'east') {
        if (directions[i] === 'right' && directions[i-4] === undefined) {
          facing = 'east';
          output.east += directions[i+1];
        } else if (directions[i] === 'right') {
          facing = 'south';
          output.north -= directions[i+1];
        } else if (directions[i] === 'left') {
          facing = 'north';
          output.north += directions[i+1];
        }
      } else if (facing === 'north') {
        if (directions[i] === 'left' && directions[i-4] === undefined) {
          facing = 'north';
          output.north += directions[i+1];
        } else if (directions[i] === 'left') {
          facing = 'west';
          output.east -= directions[i+1];
        } else if (directions[i] === 'right') {
          output.east += directions[i+1];
          facing = 'east';
        }
      } else if (facing === 'west') {
        if (directions[i] === 'right') {
          facing = 'north';
          output.north += directions[i+1];
        } else if (directions[i] === 'left') {
          facing = 'south';
          output.north -= directions[i+1];
        }
      } else if (facing === 'south') {
        if (directions[i] === 'right') {
          facing = 'west';
          output.east -= directions[i+1];
        } else if (directions[i] === 'left') {
          facing = 'east';
          output.east += directions[i+1];
        }
      }

    }
  }

  if (directions[0] === 'right') {
    facing = 'east';
    output.east += directions[1];
    findDirection(directions, facing);
  } else if (directions[0] === 'left') {
    facing = 'north';
    output.north += directions[1];
    findDirection(directions, facing);
  }

  return output;
  
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));