function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  const ranked = document.querySelectorAll('.ranked-list');
  for (let i = 0; i < ranked.length; i++){
    ranked[i].innerHTML = parseInt(ranked[i].innerHTML) + n;
  }
}

function deepestChild(){
  let node = document.getElementById('grand-node');
  let childNode = node.children[0];
  while (childNode) {
    node = childNode;
    childNode = node.children[0];
  }
  return node;
}
