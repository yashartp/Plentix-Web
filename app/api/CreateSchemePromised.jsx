var Contract = require('contractconf');

function CreateSchemePromised(schemeId,businessAddress,redemptionsAllowed,totalReferralsAllowed,domains,referrerRewards,refereeRewards){

  return new Promise(function(resolve,reject){
    Contract.createScheme(schemeId,businessAddress,redemptionsAllowed,totalReferralsAllowed,domains,referrerRewards,refereeRewards, function(err,res){
        if(res){
          resolve(res);
        }else {
          reject(err);
        }
    })
  })
}

module.exports = CreateSchemePromised;
