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
var YourApp = React.createClass({
  render: function() {
    var o = {
      dataLength:data.length,
      handler: handler,
      pageSize: 1,
      currentPage: 1
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
