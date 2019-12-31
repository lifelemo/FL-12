function makeNumber (str) {
  var strOfNum = '';
  for (let symbol of str) {
    if (parseInt(symbol)) {
      strOfNum += symbol;
    }
  }
  return strOfNum;
}

alert(makeNumber('ghh4nnm5m333'));
