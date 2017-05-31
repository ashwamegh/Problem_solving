function steamrollArray(arr) {
  let finalArray = [];
  // I'm a steamroller, baby
  for( let i = 0; i < arr.length; i++){
    checkArray(arr[i]);
   }
  
  function checkArray(param){
    if (Array.isArray(param)){
        for( let i = 0; i < param.length; i++){
                checkArray(param[i]);
    }}
    else finalArray.push(param);
  }
  return finalArray;
}

steamrollArray([[["a"]], [["b"]]]);
