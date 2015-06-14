var should = require('should'),
    Pager = require('../bin/pager').getPager,
    data = ["apple", "banana", "grape"],
    handler = function() {this.good},
    React = require('react')
function getObject(data, num) {
  var o = {
    dataLength:data.length,
    handler: handler,
    pageSize: 1,
    maxPagerDispNum: num,
    currentPage: 1
  }
  return o
}
function good() {
  console.log("good")
}

var p = Pager(getObject(data, 6))
describe('#Pager', function() {
  it('should have 3 elements', function() {
    p.length.should.equal(5)
  });
})

var moreData = data.concat(["chocolate", "berry", "pine", "pumpkin", "carrot"])
var p2 = Pager(getObject(moreData, 5))
describe('#Pager', function() {
  it('should have 7 elements.', function() {
    p2.length.should.equal(7)
  });
})

var andMoreData = data.concat(["chocolate", "berry", "pine", "pumpkin", "carrot"])
var p3 = Pager(getObject(andMoreData, 7))
describe('#Pager', function() {
  it('should have 9 elements.', function() {
    p3.length.should.equal(9)
  });
})
