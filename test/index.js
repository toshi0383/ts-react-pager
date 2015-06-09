var should = require('should'),
    Pager = require('../build/pager').Pager,
    data = ["apple", "banana", "grape"],
    handler = function() {this.good}
function good() {
  console.log("good")
}
describe('#Pager', function() {
  it('should be something', function() {
    var o = {
      dataLength:data.length,
      handler: handler,
      pageSize: 5,
      currentPage: 1
    }
    console.log(Pager(o))
  });
})
