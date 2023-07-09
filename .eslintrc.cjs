
module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true 
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react-hooks/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: true,
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true
    },
  },
  plugins: [
    'react-refresh',
    // 加入 prettier 的 eslint 插件
    "prettier"
  ],
  rules: {
    // 注意要加上这一句，开启 prettier 自动修复的功能
    // "prettier/prettier": "error",
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
}
