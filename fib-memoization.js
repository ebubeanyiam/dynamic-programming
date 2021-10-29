// Fibonacci Sequence Calculator

// AIM: Get the number at a particular position in the fibonacci sequence.

// number :    1,  2,  3,  4,  5,  6,  7,  8,  9
// f(number):  1,  1,  2,  3,  5,  8,  13, 21, 34

// Basic Function calculating the number in n position of the fiboacci sequence

// Methodology: Function uses recursion and runs at O(2^n) time which causes it to be slow when taking in large number arguments
// Recursion
const fib = (n) => {
  if (n <= 2) return 1;

  return fib(n - 1) + fib(n - 2);
};

console.log(fib(50));

// Optimized Function calculating the number in n position of the fiboacci sequence

// Methodology: Function uses recursion and memoization and runs at O(n) time which increased it's calculation speed
// Recursion + Memoization
const fibOptimized = (n, memo = {}) => {
  if (n in memo) return memo[n];

  if (n <= 2) return 1;

  memo[n] = fibOptimized(n - 1, memo) + fibOptimized(n - 2, memo);
  return memo[n];
};

console.log(fibOptimized(50));
