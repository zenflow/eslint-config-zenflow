# eslint-config-zenflow

[![Build Status](https://travis-ci.org/zenflow/eslint-config-zenflow.svg?branch=master)](https://travis-ci.org/zenflow/eslint-config-zenflow)
[![npm version](https://badge.fury.io/js/eslint-config-zenflow.svg)](https://www.npmjs.com/packages/eslint-config-zenflow)
[![Dependencies Status](https://david-dm.org/zenflow/eslint-config-zenflow.svg)](https://david-dm.org/zenflow/eslint-config-zenflow)
[![Greenkeeper badge](https://badges.greenkeeper.io/zenflow/eslint-config-zenflow.svg)](https://greenkeeper.io/)
![semantic-release badge](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A good eslint configuration

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
and **relying on the project to not have any additional versions of these packages installed**.
This should normally not be a problem, since you should only ever really *need* one version of eslint-plugin-whatever.
If you have (for some reason) an alternate version as a dependency of a dependency, eslint will fail to resolve the module to either version.
That error can be easily corrected by adding the plugin or parser package as a direct dependency with the version matching the version used by this package.
