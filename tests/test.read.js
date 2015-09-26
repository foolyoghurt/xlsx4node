var assert = require('assert');
var path = require('path');
var xlsx = require('../index');

var tables = xlsx.readFile(path.join(__dirname, 'test.read.xlsx'));

var expectResult = {
  data: [
    // Sheet1
    [
      ['titleA', 'titleB'],
      [1, 2, 3],
      [1, 2]
    ],

    // Sheet2
    [
      ['titleA', 'titleB'],
      [1, 2, 3]
    ]
  ],
  sheetNames: ['Sheet1', 'Sheet2']
};

assert.deepEqual(tables, expectResult);