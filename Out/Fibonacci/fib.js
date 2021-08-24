// memoization - memo 
const fib = (n, memo = {}) => {
    // check for existing keys, if n is in memo, return its value
    if (n in memo) return memo[n];

    if (n <= 2) return 1; // 1, 1 

    // save value in memo
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo); // 2, 3, 5, 8, ...

    // return the memo value
    return memo[n];
}
