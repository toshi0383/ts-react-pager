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
         onClick={handler(pageNum)}
         className={aClassName}
         key={i}><a>{pageNum}</a></li>
    )
  }
  pageLinks.push(getNextLiElement(totalPageCount, currentPage, handler))

  var filtered = pageLinks.filter(function(e) {
    return Number(e.key) < e.length - 2 || Number(e.key) > 4
  })
  filtered[4] = (
    <li className='disabled' key='4'><a>...</a></li>
  )
  return filtered
}
function getBackLiElement(currentPage, handler) {
  var back
  if (currentPage > 1) {
    var backPageNum = currentPage - 1
    back = <li key='a' style={{cursor:'pointer'}} onClick={handler(backPageNum)}><a>«</a></li>
  } else {
    back = <li key='b' className="disabled"><a>«</a></li>
  }
  return back
}
function getNextLiElement(totalPageCount, currentPage, handler) {
  var next
  if (currentPage < totalPageCount) {
    var nextPageNum = currentPage + 1
    next = <li key='c' style={{cursor:'pointer'}} onClick={handler(nextPageNum)}><a>»</a></li>
  } else {
    next = <li key='d' className="disabled"><a>»</a></li>
  }
  return next
}

module.exports.getPager = getPager
