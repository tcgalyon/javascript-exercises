const add = function(x,y) {
	let answer = x + y;
  return answer;
};

const subtract = function(x,y) {
	let answer = x - y;
  return answer
};

const sum = function(x) {
  let answer = 0;
  if (x.length == 0) {
    answer = 0;
  }
	for (let i = 0; i < x.length; i++) {
    answer += x[i];
  }
  return answer;
};

const multiply = function(x) {
  let answer = 1;
  if (x.length == 0) {
    answer = 0;
  }
  for (let i = 0; i < x.length; i++) {
    answer = answer * x[i]
  }
  return answer;
};

const power = function(x,y) {
	let answer = x ** y;
  return answer;
};

const factorial = function(x) {
  let answer = 1;
	for (let i = 1; i <= x; i++) {
    answer = answer * i;
  }
  return answer;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
