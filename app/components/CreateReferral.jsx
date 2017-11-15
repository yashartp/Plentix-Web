var React = require('react');
var CreateReferralForm = require('CreateReferralForm');
var UserMsg = require('UserMsg');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal')
var Contract = require('contractconf');
var createReferralPromised = require('CreateReferralPromised');
var CreateReferral = React.createClass({
  getInitialState : function(){
    return {
      isLoading : false,
      errorMessage : false
    }
  },
  handleSearch: function(schemeId,refereeId){
    var that= this;

    this.setState({
      isLoading: true,
      referralId: undefined,
    });
    console.log('In HandleSearch');
    createReferralPromised(schemeId,refereeId).then((res)=>{
      console.log(res);
      debugger;
      this.setState({
        isLoading: false,
        referralId: res,
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
    var {isLoading,referralId} = this.state;
    function renderMessage(){
      if(isLoading){
        return <h3 className="text-center"> Signing your transaction via Metamask .. </h3>;
      } else if (referralId){
        return <UserMsg msg="Referral id is" returnValue={referralId}/>
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
        <h1 className="text-center page-title"> Refer a friend </h1>
        <CreateReferralForm onReferralSubmitted={this.handleSearch} />
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
})

module.exports = CreateReferral;
