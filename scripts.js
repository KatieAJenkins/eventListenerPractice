'use strict';
$(document).ready() {
var button = document.querySelector('button');
var body = document.querySelector('body');

body.addEventListener('click', function() {
  stopPropagation();
  alert("YOU CLICKED ON THE BODY!!!");
});

button.addEventListener('click', function() {
  alert("YOU'RE REALLY PUSHING MY BUTTONS!!!");
});
};
