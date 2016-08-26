var Year = function(year) {
    this.year = year;
};

Year.prototype.isLeap = function() {
  var year = this.year
  var result;


  if ((year % 4 == 0) && (year % 100 != 0)) {
    result = true;
  } else if ((year % 400) == 0)  {
    result = true;
  } else {
    result = false;
  }
  return result;
};


  module.exports = Year;
