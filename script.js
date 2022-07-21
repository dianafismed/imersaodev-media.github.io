function Media() {
  var primeiro = parseFloat(document.getElementById("primeiro").value);
  var segundo = parseFloat(document.getElementById("segundo").value);
  var terceiro = parseFloat(document.getElementById("terceiro").value);
  var quarto = parseFloat(document.getElementById("quarto").value);

  var elementoMedia = document.getElementById("media");
  var media = ((primeiro + segundo + terceiro + quarto) / 4).toFixed(1);
  elementoMedia.innerHTML = "Média = " + media;
}

// Aula 1
// variáveis, strings, console.log, toFixed, operações matemáticas, concatenação
/*
var nome = "Diana";
var notaDoPrimeiroBimestre = 9.5;
var notaDoSegundoBimestre = 8.7;
var notaDoTerceiroBimestre = 9.3;
var notaDoQuartoBimestre = 10;

var notaFinal =
  (notaDoPrimeiroBimestre +
    notaDoSegundoBimestre +
    notaDoTerceiroBimestre +
    notaDoQuartoBimestre) /
  4;

notaFixada = notaFinal.toFixed(1); // arredonda para 1 casa após a vírgula

console.log("Bem vinda " + nome);
console.log(notaDoPrimeiroBimestre);

console.log("Final = " + notaFinal);
console.log("Fixada = " + notaFixada);
*/