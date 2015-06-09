var React = require('react')
module.exports.Pager = React.createClass({displayName: "Pager",
  render: function() {
    var pageLinks = this.getPager(this.props.object)
    return (
      React.createElement("ul", {className: "pagination"}, 
        pageLinks
      )
    )
  }
})
module.exports.getPager = function(o) {
  var totalPageCount = Math.ceil(o.dataLength / o.pageSize)
  var handler = o.handler
  var currentPage = o.currentPage

  var pageLinks = []
  var back
  if (currentPage > 1) {
    var backPageNum = currentPage - 1
    back = React.createElement("li", {style: {cursor:'pointer'}, onClick: handler(backPageNum)}, React.createElement("a", null, "«"))
  } else {
    back = React.createElement("li", {className: "disabled"}, React.createElement("a", null, "«"))
  }
  pageLinks.push(back)

  for (var i = 0; i < totalPageCount; i++) {
    var pageNum = i + 1
    var aClassName = pageNum == currentPage ? "active" : ""
    pageLinks.push(
      React.createElement("li", {style: {cursor:'pointer'}, 
         onClick: handler(pageNum), 
         className: aClassName}, React.createElement("a", null, pageNum))
    )
  }
  var li
  if (currentPage < totalPageCount) {
    var nextPageNum = currentPage + 1
    li = React.createElement("li", {style: {cursor:'pointer'}, onClick: handler(nextPageNum)}, React.createElement("a", null, "»"))
  } else {
    li = React.createElement("li", {className: "disabled"}, React.createElement("a", null, "»"))
  }
  pageLinks.push(li)
  return pageLinks
}
