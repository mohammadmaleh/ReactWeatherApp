let React = require('react');
let WeatherForm =  React.createClass({
  onFormSubmit: function(e){
    e.preventDefault()
    let location = this.refs.location.value
    if (location !='' ){
      this.refs.location.value = '';
      this.props.onSearch(location)
    }
  },
  render:function(){
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input placeholder='Enter city name' ref='location'></input>
          <br></br>
          <button>Get Weather</button>
        </form>

      </div>

    );
  }
})
module.exports = WeatherForm
