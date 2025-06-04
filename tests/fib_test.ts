import { assertEquals } from '@std/assert';
import { nthFibonacci } from '../src/fib.ts';

Deno.test('first number in sequence is zero', () => {
  assertEquals(nthFibonacci(0), 0);
});

Deno.test('second number in sequence is one', () => {
  assertEquals(nthFibonacci(1), 1);
});

Deno.test('nthFibonacci returns correct number for given index', async (t) => {
  const cases: [n: number, nthFib: number][] = [
    [0, 0],
    [1, 1],
    [2, 1],
  ];

  for (const [n, nthFib] of cases) {
    await t.step(`${n} produces ${nthFib}`, () => {
      assertEquals(nthFibonacci(n), nthFib);
    });
  }
});
