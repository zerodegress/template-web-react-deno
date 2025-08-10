// @ts-check
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import promise from 'eslint-plugin-promise'
import react from 'eslint-plugin-react'

import { globalIgnores } from 'eslint/config'

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  promise.configs['flat/recommended'],
  react.configs.flat['jsx-runtime'],
  globalIgnores(['dist/*', '.vite/*']),
)
