import { assertThrows } from '@std/assert';
import { nthFibonacci } from '../src/fib.ts';
import { testCasesWithSubtests, testThrows } from './test-utils.ts';

// These tests are designed to mirror the key behaviors of the algorithm;
// While we could implement the entire test table in a single test,
// providing more descriptive tests for each 'branch' of the algorithm
// helps us more effectively determine the reason for failure if
// we make a bad change to the code (and also helps us document the
// algorithm itself).

testCasesWithSubtests(
  'nthFibonacci returns index number for first 2 indices',
  nthFibonacci,
  [
    [0, 0],
    [1, 1],
  ],
  (n, nthFib) => `${n} produces ${nthFib}`,
);

testCasesWithSubtests(
  'nthFibonacci returns sum of previous 2 nthFibs for given index after first 2',
  nthFibonacci,
  [
    [2, 1],
    [3, 2],
    [4, 3],
    [5, 5],
    [6, 8],
    [7, 13],
  ],
  (n, nthFib) => `${n} produces ${nthFib}`,
);

const err = 'index must be zero or positive integer';
testThrows(
  'nthFibonacci: index must be zero or positive integer',
  nthFibonacci,
  [
    [-1, err],
    [-20, err],
    [-100, err],
  ],
);

Deno.test('index must be positive integer', () => {
  assertThrows(() => nthFibonacci(-1));
});
