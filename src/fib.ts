export function nthFibonacci(index: number): number {
  if (index < 2) {
    return index;
  }
  return index - 1;
}
