var generateClick = document.querySelector("#generate");
var mixedPass = document.querySelector("#password");
var passLength = document.querySelector("#length")
var mixedChars = "";
var randomChars = "";

generateClick.addEventListener("click", function(){
    var checks = document.getElementsByClassName("check");
    for (var i = 0; i < 4; i++){
        if (checks[i].checked){
            mixedChars += checks[i].value;
        } 
    }

    for (var i = 0; i < passLength.value; i++){
        randomChars += mixedChars[Math.floor(Math.random() * mixedChars.length)]
    }

    if ( mixedPass.innerHTML === ""){
        mixedPass.innerHTML = randomChars;
    } 
});
