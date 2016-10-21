let React =  require('react')
var Nav = require('Nav')
var Main = React.createClass({
  render: function(){
    return (
      <div>

        <Nav></Nav>
        <div>main component</div>
        {this.props.children}
      </div>
    );
  }
})
module.exports = Main
