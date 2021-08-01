module.exports = {
  linters: {
    '**|*.+(js|md|ts|css|sass|less|graphql|yml|scss|vue)': [
      'eslint --max-warnings=20',
      'eslint . --fix',
      'prettier --write',
      'git add',
    ],
  },
};
