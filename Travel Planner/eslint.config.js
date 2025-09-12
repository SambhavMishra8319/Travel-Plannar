import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

// @eslint/js → Provides ESLint’s recommended base JavaScript rules.
// globals → Predefined global variables (like window, document, etc.) for browser or Node.
// eslint-plugin-react-hooks → Enforces React Hooks rules (correct usage of useEffect, useState, etc.).
// eslint-plugin-react-refresh → Helps with React Fast Refresh (ensures only components are exported in a way compatible with hot reloading).



export default [
  { ignores: ['dist'] },  // Ignore the dist folder (compiled code doesn’t need linting)
  {
    files: ['**/*.{js,jsx}'],  // Apply these rules only to JS & JSX files
    languageOptions: {
      ecmaVersion: 2020,  // Language features up to ES2020 are supported
      globals: globals.browser,  // Allow browser globals like window, document, etc.
      parserOptions: {
        ecmaVersion: 'latest',  // Use the latest available ECMAScript features
        ecmaFeatures: { jsx: true },  // Enable JSX syntax
        sourceType: 'module',  // Allow ES module `import`/`export`
      },
    },
    plugins: {
      'react-hooks': reactHooks,  // Activate react-hooks plugin
      'react-refresh': reactRefresh,  // Activate react-refresh plugin
    },
    rules: {
      ...js.configs.recommended.rules,  // Spread in ESLint's default recommended rules
      ...reactHooks.configs.recommended.rules,  // Spread in react-hooks recommended rules

      // Custom rules
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      // ❌ Error when you have unused variables
      // ✅ EXCEPT if variable name starts with CAPITAL or `_`
      // Example: `_unused`, `MyComponent` won’t throw an error

      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // Warn if you export things that break React Fast Refresh
      // Example: Components should be exported, but helper functions shouldn’t
      // unless marked as constant exports
    },
  },
]
