var assert = require('assert');
var path = require('path');
var xlsx = require('../index');

var config = {
  data: [
    // Sheet1
    [
      ['titleA', 'titleB'],
      [1, 2, 3]
    ],

    // Sheet2
    [
      ['titleA', 'titleB']
    ]
  ],
  sheetNames: ['Sheet1', 'Sheet2']
};

var outPath = path.join(__dirname, 'test.write.xlsx');
xlsx.writeFile(outPath, config);

var tables = xlsx.readFile(outPath);
assert.deepEqual(tables, config);
