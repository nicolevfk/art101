/*
    index.js - JavaScript for the Web
    Author: Nicole Van Fleet Kingery
    Date: 11/12/23
*/

function sortingHat(str) {
    // simplified code for task X
    var mod = ["<h3>The Sorting Hat has sorted you into Griffindor</h3> <p>A Griffindor is Courageous, Chivalrous, and Daring.</p>", 
    "<h3>The Sorting Hat has sorted you into Slytherin</h3> <p>A Slytherin is Ambitious, Resourceful, and Cunning.</p>", 
    "<h3>The Sorting Hat has sorted you into Hufflepuff</h3> <p>A Hufflepuff is Loyal, Patient, and Hard Working.</p>", 
    "<h3>The Sorting Hat has sorted you into Ravenclaw</h3> <p>A Ravenclaw is Wise, Intelligent, and Creative.</p>"]
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
    var house = sortingHat(name);
    $("#output").html(house);
});