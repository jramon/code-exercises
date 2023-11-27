function primeNumsUpTo(n) {
    const primes = [];
    let aux = 0;

    while(aux <= n) {
        if(isPrime(aux)) {
            primes.push(aux);
        } 

        aux++;
    }

    return primes;
}

function isPrime(num) {
    if (num <= 1) { 
        return false;
    } else {
        for (var i = 2; i < num; i++) {
            if (num % i === 0) {
                return false; 
            }
        }
        return true;
    }  
}

// console.log(isPrime(9));
console.log('is it Prime?', isPrime(2));
console.log('Prime numbers up to', primeNumsUpTo(201));
