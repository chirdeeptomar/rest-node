
var model = require('../models/models');

var getOrganisationProfile = function(req, res, next) {	
  	model.organisationProfile.findById(req.params.id, function(err, data){  
  		if (err)
      		return next(err);  	      			
  		res.send(data);
  	});
}

var getLawyerProfile = function(req, res, next) {
    if (req.params.publication === undefined) {
        model.lawyerProfile.findById(req.params.id, function(err, data){  
        if (err)
          return next(err);               
        res.send(data);
        });
      } 
      else {
        var aggregate = [{ 
                          $match: {'_id': Number(req.params.id) ,'profiles.publication_id':Number(req.params.publication)}
                        },
                        { 
                          $unwind:'$profiles'
                        },
                        {
                          $match: {'profiles.publication_id': Number(req.params.publication)}
                        }];
      
        model.lawyerProfile.aggregate(aggregate, function(err, data){       
          if (err)
             return next(err);     
          res.send(data[0]);   
        }); 
    }
}

module.exports.getOrganisationProfile = getOrganisationProfile;
module.exports.getLawyerProfile = getLawyerProfile;