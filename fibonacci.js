/* 
    By Definition:  
    Fib(0) = 0
    Fib(1) = 1

    Fib(n) = Fib(n-1) + Fib (n-2)
*/


/* 
  Generates Fibonacci series

  @return the Fibonacci number of n 
*/
function fibIterative(n) {
  const series = [1,1];

  if(n <= 1) {
      return n;
  }

  for(let i = 2; i < n; i++) {
     series.push(series[i-1] + series[i-2])
  }

  return series.pop();
}

console.log('Fibonacci SERIES iterative (crates extra array)', fibIterative(10));


function fibNoExtraSpace(n) {
  let i = 2; // will start looping from Fib(2)
  let prev1 = 1; // Fib(1) 
  let prev2 = prev1; // Fib(0), could also be initalized as 1
  let fib = prev1; // initial result (before loop)

  do  {
      fib = prev1 + prev2;
      prev2 = prev1; // in the next iteration the 'second preceding' fib will become the 'first precedingæ 
      prev1 = fib; // current fib will become the 'first preceding' in the next iteration
      
      i++;
      
      console.log(`Fibonacci of ${i}:`, fib)
  } while(i < n);

  return fib;
}

console.log('Fibonacci Number, does not require Extra Space:', fibNoExtraSpace(3));


function* fibGenerator() { 
  let [prev, curr] = [0, 1];
  while (true) {
    [prev, curr] = [curr, prev + curr];
    yield curr;
  }
}

// Generator function of Fibonacci numbers
for (const n of fibGenerator()) {
  console.log(n);
  // truncate the sequence at 1000
  if (n >= 1000) {
    break;
  }
}