var React = require('react');
var {Link,IndexLink} = require('react-router');


var Nav = React.createClass({
  onSearch: function(e){
    e.preventDefault();
    //alert('Not yet wired up');
    var location = this.refs.search.value;
    //alert(location);
    var encodedLocation = encodeURIComponent(location);
    if(location.length > 0){
      this.refs.search.value = '';
      window.location.hash = '#/?location='+encodedLocation;
    }
  },
  render : function (){
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className = "menu">
            <li className="menu-text"> Plentix App</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}> Refer a friend </IndexLink>
            </li>
            <li>
              <IndexLink to="/RedeemReferral" activeClassName="active" activeStyle={{fontWeight:'bold'}}> Redeem </IndexLink>
            </li>
            <li>
              <IndexLink to="/CreateScheme" activeClassName="active" activeStyle={{fontWeight:'bold'}}> Create Scheme </IndexLink>
            </li>

          </ul>
        </div>
        <div className = "top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className = "menu">
              <li>
                <select className="selectBox">
                  <option value="0xD907d158aDd61921730B8680C1bE52A8442116B3">Not Configured Yet</option>
                  <option value="0xD907d158aDd61921730B8680C1bE52A8442116B3">0xD907d158aDd61921730B8680C1bE52A8442116B3</option>
                  <option value="0x4f065ED5ED710323C32217CaDfBD4b33758e7926">0xD907d158aDd61921730B8680C1bE52A8442116B3</option>
                  <option value="0xCFD582351282cBd61b77F0eb821930729EBF7a0b">0xD907d158aDd61921730B8680C1bE52A8442116B3</option>
                  <option value="0xD907d158aDd61921730B8680C1bE52A8442116B3">0xD907d158aDd61921730B8680C1bE52A8442116B3</option>
                </select>

                {/* <input type="search" ref="search" placeholder="Your Ethereum Address"/> */}
              </li>
              <li>
                <input type="submit" className="button nav-button" value="Sync Wallet" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});


module.exports = Nav;
