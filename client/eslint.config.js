// client/eslint.config.js
const { Linter } = require('eslint');
const react = require('eslint-plugin-react');
const jsxA11y = require('eslint-plugin-jsx-a11y');
const importPlugin = require('eslint-plugin-import');
const typescript = require('@typescript-eslint/eslint-plugin');
const prettier = require('eslint-config-prettier');

/** @type {Linter.FlatConfig[]} */

//eslint.config.js
module.exports = [
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        ignores: [
            '**/*.config.js', 
            'src/**/stories/**/*',
            '**/test.js'
        ],
        languageOptions: {
            ecmaVersion: 2020,
            sourceType: 'module',
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },    
            },
        },
        plugins: {
                react,
                'jsx-a11y': jsxA11y,
                import: importPlugin,
                '@typescript-eslint': typescript,
            },
        rules: {
            semi: "error",
            "prefer-const": "error",
            'react/prop-types': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
        }
    }
];
