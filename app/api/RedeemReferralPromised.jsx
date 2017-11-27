var getContract = require('contractconf');

function RedeemReferralPromised(schemeId){
    let Contract = getContract();
  return new Promise(function(resolve,reject){
    debugger;
    Contract.redeemReferral(schemeId, function(err,res){
        if(res){
          resolve(res);
        }else {
          reject(err);
        }
    })
  })
}

module.exports = RedeemReferralPromised;
