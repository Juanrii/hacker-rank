/*
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function hourglassSum(arr) {
    // Write your code here
    let totals = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            totals.push(arr[0][0] + arr[0][1] + arr[1][0] + arr[1][1])
        }
    }

    return totals;

}

let arr =
    [
        [1,2,3],
        [4,5,6],
        [7,8,9],
    ];

    console.log(hourglassSum(arr));
  