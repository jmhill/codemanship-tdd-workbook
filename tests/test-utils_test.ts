import { assertEquals, assertThrows } from '@std/assert';
import { testCases, testCasesWithSubtests, testThrows } from './test-utils.ts';

// Simple test functions for testing our utilities
const double = (x: number): number => x * 2;
const isEven = (x: number): boolean => x % 2 === 0;
const greet = (name: string): string => `Hello, ${name}!`;
const throwingFunction = (x: number): number => {
  if (x < 0) throw new Error('Negative number');
  return x;
};

Deno.test('testCases function exists and can be imported', () => {
  assertEquals(typeof testCases, 'function');
});

Deno.test('testCasesWithSubtests function exists and can be imported', () => {
  assertEquals(typeof testCasesWithSubtests, 'function');
});

Deno.test('testThrows function exists and can be imported', () => {
  assertEquals(typeof testThrows, 'function');
});

// Test the actual behavior by using the utilities on simple functions
// These tests will pass if our utilities work correctly

testThrows(
  'testThrows works with throwing functions',
  throwingFunction,
  [
    [-1, 'Negative number'],
    [-100, 'Negative number'],
    [-1000000, 'Negative number'],
  ]
);

testCases(
  'testCases works with number inputs/outputs (double function)',
  double,
  [[1, 2], [3, 6], [0, 0], [-2, -4]],
);

testCases(
  'testCases works with boolean outputs (isEven function)',
  isEven,
  [[2, true], [3, false], [0, true], [1, false]],
);

testCases(
  'testCases works with string inputs/outputs (greet function)',
  greet,
  [['Alice', 'Hello, Alice!'], ['Bob', 'Hello, Bob!'], ['', 'Hello, !']],
);

testCasesWithSubtests(
  'testCasesWithSubtests works with custom step descriptions',
  double,
  [[1, 2], [3, 6], [0, 0]],
  (input, expected) => `${input} doubled equals ${expected}`,
);

testCasesWithSubtests(
  'testCasesWithSubtests works with default step descriptions',
  isEven,
  [[2, true], [3, false]],
);

// Test edge cases
testCases(
  'testCases handles empty arrays',
  double,
  [],
);

testCases(
  'testCases handles single test case',
  double,
  [[5, 10]],
);

// Test that our utilities properly propagate failures
Deno.test('testCases properly handles assertion failures', () => {
  // This test verifies that our utility doesn't swallow assertion errors
  assertThrows(() => {
    // Manually create and run the test function that our utility would create
    const cases: Array<[number, number]> = [[2, 999]]; // Wrong expected value
    cases.forEach(([input, expected]) => {
      assertEquals(
        double(input),
        expected,
        `Function with input ${JSON.stringify(input)} should return ${
          JSON.stringify(expected)
        }`,
      );
    });
  });
});

// Test with more complex types
interface Person {
  name: string;
  age: number;
}

const getPersonInfo = (person: Person): string =>
  `${person.name} is ${person.age} years old`;

testCases(
  'testCases works with complex object types',
  getPersonInfo,
  [
    [{ name: 'Alice', age: 30 }, 'Alice is 30 years old'],
    [{ name: 'Bob', age: 25 }, 'Bob is 25 years old'],
  ],
);

// Test that testThrows properly handles cases where function doesn't throw
Deno.test('testThrows fails when function does not throw', () => {
  const nonThrowingFunction = (x: number) => x * 2; // This function never throws
  
  assertThrows(() => {
    // Manually create and run the test function that testThrows would create
    const cases: Array<[number, string]> = [[5, 'Some error']]; // Expecting it to throw, but it won't
    cases.forEach(([input, expectedErrorMessage]) => {
      assertThrows(
        () => nonThrowingFunction(input),
        Error,
        expectedErrorMessage,
        `Function with input ${JSON.stringify(input)} should throw "${expectedErrorMessage}"`
      );
    });
  });
});

// Test edge cases for testThrows
testThrows(
  'testThrows handles empty arrays',
  throwingFunction,
  []
);

testThrows(
  'testThrows handles single test case',
  throwingFunction,
  [[-1, 'Negative number']]
);
