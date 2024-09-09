function calcular() {
    // Obtener los valores de los campos de entrada
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operacion = document.getElementById('operacion').value;
    var resultado;

    // Realizar la operación seleccionada
    if (operacion === 'sumar') {
        resultado = num1 + num2;
    } else if (operacion === 'restar') {
        resultado = num1 - num2;
    } else if (operacion === 'multiplicar') {
        resultado = num1 * num2;
    } else if (operacion === 'dividir') {
        resultado = num1 / num2;
    }

    // Mostrar el resultado en el label
    document.getElementById('resultado').innerText = resultado;
}