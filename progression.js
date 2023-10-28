const arr = [2, 4, 6, 8, 23, 45, 18, 20, 22, 13, 14, 15];

function isMathematicalProgression(arr) {
  if (arr.length < 3) {
    return false; // A progression requires at least 3 elements.
  }

  const commonDifference = arr[1] - arr[0];

  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] !== commonDifference) {
      return false;
    }
  }

  return true;
}

function findMathematicalProgressions(arr) {
  const progressions = [];
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 2; j < arr.length; j++) {
      const subarray = arr.slice(i, j + 1);
      if (isMathematicalProgression(subarray)) {
        progressions.push(subarray);
      }
    }
  }
  return progressions;
}

const mathematicalProgressions = findMathematicalProgressions(arr);

mathematicalProgressions.forEach((progression) => {
  console.log(progression);
});
