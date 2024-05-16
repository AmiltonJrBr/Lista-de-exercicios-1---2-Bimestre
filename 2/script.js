let preco = document.querySelector("#preco");
let quant = document.querySelector("#quant");
let btCalc = document.querySelector("#btCalc");
let result = document.querySelector("#result");

function calcularValor(){
    result.textContent = Number(preco.value) * Number(quant.value);
}

btCalc.onclick = function(){
    calcularValor();
}