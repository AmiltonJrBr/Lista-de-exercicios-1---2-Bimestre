let valorPago = document.querySelector("#valorPago");
let valorProduto = document.querySelector("#valorProduto");
let btCalc = document.querySelector("#btCalc");
let result = document.querySelector("#result");

function calcularTroco(){
    result.textContent = Number(valorPago.value) - Number(valorProduto.value);
}

btCalc.onclick = function(){
    calcularTroco();
}