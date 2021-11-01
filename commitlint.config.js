module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      noteKeywords: ['[angular commit style]'],
    },
  },
  rules: {
    "body-max-length": [0, 'always', Infinity],
    "body-max-line-length": [0, 'always', Infinity]
  }
};
