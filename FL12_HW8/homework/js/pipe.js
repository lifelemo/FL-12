function addOne(x) {
  return x + 1;
}

function pipe() {
  let result = arguments[0];
  for(let i = 1; i < arguments.length; ++i) {
    result = arguments[i](result);
  }
  return result;
}

alert(pipe(1, addOne));
alert(pipe(1, addOne, addOne));
