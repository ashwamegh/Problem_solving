
function dropElements(arr, func) {
  // Drop them elements.
  let tempArr = [];
 arr.some((element, index) => {
     if(func(element)){
         tempArr = arr.slice(index);
         return tempArr;
     }
  });
  return tempArr;
}

dropElements([1, 2, 3, 4], function(n) {return n > 5;});
