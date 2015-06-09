var should = require('should'),
    Pager = require('../bin/pager').Pager,
    data = ["apple", "banana", "grape"],
    handler = function() {this.good}
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
describe('#Pager.type', function() {
  it('should be ul', function() {
    p.type.should.equal('ul')
  });
  it('should be ul', function() {
    var children = p._store.props.children
    children.length.should.equal(5)
  });
})
