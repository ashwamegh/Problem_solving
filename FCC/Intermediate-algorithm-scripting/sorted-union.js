
function uniteUnique(arr) {
    let formalArr = [];

    for(let i =0; i< arguments.length; i++){
        arguments[i].forEach((number)=>{
            if(formalArr.indexOf(number) === -1) formalArr.push(number);
        });
    }
    console.log(formalArr);
  return formalArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
