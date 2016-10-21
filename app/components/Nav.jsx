let React =  require('react');
let {Link,IndexLink} = require('react-router')
let Nav  = React.createClass({
  render: function(){
    return (
      <div>
        <div>navagation component</div>
          <br/>

          <IndexLink to="/" activeClassName='active' activeStyle={{fontWeight:'bold'}}>Weather page</IndexLink> // index link because the route is keeping being active "/"
          <br/>
          <Link to="/about"  activeClassName='active' activeStyle={{fontWeight:'bold'}}>about page</Link>
          <br/>
          <Link to="/examples"  activeClassName='active' activeStyle={{fontWeight:'bold'}}>example page</Link>
            <br/>

      </div>
    );
  }
})
module.exports = Nav;
