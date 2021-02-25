const assert = require('assert');
const landtree = require('../src/landtree');

console.log('Tests passed if you see no other output!');

['1','abc','Sainsburys', 'C12123456'].forEach(nonCompany => {
  try {
    landtree(nonCompany);
  } catch (error) {
    assert(error==='Company not found');
  }
});

const log = [];
let lines = 0;

// caputure console.log output from landtree, then check it outputs the known expected number of lines
console.log = function(d) {
    log.push(d);
    lines++;
};
landtree('C104936104');
assert(lines===33);