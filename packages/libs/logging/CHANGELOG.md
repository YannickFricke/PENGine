# @pengine/logging

## 0.1.0

### Minor Changes

- bf9436c: Added the createLogger function

  The function returns a new logger based on the given name.
  It returns a logger from the `debug` package.

### Patch Changes

- 5f01b25: Added jest support for the logging library

  Also added the jest configuration which configures it to use `ts-jest`.

- cb8931f: Added the "debug" package as dependency to the logging library

  Also added the type definitions for the debug package.

- 6e583de: Added the TypeScript configuration file
