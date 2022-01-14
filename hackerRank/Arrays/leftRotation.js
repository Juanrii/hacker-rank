/*
 * Complete the 'rotLeft' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER d
 * 
 * ([1,2,3,4], 2) => returns [3,4,1,2]
 */

function rotLeft(array, rotate) {
    // Write your code here
    if (rotate == array.length) {
        return array;
    } else if (rotate > array.length) {
        rotate = rotate % array.length;
    }
    // Make a copy of array
    let newArray = [...array];
    
    let slice = newArray.slice(0, rotate);

    return newArray = newArray.slice(rotate).concat(slice);
}

console.log(rotLeft([1,2,3,4], 2));
