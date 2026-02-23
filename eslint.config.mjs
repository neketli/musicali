// @ts-check
import stylistic from '@stylistic/eslint-plugin'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
    stylistic.configs.customize({
        indent: 4,
        quotes: 'single',
        semi: false,
    }),
    {
        ignores: [
            'node_modules/',
            '.nuxt/',
            '.output/',
            'dist/',
            '.vscode/',
            '.idea/',
            '*.log',
            'npm-debug.log*',
            '.env',
            '.env.*',
            '.data/',
            'package-lock.json',
        ],
        rules: {
            // Vue specific rules
            'vue/multi-word-component-names': 'off',
            'vue/no-unused-vars': 'warn',
            'vue/html-self-closing': [
                'warn',
                {
                    html: {
                        void: 'never',
                        normal: 'any',
                        component: 'always',
                    },
                },
            ],
            'vue/require-default-prop': 'warn',
            'vue/max-attributes-per-line': [
                'error',
                {
                    singleline: 1,
                    multiline: {
                        max: 1,
                    },
                },
            ],
            'vue/block-tag-newline': [
                'error',
                {
                    singleline: 'always',
                    multiline: 'always',
                },
            ],
            'vue/singleline-html-element-content-newline': 'error',
            'vue/html-indent': [
                'error',
                4,
                {
                    baseIndent: 1,
                    alignAttributesVertically: false,
                },
            ],
            'vue/multiline-html-element-content-newline': [
                'error',
                {
                    allowEmptyLines: false,
                },
            ],

            // TypeScript rules
            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                },
            ],
            '@typescript-eslint/no-explicit-any': 'warn',

            // General rules
            'no-console': 'off',
            'no-unused-vars': 'off',
            '@stylistic/brace-style': ['error', '1tbs'],
            '@stylistic/comma-spacing': ['error', {
                before: false,
                after: true,
            }],
            '@stylistic/object-curly-newline': ['error', {
                ObjectExpression: 'always',
                ObjectPattern: {
                    multiline: true,
                },
                ImportDeclaration: 'never',
                ExportDeclaration: {
                    multiline: true,
                    minProperties: 3,
                },
            }],
            '@stylistic/object-property-newline': 'error',
        },
    },
    {
    // Additional configuration for TypeScript files
        files: ['**/*.ts', '**/*.vue'],
        languageOptions: {
            parserOptions: {
                parser: '@typescript-eslint/parser',
            },
        },
    },
)
