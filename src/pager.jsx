var React = require('react')
module.exports.Pager = React.createClass({
  render: function() {
    var pageLinks = getPager(this.props.object)
    return (
      <ul className="pagination">
        {pageLinks}
      </ul>
    )
  }
})
function getHandler(pageNum, handler) {
  return function() {
    handler(pageNum)
  }
}
function getPager(o) {
  var totalPageCount = Math.ceil(o.dataLength / o.pageSize)
  var handler = o.handler
  var currentPage = o.currentPage

  var pageLinks = []
  pageLinks.push(getBackLiElement(currentPage, handler))

  for (var i = 0; i < totalPageCount; i++) {
    var pageNum = i + 1
    var aClassName = pageNum == currentPage ? "active" : ""
    pageLinks.push(
      <li style={{cursor:'pointer'}}
         onClick={getHandler(pageNum, handler)}
         className={aClassName}
         key={pageNum}><a>{pageNum}</a></li>
    )
  }
  pageLinks.push(getNextLiElement(totalPageCount, currentPage, handler))

  var maxPageDispNum = Math.min(3, Number(this.props.maxPagerDispNum))
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
    back = <li key='0' style={{cursor:'pointer'}}
      onClick={getHandler(backPageNum, handler)}><a>«</a></li>
  } else {
    back = <li key='0' className="disabled"><a>«</a></li>
  }
  return back
}
function getNextLiElement(totalPageCount, currentPage, handler) {
  var next
  if (currentPage < totalPageCount) {
    var nextPageNum = currentPage + 1
    next = <li key={totalPageCount + 1} style={{cursor:'pointer'}}
       onClick={getHandler(nextPageNum, handler)}><a>»</a></li>
  } else {
    next = <li key={totalPageCount + 1} className="disabled"><a>»</a></li>
  }
  return next
}

module.exports.getPager = getPager
