var Card = require('./../js/cards-interface.js').Card;
var Check = require('./../js/check-interface.js').Check;

$(document).ready(function(){
  $('#create-game').submit(function(event){
    event.preventDefault();

    var pairs = $('#pairs').val();
    $('.initiate').hide();
    $('.game').show();

    var list = Card(pairs);
    list.forEach(function(i)
    {
     $(".board").append("<div id='" + i + "' class='col-md-4 gameCard " + i +"'>" + "</div>");
    });
      var count = 0;
      var firstClick;
      var secondClick;
      var result;
    $(".gameCard").click(function(event){
      event.preventDefault();
      $(this).css("background", "white");
      $(this).append("<p class='paragraph" + this.id + "'>" + this.id + "</p>");


      if(count === 0)
      {
        firstClick = this.id;

      }
      else
      {
        secondClick = this.id;
      }
      if(count === 0)
      {
        count++;
      }
      else
        {
          result = Check(firstClick, secondClick);
          console.log(result);
          if(result !== true)
          {
            $(".paragraph" + firstClick ).remove();
            $(".paragraph" + secondClick ).remove();
          }
          else {
            {
              $("#" + firstClick).off();
            }
          }
          count = 0;
        }
        console.log("inner" +count);
      console.log("first: " + firstClick);

      console.log("first:" + firstClick + "second: " + secondClick);



    });
    console.log(count);
  });

});
