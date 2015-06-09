var React = require('react')
module.exports.Pager = React.createClass({
  render: function() {
    var pageLinks = this.getPager(this.props.object)
    return (
      <ul className="pagination">
        {pageLinks}
      </ul>
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
    back = <li style={{cursor:'pointer'}} onClick={handler(backPageNum)}><a>«</a></li>
  } else {
    back = <li className="disabled"><a>«</a></li>
  }
  pageLinks.push(back)

  for (var i = 0; i < totalPageCount; i++) {
    var pageNum = i + 1
    var aClassName = pageNum == currentPage ? "active" : ""
    pageLinks.push(
      <li style={{cursor:'pointer'}}
         onClick={handler(pageNum)}
         className={aClassName}><a>{pageNum}</a></li>
    )
  }
  var li
  if (currentPage < totalPageCount) {
    var nextPageNum = currentPage + 1
    li = <li style={{cursor:'pointer'}} onClick={handler(nextPageNum)}><a>»</a></li>
  } else {
    li = <li className="disabled"><a>»</a></li>
  }
  pageLinks.push(li)
  return pageLinks
}
