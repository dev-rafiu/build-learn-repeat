# Test Directory Structure

This directory contains all test files for the Redux Toolkit Shopping Cart application.

## Structure

```
__tests__/
├── unit/                    # Unit tests for individual components
│   ├── CartContainer.test.jsx
│   ├── CartItem.test.jsx
│   └── Navbar.test.jsx
└── README.md               # This file
```

## Test Categories

- **`unit/`** - Tests individual components in isolation
  - Component rendering
  - Props handling
  - User interactions
  - Redux state integration

## Running Tests

```bash
# Run all tests
npm test

# Run only unit tests
npm test src/__tests__/unit

# Run tests in watch mode
npm test -- --watch
```

## Test Conventions

- Test files are named `[ComponentName].test.jsx` (PascalCase)
- Each test file tests a single component
- Tests are organized by component functionality
- Use descriptive test names that explain the expected behavior
