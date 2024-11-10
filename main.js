document.getElementById('form-numeros').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (num2 > num1) {
        alert('Ok: num 2 > num 1');
    } else {
        alert('Erro: num 2 deve ser maior que num 1');
    }
});

