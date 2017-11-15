var React = require('react');

//var WeatherMsg = React.createClass({
  // getInitialState : function(){
  //   return {
  //     'WeatherMsg' : 'Type the city name'
  //   }
  // },
  // handleSubmit : function(weatherMsg){
  //   this.setState({
  //     WeatherMsg : weathermsg
  //   })
  // },

var UserMsg = (props) => {
  return (
    <h3 className="text-center" > {props.msg} {props.returnValue}  </h3>
  )

}
module.exports = UserMsg;
