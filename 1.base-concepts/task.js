"use strict";



function solveEquation(a, b, c) {
  let arr;
  let x;
  let D = b ** 2 - 4 * a * c;
  if (D < 0){
	  arr = [];
  }
  else if (D == 0){
	  x = - b /( 2 * a );
	  arr = [x];
  } else {
	  x = (-b + Math.sqrt(D) )/(2*a);
	  arr = [ x, -x];
  }
  
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
