function inserirNumero(num){
    let numero = document.getElementById('field').innerHTML;
    document.getElementById('field').innerHTML = numero + num;
}

function limparNumero(){
    document.getElementById('field').innerHTML = '';
}