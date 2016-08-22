// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.

function myReduce(arr, callback, initialValue) {
  var previous = initialValue || arr[0];
  var current;
  if (previous === initialValue){
    var i = 0;
  } else {
    i = 1;
  }

  while (i < arr.length){
      current = arr[i];
      previous = callback(previous, current, i, arr);
      i ++;
  }
  return previous;
}


/*
 Best if you don't code out here.
 If you want to check your code, use tests or `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myReduce;
