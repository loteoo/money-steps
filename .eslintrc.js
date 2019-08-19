module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  parser: 'babel-eslint',
  extends: ['standard'],
  plugins: ['import', 'react'],
  rules: {
    'no-unused-vars': [2, { varsIgnorePattern: 'React|jsx|h' }],
    'react/jsx-uses-vars': 2,
    'no-undef': 0,
  }
}