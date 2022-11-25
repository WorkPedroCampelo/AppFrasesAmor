var numFrase = 1;
var contadorFrases= 0;
var frase = "Prueba";
var contadorFrasesTexto= "Número de frase= 0";




function contador() {

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // Generate a random number between 1 and 10 (including 1 and 10)
    var randomNum = randomNumber(1, 6);
    console.log(randomNum);

    numFrase= randomNum;


    switch (numFrase) {
        case 1:
            frase = "Hola mi amor, este es la primera frase, espero que te guste esta app <3";
            document.getElementById("fraseBonita").innerHTML = frase;
            contadorFrases=1;
            contadorFrasesTexto= "Número de frase = " + contadorFrases;
            document.getElementById("contadorFrases").innerHTML = contadorFrasesTexto;
            break;
        case 2:
            frase = "Hola cariño, un día más amandote, da igual que día leas esto ";
            document.getElementById("fraseBonita").innerHTML = frase;
            contadorFrases=2;
            contadorFrasesTexto= "Número de frase = " + contadorFrases;
            document.getElementById("contadorFrases").innerHTML = contadorFrasesTexto;
            break;
        case 3:
            frase = "Hola que tal has pasado este dia? espero que muy bien, leuirgfh eroreuiy goeirb erg leyiru";
            document.getElementById("fraseBonita").innerHTML = frase;
            contadorFrases=3;
            contadorFrasesTexto= "Número de frase = " + contadorFrases;
            document.getElementById("contadorFrases").innerHTML = contadorFrasesTexto;
            break;
        case 4:
            frase = "Hola que tal has pasado este dia? espero que muy bien, leuirgfh eroreuiy goeirb erg leyiru";
            document.getElementById("fraseBonita").innerHTML = frase;
            contadorFrases=4;
            contadorFrasesTexto= "Número de frase = " + contadorFrases;
            document.getElementById("contadorFrases").innerHTML = contadorFrasesTexto;
            break;
        case 5:
            frase = "Hola que tal has pasado este dia? espero que muy bien, leuirgfh eroreuiy goeirb erg leyiru";
            document.getElementById("fraseBonita").innerHTML = frase;
            contadorFrases=5;
            contadorFrasesTexto= "Número de frase = " + contadorFrases;
            document.getElementById("contadorFrases").innerHTML = contadorFrasesTexto;
            break;
        case 6:
            frase = "Hola que tal has pasado este dia? espero que muy bien, leuirgfh eroreuiy goeirb erg leyiru";
            document.getElementById("fraseBonita").innerHTML = frase;
            contadorFrases=6;
            contadorFrasesTexto= "Número de frase = " + contadorFrases;
            document.getElementById("contadorFrases").innerHTML = contadorFrasesTexto;
            break;

        default:
            frase = "Hola que tal has pasado este dia? espero que muy bien, leuirgfh eroreuiy goeirb erg leyiru";
            document.getElementById("fraseBonita").innerHTML = frase;
            contadorFrases=0;
            contadorFrasesTexto= "Número de frase = " + contadorFrases;
            document.getElementById("contadorFrases").innerHTML = contadorFrasesTexto;
            break;
    }
}
//falta hacer que frase pille numero aletorio y este de un mensaje que se aplique al parrafo con id "frase bonita"

