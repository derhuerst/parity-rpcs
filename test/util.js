'use strict'

const atomic = [
  'boolean',
  'number',
  'string',
  'data',
  'address',
  'hash',
  'blockNr',
  'work', // todo
  'syncing', // todo
  'accountsInfo' // todo
]

const complex = [
  'array',
  'object'
]

const assertValidType = (test, name, type) => {
  if (atomic.includes(type)) {
    return test.pass(`${name} is a ${type}`)
  }
  if (!Array.isArray(type)) {
    return test.fail(`${name} is complex but not an array`)
  }
  if (!complex.includes(type[0])) {
    return test.fail(`${name} is not a valid complex type`)
  }

  if (type[0] === 'array') {
    return assertValidType(test, name + '[1]', type[1])
  }
  if (type[0] === 'object') {
    if (typeof type[1] !== 'object' || !type) {
      return test.fail(`object definition ${name}[1] must be an object`)
    }
    for (let key in type[1]) {
      assertValidType(test, `${name}[1][${key}]`, type[1][key])
    }
    return
  }

  throw new Error(`${name}: ${type} is not a valid type`)
}

const assertValidSpec = (test, name, spec) => {
  if (typeof spec !== 'object' || !spec) {
    return test.fail(`${name} spec must be an object`)
  }

  for (let method in spec) {
    const definition = spec[method]

    if (!Array.isArray(definition.params)) {
      test.fail(`${name}.${method}.params must be an array`)
      continue
    }

    definition.params.forEach((param, i) => {
      const name2 = `${name}.${method}.params[${i}]`

      if (typeof param !== 'object' || !param) {
        return test.fail(`param ${i} of ${method} is not an object`)
      }

      assertValidType(test, `${name2}.format`, param.format)

      if ('optional' in param && typeof param.optional !== 'boolean') {
        return test.fail(`${name2}.optional is not a boolean`)
      }
    })

    assertValidType(test, `${name}.${method}.returns`, definition.returns)
  }
}

module.exports = {assertValidType, assertValidSpec}
