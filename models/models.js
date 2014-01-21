var mongoose = require('mongoose');
mongoose.set('debug', true);

var db  = mongoose.connect('mongodb://localhost/ChambersWeb');
var Schema = mongoose.Schema;  

// Create a schema for our data
var organisationProfileSchema = new Schema({ "_id": Number }, 
									{ collection: 'organisations' });

var lawyerProfileSchema = new Schema({ "_id": Number }, 
									{ collection: 'lawyers' });

// Use the schema to register a model
var organisationProfileModel = mongoose.model('OrganisationProfile', organisationProfileSchema); 
var lawyerProfileModel = mongoose.model('LawyerProfile', lawyerProfileSchema); 

module.exports.organisationProfile = organisationProfileModel;
module.exports.lawyerProfile = lawyerProfileModel;