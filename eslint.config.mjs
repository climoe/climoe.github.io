import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import TSESLint from 'typescript-eslint';

export default defineConfig({
  files: ['**/*.{js,ts}'],
  basePath: './src/*',
  extends: [
    js.configs.recommended,
    TSESLint.configs.recommendedTypeChecked,
    TSESLint.configs.stylisticTypeChecked
  ]
});