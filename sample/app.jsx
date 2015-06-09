var Pager = require('../bin/pager').Pager
var React = require('react')
var data = ["apple", "banana", "grape"],
    handler = function() {console.log("test")}
data = data.concat(["chocolate", "berry", "pine", "pumpkin", "carrot"])
var App = React.createClass({
  render: function() {
    var o = {
      dataLength:data.length,
      handler: handler,
      pageSize: 1,
      currentPage: 1
    }
    return (
      <Pager object={o} />
    )
  }
})
React.render(<App />, document.getElementById('content') )
