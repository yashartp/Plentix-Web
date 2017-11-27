var getContract = require('contractconf');

function createReferralPromised(schemeId,refereeId){
  let Contract = getContract();
  return new Promise(function(resolve,reject){
    Contract.createReferral(schemeId,refereeId, function(err,res){
        if(res){
          resolve(res);
        }else {
          reject(err);
        }
    })
  })
}

module.exports = createReferralPromised;
