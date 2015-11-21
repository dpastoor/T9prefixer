module.exports = function () {
  var element = document.createElement('h1');
  var x = 0;
  element.innerHTML = 'Hello world: ' + x;

  return element;
};
