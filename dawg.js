// Directed Acyclic Word Graph for dictionary lookups in T9 advanced datastructures sprint

var DAWG = function(value){
  var newDAWG = Object.create(DAWG.prototype)

  newDAWG.value = value === undefined ? null : value;
  newDAWG.children = {};
  newDAWG.ending = false;

  return newDAWG;
}

DAWG.prototype.words = function(node){
  var words = [];
  // traverse tree, pushing node.value with node.end == true
  return words
}
DAWG.prototype.addArray = function(wordArray){

}

DAWG.prototype.addString = function(wordString){
  var letters = wordString.split('')
  var currNode = this
  for(var i = 0; i < letters.length; i++){
    if(this[children][letters[i]] === undefined){
      this[children][letters[i]] = DAWG(letters[i])
      currNode = this[children][letters[i]]
    }

  }
  currNode.ending = true;
}
