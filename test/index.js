var should = require('should'),
    Pager = require('../bin/pager').getPager,
    data = ["apple", "banana", "grape"],
    handler = function() {this.good},
    React = require('react')
function getObject(data) {
  var o = {
    dataLength:data.length,
    handler: handler,
    pageSize: 1,
    currentPage: 1
  }
  return o
}
function good() {
  console.log("good")
}

var p = Pager(getObject(data))
describe('#Pager', function() {
  it('should have 3 elements', function() {
    p.length.should.equal(5)
  });
})

var moreData = data.concat(["chocolate", "berry", "pine", "pumpkin", "carrot"])
var p2 = Pager(getObject(moreData))
console.log(p2)
describe('#Pager', function() {
  it('should have 9 elements when has more than 8 pages.', function() {
    p2.length.should.equal(9)
  });
})
