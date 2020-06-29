window.onload = function () {

    "use strict";

    const biggerDecoration = document.getElementById("biggerDecoration");
    const text = document.getElementById("text");

    biggerDecoration.onclick = function () {
        window.setInterval(increaseFont, 500);
    };

    const increaseFont = function () {
        const currentFontSize = window.getComputedStyle(document.getElementById("text")).fontSize;
        text.style.fontSize = parseInt(currentFontSize) + 2 + "pt";
    }

    const bling = document.getElementById("bling");
    const body = document.getElementById("body");

    bling.onchange = function () {
        if (bling.checked) {
            text.style.fontWeight = "bold";
            text.style.color = "green";
            text.style.textDecoration = "underline";
            body.style.backgroundImage = "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
        }
        else {
            text.style.fontWeight = "initial";
            text.style.color = "initial";
            text.style.textDecoration = "initial";
            body.style.backgroundImage = "";

        }
    }

    const pigLatin = document.getElementById("pigLatin");

    pigLatin.onclick = function () {
        const text = document.getElementById("text");
        text.value = translatePigLatin(text.value);
    }

    function translatePigLatin(str) {
        const words = str.split(" ");
        const vowels = ["a", "e", "i", "o", "u"];
        let str2 = "";
        words.forEach(word => {
            if (vowels.includes(word[0])) {
                str2 += word + "ay ";
            } else {
                str2 += word.slice(1) + word[0] + "ay ";
            }
        });
        return str2.split(' ').map(function (word) {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() + " ";
        }).join('');
    }

    const malkovitch = document.getElementById("malkovitch");

    malkovitch.onclick = function () {
        const text = document.getElementById("text");
        text.value = translateMalkovitch(text.value);
    }

    function translateMalkovitch(str) {
        const words = str.split(" ");
        let str2 = "";
        words.forEach(word => {
            if (word.length >= 5) {
                str2 += "Malkovich ";
            } else {
                str2 += word + " ";
            }
        });
        return str2;
    }
};