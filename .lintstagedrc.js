module.exports = {
  '**/*': 'prettier --write --ignore-unknown',
  'src/**/*.{js,ts,jsx,tsx}': ['eslint --fix'],
};
