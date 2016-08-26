function Hamming () {

  this.compute = function (strand1, strand2) {

    //will be incremented with each difference
    var differenceCount = 0;

    //splitting strings to compared
    var splitStrand1 = strand1.split("");
    var splitStrand2 = strand2.split("");

    if(strand1.length !== strand2.length) {
      throw new Error('DNA strands must be of equal length.');
    }

    for(var i = 0; i < splitStrand1.length; i++) {
        if(splitStrand1[i] != splitStrand2[i])
        differenceCount += 1

    }

    return differenceCount;
  }
}


module.exports = Hamming;
