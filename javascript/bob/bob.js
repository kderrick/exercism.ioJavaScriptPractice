 //
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
  var stringLength = input.length;

  if(input[stringLength - 1] == "!") {
    return 'Whoa, chill out!';
  } else {
    return "Whatever.";
  }

};

module.exports = Bob;
