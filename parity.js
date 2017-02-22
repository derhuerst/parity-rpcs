'use strict'

const {newTx} = require('./shared')

const postedTx = [
  'object',
  Object.assign({}, newTx[1], {
    nonce: 'number',
    minBlock: 'number'
  })
]

module.exports = {
  accountsInfo: {
    params: [],
    returns: 'accountsInfo'
  },
  chainStatus: {
    params: [],
    returns: [
      'object',
      {
        blockGap: ['array', 'blockNr']
      }
    ]
  },
  generateSecretPhrase: {
    params: [],
    returns: 'string'
  },
  postTransaction: {
    params: [
      {format: postedTx}
    ],
    returns: 'hash'
  },
  netChain: {
    params: [],
    returns: 'string'
  },
  netPeers: {
    params: [],
    returns: [
      'object',
      {
        active: 'number',
        connected: 'number',
        max: 'number',
        peers: ['array', ['object', {}]] // todo
      }
    ]
  },
  netPort: {
    params: [],
    returns: 'number'
  },
  netNonce: {
    params: [
      {format: 'address'}
    ],
    returns: 'number'
  },
  registryAddress: {
    params: [],
    returns: 'address'
  },
  rpcSettings: {
    params: [],
    returns: [
      'object',
      {
        enabled: 'boolean',
        interface: 'string',
        port: 'number'
      }
    ]
  },
  enode: {
    params: [],
    returns: 'string'
  },
  mode: {
    params: [],
    returns: 'string'
  }
}
