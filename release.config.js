module.exports = {
  debug: true,
  verifyConditions: [
    "@semantic-release/changelog",
    "@semantic-release/npm",
    "@semantic-release/git",
  ],
  prepare: [
    "@semantic-release/changelog",
    "@semantic-release/npm",
    {
      path: "@semantic-release/git",
      assets: ["package.json", "CHANGELOG.md"],
      // eslint-disable-next-line no-template-curly-in-string
      message: "chore(release): ${nextRelease.version} [skip ci]",
    },
  ],
  publish: ["@semantic-release/npm", "@semantic-release/github"],
};
