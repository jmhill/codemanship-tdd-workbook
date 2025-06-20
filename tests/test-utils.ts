import { assertEquals, assertThrows } from '@std/assert';

/**
 * Helper function to run parameterized tests with multiple input/output cases.
 * Creates a single test with all cases run in sequence.
 *
 * @param description - The test description
 * @param testFunction - The function to test
 * @param cases - Array of [input, expected] tuples
 */
export function testCases<Input, Output>(
  description: string,
  testFunction: (input: Input) => Output,
  cases: Array<[Input, Output]>,
): void {
  Deno.test(description, () => {
    cases.forEach(([input, expected]) => {
      assertEquals(
        testFunction(input),
        expected,
        `Function with input ${JSON.stringify(input)} should return ${
          JSON.stringify(expected)
        }`,
      );
    });
  });
}

/**
 * Helper function to run parameterized tests with subtests for each case.
 * Creates a test with subtests for each input/output pair.
 *
 * @param description - The test description
 * @param testFunction - The function to test
 * @param cases - Array of [input, expected] tuples
 * @param stepDescription - Optional function to generate step descriptions
 */
export function testCasesWithSubtests<Input, Output>(
  description: string,
  testFunction: (input: Input) => Output,
  cases: Array<[Input, Output]>,
  stepDescription?: (input: Input, expected: Output) => string,
): void {
  Deno.test(description, async (t) => {
    for (const [input, expected] of cases) {
      const stepDesc = stepDescription
        ? stepDescription(input, expected)
        : `${JSON.stringify(input)} produces ${JSON.stringify(expected)}`;

      await t.step(stepDesc, () => {
        assertEquals(testFunction(input), expected);
      });
    }
  });
}

/**
 * Helper function to test that a function throws expected errors for given inputs.
 * Creates a single test with all exception cases run in sequence.
 * 
 * @param description - The test description
 * @param testFunction - The function that should throw
 * @param cases - Array of [input, expectedErrorMessage] tuples
 */
export function testThrows<Input>(
  description: string,
  testFunction: (input: Input) => unknown,
  cases: Array<[Input, string]>
): void {
  Deno.test(description, () => {
    cases.forEach(([input, expectedErrorMessage]) => {
      assertThrows(
        () => testFunction(input),
        Error,
        expectedErrorMessage,
        `Function with input ${JSON.stringify(input)} should throw "${expectedErrorMessage}"`
      );
    });
  });
}
