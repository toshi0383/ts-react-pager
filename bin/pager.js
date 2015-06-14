var React = require('react')
module.exports.Pager = React.createClass({displayName: "Pager",
  render: function() {
    var pageLinks = getPager(this.props.object, this.props.maxPagerDispNum)
    return (
      React.createElement("ul", {className: "pagination"}, 
        pageLinks
      )
    )
  }
})
function getHandler(pageNum, handler) {
  return function() {
    handler(pageNum)
  }
}
function getPager(o, n) {
  var totalPageCount = Math.ceil(o.dataLength / o.pageSize)
  var handler = o.handler
  var currentPage = o.currentPage

  var pageLinks = []
  pageLinks.push(getBackLiElement(currentPage, handler))

  for (var i = 0; i < totalPageCount; i++) {
    var pageNum = i + 1
    var aClassName = pageNum == currentPage ? "active" : ""
    pageLinks.push(
      React.createElement("li", {style: {cursor:'pointer'}, 
         onClick: getHandler(pageNum, handler), 
         className: aClassName, 
         key: pageNum}, React.createElement("a", null, pageNum))
    )
  }
  pageLinks.push(getNextLiElement(totalPageCount, currentPage, handler))

  var maxPagerDispNum = n
  maxPagerDispNum = maxPagerDispNum ? maxPagerDispNum : 3
  var maxPageDispNum = Math.min(3, Number(maxPagerDispNum))
  if (totalPageCount <= maxPageDispNum) {
    return pageLinks
  }
  var offset = 1
  var firstHalf = Math.round(maxPageDispNum / 2)// '前半'を定義
  var lastHalf  = Math.round(totalPageCount - firstHalf + 1)// '後半'を定義
  if (currentPage <= firstHalf) {
  // currentが前半に入ったらoffsetは1
    offset = 1
  } else if (currentPage >= lastHalf) {
  // currentが後半に入ったらoffsetはtotal - maxPageDispNum + 1
    offset = totalPageCount - maxPageDispNum
  } else {
  // それ以外はoffsetはcurrent - 1
    offset = currentPage - 1
  }
  var lastKey = offset + maxPageDispNum - 1
  var filtered = pageLinks.filter(function(e) {
    // return true if it should be present
    switch (Number(e.key)) {
    case 0:
    case totalPageCount + 1:
      return true
    default:
      return Number(e.key) >= offset && Number(e.key) <= lastKey
    }
  })
  return filtered
}
function getBackLiElement(currentPage, handler) {
  var back
  if (currentPage > 1) {
    var backPageNum = currentPage - 1
    back = React.createElement("li", {key: "0", style: {cursor:'pointer'}, 
      onClick: getHandler(backPageNum, handler)}, React.createElement("a", null, "«"))
  } else {
    back = React.createElement("li", {key: "0", className: "disabled"}, React.createElement("a", null, "«"))
  }
  return back
}
function getNextLiElement(totalPageCount, currentPage, handler) {
  var next
  if (currentPage < totalPageCount) {
    var nextPageNum = currentPage + 1
    next = React.createElement("li", {key: totalPageCount + 1, style: {cursor:'pointer'}, 
       onClick: getHandler(nextPageNum, handler)}, React.createElement("a", null, "»"))
  } else {
    next = React.createElement("li", {key: totalPageCount + 1, className: "disabled"}, React.createElement("a", null, "»"))
  }
  return next
}

module.exports.getPager = getPager
