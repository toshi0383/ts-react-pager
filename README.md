# ts-react-pager
Super simple pager component.

![screenshot](./resources/ss.png)

*This sample uses [bootswatch theme](https://bootswatch.com/journal/) for css.

# install
```
npm install ts-react-pager
```

# usage

```
var Pager = require('ts-react-pager').Pager
var YourApp = React.createClass({
  render: function() {
    var o = {
      dataLength:this.props.data.length,
      handler: this.handlePaging,
      pageSize: this.props.pageSize,
      currentPage: this.state.currentPage
    }
    var pager = Pager(o)
    return (
      <div>
        {pager}
        {yourtable}
        {pager}
      </div>
    )
  }
})
```
