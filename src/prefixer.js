var _ = require("lodash");

var t9ToPrefixes = function(num) {
    var numbers = [];
    var output;
    var sNumber = num.toString();

  for (var i = 0, len = sNumber.length; i < len; i += 1) {
      numbers.push(parseInt(sNumber.charAt(i)));
  }

  numbers.forEach(function(val) {
      var letters = numToPrefix(val);
      if (output === undefined) {
          output = letters;
      } else {
        output = _.map(output, function(o) {
          return _.map(letters, function(l) {
            return o + l;
          });
        });
        output = _.flatten(output);
      }
  });

  return output;
};

var numToPrefix = function(n) {
  switch(n) {
  case 2:
    return ['a', 'b', 'c'];
  case 3:
    return ['d', 'e', 'f',];
  case 4:
    return ['g', 'h', 'i'];
  case 5:
    return ['j', 'k', 'l'];
  case 6:
    return ['m', 'n', 'o'];
  case 7:
    return ['p', 'q', 'r', 's'];
  case 8:
    return ['t', 'u', 'v'];
  case 9:
    return ['w', 'x', 'y', 'z'];
  default:
    return undefined;
  }
};

exports.t9ToPrefixes = t9ToPrefixes;
//console.log(t9ToPrefixes(4));
//console.log(t9ToPrefixes(45));
//console.log(t9ToPrefixes(23456));
