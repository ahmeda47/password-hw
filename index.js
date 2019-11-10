// var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~", ];
// var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//var upperLower = [...upperCase, ...lowerCase];
//var upperLowerSpecial = [...upperCase, ...lowerCase, ...specialChar];
//var upperLowerSpecialNum = [...upperCase, ...lowerCase, ...specialChar, ...num];
var click1 = document.querySelector("#type1");
var click2 = document.querySelector("#type2");
var click3 = document.querySelector("#type3");
var click4 = document.querySelector("#type4");
var generateClick = document.querySelector("#generate");
var mixedPass = document.querySelector("#password")


generateClick.addEventListener("click", function(){
    var checks = document.getElementsByClassName("check");
    for (var i = 0; i < 4; i++){
        if (checks[i].checked){
            mixedPass.innerHTML += checks[i].value;
        }
    }
});

//randomizer should equal the total of the selected types' elements
