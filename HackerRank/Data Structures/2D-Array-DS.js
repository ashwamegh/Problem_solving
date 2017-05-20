/**
 * Context 
 * Given a 6X6  2D Array, A :

 * 1 1 1 0 0 0
 * 0 1 0 0 0 0
 * 1 1 1 0 0 0
 * 0 0 0 0 0 0
 * 0 0 0 0 0 0
 * 0 0 0 0 0 0
 * We define an hourglass in  to be a subset of values with indices falling in this pattern in 's graphical representation:

 * a b c
 *   d
 * e f g
 * There are  hourglasses in , and an hourglass sum is the sum of an hourglass' values.

 * Task 
 * Calculate the hourglass sum for every hourglass in , then print the maximum hourglass sum.

 * Note: If you have already solved the Java domain's Java 2D Array challenge, you may wish to skip this challenge.

 * Input Format

 * There are  lines of input, where each line contains  space-separated integers describing 2D Array ; every value in  will be in the inclusive range of  to .

 * Print the largest (maximum) hourglass sum found in .
 */

//  Solution

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var arr = [];
    for(arr_i = 0; arr_i < 6; arr_i++){
       arr[arr_i] = readLine().split(' ');
       arr[arr_i] = arr[arr_i].map(Number);
    }
    
    var hourglassArr = [];
    
    for( var i = 0; i < 4; i++){
        for ( var j = 0; j < 4; j++){
            var tempArr = [arr[i][j], arr[i][j+1], arr[i][j+2], arr[i+1][j+1], arr[i+2][j], arr[i+2][j+1], arr[i+2][j+2]];
            hourglassArr.push(tempArr);
        }
    }
    
    for( var i = 0; i < hourglassArr.length ; i++ ){
        hourglassArr[i] = hourglassArr[i].reduce((acc, val) => acc+val);
    }
    hourglassArr = hourglassArr.sort((a,b) => b-a);
    console.log(hourglassArr[0]);
}
