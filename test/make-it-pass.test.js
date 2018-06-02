var test = require('tape'); // assign the tape library to the variable "test"

function sum (a, b) {
  return a+b;
}

function digit (a) {
  return a%10;
}

test('sum should return the addition of two numbers', function (t) {
  t.equal(3, sum(1, 2)); // make this test pass by completing the add function!
  t.end();
});

test('digit should return the last digit of a number', function (t) {
  t.equal(3, digit(13));
  t.end();
});

test('digit should return the last digit of a number', function (t) {
  t.equal(4, digit(14));
  t.end();
});
