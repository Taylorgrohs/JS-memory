var Card = require('./../js/cards-interface.js').Card;


$(document).ready(function(){
  $('#create-game').submit(function(event){
    event.preventDefault();

    var pairs = $('#pairs').val();
    $('.initiate').hide();
    $('.game').show();

    var list = Card(pairs);
    list.forEach(function(i)
    {
     $(".board").append("<div class='gameCard '" + i +"></div>");
   });
  });
});
