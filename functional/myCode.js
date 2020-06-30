"use strict";

/* sum returns sum of all the numbers in an array of numbers */
function sum(array) {
    return array.reduce((sum, num) => sum + num);
}

/* multiply returns multiplication of all the numbers in an array of numbers */
function multiply(array) {
    return array.reduce((product, num) => product * num);
}

/* reverse returns the reversal of a string */
function reverse(str) {
    return str.split("").reduce((reversed, char) => char + reversed);
}

/* findLongestWords returns the array of words that are longer than a given length from an array of strings*/
function findLongestWords(array, len) {
    return array.filter(word => word.length > len);
}