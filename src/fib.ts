// nthFibonacci
//
// Given an index n (0-indexed), provides
// the nth Fibonacci number.
// The Fibonacci sequence is created by starting with
// the elements [0, 1], and then adding the previous two
// elements in the sequence to derive the next element
// (third element is 0 + 1 = 1, fourth element is 1 + 1 = 2, etc)
//
// See fib_test.ts for example of how we can write tests
// to derive this algorithm. Example comes from
// Chapter 4 ("How to TDD") of Jason Gorman's
// Test-Driven Development workbook.
//
// Additional exercises: this implementation is recursive;
// Try implementing a bottom up approach using e.g.
// generators to demonstrate the suitability of the tests
export function nthFibonacci(index: number): number {
  if (index < 0) {
    throw new Error('index must be positive integer');
  }
  if (index < 2) {
    return index;
  }
  return nthFibonacci(index - 1) + nthFibonacci(index - 2);
}
