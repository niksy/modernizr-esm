# Changelog

## [Unreleased][]

### Added

- Update Modernizr to v3.10.0

## [1.3.1][] - 2019-07-27

### Fixed

- Incorrect import paths in feature modules in sub-directories

## [1.3.0][] - 2019-04-17

### Changed

- Remove existing export declarations

### Fixed

- Handle direct assignments to Modernizr object
- Properly resolve feature paths

## [1.2.3][] - 2019-03-18

### Added

- Update Modernizr to v3.7.1

## [1.2.2][] - 2019-03-08

### Fixed

- Handle IIFE for SSR environment

## [1.2.1][] - 2019-03-07

### Added

- Handling custom globals like `docElement` which source imports

## [1.2.0][] - 2019-03-07

### Added

- Asynchronous tests support in SSR environment

## [1.1.1][] - 2019-03-07

- Properly generate v3.7.0
	- `package.json` wasn’t updated with latest version

## [1.1.0][] - 2019-03-07

- Update Modernizr to v3.7.0
- Use Babel tools for creating effective codemode
- Remove duplicate code for feature assignment
- Handle browser globals for importing in SSR

### Added

- Initial implementation


[Unreleased]: https://github.com/niksy/modernizr-esm/compare/v1.3.1...HEAD
[1.3.1]: https://github.com/niksy/modernizr-esm/compare/v1.3.0...v1.3.1
[1.3.0]: https://github.com/niksy/modernizr-esm/compare/v1.2.3...v1.3.0
[1.2.3]: https://github.com/niksy/modernizr-esm/compare/v1.2.2...v1.2.3
[1.2.2]: https://github.com/niksy/modernizr-esm/compare/v1.2.1...v1.2.2
[1.2.1]: https://github.com/niksy/modernizr-esm/compare/v1.2.0...v1.2.1
[1.2.0]: https://github.com/niksy/modernizr-esm/compare/v1.1.1...v1.2.0
[1.1.1]: https://github.com/niksy/modernizr-esm/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/niksy/modernizr-esm/tree/v1.1.0
