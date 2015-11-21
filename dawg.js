// Directed Acyclic Word Graph for dictionary lookups in T9 advanced datastructures sprint

var DAWG = function(value){
  var newDAWG = Object.create(DAWG.prototype)

  newDAWG.value = value === undefined ? null : value;
  newDAWG.children = {};
  newDAWG.ending = false;

  return newDAWG;
}

DAWG.prototype.words = function(node, words, letters){
  var node = node === undefined ? this : node;
  var letters = letters === undefined ? [] : words;
  var words = words === undefined ? [] : words;

  // traverse tree, pushing node.value with node.end == true
  letters.push(node.value)
  if(node.ending === true){
      words.push(letters.join(''))
  }
  for(var key in node.children){
      DAWG.prototype.words(node.children[key], words, letters)
  }

  return words
}
DAWG.prototype.addArray = function(wordArray){

}

DAWG.prototype.addString = function(wordString){
  var letters = wordString.toLowerCase().split('')
  var currNode = this

  for(var i = 0; i < letters.length; i++){
    if(currNode.children[letters[i]] === undefined){
      currNode.children[letters[i]] = DAWG(letters[i])
      currNode = currNode.children[letters[i]]
    }
    else{
        currNode = currNode.children[letters[i]]
    }

  }
  currNode.ending = true
}
