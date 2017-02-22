'use strict'

const test = require('tape')
const {assertValidType, assertValidSpec} = require('./util')

const net = require('../net')
const eth = require('../eth')
const personal = require('../personal')
const parity = require('../parity')

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
