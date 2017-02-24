'use strict'

const test = require('tape')
const {assertValidSpec} = require('./util')

const net = require('../lib/net')
const eth = require('../lib/eth')
const personal = require('../lib/personal')
const parity = require('../lib/parity')

test('net', (t) => {
  assertValidSpec(t, 'net', net)
  t.end()
})

test('eth', (t) => {
  assertValidSpec(t, 'eth', eth)
  t.end()
})

test('personal', (t) => {
  assertValidSpec(t, 'personal', personal)
  t.end()
})

test('parity', (t) => {
  assertValidSpec(t, 'parity', parity)
  t.end()
})
