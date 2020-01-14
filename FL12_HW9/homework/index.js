const MS_IN_DAY = 86400000;
function convert() {
  let result = [];
  if (arguments.length === 0) {
    return 'Arguments array is empty';
  } else {
    for (let i = 0; i < arguments.length; ++i) {
      if (typeof arguments[i] === 'string') {
        result.push(parseInt(arguments[i]));
      } else if (typeof arguments[i] === 'number') {
        result.push(arguments[i].toString());
      }
    }
  }
  return result;
}

function executeForEach(array, func) {
  for (let i = 0; i < array.length; ++i) {
    func(array[i]);
  }
}

function mapArray(array, func) {
  let result = [];
  executeForEach(array, function(el) {
    result.push(func(+el))
  });
  return result;
}

function filterArray(array, func) {
  let result = [];
  executeForEach(array, function(el) {
    if(func(el)) {
      result.push(el)
    }
  });
  return result;
}

function flipOver(string) {
  let reversedStr = '';
  for (let i = 0; i < string.length; ++i) {
    reversedStr = string[i] + reversedStr;
  }
  return reversedStr;
}

function makeListFromRange(rangeArray) {
  let array = [];
  for (let i = rangeArray[0]; i <= rangeArray[1]; ++i) {
    array.push(i);
  }
  return array;
}

const actors = [
  { name: 'tommy', age: 36 },
  { name: 'lee', age: 28 }
];

function getArrayOfKeys (objectsArr, key) {
  let arrayOfKeys = [];
  executeForEach(objectsArr, function(object) {
    arrayOfKeys.push(object[key])
  });
  return arrayOfKeys;
}


const MAX_VAL = 30;
function substitute(array) {
  return mapArray(array, function(el) {
    if(el < MAX_VAL) {
      return '*';
    } else {
      return el;
    }
  });
}

function getPastDay(date, days) {
  return new Date(date.getTime() - days * MS_IN_DAY).getDate();
}

const TIME_VALUE = 10;
function formatDate(date) {
  let hours = date.getHours()<TIME_VALUE ? '0'+date.getHours() : date.getHours();
  let minutes = date.getMinutes()<TIME_VALUE ? '0'+date.getMinutes() : date.getMinutes();
  return `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()} ` +
          hours + ':' + minutes;
}
