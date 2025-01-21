function inserir(num) {
    var numeros = document.getElementById('calculo').innerHTML;

    document.getElementById('calculo').innerHTML = numeros + num;
}
function calcular() {
    var calculo = document.getElementById('calculo').innerHTML;
    
    document.getElementById('calculo').innerHTML = eval(calculo);
}
function limpar() {
    document.getElementById('calculo').innerHTML = "";
}