var should = require('should'),
    Pager = require('../bin/pager').Pager,
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
var PagerFactory = React.createFactory(Pager);
var p = React.createClass({
  render:function() {
    return PagerFactory({object:o})
  }
})
// currently not tests here..
