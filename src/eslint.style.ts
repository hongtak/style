import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import { defineConfig } from 'eslint/config'

import node from 'eslint-plugin-n'
import stylistic from '@stylistic/eslint-plugin'

export default defineConfig([
  js.configs.recommended,
  {
    plugins: { n: node },
    extends: ['n/recommended-module'],
  },
  stylistic.configs.recommended,
  tseslint.configs.recommended,
  tseslint.configs.stylistic,
  {
    files: ['**/*.ts,**/*.js'],
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    files: ['**/*.ts'],
    rules: {
      // typescript-eslint rules
      '@typescript-eslint/explicit-function-return-type': 'error',
    },
  },
  {
    rules: {
      // stylistic rules
      '@stylistic/brace-style': ['error', '1tbs'],
      '@stylistic/function-call-spacing': ['error', 'never'],
      // '@stylistic/space-before-function-paren': ['error', 'always'],

      // eslint-plugin-n rules
      'n/handle-callback-err': ['error', '^(err|error)$'],

      // eslint rules
      'eqeqeq': ['error', 'always'],
      'curly': ['error', 'multi-line'],
      'no-undef': ['error', { typeof: true }],
      'one-var': ['error', 'never'],
      'camelcase': ['error', { properties: 'never' }],
      // 'new-cap': ['error'],
      'accessor-pairs': ['error'],
      'no-array-constructor': ['error'],
      'no-caller': ['error'],
      'no-duplicate-imports': ['error'],
      'no-eval': ['error'],
      'no-extend-native': ['error'],
      'no-extra-bind': ['error'],
      'no-implied-eval': ['error'],
      'no-inner-declarations': ['error'],
      'no-iterator': ['error'],
      'no-label-var': ['error'],
      'no-labels': ['error'],
      'no-lone-blocks': ['error'],
      'no-multi-str': ['error'],
      'no-new': ['error'],
      'no-new-func': ['error'],
      'no-object-constructor': ['error'],
      'no-new-wrappers': ['error'],
      'no-octal-escape': ['error'],
      'no-proto': ['error'],
      'no-return-assign': ['error'],
      'no-self-compare': ['error'],
      'no-sequences': ['error'],
      'no-template-curly-in-string': ['error'],
      'no-throw-literal': ['error'],
      'no-undef-init': ['error'],
      'no-unmodified-loop-condition': ['error'],
      'no-unneeded-ternary': ['error', { defaultAssignment: false }],
      'no-useless-call': ['error'],
      'no-useless-computed-key': ['error'],
      'no-useless-constructor': ['error'],
      'no-useless-rename': ['error'],
      'no-whitespace-before-property': ['error'],
      'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
      'padded-blocks': ['error', 'never'],
      'yoda': ['error'],
      'no-var': ['error'],
    },
  },
])

// export default config
