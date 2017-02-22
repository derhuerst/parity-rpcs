'use strict'

const {newTx} = require('./shared')

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
    params: [],
    returns: ['array', 'address']
  },
  blockNumber: {
    params: [],
    returns: 'number'
  },
  call: {
    params: [
      {format: 'call'},
      {format: 'blockNr', optional: true}
    ],
    returns: 'data'
  },
  coinbase: {
    params: [],
    returns: 'address'
  },
  compileSerpent: {
    params: [
      {format: 'string'}
    ],
    returns: 'data'
  },
  compileSolidity: {
    params: [
      {format: 'string'}
    ],
    returns: 'data'
  },
  compileLLL: {
    params: [
      {format: 'string'}
    ],
    returns: 'data'
  },
  estimateGas: {
    params: [
      {format: 'call'},
      {format: 'blockNr', optional: true}
    ],
    returns: 'number'
  },
  gasPrice: {
    params: [],
    returns: 'number'
  },
  getBalance: {
    params: [
      {format: 'address'},
      {format: 'blockNr', optional: true}
    ],
    returns: 'number'
  },
  getBlockByHash: {
    params: [
      {format: 'hash'},
      {format: 'boolean'}
    ],
    returns: block
  },
  getBlockByNumber: {
    params: [
      {format: 'blockNr'},
      {format: 'boolean'}
    ],
    returns: block
  },
  getBlockTransactionCountByHash: {
    params: [
      {format: 'hash'}
    ],
    returns: 'number'
  },
  getBlockTransactionCountByNumber: {
    params: [
      {format: 'blockNr'}
    ],
    returns: 'number'
  },
  getCode: {
    params: [
      {format: 'address'},
      {format: 'blockNr'}
    ],
    returns: 'data'
  },
  getCompilers: {
    params: [],
    returns: ['array', 'string']
  },
  getFilterChanges: {
    params: [
      {format: 'number'}
    ],
    returns: ['array', log]
  },
  getFilterLogs: {
    params: [
      {format: 'number'}
    ],
    returns: ['array', log]
  },
  getLogs: {
    params: [
      {format: filter}
    ],
    returns: ['array', log]
  },
  getStorageAt: {
    params: [
      {format: 'address'},
      {format: 'number'},
      {format: 'blockNr', optional: true}
    ],
    returns: 'data'
  },
  getTransactionByHash: {
    params: [
      {format: 'hash'}
    ],
    returns: signedTx
  },
  getTransactionByBlockHashAndIndex: {
    params: [
      {format: 'hash'},
      {format: 'number'}
    ],
    returns: signedTx
  },
  getTransactionByBlockNumberAndIndex: {
    params: [
      {format: 'blockNr'},
      {format: 'number'}
    ],
    returns: signedTx
  },
  getTransactionCount: {
    params: [
      {format: 'address'},
      {format: 'blockNr', optional: true}
    ],
    returns: 'number'
  },
  getTransactionReceipt: {
    params: [
      {format: 'hash'}
    ],
    returns: receipt
  },
  getUncleByBlockHashAndIndex: {
    params: [
      {format: 'hash'},
      {format: 'number'}
    ],
    returns: block
  },
  getUncleByBlockNumberAndIndex: {
    params: [
      {format: 'blockNr'},
      {format: 'number'}
    ],
    returns: block
  },
  getUncleCountByBlockHash: {
    params: [
      {format: 'hash'}
    ],
    returns: 'number'
  },
  getUncleCountByBlockNumber: {
    params: [
      {format: 'blockNr'}
    ],
    returns: 'number'
  },
  getWork: {
    params: [],
    returns: 'work'
  },
  hashrate: {
    params: [],
    returns: 'number'
  },
  mining: {
    params: [],
    returns: 'boolean'
  },
  newBlockFilter: {
    params: [],
    returns: 'number'
  },
  newFilter: {
    params: [
      {format: filter}
    ],
    returns: 'number'
  },
  newPendingTransactionFilter: {
    params: [],
    returns: 'number'
  },
  protocolVersion: {
    params: [],
    returns: 'number'
  },
  sendRawTransaction: {
    params: [
      {format: 'data'}
    ],
    returns: 'hash'
  },
  sendTransaction: {
    params: [
      {format: newTx}
    ],
    returns: 'hash'
  },
  sign: {
    params: [
      {format: 'address'},
      {format: 'data'}
    ],
    returns: 'data'
  },
  signTransaction: {
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
    params: [
      {format: 'data'},
      {format: 'data'},
      {format: 'data'}
    ],
    returns: 'boolean'
  },
  submitHashrate: {
    params: [
      {format: 'number'},
      {format: 'data'}
    ],
    returns: 'boolean'
  },
  syncing: {
    params: [],
    returns: 'syncing'
  },
  uninstallFilter: {
    params: [
      {format: 'number'}
    ],
    returns: 'boolean'
  }
}
