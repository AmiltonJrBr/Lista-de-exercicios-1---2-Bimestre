let v1 = document.querySelector("#v1");
let v2 = document.querySelector("#v2");
let btComp = document.querySelector("#btComp");
let result = document.querySelector("#result");

function compararMaior(){
    if(Number(v1.value) > Number(v2.value)){
        result.textContent = Number(v1.value) + " é maior";
    } else if(Number(v1.value)==Number(v2.value)){
        result.textContent = "numeros iguais";
    } else {
        result.textContent = Number(v2.value) + " é maior";
    }
}

btComp.onclick = function(){
    compararMaior();
}