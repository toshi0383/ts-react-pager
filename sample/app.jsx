var Pager = require('../bin/pager').Pager
var React = require('react')
var data = ["apple", "banana", "grape"],
    handler = function() {console.log("test")}
data = data.concat(["chocolate", "berry", "pine", "pumpkin", "carrot"])
var App = React.createClass({
  getInitialState: function() {
    return {data:data}
  },
  buttonHandler: function() {
    var d = this.state.data.slice(0, this.state.data.length - 1)
    this.setState({data:d})
  },
  render: function() {
    var o = {
      dataLength:this.state.data.length,
      handler: handler,
      pageSize: 1,
      currentPage: 1
    }
    return (
      <div>
      <button onClick={this.buttonHandler}>slice</button>
      <Pager object={o} />
      </div>
    )
  }
})
React.render(<App />, document.getElementById('content') )
