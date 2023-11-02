// index.js - Functions
// Author: Nicole Van Fleet Kingery
// Date: 10/31/23

// Variables

// Functions
function alphabetizeName(userName) {
    return userName.toLowerCase().split("").sort().join("")
}

// uses code from stackoverflow: https://stackoverflow.com/questions/8996963/how-to-perform-case-insensitive-sorting-array-of-string-in-javascript
function caseInsensitiveSort(userName) {
    return userName.split('').sort( function (a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    }).join('');
}

function individualNameSort(userName) {
    userName = userName.split(' ');
    var newName = '';
    for (var i=0; i < userName.length; i++) {
        nextName = caseInsensitiveSort(userName[i])
        newName = newName + ' ' + nextName;
    };
    return newName
}

// Use functions
var named = window.prompt("Please insert your name so I can sort it: ")
document.writeln("Here is your sorted name: ", alphabetizeName(named), "</br>");
document.writeln("Here is your sorted name without converting to lowercase: ", caseInsensitiveSort(named), "</br>")
document.writeln("And just for fun, here's each part of your name sorted individually: ", individualNameSort(named));
