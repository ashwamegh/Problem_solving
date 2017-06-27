// https://www.freecodecamp.com/challenges/inventory-update

function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    arr2 = arr2.sort((a,b) =>a[1]>b[1] );
    let curInvItems = arr1.map(elem => elem[1]);
    arr2.forEach((elem, index) => {
        if ( curInvItems.indexOf(elem[1]) > -1){
            arr1[curInvItems.indexOf(elem[1])][0] = arr1[curInvItems.indexOf(elem[1])][0] + elem[0];
        }
        else{
            arr1.push(elem);
        }
    });
    arr1 = arr1.sort((a,b) =>a[1]>b[1] );
    return arr1;
}

// Example inventory lists
var curInv = [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]];

var newInv = [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]];

updateInventory(curInv, newInv);