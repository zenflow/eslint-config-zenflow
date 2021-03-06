# eslint-config-zenflow

[![Build Status](https://travis-ci.org/zenflow/eslint-config-zenflow.svg?branch=master)](https://travis-ci.org/zenflow/eslint-config-zenflow)
[![npm version](https://badge.fury.io/js/eslint-config-zenflow.svg)](https://www.npmjs.com/packages/eslint-config-zenflow)
[![Dependencies Status](https://david-dm.org/zenflow/eslint-config-zenflow.svg)](https://david-dm.org/zenflow/eslint-config-zenflow)
[![Greenkeeper badge](https://badges.greenkeeper.io/zenflow/eslint-config-zenflow.svg)](https://greenkeeper.io/)
![semantic-release badge](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A standard eslint configuration

## Rules

The same as [StandardJS](https://standardjs.com/#standardjs--the-rules) with some additions:

- [Prettier](https://github.com/prettier/prettier) (via [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier))
- Trailing commas are required. This way when a line is added to or removed from the end of an array or object literal or function call, the line above it is not affected.
- Line endings are required to be strictly unix

## Installation

### Step 1

```
$ npm install --save-dev eslint-config-zenflow eslint-plugin-import eslint-plugin-node eslint-plugin-prettier eslint-plugin-promise eslint-plugin-react eslint-plugin-standard prettier
```

*Sorry there are so many dependencies that need to be installed with this! Maybe some day this won't be necessary; See [eslint issue #3458](https://github.com/eslint/eslint/issues/3458).*

### Step 2

Add `"zenflow"` to the `"extends"` array in your eslint config:

e.g. `.eslintrc.json`

```json
{
  "extends": [
    "zenflow"
  ]
}
```

### Step 3

Copy [the .editorconfig file](./.editorconfig) to the root of your project, so that file editors and IDEs will cooperate with the formatting style

### Step 4

Copy [the .gitattributes file](./.gitattributes) to the root of your project, so that Git will cooperate with the formatting style

### Step 5 (optional)

```bash
npm install --save-dev eslint`
```

&&

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
  }
}
```
