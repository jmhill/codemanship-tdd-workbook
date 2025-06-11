import { assertEquals, assertThrows } from '@std/assert';
import { nthFibonacci } from '../src/fib.ts';

// These tests are designed to mirror the key behaviors of the algorithm;
// While we could implement the entire test table in a single test,
// providing more descriptive tests for each 'branch' of the algorithm
// helps us more effectively determine the reason for failure if
// we make a bad change to the code (and also helps us document the
// algorithm itself).

Deno.test('nthFibonacci returns index number for first 2 indices', async (t) => {
  const cases: [n: number, nthFib: number][] = [
    [0, 0],
    [1, 1],
  ];

  for (const [n, nthFib] of cases) {
    await t.step(`${n} produces ${nthFib}`, () => {
      assertEquals(nthFibonacci(n), nthFib);
    });
  }
});

Deno.test('nthFibonacci returns sum of previous 2 nthFibs for given index after first 2', async (t) => {
  const cases: [n: number, nthFib: number][] = [
    [2, 1],
    [3, 2],
    [4, 3],
    [5, 5],
    [6, 8],
    [7, 13],
  ];

  for (const [n, nthFib] of cases) {
    await t.step(`${n} produces ${nthFib}`, () => {
      assertEquals(nthFibonacci(n), nthFib);
    });
  }
});

Deno.test('index must be positive integer', () => {
  assertThrows(() => nthFibonacci(-1));
});
