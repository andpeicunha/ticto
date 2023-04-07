module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        // 'some-other-config-you-use',
        // 'prettier'
    ],
    rules: {
        "react/no-unescaped-entities": "off",
        "@next/next/no-page-custom-font": "off"
    },
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    root: true,
};