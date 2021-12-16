"use strict";



function solveEquation(a, b, c) {
  let arr;
  let root1;
  let root2;
  let discriminant = b ** 2 - 4 * a * c;
  if (discriminant < 0){
	  arr = [];
  }
  else if (discriminant == 0){
	  root1 = - b /( 2 * a );
	  arr = [root1];
  } else {
	  root1 = (-b + Math.sqrt(discriminant) )/(2*a);
	  root2 = (-b - Math.sqrt(discriminant) )/(2*a);
	  arr = [ root1, root2];
  }
  
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let credit = amount - contribution;
  let month = (date - Date.now())/1000/60/60/24/30;
  month = month.toFixed(0);
  let payment = credit * (percent/12/100 + (percent/12/100 / (((1 + percent/12/100)**month - 1))));
  totalAmount = payment * month;

  return Number(totalAmount.toFixed(2));
}
