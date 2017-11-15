var React = require('react');

var CreateSchemeForm = React.createClass({
  // getInitialState : function(){
  //   return {
  //     'ReferralMsg' : 'Type the city name'
  //   }
  // },
  onFormSubmit : function(e){
    e.preventDefault();

    var schemeId = this.refs.schemeId.value;
    var businessAddress = this.refs.businessAddress.value;
    var redemptionsAllowed = this.refs.redemptionsAllowed.value;
    var totalReferralsAllowed = this.refs.totalReferralsAllowed.value;
    var domains = this.refs.domains.value;
    var referrerRewards = this.refs.referrerRewards.value;
    var refereeRewards = this.refs.refereeRewards.value;

    // schemeId.length>0
    //  && businessAddress.length>0
    //  && redemptionsAllowed.length>0
    //  && totalReferralsAllowed.length>0
    //  && domains.length>0
    //  && referrerRewards.length>0
    //  && refereeRewards.length>0
    if(1){

      this.refs.schemeId.value='';
      this.refs.businessAddress.value='';
      this.refs.redemptionsAllowed.value='';
      this.refs.totalReferralsAllowed.value='';
      this.refs.domains.value='';
      this.refs.referrerRewards.value='';
      this.refs.refereeRewards.value='';

      this.props.onSchemeSubmitted(schemeId,businessAddress,redemptionsAllowed,totalReferralsAllowed,domains,referrerRewards,refereeRewards);
    }
  },
  render : function(){
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="search" ref="schemeId" placeholder="Unique Id for the Scheme"/>
        <input type="search" ref="businessAddress" placeholder="Business Address"/>
        <input type="search" ref="redemptionsAllowed" placeholder="No. of Redemptions Allowed"/>
        <input type="search" ref="totalReferralsAllowed" placeholder="Total Referrals Allowed"/>
        <input type="search" ref="domains" placeholder="Domain"/>
        <input type="search" ref="referrerRewards" placeholder="Referrer Rewards (in array [])"/>
        <input type="search" ref="refereeRewards" placeholder="Referee Rewards (in array [])"/>
        <button className="button expanded"> Create Scheme </button>
      </form>
    )
  }
})
//f1be6c9e11839d3749ad1f286d03dd08
module.exports = CreateSchemeForm;
