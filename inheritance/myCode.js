"use strict";

// Exercise 1

String.prototype.filter = function (keyword) {
    return this.split(" ").filter(str => str !== keyword).join(" ");
};

console.log("This house is not nice!".filter('not'));

// Exercise 2
Array.prototype.bubbleSort = function () {
    var arr = this;
    var len = arr.length;

    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;

}

console.log([6, 4, 0, 3, -2, 1].bubbleSort());

// Exercise 3
var Person = function () { };
Person.prototype.initialize = function (name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.describe = function () {
    return this.name + ", " + this.age + " years old.";
}
var Student = function () { };
Student.prototype = new Person();
Student.prototype.learn = function (subject) {
    console.log(this.name + " just learned " + subject);
}
var me = new Student();
me.initialize("John", 25);
me.learn("Inheritance");

var Teacher = function () { };
Teacher.prototype = new Person();
Teacher.prototype.teach = function (subject) {
    console.log(this.name + " is now teaching " + subject);
}

var teacher = new Teacher();
teacher.initialize("Peter", 35);
teacher.teach("Algorithms");