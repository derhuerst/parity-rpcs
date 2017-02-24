'use strict'

const {newTx} = require('./shared')

const call = [
  'object',
  {
    from: 'address',
    to: 'address',
    gas: 'number',
    gasPrice: 'number',
    value: 'number',
    data: 'data'
  }
]

const block = [
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
    timestamp: 'number', // todo: timestamp format?
    transactions: ['array', 'data'],
    uncles: ['array', 'hash']
  }
]

const log = [
  'object',
  {
    logIndex: 'number',
    blockNumber: 'number',
    blockHash: 'hash',
    transactionHash: 'hash',
    transactionIndex: 'number',
    address: 'address',
    data: 'data',
    topics: ['array', 'data']
  }
]

const filter = [
  'object',
  {
    fromBlock: 'blockNr',
    toBlock: 'blockNr',
    address: 'address',
    topics: ['array', 'data'],
    limit: 'number'
  }
]

const signedTx = [
  'object',
  {
    hash: 'hash',
    nonce: 'data',
    blockHash: 'hash',
    blockNumber: 'number',
    transactionIndex: 'number',
    from: 'address',
    to: 'address',
    value: 'number',
    gasPrice: 'number',
    gas: 'number',
    input: 'data'
  }
]

const receipt = [
  'object',
  {
    transactionHash: 'hash',
    transactionIndex: 'number',
    blockHash: 'hash',
    blockNumber: 'number',
    cumulativeGasUsed: 'number',
    gasUsed: 'number',
    contractAddress: 'address',
    logs: ['array', log]
  }
]

module.exports = {
  accounts: {
    name: 'eth_accounts',
    params: [],
    returns: ['array', 'address']
  },
  blockNumber: {
    name: 'eth_blockNumber',
    params: [],
    returns: 'number'
  },
  call: {
    name: 'eth_call',
    params: [
      {format: call},
      {format: 'blockNr', optional: true}
    ],
    returns: 'data'
  },
  coinbase: {
    name: 'eth_coinbase',
    params: [],
    returns: 'address'
  },
  compileSerpent: {
    name: 'eth_compileSerpent',
    params: [
      {format: 'string'}
    ],
    returns: 'data'
  },
  compileSolidity: {
    name: 'eth_compileSolidity',
    params: [
      {format: 'string'}
    ],
    returns: 'data'
  },
  compileLLL: {
    name: 'eth_compileLLL',
    params: [
      {format: 'string'}
    ],
    returns: 'data'
  },
  estimateGas: {
    name: 'eth_estimateGas',
    params: [
      {format: call},
      {format: 'blockNr', optional: true}
    ],
    returns: 'number'
  },
  gasPrice: {
    name: 'eth_gasPrice',
    params: [],
    returns: 'number'
  },
  getBalance: {
    name: 'eth_getBalance',
    params: [
      {format: 'address'},
      {format: 'blockNr', optional: true}
    ],
    returns: 'number'
  },
  getBlockByHash: {
    name: 'eth_getBlockByHash',
    params: [
      {format: 'hash'},
      {format: 'boolean'}
    ],
    returns: block
  },
  getBlockByNumber: {
    name: 'eth_getBlockByNumber',
    params: [
      {format: 'blockNr'},
      {format: 'boolean'}
    ],
    returns: block
  },
  getBlockTransactionCountByHash: {
    name: 'eth_getBlockTransactionCountByHash',
    params: [
      {format: 'hash'}
    ],
    returns: 'number'
  },
  getBlockTransactionCountByNumber: {
    name: 'eth_getBlockTransactionCountByNumber',
    params: [
      {format: 'blockNr'}
    ],
    returns: 'number'
  },
  getCode: {
    name: 'eth_getCode',
    params: [
      {format: 'address'},
      {format: 'blockNr'}
    ],
    returns: 'data'
  },
  getCompilers: {
    name: 'eth_getCompilers',
    params: [],
    returns: ['array', 'string']
  },
  getFilterChanges: {
    name: 'eth_getFilterChanges',
    params: [
      {format: 'number'}
    ],
    returns: ['array', log]
  },
  getFilterLogs: {
    name: 'eth_getFilterLogs',
    params: [
      {format: 'number'}
    ],
    returns: ['array', log]
  },
  getLogs: {
    name: 'eth_getLogs',
    params: [
      {format: filter}
    ],
    returns: ['array', log]
  },
  getStorageAt: {
    name: 'eth_getStorageAt',
    params: [
      {format: 'address'},
      {format: 'number'},
      {format: 'blockNr', optional: true}
    ],
    returns: 'data'
  },
  getTransactionByHash: {
    name: 'eth_getTransactionByHash',
    params: [
      {format: 'hash'}
    ],
    returns: signedTx
  },
  getTransactionByBlockHashAndIndex: {
    name: 'eth_getTransactionByBlockHashAndIndex',
    params: [
      {format: 'hash'},
      {format: 'number'}
    ],
    returns: signedTx
  },
  getTransactionByBlockNumberAndIndex: {
    name: 'eth_getTransactionByBlockNumberAndIndex',
    params: [
      {format: 'blockNr'},
      {format: 'number'}
    ],
    returns: signedTx
  },
  getTransactionCount: {
    name: 'eth_getTransactionCount',
    params: [
      {format: 'address'},
      {format: 'blockNr', optional: true}
    ],
    returns: 'number'
  },
  getTransactionReceipt: {
    name: 'eth_getTransactionReceipt',
    params: [
      {format: 'hash'}
    ],
    returns: receipt
  },
  getUncleByBlockHashAndIndex: {
    name: 'eth_getUncleByBlockHashAndIndex',
    params: [
      {format: 'hash'},
      {format: 'number'}
    ],
    returns: block
  },
  getUncleByBlockNumberAndIndex: {
    name: 'eth_getUncleByBlockHashAndIndex',
    params: [
      {format: 'blockNr'},
      {format: 'number'}
    ],
    returns: block
  },
  getUncleCountByBlockHash: {
    name: 'eth_getUncleCountByBlockHash',
    params: [
      {format: 'hash'}
    ],
    returns: 'number'
  },
  getUncleCountByBlockNumber: {
    name: 'eth_getUncleCountByBlockNumber',
    params: [
      {format: 'blockNr'}
    ],
    returns: 'number'
  },
  getWork: {
    name: 'eth_getWork',
    params: [],
    returns: 'work'
  },
  hashrate: {
    name: 'eth_hashrate',
    params: [],
    returns: 'number'
  },
  mining: {
    name: 'eth_mining',
    params: [],
    returns: 'boolean'
  },
  newBlockFilter: {
    name: 'eth_newBlockFilter',
    params: [],
    returns: 'number'
  },
  newFilter: {
    name: 'eth_newFilter',
    params: [
      {format: filter}
    ],
    returns: 'number'
  },
  newPendingTransactionFilter: {
    name: 'eth_newPendingTransactionFilter',
    params: [],
    returns: 'number'
  },
  protocolVersion: {
    name: 'eth_protocolVersion',
    params: [],
    returns: 'number'
  },
  sendRawTransaction: {
    name: 'eth_sendRawTransaction',
    params: [
      {format: 'data'}
    ],
    returns: 'hash'
  },
  sendTransaction: {
    name: 'eth_sendTransaction',
    params: [
      {format: newTx}
    ],
    returns: 'hash'
  },
  sign: {
    name: 'eth_sign',
    params: [
      {format: 'address'},
      {format: 'data'}
    ],
    returns: 'data'
  },
  signTransaction: {
    name: 'eth_signTransaction',
    params: [
      {format: newTx}
    ],
    returns: [
      'object',
      {
        raw: 'data',
        tx: signedTx
      }
    ]
  },
  submitWork: {
    name: 'eth_submitWork',
    params: [
      {format: 'data'},
      {format: 'data'},
      {format: 'data'}
    ],
    returns: 'boolean'
  },
  submitHashrate: {
    name: 'eth_submitHashrate',
    params: [
      {format: 'number'},
      {format: 'data'}
    ],
    returns: 'boolean'
  },
  syncing: {
    name: 'eth_syncing',
    params: [],
    returns: 'syncing'
  },
  uninstallFilter: {
    name: 'eth_uninstallFilter',
    params: [
      {format: 'number'}
    ],
    returns: 'boolean'
  }
}
