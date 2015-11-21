// Directed Acyclic Word Graph for dictionary lookups in T9 advanced datastructures sprint

var DAWG = function(){
  var newDAWG = Object.create(DAWG.prototype)

  newDAWG.value;
  newDAWG.children = {};
  newDAWG.ending = false;

  return newDAWG;
}

newDAWG.prototype.words = function(node){
  var words = [];
  // traverse tree, pushing node.value with node.end == true
  return words
}
newDAWG.prototype.addArray = function(wordArray){

}

newDAWG.prototype.addString = function(wordString){

}
