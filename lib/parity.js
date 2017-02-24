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
    name: 'parity_accountsInfo',
    params: [],
    returns: 'accountsInfo'
  },
  chainStatus: {
    name: 'parity_chainStatus',
    params: [],
    returns: [
      'object',
      {
        blockGap: ['array', 'blockNr']
      }
    ]
  },
  generateSecretPhrase: {
    name: 'parity_generateSecretPhrase',
    params: [],
    returns: 'string'
  },
  postTransaction: {
    name: 'parity_postTransaction',
    params: [
      {format: postedTx}
    ],
    returns: 'hash'
  },
  netChain: {
    name: 'parity_netChain',
    params: [],
    returns: 'string'
  },
  netPeers: {
    name: 'parity_netPeers',
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
    name: 'parity_netPort',
    params: [],
    returns: 'number'
  },
  netNonce: {
    name: 'parity_netNonce',
    params: [
      {format: 'address'}
    ],
    returns: 'number'
  },
  registryAddress: {
    name: 'parity_registryAddress',
    params: [],
    returns: 'address'
  },
  rpcSettings: {
    name: 'parity_rpcSettings',
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
    name: 'parity_enode',
    params: [],
    returns: 'string'
  },
  mode: {
    name: 'parity_mode',
    params: [],
    returns: 'string'
  }
}
