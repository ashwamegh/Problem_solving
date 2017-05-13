/**
 * In an unsorted array, 
 * the search operation can be performed by linear traversal 
 * from the first element to the last element.
 */

/**
 * We will be using indexOf() method to search 
 * for a particular key element. 
 * (Excluding the case of duplicacy)
 */

const findElement = (arr, searchNumber) => {
    let elementIndex = arr.indexOf(searchNumber)
    if( elementIndex > -1){
        return elementIndex
    }

    return -1;
}

//  Program to test above function
const mainSearchFunc = () => {
    const arr = [12, 34, 10, 6, 40];

    // Using a third element as search element.

    let key = 10;
    const position = findElement(arr, key)

    return position === -1?console.log("Element not found"):console.log("Element found at Position: "+(position+1))

}

mainSearchFunc()
