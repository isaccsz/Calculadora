function inserirNumero(num){
    let numero = document.getElementById('field').innerHTML;
    document.getElementById('field').innerHTML = numero + num;
}

function limparNumero(){
    document.getElementById('field').innerHTML = '';
}

function inserirCalculo(){

    let resultado = document.getElementById('field').innerHTML;

    if(resultado!=0){
        document.getElementById('field').innerHTML = eval(resultado);
    }
    
}

function turnOff(){
    let fundo = document.getElementById('field');

    if(fundo.style.background == 'white'){
        fundo.style.background = 'black';
        document.getElementById('off').innerHTML = 'ON'
    }else{
        fundo.style.background = 'white'
        document.getElementById('off').innerHTML = 'OFF'
    }
}