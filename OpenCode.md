# OpenCode Guidelines for Codemanship TDD Workbook

## Commands
- **Run tests**: `deno test`
- **Run single test**: `deno test path/to/test.ts`
- **Run tests with coverage**: `deno test --coverage`
- **Lint code**: `deno lint`
- **Format code**: `deno fmt`
- **Type check**: `deno check path/to/file.ts`
- **Run tasks**: `deno task <task-name>` (e.g., `deno task test`)
- **Add JSR package**: `deno add jsr:<package-name>` (e.g., `deno add jsr:@std/assert`)

## Code Style
- **Imports**: Use JSR imports with import maps (e.g., `import { x } from "@std/assert";`)
- **Formatting**: Use 2-space indentation, 80 character line width, single quotes
- **Types**: Always use explicit type annotations for function parameters and return types
- **Naming**: camelCase for variables/functions, PascalCase for classes/interfaces, UPPER_SNAKE for constants
- **Error handling**: Use try/catch blocks with specific error types, avoid throwing generic errors
- **Testing**: Write tests using Deno's built-in test framework with descriptive test names
- **TDD workflow**: Write failing test first, implement minimal code to pass, then refactor

## Project Structure
- **src/**: Source code files
- **tests/**: Test files (with _test.ts suffix)
- **deno.json**: Project configuration with import maps