var XLSX = require('xlsx');

exports.readFile = function(filePath) {
  var sheets = XLSX.readFile(filePath).Sheets;
  var sheetNames = Object.keys(sheets);
  var tables = sheetNames.map(function(sheetName) {
    var sheet = sheets[sheetName];

    var firstColNo;
    var colNo, rowNo, cell;
    var re_key = /(\w)(\d+)/;

    var table = [];
    var row = [];
    Object.keys(sheet).forEach(function(key) {
      var m = re_key.exec(key);
      if (!m) { return; }

      cell = sheet[key];
      colNo = m[1];
      rowNo = m[2];

      if (colNo == firstColNo) {
        table.push(row);
        row = [cell.v];
      } else {
        row.push(cell.v);
      }

      if (!firstColNo) {
        firstColNo = colNo;
      }
    });

    if (row.length) {
      table.push(row);
    }
    return table;
  });

  return {
    data: tables,
    sheetNames: sheetNames
  };
};

