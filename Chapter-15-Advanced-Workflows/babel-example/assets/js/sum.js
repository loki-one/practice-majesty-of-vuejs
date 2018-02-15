'use strict';

var _client = require('./client');

var pizza = 10;
var beer = 5;

var sum = function sum(a, b) {
  return a + b + '$';
};

console.log(_client.name + ', you have to pay ' + sum(pizza, beer));