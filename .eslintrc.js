module.exports = {
  root: true,
  extends: [
    '@react-native',
    'plugin:@typescript-eslint/recommended', // TypeScript ESLint recommended rules
    'plugin:@typescript-eslint/strict-type-checked', // Ensures strict type checking
    'plugin:@typescript-eslint/stylistic-type-checked' // Enforces return types
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': ['error', {
      allowExpressions: false, // Forces explicit return types even in arrow functions
      allowTypedFunctionExpressions: false,
      allowHigherOrderFunctions: false
    }],
    '@typescript-eslint/explicit-module-boundary-types': 'error', // Requires export functions to have return types
    '@typescript-eslint/explicit-member-accessibility': ['error'], // Forces `public`, `private`, `protected` on class members
    '@typescript-eslint/no-inferrable-types': 'off' // Allows explicit types even when unnecessary
  }
};
