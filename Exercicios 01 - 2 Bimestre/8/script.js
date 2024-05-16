let cod = document.querySelector("#cod");
let btVerif = document.querySelector("#btLocaliz");
let result = document.querySelector("#result");

function localizarProduto(){
    if(Number(cod.value) == 1){
        result.textContent = "Parafuso";
    }else if(Number(cod.value) == 2){
        result.textContent = "Porca";
    }else if(Number(cod.value) == 3){
        result.textContent = "Prego";
    }else{
        result.textContent = "Diversos";
    }
}

btLocaliz.onclick = function(){
    localizarProduto();
}