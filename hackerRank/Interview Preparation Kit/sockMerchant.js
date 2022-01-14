function sockMerchant(n, ar) {
    // Write your code here

    // sort array
    ar = ar.sort( (a,b) => a - b);
    
    // count each value
    const counts = {};
    ar.forEach(element => {
        counts[element] = (counts[element] || 0) + 1;
    })


    let pairs = 0;
    Object.values(counts).forEach(e => {
        if (e % 2 == 0) {
            pairs += (e / 2);
            
        } else if (e > 1) {
            e = e - 1;
            pairs += (e / 2);
        }
    })

    return pairs;
}

console.log(sockMerchant(10, [1,1,3,1,2,1,3,3,3,3]));