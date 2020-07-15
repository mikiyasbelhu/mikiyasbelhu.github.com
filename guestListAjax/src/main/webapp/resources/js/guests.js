$(function() {
    $("#send").click(updateGuests);
});

function updateGuests() {
    var first = $("#first").val();
    var last = $("#last").val();

    $.ajax("guest.ajax", {
        "type": "post",
        "data": {
            "first": first,
            "last": last
        }
    }).done(data => displayGuests(data));
}

function displayGuests(data) {
    const container = $("<div>");
    for (guest of data) {
        container.append($("<p>").text(guest.first + " " + guest.last))
    }
    $("#guestList").html(container);

}