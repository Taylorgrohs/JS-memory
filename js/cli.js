var Card = require('./cards-interface.js').Card;
var prompt = require('prompt');
prompt.start();

prompt.get('Card', function(err, result) {
  var list = Card(result.Card);
  // console.log(list.length);
  list.forEach(function(i)
  {
    console.log(i);
  });
});
