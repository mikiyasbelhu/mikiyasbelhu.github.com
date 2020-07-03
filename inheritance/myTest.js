"use strict";
/* global describe */
/* global it */
/* global assert */

describe("filter", function () {

    it("filtering out 'not' from 'This house is not nice!' should return 'This house is nice!'", function () {
        assert.equal("This house is not nice!".filter('not'), "This house is nice!");
    });

});

describe("bubblesort", function () {

    it("bubble sorting [6, 4, 0, 3, -2, 1] should return [-2, 0, 1, 3, 4, 6]", function () {
        assert.sameOrderedMembers([6, 4, 0, 3, -2, 1].bubbleSort(), [-2, 0, 1, 3, 4, 6]);
    });

});

describe("teacher", function () {

    it("the console log of teach method on teacher works as expected", function () {

        let spy = sinon.spy(console, 'log');

        var teacher = new Teacher();
        teacher.initialize("Joe", 35);
        teacher.teach("Web Application Programming");

        assert(spy.calledWith("Joe is now teaching Web Application Programming"));

        spy.restore();
    });

});
