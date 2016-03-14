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
     $(".board").append("<div id='" + i + "' class='gameCard " + i +"'>" + "</div>");
    });
      var count = 0;
      var firstClick;
      var secondClick;
      var result;
    $(".gameCard").click(function(event){
      event.preventDefault();

      $(this).append("<p class='paragraph" + this.id + "'></p>");
      if(count === 0)
      {
        firstClick = this.id;
        $(this).css("background-image", "url('./img/" + this.id + ".jpg')");
      }
      else
      {
        secondClick = this.id;
        $(this).css("background-image", "url('./img/" + this.id + ".jpg')");
      }
      if(count === 0)
      {
        count++;
      }
      else
        {
          result = Check(firstClick, secondClick);
          if(result !== true)
          {
            $(".paragraph" + firstClick ).remove();
            $("." + firstClick).css("background-image", "url('./img/background.jpg')");
            $("." + firstClick).css("background-repeat", "no-repeat");
            $("." + firstClick).css("background-size", "cover");
            $(".paragraph" + secondClick ).remove();
            $("." + secondClick).css("background-image", "url('./img/background.jpg')");
            $("." + secondClick).css("background-repeat", "no-repeat");
            $("." + secondClick).css("background-size", "cover");
          }
          else {
            {
              $("#" + firstClick).off();
              $("#" + secondClick).off();
            }
          }
          count = 0;
        }
    });
  });
});
