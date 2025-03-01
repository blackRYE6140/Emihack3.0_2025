import js from '@eslint/js'
import globals from 'globals'
<<<<<<< HEAD
=======
import react from 'eslint-plugin-react'
>>>>>>> 524d912287b76f7ece6fdf4591d98b0089bdf98e
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
<<<<<<< HEAD
    plugins: {
=======
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
>>>>>>> 524d912287b76f7ece6fdf4591d98b0089bdf98e
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
<<<<<<< HEAD
      ...reactHooks.configs.recommended.rules,
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
=======
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
>>>>>>> 524d912287b76f7ece6fdf4591d98b0089bdf98e
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]
