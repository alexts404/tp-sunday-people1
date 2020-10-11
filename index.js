// Sunday toy problem for the weekend warriors out there

// Two beggars problem:
// In the city, two (friendly) beggars found a bunch of gold, stacked into neatly arranged columns, each of different height.
// The beggars decided to share the gold, each picking from the far right or the far left of the pile.

/*
Example:
For golds = [4,2,9,5,2,7], the output should be [14,15].
The pile of most left is 4,
The pile of most right is 7,
A choose the largest one -- > take 7

The pile of most left is 4,
The pile of most right is 2,
B choose the largest one -- > take 4

The pile of most left is 2,
The pile of most left is 2,
A choose the most left one -- > take 2

Etc.

The function should return the two values in an array with two elements: [beggarValue1, beggarValue2]
*/

function beggarsProblem (gold) {
  // implement function here
  let goldArr;
  // set up with fast fail
  try {
    goldArr = gold.split(',').map(item => parseInt(item));
  } catch (err) {
    return [0,0];
  };
  const beggars = {
    A: 0,
    B: 0,
  }

  const distributeGold = (gold, beggarName) => {
    if (gold.length <= 0) return;
    if (gold.length === 1) {
      beggars[beggarName] += gold[0];
      return;
    }
    const nextOneUp = beggarName === 'A' ? 'B' : 'A';
    const left = gold[0];
    const right = gold[gold.length - 1];
    if (right > left) {
      beggars[beggarName] += right;
      distributeGold(gold.slice(0,gold.length - 1), nextOneUp);
    } else {
      beggars[beggarName] += left;
      distributeGold(gold.slice(1), nextOneUp);
    }
  }
  distributeGold(goldArr, 'A');
  return [beggars.A, beggars.B];
}

module.exports = beggarsProblem;
