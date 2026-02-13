import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import eslintReact from '@eslint-react/eslint-plugin'
import depend from 'eslint-plugin-depend'

export default [
  { ignores: ['dist'] },
  js.configs.recommended,
  depend.configs['flat/recommended'],
  {
    files: ['**/*.{js,jsx}'],
    ...eslintReact.configs.recommended,
    plugins: {
      ...eslintReact.configs.recommended.plugins,
      'react-hooks': reactHooks,
    },
    rules: {
      ...eslintReact.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
    },
    languageOptions: {
      ecmaVersion: 2024,
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
  },
]
