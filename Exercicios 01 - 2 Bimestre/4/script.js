let n1 = document.querySelector("#n1");
let n2 = document.querySelector("#n2");
let n3 = document.querySelector("#n3");
let btCalcMA = document.querySelector("#btCalcMA");
let resultMA = document.querySelector("#resultMA");
let btCalcMP = document.querySelector("#btCalcMP");
let resultMP = document.querySelector("#resultMP");
let btCalcSM = document.querySelector("#btCalcSM");
let resultSM = document.querySelector("#resultSM");
let btCalcMM = document.querySelector("#btCalcMM");
let resultMM = document.querySelector("#resultMM");

function calcularMA(){
    resultMA.textContent = (Number(n1.value) + Number(n2.value) + Number(n3.value)) / 3;
}

btCalcMA.onclick = function(){
    calcularMA();
}

function calcularMP(){
    resultMP.textContent = ((Number(n1.value)*3) + (Number(n2.value)*2) + (Number(n3.value)*5)) / (3+2+5);
}

btCalcMP.onclick = function(){
    calcularMP();
}

function calcularSM(){
    calcularMA();
    calcularMP();
    resultSM.textContent = Number(resultMA.textContent) + Number(resultMP.textContent);
}

btCalcSM.onclick = function(){
    calcularSM();
}

function calcularMM(){
    calcularMA();
    calcularMP();
    calcularSM();
    resultMM.textContent = (Number(resultMA.textContent) + Number(resultMP.textContent) + Number(resultSM.textContent)) / 3;
}

btCalcMM.onclick = function(){
    calcularMM();
}