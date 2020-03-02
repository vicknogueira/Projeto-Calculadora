var result = document.getElementById("result");
var n1 = 0, n2 = 0, operacao = ''; // variável global
function onNumberClicked(numberButton){

    if(result.innerHTML == "0"){
        result.innerHTML = numberButton.innerHTML;
    }
    else{
        result.innerHTML += numberButton.innerHTML;
    }
}

function onClearClicked(){
    result.innerHTML = "0";
    n1 = '0';
    n2 = '0';
    operacao = '0';
}

function onEqualsClicked(){
    //TODO implement this function
    n2 = parseInt(result.innerHTML);
    // soma = n1 + n2
    // result.innerHTML = soma
    // console.log(soma);
    if(operacao == '+'){
        result.innerHTML = n1 + n2
    }else if(operacao == '-'){
        result.innerHTML = n1 - n2
    }else if(operacao == '*'){
        result.innerHTML = n1 * n2
    }if(operacao == '/'){
        if(n2 > 0){
            result.innerHTML = n1 / n2
        }
        else{
            result.innerHTML = "Impossível dividir por '0'";
            result.style.fontSize = '14px';
        }
    }
}

function onDivideClicked(){
    //TODO implement this function
    n1 = parseInt(result.innerHTML);
    operacao = '/';
    result.innerHTML = '0';
}
function onAddClicked(){
    //TODO implement this function
    var algo = ''; // variável local só existe aqui
    n1 = parseInt(result.innerHTML);
    operacao = '+';
    result.innerHTML = '0';
}

function onSubtractClicked(){
    //TODO implement this function
    n1 = parseInt(result.innerHTML);
    operacao = '-';
    result.innerHTML = '0';
}

function onMultiplyCliked(){
    //TODO implement this function
    n1 = parseInt(result.innerHTML);
    operacao = '*'
    result.innerHTML = '0'
}

