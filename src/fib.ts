export function nthFibonacci(index: number): number {
  if (index < 2) {
    return index;
  }
  return nthFibonacci(index - 1) + nthFibonacci(index - 2);
}
