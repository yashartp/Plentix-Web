var React = require('react');

var CreateReferralForm = React.createClass({
  // getInitialState : function(){
  //   return {
  //     'ReferralMsg' : 'Type the city name'
  //   }
  // },
  onFormSubmit : function(e){
    e.preventDefault();

    var schemeId = this.refs.schemeId.value;
    var refereeId = this.refs.refereeId.value;
    if(schemeId.length>0 && refereeId.length>0){
      //this.refs.schemeId.value='';
      //this.refs.refereeId.value='';
      this.props.onReferralSubmitted(schemeId,refereeId);
    }
  },
  render : function(){
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="search" ref="refereeId" placeholder="Paste the referee address"/>
        <input type="search" ref="schemeId" placeholder="Provide the scheme id"/>
        <button className="button expanded"> Send Referral </button>
      </form>
    )
  }
})
//f1be6c9e11839d3749ad1f286d03dd08
module.exports = CreateReferralForm;
