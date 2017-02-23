'use strict'

const {newTx} = require('./shared')

module.exports = {
  listAccounts: {
    name: 'personal_listAccounts',
    params: [],
    returns: ['array', 'address']
  },
  newAccount: {
    name: 'personal_newAccount',
    params: [
      {format: 'string'}
    ],
    returns: 'address'
  },
  sendTransaction: {
    name: 'personal_sendTransaction',
    params: [
      {format: newTx},
      {format: 'string'}
    ],
    returns: 'data'
  },
  unlockAccount: {
    name: 'personal_unlockAccount',
    params: [
      {format: 'address'},
      {format: 'string'},
      {format: 'number'}
    ],
    returns: 'boolean'
  }
}
