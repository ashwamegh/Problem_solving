/**
 * In an unsorted array, the insert operation is 
 * faster as compared to sorted array because we don’t have to 
 * care about the position at which the element is to be placed.
 */

/**
 * We will be inserting the key in our array of given capacity,
 * where n is the current size of arrray.
 * Function will return n+1 if insertion is successful, else n.
 */

/**
 * For this problem, we have to declare a immutable array using
 * CONST keyword.
 */
// Here,  n = insertionIndex
const insertUnsorted = (arr, insertionIndex , insertionElement, arrCapacity ) => {

    /**
     * Cannot insert more elements if insertionIndex is already 
     * more than or equal to arrCapacity
     */

    if (insertionIndex >= arrCapacity){
        return insertionIndex
    }

    arr[insertionIndex] = insertionElement

    return insertionIndex+1
}

const mainInsertFunc = () => {
    // Initialized an array of size 20
    const arr = Array.from(Array(20))
    // Initialized array with some values
    arr[0] = 12;arr[1] = 16;arr[2]=20;arr[3]=40;arr[4] =50; arr[5] =70;

    let arrCapacity = arr.length
    let insertionIndex = 6

    let key = 26

    console.log("\nBefore Insertion: ")
    for ( let i =0 ; i<insertionIndex ; i++){
        console.log(arr[i])
    }

    // Inserting Key 
    insertionIndex = insertUnsorted(arr, insertionIndex, key, arrCapacity)
   console.log("\nAfter Insertion: ")
    for ( let i =0 ; i<insertionIndex ; i++){
        console.log(arr[i])
    }
}

mainInsertFunc()