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

Deno.test('nthFibonacci returns index number minux 1 for given index after first 2', async (t) => {
  const cases: [n: number, nthFib: number][] = [
    [2, 1],
    [3, 2],
    [4, 3],
  ];

  for (const [n, nthFib] of cases) {
    await t.step(`${n} produces ${nthFib}`, () => {
      assertEquals(nthFibonacci(n), nthFib);
    });
  }
});
