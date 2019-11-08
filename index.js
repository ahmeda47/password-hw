var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "U+005C", "]", "^", "_", "`", "{", "|", "}", "~", ];
//var passLength = prompt("How long should the password be?");
var passType =  prompt("Which types do you want?");

if (passType === "uppercase"){
    alert(upperCase);
}
//alert(passType);


//if someone selects 1,2,3, or 4 types then add up respective number of arrays
//randomizer should equal the total of the selected types' elements
//need for loop

