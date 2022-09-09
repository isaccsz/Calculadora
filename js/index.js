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