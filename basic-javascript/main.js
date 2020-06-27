/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
  if (expected === found) {
    return "TEST SUCCEEDED";
  } else {
    return "TEST FAILED.  Expected " + expected + " found " + found;
  }
}

function myFunctionTestArray(expected, found) {
  // if length is not equal 
  if (expected.length != found.length)
    return "TEST FAILED.  Unmatching array size";
  else {
    // comapring each element of array 
    for (var i = 0; i < expected.length; i++)
      if (expected[i] != found[i]) {
        return "TEST FAILED.  Expected " + expected + " found " + found;
      }
    return "TEST SUCCEEDED";
  }
}

/* max returns the maximum of 2 arguments */
function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  };
}

console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));
console.log("Expected output of max(30,30) is 30  " + myFunctionTest(30, max(30, 30)));
console.assert(20 === max(20, 10), "TEST FAILED.  Expected " + 20 + " found " + max(20, 10));
console.assert(30 === max(30, 30), "TEST FAILED.  Expected " + 30 + " found " + max(30, 30));

/* max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
  return max(max(a, b), c);

}

console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));
console.assert(44 === maxOfThree(5, 4, 44), "TEST FAILED.  Expected " + 44 + " found " + maxOfThree(5, 4, 44));
console.assert(55 === maxOfThree(55, 4, 44), "TEST FAILED.  Expected " + 55 + " found " + maxOfThree(55, 4, 44));


/* isVowel returns true if it is a vowel, false otherwise */
function isVowel(a) {
  let char = a.charAt(0);
  if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' ||
    char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {
    return true;
  }
  return false;
}

console.log("Expected output of isVowel('a') is true  " + myFunctionTest(true, isVowel('a')));
console.log("Expected output of isVowel('A') is true  " + myFunctionTest(true, isVowel('A')));
console.log("Expected output of isVowel('b') is false  " + myFunctionTest(false, isVowel('b')));
console.assert(true === isVowel('a'), "TEST FAILED.  Expected " + true + " found " + isVowel('a'));
console.assert(true === isVowel('A'), "TEST FAILED.  Expected " + true + " found " + isVowel('A'));
console.assert(false === isVowel('b'), "TEST FAILED.  Expected " + false + " found " + isVowel('b'));


/* max returns sum of all the numbers in an array of numbers */
function sum(array) {
  let sum = 0;
  for (let index = 0; index < array.length; index++) {
    sum += array[index];
  }
  return sum;
}

console.log("Expected output of sum([1,2,3,4]) is 10  " + myFunctionTest(10, sum([1, 2, 3, 4])));
console.log("Expected output of sum([30,30,-10]) is 50  " + myFunctionTest(50, sum([30, 30, -10])));
console.assert(10 === sum([1, 2, 3, 4]), "TEST FAILED.  Expected " + 10 + " found " + sum([1, 2, 3, 4]));
console.assert(50 === sum([30, 30, -10]), "TEST FAILED.  Expected " + 50 + " found " + sum([30, 30, -10]));


/* max returns multiplication of all the numbers in an array of numbers */
function multiply(array) {
  let product = 1;
  for (let index = 0; index < array.length; index++) {
    product *= array[index];
  }
  return product;
}

console.log("Expected output of multiply([1,2,3,4]) is 24  " + myFunctionTest(24, multiply([1, 2, 3, 4])));
console.log("Expected output of multiply([3,4,-10]) is -120  " + myFunctionTest(-120, multiply([3, 4, -10])));
console.assert(24 === multiply([1, 2, 3, 4]), "TEST FAILED.  Expected " + 24 + " found " + multiply([1, 2, 3, 4]));
console.assert(-120 === multiply([3, 4, -10]), "TEST FAILED.  Expected " + -120 + " found " + multiply([3, 4, -10]));


/* reverse returns the reversal of a string */
function reverse(str) {
  let temp = str.split("");
  temp = temp.reverse();
  temp = temp.join("");
  return temp;
}

console.log("Expected output of reverse('oN & seY') is Yes & No  " + myFunctionTest("Yes & No", reverse("oN & seY")));
console.log("Expected output of reverse('Wow') is woW  " + myFunctionTest("woW", reverse("Wow")));
console.assert("Yes & No" === reverse("oN & seY"), "TEST FAILED.  Expected " + "Yes & No" + " found " + reverse("oN & seY"));
console.assert("woW" === reverse("Wow"), "TEST FAILED.  Expected " + "woW" + " found " + reverse("Wow"));

/* findLongestWord returns the length of the longest string in an array*/
function findLongestWord(array) {
  let len = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index].length > len) {
      len = array[index].length;
    }
  }
  return len;
}

console.log("Expected output of findLongestWord(['a','ab','abc','abcd']) is 4  " + myFunctionTest(4, findLongestWord(['a', "ab", "abc", "abcd"])));
console.log("Expected output of findLongestWord(['Hello','My','World']) is 5  " + myFunctionTest(5, findLongestWord(["Hello", "My", "World"])));
console.assert(4 === findLongestWord(['a', "ab", "abc", "abcd"]), "TEST FAILED.  Expected " + 4 + " found " + findLongestWord(['a', "ab", "abc", "abcd"]));
console.assert(5 === findLongestWord(["Hello", "My", "World"]), "TEST FAILED.  Expected " + 5 + " found " + findLongestWord(["Hello", "My", "World"]));


/* findLongestWords returns the array of words that are longer than a given length from an array of strings*/
function findLongestWords(array, len) {
  let temp = [];
  for (let index = 0; index < array.length; index++) {
    if (array[index].length > len) {
      temp.push(array[index]);
    }
  }
  return temp;
}

console.log("Expected output of findLongestWords(['a','ab','abc','abcd'],2) is ['abc', 'abcd']  " + myFunctionTestArray(["abc", "abcd"], findLongestWords(['a', "ab", "abc", "abcd"], 2)));
console.log("Expected output of findLongestWords(['Hello',',','Welcome','To','My','World']) is ['Welcome']  " + myFunctionTestArray(["Welcome"], findLongestWords(['Hello', ',', 'Welcome', 'To', 'My', 'World'], 5)));
console.assert(JSON.stringify(["abc", "abcd"]) == JSON.stringify(findLongestWords(['a', "ab", "abc", "abcd"], 2)), "TEST FAILED.  Expected " + ["abc", "abcd"] + " found " + findLongestWords(['a', "ab", "abc", "abcd"], 2));
console.assert(JSON.stringify(["Welcome"]) == JSON.stringify(findLongestWords(['Hello', ',', 'Welcome', 'To', 'My', 'World'], 5)), "TEST FAILED.  Expected " + ["Welcome"] + " found " + findLongestWords(['Hello', ',', 'Welcome', 'To', 'My', 'World'], 5));

/* multiplyWithMap return new array with elements translated/mapped to another set of values */
function multiplyWithMap(a) {
  const b = a.map(function (elem, i, array) {
    return elem * 10;
  })
  return b;
}

console.log("Expected output of multiplyWithMap([1,2,3,4]) is [10, 20, 30, 40]  " + myFunctionTestArray([10, 20, 30, 40], multiplyWithMap([1, 2, 3, 4])));
console.log("Expected output of multiplyWithMap([0,2,4,8]) is [0,20,40,80]  " + myFunctionTestArray([0, 20, 40, 80], multiplyWithMap([0, 2, 4, 8])));
console.assert(JSON.stringify([10, 20, 30, 40]) === JSON.stringify(multiplyWithMap([1, 2, 3, 4])), "TEST FAILED.  Expected " + [10, 20, 30, 40] + " found " + multiplyWithMap([1, 2, 3, 4]));
console.assert(JSON.stringify([0, 20, 40, 80]) === JSON.stringify(multiplyWithMap([0, 2, 4, 8])), "TEST FAILED.  Expected " + [0, 20, 40, 80] + " found " + multiplyWithMap([0, 2, 4, 8]));

/* filterEqualToThree new array containing select elements based on a condition */
function filterEqualToThree(a) {
  const c = a.filter(function (elem, i, array) {
    return elem === 3;
  });
  return c;
}

console.log("Expected output of filterEqualToThree([1,2,3,4]) is [3]  " + myFunctionTestArray([3], filterEqualToThree([1, 2, 3, 4])));
console.log("Expected output of filterEqualToThree([0,2,4,8]) is []  " + myFunctionTestArray([], filterEqualToThree([0, 2, 4, 8])));
console.assert(JSON.stringify([3]) === JSON.stringify(filterEqualToThree([1, 2, 3, 4])), "TEST FAILED.  Expected " + [3] + " found " + filterEqualToThree([1, 2, 3, 4]));
console.assert(JSON.stringify([]) === JSON.stringify(filterEqualToThree([0, 2, 4, 8])), "TEST FAILED.  Expected " + [] + " found " + filterEqualToThree([0, 2, 4, 8]));

/* filterEqualToThree accumulate a the product of numbers across the array */
function multiplyWithReduce(a) {
  const f = a.reduce(function (accumulator, elem) {
    return accumulator * elem;
  }, 1);
  return f;
}

console.log("Expected output of multiplyWithReduce([1,2,3,4]) is 24  " + myFunctionTest(24, multiplyWithReduce([1, 2, 3, 4])));
console.log("Expected output of multiplyWithReduce([0,2,4,8]) is 0  " + myFunctionTest(0, multiplyWithReduce([0, 2, 4, 8])));
console.assert(24 === multiplyWithReduce([1, 2, 3, 4]), "TEST FAILED.  Expected " + 24 + " found " + multiplyWithReduce([1, 2, 3, 4]));
console.assert(0 === multiplyWithReduce([0, 2, 4, 8]), "TEST FAILED.  Expected " + 0 + " found " + multiplyWithReduce([0, 2, 4, 8]));

