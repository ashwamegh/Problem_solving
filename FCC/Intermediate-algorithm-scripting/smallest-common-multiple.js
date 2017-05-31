
function smallestCommons(arr) {
    arr = arr.sort((a,b) => a-b);
    let i = 1, j = 1;
    while( i > 0){
        let nextMultiple = arr[arr.length - 1] * j, count = 0;
        for ( let k = arr[arr.length-1]; k >= arr[0]; k--){
            if(nextMultiple % k === 0)  count++;
        }
        if(count === arr[arr.length-1]-arr[0] + 1) return nextMultiple;
        j++;
    }
}

smallestCommons([23, 18]);
