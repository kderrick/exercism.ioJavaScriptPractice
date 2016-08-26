function DnaTranscriber () {

  this.toRna = function (DNAstrand) {
    var DNAArray =  DNAstrand.split("");
    var RNAstring = "";

    for(var i = 0; i < DNAArray.length; i++) {

      if(DNAArray[i] == "C") {
        RNAstring += "G"
      } else if (DNAArray[i] == "G") {
        RNAstring += "C"
      } else if (DNAArray[i] == "A") {
        RNAstring += "U"
      } else {
        RNAstring += "A"
      }

    }
      return RNAstring;
  }
}


module.exports = DnaTranscriber;
