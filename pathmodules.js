const path = require('path');

const a1 = path.basename('c:\\temp\\myfilel.html');
const a2 = path.dirname('c:\\temp\\myfilel.html');
console.log(a1)
console.log(a2)
const a3 =path.extname(__filename)
console.log(__filename, a3)