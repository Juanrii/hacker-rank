/*
 * Complete the 'maximumToys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY prices
 *  2. INTEGER k
 */

function maximumToys(prices, k) {
    // Write your code here
    let sortedPrices = prices.sort((a,b) => a - b);

    let sum = cont = 0;
    for (let i = 0; i < sortedPrices.length; i++) {
        if (sum <= k && (sum + sortedPrices[i]) <= k) {
            sum += sortedPrices[i];
            cont++;
        }
    }

    return cont;
}
console.log(maximumToys([1,12,5,111,200,1000,10], 20));