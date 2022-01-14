function countSwaps(a) {
    // Write your code here
    
    let aux, n = a.length, count = 0;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1; j++) {
            if (a[j] > a[j+1]) {
                aux = a[j];
                a[j] = a[j+1];
                a[j+1] = aux;
                count++
            }
        }
    }
    console.log(`Array is sorted in ${count} swaps.`);
    console.log(`First Element: ${a[0]}`);
    console.log(`Last Element: ${a[a.length-1]}`);
}

console.log(countSwaps([3,2,1]));