 function countingValleys(steps, path) {
    // Write your code here

    // Convert path to array
    path = path.toUpperCase().split('');

    let cantOfValleys = 0;
    let seaLevel = 0;
    let aboveSea = 0;

    for (let i = 0; i < steps; i++) {
        // Ignore if there is a mountain
        if (path[i] == 'U' && seaLevel == 0) {
            aboveSea++;
            continue;
        } else if (path[i] == 'D' && aboveSea > 0) {
            aboveSea--;
            continue;
        }
        
        // Start counting when aboveSea is zero
        if (path[i] == 'U' && aboveSea == 0) {
            seaLevel++;
        } else if (path[i] == 'D' && aboveSea == 0) {
            seaLevel--;
        }

        // When it touches the seaLevel, increase cantOfValleys :)
        if (seaLevel == 0) {
            cantOfValleys++;
        }

    }

    return cantOfValleys;
}

let path = 'DDUUDDUDUUUD';
console.log(countingValleys(path.length,path));


/*
Examples: 

_/\      _ : 1
   \    /
    \/\/

UDDDUDUU: 1
_/\      _
   \    /
    \/\/

DDUUDDUDUUUD: 2
_          /\_
 \  /\    /
  \/  \/\/


Test cases 0:
8, UDDDUDUU
expected = 1

Test cases 1:
12, DDUUDDUDUUUD
expected = 2
*/