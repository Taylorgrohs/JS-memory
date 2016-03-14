(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./../js/cards-interface.js":2,"./../js/check-interface.js":3}],2:[function(require,module,exports){
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
};

},{}],3:[function(require,module,exports){
exports.Check = function(first, second) {
  var result = false;
  if(first === second)
  {
    result = true;
  }
  return result;
};

},{}]},{},[1]);
