// Directed Acyclic Word Graph for dictionary lookups in T9 advanced datastructures sprint


var DAWG = function(value){
  var newDAWG = Object.create(DAWG.prototype)

  newDAWG.value = value === undefined ? null : value;
  newDAWG.children = {};
  newDAWG.ending = false;

  return newDAWG;
}

DAWG.prototype.contains = function(word){
  var node = this;
  var letters = word.split('');
  for (var i = 0; i < letters.length; i++) {
    if ( node.children[ letters[i] ] === undefined ) {
      return false;
    } else {
      node = node.children[ letters[i] ];
    }
  }
  // if all letters are defined in tree, then return true
  return true;
}


DAWG.prototype.words = function(node, words, letters){
  var node = node === undefined ? this : node;
  var letters = letters === undefined ? [] : letters;
  var words = words === undefined ? [] : words;

  // traverse tree, pushing node.value with node.end == true
  letters.push(node.value)
    console.log(words, letters, node.value)
  if(node.ending === true){
      words.push( letters.join('') );
  }
  if(node.children){
      for(var key in node.children){
      DAWG.prototype.words(node.children[key], words, letters)
    }
  }
  letters.pop()
  return words;
}

DAWG.prototype.addArray = function(wordArray){
  for (var i = 0; i < wordArray.length; i++) {
    this.addString( wordArray[i] );
  }
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
  currNode.ending = true;
}

exports.DAWG = DAWG;
