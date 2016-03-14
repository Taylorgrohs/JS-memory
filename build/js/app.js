(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./../js/cards-interface.js":2}],2:[function(require,module,exports){
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

},{}]},{},[1]);
