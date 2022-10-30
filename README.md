# eslint-config-zenflow

> A good eslint configuration

[![npm version](https://img.shields.io/npm/v/eslint-config-zenflow)](http://npmjs.com/package/eslint-config-zenflow)
[![CI status](https://img.shields.io/github/workflow/status/zenflow/eslint-config-zenflow/CI?logo=GitHub&label=CI)](https://github.com/zenflow/eslint-config-zenflow/actions?query=branch%3Amaster)
[![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability-percentage/zenflow/eslint-config-zenflow?logo=Code%20Climate)](https://codeclimate.com/github/zenflow/eslint-config-zenflow)
[![LGTM alerts](https://img.shields.io/lgtm/alerts/github/zenflow/eslint-config-zenflow?logo=lgtm)](https://lgtm.com/projects/g/zenflow/eslint-config-zenflow/)
[![Known Vulnerabilities](https://snyk.io/test/github/zenflow/eslint-config-zenflow/badge.svg?targetFile=package.json)](https://snyk.io/test/github/zenflow/eslint-config-zenflow?targetFile=package.json)

## Features

- Based on [`eslint-config-react-app`](https://github.com/facebook/create-react-app/tree/master/packages/eslint-config-react-app)
- [`prettier`](https://www.npmjs.com/package/prettier) integration using
  [`eslint-plugin-prettier`](https://www.npmjs.com/package/eslint-plugin-prettier) &
  [`eslint-config-prettier`](https://www.npmjs.com/package/eslint-config-prettier)

## Install

Install packages:

```shell
npm install --save-dev eslint eslint-config-zenflow

# optional
npm install --save-dev typescript
```

Add `.eslintrc` file:

```json5
{
  "extends": ["zenflow"],
  "rules": { /* custom rule configs here */ }
}
```

Add package `"scripts"`:

```
"lint": "eslint . --ext .js,.ts,.jsx,.tsx",
"lint-fix": "npm run lint -- --fix",
```

**Optional** [Configure Prettier](https://prettier.io/docs/en/configuration.html) to your taste.

**Optional** Copy [the companion .editorconfig file](./.editorconfig) to the root of your project.

**Recommended** Enable eslint integration in your IDE of choice
