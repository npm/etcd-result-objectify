var assert = require('assert')

module.exports = function nodeToObject(node) {
  assert(node.dir, 'Passed etcd must be a directory')

  var r = {}
  if (!Array.isArray(node.nodes)) return r
  node.nodes.forEach(function (childNode) {
    var split = childNode.key.split('/')
    var key = split[split.length - 1]

    if (childNode.dir)
      r[key] = nodeToObject(childNode)
    else
      r[key] = childNode.value
  });

  return r
}
