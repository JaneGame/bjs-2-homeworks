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
  let percentTest = Number(percent);
  let contributionTest = Number(contribution);
  let amountTest = Number(amount);
  
  if (percentTest != Number(percent)){
	totalAmount = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
    return totalAmount	
  } else if (contributionTest != Number(contribution)){
	totalAmount = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
    return totalAmount  
  } else if (amountTest != Number(amount)){
	totalAmount = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
    return totalAmount  
	}
	  else {
  let credit = amount - contribution;
  let dateMonth = date.getMonth();
  let dateYear = date.getFullYear();
  let dateNow = new Date(Date.now());
  let dateNowMonth = dateNow.getMonth();
  let dateNowYear = dateNow.getFullYear();
  let month = (dateYear-dateNowYear)*12+(dateMonth-dateNowMonth);
  
  let payment = credit * (percent/12/100 + (percent/12/100 / (((1 + percent/12/100)**month - 1))));
  totalAmount = payment * month;

return Number(totalAmount.toFixed(2));}}

