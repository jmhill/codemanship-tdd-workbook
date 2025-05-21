import { assertEquals } from '@std/assert';
import { add } from '../src/math.ts';

Deno.test('add function adds two numbers correctly', () => {
  assertEquals(add(2, 3), 5);
  assertEquals(add(-1, 1), 0);
  assertEquals(add(0, 0), 0);
});
