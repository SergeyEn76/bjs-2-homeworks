"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;
  if (d < 0) {
    arr = [];
  } else if (d == 0) {
    arr.push(-b / (2 * a));
  } else if (d > 0) {
    arr.push((-b + Math.sqrt(d) )/(2*a));
    arr.push((-b - Math.sqrt(d) )/(2*a));
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentPerMonth = percent / 100 / 12;
  let credit = amount - contribution;
  let payment = credit * (percentPerMonth + (percentPerMonth / (Math.pow((1 + percentPerMonth), countMonths) - 1)));
  let totalAmount = payment * countMonths;
  totalAmount = (totalAmount).toFixed(2);
  totalAmount = parseFloat(totalAmount);
  console.log(percentPerMonth);
  console.log(credit);
  return totalAmount;
}

console.log(calculateTotalMortgage(10, 0, 50000, 12));