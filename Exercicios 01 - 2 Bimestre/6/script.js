let v1 = document.querySelector("#v1");
let v2 = document.querySelector("#v2");
let v3 = document.querySelector("#v3");
let v4 = document.querySelector("#v4");
let btComp = document.querySelector("#btComp");
let result = document.querySelector("#result");

function compararMaior(){
    if(Number(v1.value) > Number(v2.value)){
        if(Number(v1.value) > Number(v3.value)){
            if(Number(v1.value) > Number(v4.value)){
                result.textContent = Number(v1.value) + " é maior";
            }
        }
    }else if(Number(v2.value) > Number(v1.value)){
        if(Number(v2.value) > Number(v3.value)){
            if(Number(v2.value) > Number(v4.value)){
                result.textContent = Number(v2.value) + " é maior";
            }
        }
    }else if(Number(v3.value) > Number(v1.value)){
        if(Number(v3.value) > Number(v2.value)){
            if(Number(v3.value) > Number(v4.value)){
                result.textContent = Number(v3.value) + " é maior";
            }
        }
    }else if(Number(v4.value) > Number(v1.value)){
        if(Number(v4.value) > Number(v2.value)){
            if(Number(v4.value) > Number(v3.value)){
                result.textContent = Number(v4.value) + " é maior";
            }
        }
    }
}

btComp.onclick = function(){
    compararMaior();
}