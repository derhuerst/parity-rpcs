# [Parity](https://ethcore.io/parity.html) JSON RPCs

**A machine-readable list of the Parity JSON RPCs.**

[![Join the chat at https://gitter.im/ethcore/parity][gitter-image]][gitter-url] [![GPLv3][license-image]][license-url]

[gitter-image]: https://badges.gitter.im/Join%20Chat.svg
[gitter-url]: https://gitter.im/ethcore/parity
[license-image]: https://img.shields.io/badge/license-GPL%20v3-green.svg
[license-url]: https://www.gnu.org/licenses/gpl-3.0.en.html

## Installation

```shell
npm install --save parity-rpcs@derhuerst/parity-rpcs
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
