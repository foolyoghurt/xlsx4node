# xlsx4node

## install 

```
npm install xlsx4node
```

## Quick Start
### Read xlsx file

```
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

assert.deepStrictEqual(tables, expectResult);
```

### Write xlsx file

```
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
assert.deepStrictEqual(tables, config);
```