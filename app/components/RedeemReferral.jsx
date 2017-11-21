var React = require('react');
var UserMsg = require('UserMsg');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal')
var Contract = require('contractconf');
var RedeemReferralForm = require('RedeemReferralForm');
var RedeemReferralPromised = require('RedeemReferralPromised');

var RedeemReferral = React.createClass({
  getInitialState : function(){
    return {
      isLoading : false,
      errorMessage : false
    }
  },
  handleSchemeSubmit: function(schemeId){
    var that= this;
    debugger;
    this.setState({
      isLoading: true,
      discount : false
    });
    console.log(schemeId);
    RedeemReferralPromised(schemeId).then((res)=>{
      console.log(res);
      debugger;
      this.setState({
        isLoading: false,
        discount: res,
      });
      debugger;
    },function(err){
      console.log(err);
    });

  },
  componentDidMount: function() {
    var location = this.props.location.query.location
    if(location && location.length > 0){
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  componentWillRecieveProps : function(newProps){
    var location = newProps.location.query.location
    if(location && location.length > 0){
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  render : function(){
    var {isLoading,discount} = this.state;
    function renderMessage(){
      //debugger;
      if(isLoading){
        return <h3 className="text-center"> Signing your transaction via Metamask .. </h3>;
      } else if (discount){
        return <UserMsg msg="Discount amount is" returnValue={discount}/>
      }
    }
    function renderError(){
      if(typeof erroMessage === 'string'){
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }
    return (
      <div>
        <h1 className="text-center page-title"> Create New Scheme </h1>
        <RedeemReferralForm onReferralSubmitted={this.handleSchemeSubmit} />
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
})

module.exports = RedeemReferral;
