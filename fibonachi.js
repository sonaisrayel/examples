function generateFibonacci(n) {
    let fibonacciNumbers = [0, 1];
  
    for (let i = 2; i < n; i++) {
      const nextNumber = fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2];
      fibonacciNumbers.push(nextNumber);
    }
  
    return fibonacciNumbers;
  }
  
  const fibonacciSequence = generateFibonacci(10);
  console.log(fibonacciSequence);