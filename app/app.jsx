var React = require('react');
var ReactDOM = require('react-dom');

var {Route,Router,IndexRoute,hashHistory} = require('react-router');
var Main = require('Main');
var CreateReferral = require('CreateReferral');
var RedeemReferral = require('RedeemReferral');
var CreateScheme = require('CreateScheme');
import { Web3Provider } from 'react-web3';

//Load Foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Web3Provider web3UnavailableScreen={() => <div>You need web3!</div>}>
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <Route path="RedeemReferral" component={RedeemReferral}/>
        <Route path="CreateScheme" component={CreateScheme}/>
        <IndexRoute component={CreateReferral}/>
      </Route>
    </Router>
  </Web3Provider>,
  document.getElementById('app')
);
