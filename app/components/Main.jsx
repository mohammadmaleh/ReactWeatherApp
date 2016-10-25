let React =  require('react')
var Nav = require('Nav')
var Main = React.createClass({
  render: function(){
    return (
      <div>

        <Nav></Nav>
        <h3>main component</h3>
        {this.props.children}
      </div>
    );
  }
})
module.exports = Main
