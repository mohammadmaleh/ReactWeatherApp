let React =  require('react');
let {Link,IndexLink} = require('react-router')
let Nav  = React.createClass({
  // index link because the route is keeping being active "/"
  render: function(){
    return (
      <div>
        <h3>navagation component</h3>
          <br/>

          <IndexLink to="/" activeClassName='active' activeStyle={{fontWeight:'bold'}}>Weather page</IndexLink>

          <Link to="/about"  activeClassName='active' activeStyle={{fontWeight:'bold'}}>about page</Link>

          <Link to="/examples"  activeClassName='active' activeStyle={{fontWeight:'bold'}}>example page</Link>
      

      </div>
    );
  }
})
module.exports = Nav;
