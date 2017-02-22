'use strict'

const {newTx} = require('./shared')

module.exports = {
  listAccounts: {
    params: [],
    returns: ['array', 'address']
  },
  newAccount: {
    params: [
      {format: 'string'}
    ],
    returns: 'address'
  },
  sendTransaction: {
    params: [
      {format: newTx},
      {format: 'string'}
    ],
    returns: 'data'
  },
  unlockAccount: {
    params: [
      {format: 'address'},
      {format: 'string'},
      {format: 'number'}
    ],
    returns: 'boolean'
  }
}
