const fs = require('fs');
const xml = fs.readFileSync('./testData/Rulefiles.xml', 'utf-8');

const requestArgsChangeRuleFile = {
  kt_ik: '354500000',
  rules_xml: xml,
  user: 'system',
  channel: 'himi',
  mode: ''
};

 const requestArgsShowRuleFile = {
  healthInsuranceCompanyCode: '354500000',
  type: 'INIT',
  channel: 'himi'
};

// const requestArgsMakeFull = {
//     kt_ik: '354500000',
//     x3_id: '',
//     xvd_kt_id: '',
//     x3_xml: textF,
//     channel: 'himi'
// };

module.exports = {
    requestArgsChangeRuleFile: requestArgsChangeRuleFile,
    requestArgsShowRuleFile: requestArgsShowRuleFile,
 //   requestArgsMakeFull: requestArgsMakeFull
};

