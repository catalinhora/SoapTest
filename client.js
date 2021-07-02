"use strict";

var soap = require('strong-soap').soap;
var assert = require('assert');
var paramData = require('./helpers/helpers.js');
const chalk = require('chalk');

// wsdl of the web service this client is going to invoke.
var url = 'http://dev-app23.hmm.lan:65098/RuleEngineService?wsdl';
const em = s => chalk.bold(s);

var options = {};
soap.createClient(url, options, function(err, client) {
  var method = client['status']; 
  method(function(err, result, envelope, soapHeader) {
     //response envelope
     console.log('Response Envelope: \n' + envelope);
     //response result
     console.log('Result: \n' + JSON.stringify(result));
     var statusResult = result.statusResult;
     assert.strictEqual(statusResult, true, `Status Result is: ${em(statusResult)} instead of true!`);

 if(result.statusResult){
    soap.createClient(url, options, function(err, client) {
    var method = client['changeRulefiles'];
    method(paramData.requestArgsChangeRuleFile, function(err, result, envelope, soapHeader) {
    //response envelope
    console.log('Response Envelope: \n' + envelope);
    //'result' is the response body
    console.log('Result: \n' + JSON.stringify(result));
    });
   });
  }
 });
});

soap.createClient(url, options, function(err, client) {
  var method = client['showRuleFile'];
  method(paramData.requestArgsShowRuleFile, function(err, result, envelope, soapHeader) {
    //response envelope
    console.log('Response Envelope: \n' + envelope);
    //'result' is the response body
    console.log('Result: \n' + JSON.stringify(result));
  });
});

var options = {};
soap.createClient(url, options, function(err, client) {
  var method = client['makeFull'];
  method(paramData.requestArgsMakeFull, function(err, result, envelope, soapHeader) {
    //response envelope
    console.log('Response Envelope: \n' + envelope);
    //'result' is the response body
    console.log('Result: \n' + JSON.stringify(result));
  });
});