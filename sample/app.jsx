var Pager = require('../bin/pager').Pager
var React = require('react')
var data = ["apple", "banana", "grape"]
data = data.concat(["chocolate", "berry", "pine", "pumpkin", "carrot"])
var App = React.createClass({
  getInitialState: function() {
    return {data:data, currentPage:1}
  },
  handlePaging: function(pageNum) {
    this.setState({data:this.state.data, currentPage:pageNum})
  },
  buttonHandler: function() {
    var d = this.state.data.slice(0, this.state.data.length - 1)
    this.setState({data:d, currentPage:this.state.currentPage})
  },
  render: function() {
    var o = {
      dataLength:this.state.data.length,
      handler: this.handlePaging,
      pageSize: 1,
      maxPagerDispNum: 5,
      currentPage: this.state.currentPage
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
