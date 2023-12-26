const lodash = require('lodash');
const domains = require('./data.json');


const dom = lodash.orderBy(domains, 'DateStamp');

console.log(dom);






