var data = ["apple", "banana", "grape"],
    handler = function() {console.log("test")}
var App = React.createClass({displayName: "App",
  render: function() {
    var o = {
      dataLength:data.length,
      handler: handler,
      pageSize: 1,
      currentPage: 1
    }
    return (
      React.createElement(Pager, {object: o})
    )
  }
})
React.render(React.createElement(App, null), document.getElementById('content') )
