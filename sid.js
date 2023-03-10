/*
 *
 * Sequence Identifier (SID) algorithm.
 *
 * Copyright © 2016-2023 NicheVision, Inc.
 * Everyone is permitted to copy and distribute verbatim copies of this V1.1 Open Source Public license document, but changing it is not allowed.  This program is free software: you can redistribute it and/or modify it under the terms of the V1.1 Open Source Public License or (at your option) any later version.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. 
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
