import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import { defineConfig } from 'eslint/config'

import nodePlugin from 'eslint-plugin-n'
import stylistic from '@stylistic/eslint-plugin'
import { rules } from './rules.js'

export default defineConfig([
  { files: ['**/*.{js,mjs,cjs,ts,mts,cts}'], plugins: { js }, extends: ['js/recommended'], languageOptions: { globals: globals.node } },
  tseslint.configs.recommended,
  nodePlugin.configs['flat/recommended'],
  {
    plugins: {
      '@stylistic': stylistic
    },
    rules: rules
  }
])
