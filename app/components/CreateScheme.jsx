var React = require('react');
var UserMsg = require('UserMsg');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal')
var Contract = require('contractconf');
var CreateSchemeForm = require('CreateSchemeForm');
var createSchemePromised = require('CreateSchemePromised');

var CreateScheme = React.createClass({
  getInitialState : function(){
    return {
      isLoading : false,
      errorMessage : false
    }
  },
  handleSchemeSubmit: function(schemeId,businessAddress,redemptionsAllowed,totalReferralsAllowed,domains,referrerRewards,refereeRewards){
    var that= this;

    this.setState({
      isLoading: true,
      errorMessage: undefined,
    });
    referrerRewards = referrerRewards.split(",");
    refereeRewards = refereeRewards.split(',');
    console.log(refereeRewards);

    this.setState({
      isLoading: true,
      schemeId: undefined,
    });
    console.log('In HandleSearch');
    console.log(businessAddress);
    createSchemePromised(schemeId,businessAddress,redemptionsAllowed,totalReferralsAllowed,domains,referrerRewards,refereeRewards).then((res)=>{
      console.log(res);
      debugger;
      this.setState({
        isLoading: false,
        schemeId: res,
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
    var {isLoading,schemeId} = this.state;
    function renderMessage(){
      if(isLoading){
        return <h3 className="text-center"> Signing your transaction via Metamask .. </h3>;
      } else if (schemeId){
        return <UserMsg msg="Scheme id is" returnValue={schemeId}/>
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
        <CreateSchemeForm onSchemeSubmitted={this.handleSchemeSubmit} />
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
})

module.exports = CreateScheme;
