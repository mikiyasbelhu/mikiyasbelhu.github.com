"use strict"

$(function() {
    let lost = false;
    let started = false;
    $(".boundary").mouseover(function() {
        if (!lost && started) {
            gameLost();
        }
    })

    $("#end").mouseenter(function() {
        if (!lost && started) {
            $('#status').text("You win! :]");
            started = false;
        }
    })

    $("#start").click(function() {
        lost = false;
        started = true;
        $('#status').text("Started new game");
        $(".boundary").each((id, el) => {
            $(el).removeClass("youlose");
        });

    })

    $("#maze").mouseleave(function() {
        if (!lost && started) {
            gameLost();
        }
    })

    function gameLost() {
        $(".boundary").each((id, el) => {
            $(el).addClass("youlose");
        })
        $('#status').text("Sorry, you lost! :[");
        lost = true;
        started = false;
    }

});