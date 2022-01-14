/* Complete the 'jumpingOnClouds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY c as parameter.
 */

function jumpingOnClouds(c) {
    // Write your code here
    let jumps = 0;
    let size = c.length;

    for (let i = 0; i < size; i++) {
        // Jump the ones
        if (c[i] == 1) {
            jumps++;
            continue;
        }
        
        if (c[i+1] == 0) {
            jumps++;
            if (c[i+2] == 0) {
                i++;
            }
        }
    }
    
    return jumps;
}

console.log(jumpingOnClouds([0,0,0,1,0,0]));

