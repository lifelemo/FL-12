function makeNumber (str) {
  var strOfNum = '';
  for (let symbol of str) {
    if (parseInt(symbol)) {
      strOfNum += symbol;
    }
  }
  return strOfNum;
}

function countNumbers(str) {
  let strOfNum = makeNumber(str);
  let countsOfObj = {};
  for (let number of strOfNum) {
    if (number in countsOfObj) {
      ++countsOfObj[number];
    } else {
      countsOfObj[number] = 1;
    }
  }
  return countsOfObj;
}

let result = countNumbers('ghh4nnm5m333');
for (let number in result) {
  alert('\'' + number + '\': '+ result[number]);
}
