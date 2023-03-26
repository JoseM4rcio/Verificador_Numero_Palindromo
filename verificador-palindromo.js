function verificarPalindromo() {
    var numero = document.getElementById("numero").value;
    var resultado = document.getElementById("resultado");
  
    // Verifica se o número é palíndromo
    for (var i = 0; i < numero.length / 2; i++) {
      if (numero[i] !== numero[numero.length - 1 - i]) {
        resultado.innerHTML = "Não é um número palíndromo";
        return;
      }
    }
  
    resultado.innerHTML = "Sim é um número palíndromo";
  }