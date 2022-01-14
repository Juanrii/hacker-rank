function closestNumbers(arr) {

    // ordeno el array
    let sortedArr = arr.sort((a, b) => a - b);

    // lleno el array 'minimos' con [valorAbsoluto, [x, y]]
    let minimos = [];
    let abs = 0;
    for(let i = 0; i < sortedArr.length - 1; i++) {
        abs = Math.abs(sortedArr[i] - sortedArr[i+1]);
        minimos.push([abs, [sortedArr[i],sortedArr[i+1]]]); 
    }
    
    // ordeno los minimos por valorAbsoluto
    minimos.sort(sortFunction);

    let otroMin;
    let finales = [];
    let flag = true;
    // lleno en finales solo los que tienen el menor valorAbsoluto
    minimos.forEach(element => {
        // console.log(element[k])
        if (flag) {
            otroMin = element[0];
            flag = false;
            finales.push(element)
        } else {
            if (otroMin == element[0]) {
                finales.push(element)
            }
        }
    });

    // lleno 'resultados' con solo los [x,y]  
    let resultados = [];
    finales.forEach(element => {
        element.forEach(e => {
            if(Array.isArray(e)) {
                resultados.push(e)
            }
        })
    });

    // Convert to simple array
    resultados = resultados.concat.apply([], resultados);

    // mostrarlos
    return resultados;
}

function sortFunction(a, b) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] < b[0]) ? -1 : 1;
    }
}

console.log(closestNumbers([-20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594, 266854]))