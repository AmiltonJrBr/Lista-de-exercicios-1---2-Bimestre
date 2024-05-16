let v = document.querySelector("#v");
let btVerif = document.querySelector("#btVerif");
let result = document.querySelector("#result");

function verificarImpar(){
    if((Number(v.value) % 2) == 0){
        result.textContent = "Par";
    }else{
        result.textContent = "Impar";
    }
}

btVerif.onclick = function(){
    verificarImpar();
}