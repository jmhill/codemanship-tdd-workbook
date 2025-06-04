import { assertEquals } from '@std/assert';
import { nthFibonacci } from '../src/fib.ts';

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
