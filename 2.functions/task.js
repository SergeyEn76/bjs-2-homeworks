"use strict";
function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    if (temp < min) {
      min = temp;
    } else if (temp > max) {
      max = temp;
    }
    sum += temp;
  }
  let avg = (sum / arr.length).toFixed(2);
  avg = parseFloat(avg);
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (isNaN(...arr) == true) {
    return 0;
  } else {
    return Math.max(...arr) - Math.min(...arr);
  }
}

function differenceEvenOddWorker(...arr) {
  if (isNaN(...arr) == true) {
    return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]%2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (isNaN(...arr) == true) {
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]%2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
  console.log(sumEvenElement / countEvenElement);
  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = arrOfArr[0][0];
  for (let i = 0; i < arrOfArr.length; i++) {
    let temp = func(...arrOfArr[i]);
    if (temp > maxWorkerResult) {
      maxWorkerResult = temp;
    }
  }
  return maxWorkerResult;
}