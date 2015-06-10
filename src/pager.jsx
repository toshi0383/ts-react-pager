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

  // if this has more than 8 pages, abbreviate rest of them
  // and put '...' into middle of them.
  var maxPageDispNum = 6
  if (totalPageCount <= maxPageDispNum) {
    return pageLinks
  }
  var offset = 1
  if (currentPage < 4) {
  // currentが前半3つに入ったらoffsetは1
    offset = 1
  } else if (currentPage > totalPageCount - 3) {
  // currentが後半3つに入ったらoffsetはtotal - 6
    offset = totalPageCount - 5
  } else {
  //          offsetはcurrent - 2
    offset = currentPage - 2
  }
  var lastKey = offset + 5
  var filtered = pageLinks.filter(function(e) {
    // should show
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
