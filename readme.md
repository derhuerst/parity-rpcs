# [Parity](https://ethcore.io/parity.html) JSON RPCs

**Outdated, use repos from [@Parity-JS](https://github.com/Parity-JS).**

A machine-readable list of the [Parity](https://ethcore.io) [JSON RPCs](https://github.com/ethcore/parity/wiki/JSONRPC).

[![npm version](https://img.shields.io/npm/v/parity-rpcs.svg)](https://www.npmjs.com/package/parity-rpcs)
[![build status](https://img.shields.io/travis/derhuerst/parity-rpcs.svg)](https://travis-ci.org/derhuerst/parity-rpcs)
![GPL-licensed](https://img.shields.io/github/license/derhuerst/parity-rpcs.svg)
[![chat on gitter](https://badges.gitter.im/derhuerst.svg)](https://gitter.im/derhuerst)

This module contains the definitions of most RPCs, in the most minimal required for making calls. I took them [from the Parity source code](https://github.com/ethcore/parity/tree/72998d3ce333dcbdd4848a3a6e56e2b7d9db30d7/js/src/jsonrpc/interfaces). **This module is intended to be used by libraries like [`parity-client`](https://github.com/derhuerst/parity-client).** Things still missing:

- some of the `parity` RPCs, all of `personal` and `signer`
- an automated setup to generate this module, as having the definitions twice is dangerous

## Installation

```shell
npm install --save parity-rpcs
```

## Types

type | JavaScript values/example
-----|--------------------------
`'boolean'` | `true`/`false`
`'number'` | `0`/`-100.32`
`'string'` | `'foo bar baz'`
`'data'` | [`Buffer`](https://nodejs.org/api/buffer.html)
`['array', 'boolean']` | `[true, false]`
`['object', {foo: 'boolean'}]` | `{foo: true}`
`'address'` | `'0x5340e74cda65bc0de4d45908fc288cf99fdb2f9a'`
`'hash'` | `'0xc5f02e4fc4d9c5885cca4e652937ff4701b23fa10d25b42b327c111c0ef88e37'`
`'blockNr'` | `123456`/`'latest'`/`'earliest'`/`'pending'`
`'work'` | *todo*
`'syncing'` | *todo*
`'accountsInfo'` | *todo*

## Usage

```js
const eth = require('parity-rpcs/eth')
// or
const {eth, personal} = require('parity-rpcs')

console.log(eth.getBlockByNumber)
```

```js
{
	name: 'eth_getBlockByNumber',
	params: [
		{format: 'blockNr'},
		{format: 'boolean'}
	],
	returns: [
		'object',
		{
			number: 'number',
			hash: 'hash',
			parentHash: 'hash',
			nonce: 'data',
			sha3Uncles: 'data',
			logsBloom: 'data',
			transactionsRoot: 'data',
			stateRoot: 'data',
			receiptRoot: 'data',
			miner: 'address',
			difficulty: 'number',
			totalDifficulty: 'number',
			extraData: 'data',
			size: 'number',
			gasLimit: 'number',
			gasUsed: 'number',
			timestamp: 'number',
			transactions: ['array', 'data'],
			uncles: ['array', 'hash']
		}
	]
}
```


## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, go to [the issues page](https://github.com/derhuerst/parity-rpcs/issues).
