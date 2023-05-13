var btnTranslate = document.querySelector("#btn-tanslate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");




function clickHandler(){
    outputDiv.innerText = "ahhahhahaha" + txtInput.value;
};

btnTranslate.addEventListener("click", clickHandler)

    
   

