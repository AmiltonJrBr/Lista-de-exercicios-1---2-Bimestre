let saldo = document.querySelector("#saldo");
let btCalc = document.querySelector("#btCalc");
let result = document.querySelector("#result");

function calcularReajuste(){
    result.textContent = Number(saldo.value) - (Number(saldo.value) * Number(0.01));
}

btCalc.onclick = function(){
    calcularReajuste();
}