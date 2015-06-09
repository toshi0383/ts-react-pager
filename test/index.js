var should = require('should'),
    Pager = require('../bin/pager').getPager,
    data = ["apple", "banana", "grape"],
    handler = function() {this.good},
    React = require('react')

function good() {
  console.log("good")
}
var o = {
  dataLength:data.length,
  handler: handler,
  pageSize: 1,
  currentPage: 1
}
var p = Pager(o)

describe('#Pager', function() {
  it('should have 3 elements', function() {
    p.length.should.equal(5)
  });
})
