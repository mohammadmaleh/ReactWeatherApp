let React = require('react');
let WeatherMessage =  React.createClass({
  render:function(){
    let {location,temp} =  this.props
    return(
      <div>{location} {temp}</div>
    );
  }
})
module.exports = WeatherMessage
