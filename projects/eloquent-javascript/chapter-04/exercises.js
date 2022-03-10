////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, int) {
  var result = [];
  for (var i = start; i < end + 1; i++) {
    if(start === end) {
      return [];
    } else if (i % int !== 0) {
      result.push(i);
    }
  }
  return result;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  var arraySum = array.reduce((a, b) => a + b, 0);
  return arraySum;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  var reversed = [];
  for (var i = array.length -1; i >= 0; i--) {
    reversed.push(array[i])
  }
  return reversed;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  var reversed = array.reverse();
  return reversed;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  var list = {};
  for (let i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
    if(Object.keys(list.rest).length === 0) {
      list.rest = null;
    }
  }
  return list;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
  var array = [];
  for (var i = list; i; i = i.rest) {
    array.push(i.value);
  }
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(value, list) {
  return {value, rest: list}
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, index) {
  var array = [];
  for (var i = list; i; i = i.rest) {
    array.push(i.value);
  }
  return array[index];
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(x, y) {
 if(typeof x !== 'object' && typeof y !== 'object') {
    return x === y;
  }
  if(typeof x !== 'object' || typeof y !== 'object') {
    return false;
  }

  let xKeys = Object.keys(x);
  let yKeys = Object.keys(y);

  if(xKeys.length !== yKeys.length) {
    return false;
  }

  for(let i = 0; i < xKeys.length; i++) {
    if(!yKeys.includes(xKeys[i]) || !deepEqual(x[xKeys[i]], y[xKeys[i]])) {
      return false;
    }
  }
  return true;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
