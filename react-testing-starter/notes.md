qyeries ()

# Configurations

Creating setup.ts file to import "@testing-library/jest-dom/vitest" and configure in vitest.config.ts to enable global matchers;

## setup.ts

```js
import "@testing-library/jest-dom/vitest";
```

## vitest.config.ts

```js
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true, // enaabling gobal imports for vitest
    setupFiles: "tests/setup.ts",
  },
});
```
