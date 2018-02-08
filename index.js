function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target');
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div');
}

function increaseRankBy(n) {
  var ul = document.getElementsByClassName('ranked-list');
  var items = ul.getElementsByTagName('li');
  for (var i = 0; i < items.length; ++i) {
    return items[i] + n
  }
}
