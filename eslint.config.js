import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import reactPlugin from 'eslint-plugin-react'
import airbnb from 'eslint-config-airbnb'
import airbnbTypescript from 'eslint-config-airbnb-typescript'

export default tseslint.config(
    { ignores: ['dist'] },
    {
        files: ['**/*.{ts,tsx}'],
        extends: [
            airbnb,
            airbnbTypescript,
            js.configs.recommended,
            ...tseslint.configs.recommended,
            'plugin:jsx-a11y/recommended'
        ],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                project: './tsconfig.json',
                tsconfigRootDir: import.meta.dirname,
            },
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            'react': reactPlugin,
            'jsx-a11y': jsxA11y,
        },
        rules: {
            ...airbnb.rules,
            ...airbnbTypescript.rules,
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],
            'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
            'import/extensions': [
                'error',
                'ignorePackages',
                {
                    js: 'never',
                    jsx: 'never',
                    ts: 'never',
                    tsx: 'never',
                },
            ],
            'react/react-in-jsx-scope': 'off',
            '@typescript-eslint/explicit-function-return-type': 'off',
            'no-shadow': 'off',
            '@typescript-eslint/no-shadow': ['error'],
            'react/function-component-definition': [
                'error',
                {
                    namedComponents: 'arrow-function',
                    unnamedComponents: 'arrow-function',
                },
            ],
            'import/no-extraneous-dependencies': [
                'error',
                {
                    devDependencies: [
                        '**/*.test.tsx',
                        '**/*.spec.tsx',
                        '**/vite.config.ts'
                    ]
                }
            ]
        },
        settings: {
            'import/resolver': {
                typescript: {
                    project: './tsconfig.json'
                }
            }
        }
    }
)
