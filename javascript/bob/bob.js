 //
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
  var stringLength = input.length;


  if(isNaN(input) && (input[stringLength - 1] == "?") && (input.toLowerCase() == input))  {
    return "Sure.";
  } else if ((input == input.toUpperCase()) && ((input[stringLength - 1] == "!") || (input[stringLength - 1] == "?"))){
    return 'Whoa, chill out!';
  } else if (input[stringLength - 1] == "?") {
    return "Sure.";
  } else {
    return "Whatever.";
  }

};

module.exports = Bob;

//
// else if (input[stringLength - 1] == "?") {
//   return "Sure.";
// }
