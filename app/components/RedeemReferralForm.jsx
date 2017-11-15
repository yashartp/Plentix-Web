var React = require('react');

var RedeemReferralForm = React.createClass({
  // getInitialState : function(){
  //   return {
  //     'ReferralMsg' : 'Type the city name'
  //   }
  // },
  onFormSubmit : function(e){
    e.preventDefault();

    var schemeId = this.refs.schemeId.value;
    var schemeIdVal = this.refs.schemeId.value;
    debugger;
    if(schemeId.length>0){
      this.refs.schemeId.value='';
      this.props.onReferralSubmitted(schemeIdVal);
    }
  },
  render : function(){
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="search" ref="schemeId" placeholder="Please Provide the scheme id"/>
        <button className="button expanded"> Redeem Referral </button>
      </form>
    )
  }
})
//f1be6c9e11839d3749ad1f286d03dd08
module.exports = RedeemReferralForm;
