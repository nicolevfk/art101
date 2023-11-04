// index.js - Sorting user input alphabetically
// Author: Nicole Van Fleet Kingery
// Date: 10/31/23

// Variables
var named = window.prompt("Please insert your name so I can rename you: ")

// Functions
function alphabetizeName(userName) {
    return userName.toLowerCase().split("").sort().join("")
}

    // keeps the capitals of each 
    // uses code from stackoverflow: https://stackoverflow.com/questions/8996963/how-to-perform-case-insensitive-sorting-array-of-string-in-javascript
function caseInsensitiveSort(userName) {
    return userName.split('').sort( function (a, b) {
        return a.localeCompare(b);
    }).join('');
}


    // sorts each part of name, keeping spaces
function individualNameSort(userName) {
    userName = userName.split(' ');
    var newName = '';
    for (var i=0; i < userName.length; i++) {
        nextName = caseInsensitiveSort(userName[i])
        newName = newName + ' ' + nextName;
    };
    return newName
}

    // sorts and capitalizes the first letter of each name
    // borrows code from stackoverflow: https://stackoverflow.com/questions/2332811/capitalize-words-in-string
function newUserName(userName) {
    var newName = individualNameSort(userName);
    return newName.toLowerCase().replace( /\b./g, function(a) { return a.toUpperCase(); });
}

// Use functions
document.writeln("So your name is ", named, "? </br>")
document.writeln("Well, here is your sorted name: ", alphabetizeName(named), "</br>");
document.writeln("Here is your sorted name without converting to lowercase: ", caseInsensitiveSort(named), "</br>")
document.writeln("Here is each part of your name sorted individually: ", individualNameSort(named), "</br>");
document.writeln("And here is that capitalized correctly, and your new name: ", newUserName(named));
