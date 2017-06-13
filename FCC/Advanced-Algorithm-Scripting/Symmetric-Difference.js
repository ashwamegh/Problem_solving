
function sym(...args) {
    let symmetricArr = [];
    let differenceArr = [];

    args.map((arr) => {
        arr.forEach((number) => 
        symmetricArr.indexOf(number) ===-1?
        symmetricArr.push(number):
        differenceArr.push(number));
    })

    console.log(symmetricArr);
    console.log(differenceArr);
  return args;
}

sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])
