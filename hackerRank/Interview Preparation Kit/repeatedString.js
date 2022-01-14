/*
 * Complete the 'repeatedString' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 * 
 * ei: repeatedString('aba', 10) => 'abaabaabaa' = there are 7 'a'
 */

function repeatedString(s, n) {
    let cantOfA = (s.match(/a/g) || []).length; // 2
    let count = cantOfA * Math.floor(n/s.length) /* 2*5 = hasta aca hay 10 */
    let remainder = (n % s.length)
    let remainderCount = (s.substring(0, remainder).match(/a/g) || []).length
    // suma la primera 'a' = 11
    return count + remainderCount
}

console.log(repeatedString('abasss', 31)) // = abasssabasssabasssabasssabasssa
