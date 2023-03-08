/*
 *
 * Sequence Identifier (SID) algorithm.
 *
 * NicheVision Inc.
 *
*/
function NormalizeSequence(sequence) {
    return sequence
    .toUpperCase()
    .trim()
    .split(/\[(\D+)\](\d+)/)
    .map(function(i, j, arr) {
        if (!isNaN(arr[j+1])) {
            return i.repeat(new Number(arr[j+1]));
        } else if (!isNaN(i)) {
            return "";
        } else {
            return i;
        }
    })
    .join("");
}
function SID(sequence) {
    return bigInt(SHA256(sequence), 16)
        .toString(26)
        .toUpperCase()
        .split("").reverse()
        .map(function(a) { 
            var charCode = a.charCodeAt(0); 
            if (charCode >= 48 && charCode <= 57) { 
                return String.fromCharCode(charCode + 17); 
            } 
            else { 
                return String.fromCharCode(charCode + 10); 
            } 
        })
        .join("");
}
