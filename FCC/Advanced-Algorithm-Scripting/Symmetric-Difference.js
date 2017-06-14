
function sym(...args) {
    // let symmetricArray = args[0].filter((num, index) => num !== args[0][index-1] );
    let symmetricArray = [];

    args.forEach((arr) =>{
         arr = arr.sort((a,b) => a-b).filter((num, index) => num !== arr[index-1] );
         arr.forEach((num) => symmetricArray.indexOf(num)>-1 ?symmetricArray.splice(symmetricArray.indexOf(num),1):symmetricArray.push(num) )
    });
    symmetricArray = symmetricArray.sort((a,b) => a-b);
    console.log(symmetricArray);
  return symmetricArray;
}

sym([1, 2, 3], [5, 2, 1, 4, 5])
