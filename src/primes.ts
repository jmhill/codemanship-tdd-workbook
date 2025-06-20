export function nPrimes(n = 1) {
  if (n <= 0) {
    return [];
  }

  // First prime number is 2,
  // so just initialize the array with that
  const primes: number[] = [2];

  let number = 3;
  while (primes.length < n) {
    if (isPrime(number)) {
      primes.push(number);
    }
    number += 2; // Skip even numbers
  }

  return primes;
}

export function isPrime(number: number) {
  if (number < 2) {
    return false;
  }
  if (number === 2) {
    return true;
  }
  if (number % 2 === 0) {
    return false;
  }

  const sqrt = Math.sqrt(number);
  for (let i = 3; i <= sqrt; i += 2) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
