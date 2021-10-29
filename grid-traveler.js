// Grid Traveler

// AIM: Get the minimum nimber of possible moves it'll take to travel to the last point of a n by m grid.
// INSTRUCTIONS: You can only move down and to the right of the grid with the last point being the bottom right corner of the grid
// PARAMETERS: Function takes in two arguments, n and m, which will equate to a n x m grid

// Basic Function calculating the number of steps it'll take to traverse a n by m grid using the instructions above

// Methodology: Function uses recursion and runs at O(2^n + m) time which causes it to be slow when taking in large number arguments
// Recursion
const gridTraveler = (m, n) => {
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 1) return 0;

  return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
};

console.log(gridTraveler(18, 18));

// Optimized Function calculating the number of possible moves to take in a n x m grid to get to the bottom right point of the grid

// Methodology: Function uses recursion and memoization and runs at O(n * m) time which increased it's calculation speed
// Recursion + Memoization
const gridTravelerOptimized = (m, n, memo = {}) => {
  const key = m + "," + n;

  if (key in memo) return memo[key];

  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;

  memo[key] =
    gridTravelerOptimized(m - 1, n, memo) +
    gridTravelerOptimized(m, n - 1, memo);
  return memo[key];
};

console.log(gridTravelerOptimized(100, 100));
