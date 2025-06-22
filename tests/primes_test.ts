// Chapter 4 Exercise 1a:
// Test-Drive some code that will generate prime numbers
// that are less than 1000
import { assertEquals } from '@std/assert';
import { isPrime, nPrimes } from '../src/primes.ts';
import { testCases } from './test-utils.ts';

// nPrimes tests
testCases(
  'nPrimes: returns correct prime sequences for various inputs',
  nPrimes,
  [
    [1, [2]],
    [2, [2, 3]],
    [5, [2, 3, 5, 7, 11]],
  ],
);

Deno.test('nPrimes: produces 1000 primes when given 1000', () => {
  const result = nPrimes(1000);
  assertEquals(result.length, 1000);
});

// isPrime tests
testCases(
  'isPrime: returns false for all numbers less than 2',
  isPrime,
  [[1, false], [0, false], [-1, false]],
);

testCases(
  'isPrime: returns true for prime numbers',
  isPrime,
  [[2, true], [3, true], [5, true], [7, true], [11, true]],
);

testCases(
  'isPrime: returns false for composite numbers',
  isPrime,
  [[4, false], [6, false], [8, false], [9, false], [10, false]],
);
