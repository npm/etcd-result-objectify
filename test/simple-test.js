var assert = require('assert')
var etcdResultObjectify = require('../')

var testNode = {
  "key": "/registrations",
  "dir": true,
  "nodes": [
    {
    "key": "/registrations/foo",
    "value": "bar",
    "modifiedIndex": 35,
    "createdIndex": 35
  },
  {
    "key": "/registrations/zar",
    "dir": true,
    "nodes": [
      {
      "key": "/registrations/zar/far",
      "value": "bar",
      "modifiedIndex": 53,
      "createdIndex": 53
    }
    ],
    "modifiedIndex": 53,
    "createdIndex": 53
  },
  {
    "key": "/registrations/beep",
    dir: true
  }
  ],
  "modifiedIndex": 35,
  "createdIndex": 35
}

assert.deepEqual(etcdResultObjectify(testNode), {
  foo: 'bar',
  zar: {
    far: 'bar'
  },
  beep: {}
})
