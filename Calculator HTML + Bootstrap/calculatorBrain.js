var result = document.getElementById("result");

function onNumberClicked(numberButton){
    
    if(result.innerHTML == "0"){
        result.innerHTML = numberButton.innerHTML;
    }
    else{
        result.innerHTML += " " + numberButton.innerHTML;
    }
}

function onClearClicked(){
    result.innerHTML = "0";
}

function onEqualsClicked(){
    //TODO implement this function
    // var resultado = eval("1+2-1");
    // alert(resultado);
    var resultado = 0;
    resultado = document.getElementById('result').value;
    alert(resultado);
    // parseInt(document.getElementById('result')).value = '';
    // parseInt(document.getElementById('result')).value = eval(result);
}

// function onDivideClicked(){
//     //TODO implement this function
//     // var divisao = document.getElementById('#divideButton');
//     // var botao1 = document.querySelector('.numero1').value;
//     // var botao2 = document.querySelector('.numero2').value;
//     // var divide = botao1 / botao2;
//     // console.log(divide)
//     // var divide = numberButton1 / numberButton2;
// }



// function onAddClicked(){
//     //TODO implement this function
//     result
// }

// function onSubtractClicked(){
//     //TODO implement this function
// }

// function onMultiplyCliked(){
//     //TODO implement this function
// }

