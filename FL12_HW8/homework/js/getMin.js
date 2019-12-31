function getMin() {
  if (arguments.length === 0) {
    return 'Arguments array is empty';
  } else {
    let min = arguments[0];
    for (let i = 1; i < arguments.length; ++i) {
      if (arguments[i] < min) {
        min = arguments[i];
      }
    }
    return min;
  }
}

alert(getMin(5,2,10,0,5,-1));
