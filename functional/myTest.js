"use strict";
/* global describe */
/* global it */
/* global assert */

describe("sum", function () {

    it("sum of [1,2,3,4] is 10", function () {
        assert.equal(sum([1, 2, 3, 4]), 10);
    });

    it("sum of [30, 30, -10] is 50", function () {
        assert.equal(sum([30, 30, -10]), 50);
    });

});

describe("multiply", function () {

    it("multiplication of [1,2,3,4] is 24", function () {
        assert.equal(multiply([1, 2, 3, 4]), 24);
    });

    it("multiplication of [3, 4, -10] is -120", function () {
        assert.equal(multiply([3, 4, -10]), -120);
    });

});

describe("reverse", function () {

    it("reverse of 'Yes & No' is 'oN & seY'", function () {
        assert.equal(reverse("Yes & No"), 'oN & seY');
    });

    it("reverse of 'Wow' is 'woW'", function () {
        assert.equal(reverse("Wow"), 'woW');
    });

});

describe("filterLongWords", function () {

    it("returns an empty array for ['a', 'ab'] for more than two characters", function () {
        assert.isArray(findLongestWords(['a', "ab"], 2));
    });

    it("words containing greater than two characters from ['a', 'ab', 'abc', 'abcd'] are ['abc', 'abcd']", function () {
        assert.sameOrderedMembers(findLongestWords(['a', "ab", "abc", "abcd"], 2), ["abc", "abcd"]);
    });

    it("words containing greater than five characters from ['Hello', ',', 'Welcome', 'To', 'My', 'World'] is ['Welcome']", function () {
        assert.sameOrderedMembers(findLongestWords(['Hello', ',', 'Welcome', 'To', 'My', 'World'], 5), ["Welcome"]);
    });

});