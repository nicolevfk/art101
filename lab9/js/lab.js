// index.js - Libraries and jQuery
// Author: Nicole Van Fleet Kingery
// Date: 11/7/23

// create a button for each div
$(".minor-section").append("<br><button class='toggle-css'>Make Special</button>");

//make buttons do functions when clicked
    // when clicking the "Make Special" button in one of the 3 sections, the section should change css
$(".minor-section button").click( function() {
    ($(this).parent()).toggleClass("special");
});
