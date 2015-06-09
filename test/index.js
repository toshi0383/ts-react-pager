var should = require('should'),
    Pager = require('../pager').Pager
describe('#Pager', function() {
  it('should be something', function() {
    var o = {
      dataLength:this.props.ipas.length,
      handler: this.handlePaging,
      pageSize: this.props.pageSize,
      currentPage: this.state.currentPage
    }
    console.log(Pager(o))
  });
})
