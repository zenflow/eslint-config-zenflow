# eslint-config-zenflow

> A good eslint configuration

[![npm version](https://img.shields.io/npm/v/eslint-config-zenflow)](http://npmjs.com/package/eslint-config-zenflow)
[![CI status](https://img.shields.io/github/workflow/status/zenflow/eslint-config-zenflow/CI?logo=GitHub&label=CI)](https://github.com/zenflow/eslint-config-zenflow/actions?query=branch%3Amaster)
[![dependencies status](https://img.shields.io/david/zenflow/eslint-config-zenflow)](https://david-dm.org/zenflow/eslint-config-zenflow)
[![devDependencies status](https://img.shields.io/david/dev/zenflow/eslint-config-zenflow)](https://david-dm.org/zenflow/eslint-config-zenflow?type=dev)
[![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability-percentage/zenflow/eslint-config-zenflow?logo=Code%20Climate)](https://codeclimate.com/github/zenflow/eslint-config-zenflow)
[![LGTM alerts](https://img.shields.io/lgtm/alerts/github/zenflow/eslint-config-zenflow?logo=lgtm)](https://lgtm.com/projects/g/zenflow/eslint-config-zenflow/)
[![Known Vulnerabilities](https://snyk.io/test/github/zenflow/eslint-config-zenflow/badge.svg?targetFile=package.json)](https://snyk.io/test/github/zenflow/eslint-config-zenflow?targetFile=package.json)

## Features

- Bundles many eslint plugins & other dependencies into one.
  See [How Plugins Are Bundled](#how-plugins-are-bundled).
- Based on [`eslint-config-react-app`](https://github.com/facebook/create-react-app/tree/master/packages/eslint-config-react-app)
  with default config for rules of these plugins:
  - [`@typescript-eslint/eslint-plugin`](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
  - [`eslint-plugin-flowtype`](https://www.npmjs.com/package/eslint-plugin-flowtype)
  - [`eslint-plugin-import`](https://www.npmjs.com/package/eslint-plugin-import)
  - [`eslint-plugin-jest`](https://www.npmjs.com/package/eslint-plugin-jest)
  - [`eslint-plugin-jsx-a11y`](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
  - [`eslint-plugin-react`](https://www.npmjs.com/package/eslint-plugin-react)
  - [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks)
  - [`eslint-plugin-testing-library`](https://www.npmjs.com/package/eslint-plugin-testing-library)
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

## How Plugins Are Bundled

Because of the way eslint resolves plugin modules,
its documentation tells us that [a shareable config should include its plugin dependencies in "peerDependencies"](https://eslint.org/docs/developer-guide/shareable-configs.html#publishing-a-shareable-config),
meaning users of the config need to install and depend on each plugin package themselves.
Parsers work the same way.
This is the essence of [eslint issue #3458](https://github.com/eslint/eslint/issues/3458).

For the sake of convenience, here we are ignoring that instruction,
instead including plugins and parsers as regular `"dependencies"`,
and **relying on your project to not have any additional versions of these packages installed**.
This should normally not be a problem, since you should only ever really *need* one version of eslint-plugin-whatever.
If you have (for some reason) an alternate version as a dependency of a dependency, eslint will fail to resolve the module to either version.
That error can be easily corrected by adding the plugin or parser package as a direct dependency with the version matching the version used by this package.
