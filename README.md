# wdio-typescript-service

> WDIO TypeScript service  

### Installation

```
npm install wdio-typescript-service --save
```

####  package.json

Make sure you already have the following dependencies: 

```json
{
	"typescript": "^2.1.5",
	"eslint-plugin-typescript": "^0.1.0",
	"typescript-eslint-parser": "^1.0.3"
}
```

### Usage

#### wdio.config.js

```js
{
	services: [
		'typescript'
	]
};
```

#### Options

```js
{
	typescriptOptions: { }
}
```

A full list of options see [here](https://github.com/TypeStrong/ts-node).


#### Example

```typescript
import Page from './page'

interface Test {}

describe('Suite', () => {
	let page: Test = new Page;
})
```
