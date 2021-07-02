const fs = require('fs');
const xml = fs.readFileSync('./testData/rulefilesBarmer.xml', 'utf-8');
const xmlMakeFull = fs.readFileSync('./testData/makeFull.xml', 'utf-8')

const requestArgsChangeRuleFile = {
  kt_ik: '104940005',
  rules_xml: xml,
  user: 'system',
  channel: 'himi',
  mode: ''
};

 const requestArgsShowRuleFile = {
  healthInsuranceCompanyCode: '104940005',
  type: 'INIT',
  channel: 'himi'
};

const requestArgsMakeFull = {
    kt_ik: '104940005',
    x3_id: 'acfcfa18-3479-461a-b6bb-a306bab200bb',
    xvd_kt_id: '2361e824-b701-11eb-be57-c4eb5b04a2c7',
    x3_xml: xmlMakeFull,
    channel: 'himi'
};

module.exports = {
    requestArgsChangeRuleFile: requestArgsChangeRuleFile,
    requestArgsShowRuleFile: requestArgsShowRuleFile,
    requestArgsMakeFull: requestArgsMakeFull
};

