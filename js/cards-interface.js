exports.Card = function(pairs) {

  var list = [];
  for(var i = 1; i <= pairs; i++)
  {
   list.push(i);
   list.push(i);
  }
  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
  var randomList = shuffle(list);
  return randomList;
}
