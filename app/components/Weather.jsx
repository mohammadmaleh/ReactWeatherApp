let React = require('react');
let WeatherForm = require('WeatherForm');
let WeatherMessage = require('WeatherMessage');
let openWeatherMap = require('OpenWeatherMap');
let Weather =  React.createClass({
    getInitialState  : function(){
      return{
        location: '',
        temp: ''
      }


  },

  handelSearch:function(location){
    let that =  this;
      openWeatherMap.getTemp(location).then(function(tmp){
        console.log(tmp)
        that.setState({location:location,temp:tmp})

      },function(error){
        alert (error)
      })
  },

  render:function(){
    let {temp,location} = this.state
    return(
      <div>
        <div className="text-center">Get Weather</div>
        <WeatherForm onSearch={this.handelSearch}></WeatherForm>
        <WeatherMessage location={location} temp={temp}></WeatherMessage>
      </div>

    );
  }
})
module.exports = Weather
