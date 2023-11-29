/*
    index.js - JavaScript for the Web
    Author: Nicole Van Fleet Kingery
    Date: 11/12/23
*/

function sortingHat(str) {
    // simplified code for task X
    var mod = ["Griffindor", "Slytherin", "Hufflepuff", "Ravenclaw"]
    return mod[(str.length % 4)]
    /* OG code
    var length  = str.length;
    var mod = length % 4;
    if (mod == 0) {
        return "Griffindor";
    } else if (mod == 1) {
        return "Slytherin";
    } else if (mod == 2) {
        return "Hufflepuff";
    } else {
        return "Ravenclaw";
    }; */
};

$("#button").click(function() {
    const name = $("#input").val();
    // check for input
    if (name.length == 0) {
        $("section").removeClass();
        $("#results").addClass("minor-section");
        $("#output").html("</br>Please enter your name to be sorted.");
        return
    }
    // sort
    var house = sortingHat(name);
    $("#results").removeClass();
    $("#output").html("<h3>The sorting house has sorted you into " + house);
    if (house == "Griffindor") {
        $("#output").append("<p>A true Griffindor is Courageous, Chivalrous, and Daring.</p>");
        $("section").removeClass().addClass("griffindor");
    } else if (house == "Slytherin") {
        $("#output").append("<p>A true Slytherin is Ambitious, Resourceful, and Cunning.</p>");
        $("section").removeClass().addClass("slytherin");
    } else if (house == "Hufflepuff") {
        $("#output").append("<p>A true Hufflepuff is Loyal, Patient, and Hard Working.</p>");
        $("section").removeClass().addClass("hufflepuff");
    } else if (house == "Ravenclaw") {
        $("#output").append("<p>A true Ravenclaw is Wise, Intelligent, and Creative.</p>");
        $("section").removeClass().addClass("ravenclaw");
    };
});
