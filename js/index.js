var numFrase = 1;
var contadorFrases = 0;
var frase = "Prueba";
var contadorFrasesTexto = "Número de frase= 0";
var cheater=false;



function contador() {

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // Generate a random number between 1 and 10 (including 1 and 10)
    var randomNum = randomNumber(0, 30);
    console.log(randomNum);

    numFrase = randomNum;

    if (numFrase==26 && !cheater) {
        numFrase=25;
    }

    if (cheater==true) {
        numFrase=26;
        cheater=false;
    }
  

    switch (numFrase) {
        case 1:
            frase = "Hola mi amor, este es la primera frase, espero que te guste esta app <3";
            document.getElementById("fraseBonita").innerHTML = frase;
            contadorFrases = 1;
            contadorFrasesTexto = "Número de frase = " + contadorFrases;
            document.getElementById("contadorFrases").innerHTML = contadorFrasesTexto;
            break;
        case 2:
            frase = "Hola cariño, un día más amandote, da igual cuando leas esto ";
            document.getElementById("fraseBonita").innerHTML = frase;
            contadorFrases = 2;
            contadorFrasesTexto = "Número de frase = " + contadorFrases;
            document.getElementById("contadorFrases").innerHTML = contadorFrasesTexto;
            break;
        case 3:
            frase = "Dormiste bien hoy cariño? No soy adivino, dimelo por Whatsapp";
            document.getElementById("fraseBonita").innerHTML = frase;
            contadorFrases = 3;
            contadorFrasesTexto = "Número de frase = " + contadorFrases;
            document.getElementById("contadorFrases").innerHTML = contadorFrasesTexto;
            break;
        case 4:
            frase = "Hay muchas cosas que no se de ti, pero sé que haces magia con solo sonreír y eso me basta";
            document.getElementById("fraseBonita").innerHTML = frase;
            contadorFrases = 4;
            contadorFrasesTexto = "Número de frase = " + contadorFrases;
            document.getElementById("contadorFrases").innerHTML = contadorFrasesTexto;
            break;
        case 5:
            frase = "\"En los ojos correctos siempre serás arte\"";
            document.getElementById("fraseBonita").innerHTML = frase;
            contadorFrases = 5;
            contadorFrasesTexto = "Número de frase = " + contadorFrases;
            document.getElementById("contadorFrases").innerHTML = contadorFrasesTexto;
            break;
        case 6:
            frase = "Mi lugar favorito del mundo es a tu lado";
            document.getElementById("fraseBonita").innerHTML = frase;
            contadorFrases = 6;
            contadorFrasesTexto = "Número de frase = " + contadorFrases;
            document.getElementById("contadorFrases").innerHTML = contadorFrasesTexto;
            break;
        case 7:
            frase = "Para cuando pillamos las maletas y nos vamos a Frankfurt un fin de semana?";
            document.getElementById("fraseBonita").innerHTML = frase;
            contadorFrases = 7;
            contadorFrasesTexto = "Número de frase = " + contadorFrases;
            document.getElementById("contadorFrases").innerHTML = contadorFrasesTexto;
            break;
        case 8:
            frase = "Te quiero y te querré, con tus defectos y tus virtudes";
            document.getElementById("fraseBonita").innerHTML = frase;
            contadorFrases = 8;
            contadorFrasesTexto = "Número de frase = " + contadorFrases;
            document.getElementById("contadorFrases").innerHTML = contadorFrasesTexto;
            break;
        case 9:
            frase = "Eres mi momento favorito del día.";
            document.getElementById("fraseBonita").innerHTML = frase;
            contadorFrases = 9;
            contadorFrasesTexto = "Número de frase = " + contadorFrases;
            document.getElementById("contadorFrases").innerHTML = contadorFrasesTexto;
            break;
        case 10:
            frase = "Sé que a tu lado siempre me sentiré como en casa";
            document.getElementById("fraseBonita").innerHTML = frase;
            contadorFrases = 10;
            contadorFrasesTexto = "Número de frase = " + contadorFrases;
            document.getElementById("contadorFrases").innerHTML = contadorFrasesTexto;
            break;
        case 11:
            frase = "No todos los días podrás con todo y no pasa nada solo tienes que seguir avanzando.";
            document.getElementById("fraseBonita").innerHTML = frase;
            contadorFrases = 11;
            contadorFrasesTexto = "Número de frase = " + contadorFrases;
            document.getElementById("contadorFrases").innerHTML = contadorFrasesTexto;
            break;
        case 12:
            frase = "Quieres un regalo? mira bien la app...";
            document.getElementById("fraseBonita").innerHTML = frase;
            contadorFrases = 12;
            contadorFrasesTexto = "Número de frase = " + contadorFrases;
            document.getElementById("contadorFrases").innerHTML = contadorFrasesTexto;
            break;
        case 13:
            frase = "No te habras vuelto a quedar dormida no, pedaso de vácula?";
            document.getElementById("fraseBonita").innerHTML = frase;
            contadorFrases = 13;
            contadorFrasesTexto = "Número de frase = " + contadorFrases;
            document.getElementById("contadorFrases").innerHTML = contadorFrasesTexto;
            break;
        case 14:
            frase = "Espero que estés teniendo un bonito día, y si no es el caso pasa a la siguiente frase";
            document.getElementById("fraseBonita").innerHTML = frase;
            contadorFrases = 14;
            contadorFrasesTexto = "Número de frase = " + contadorFrases;
            document.getElementById("contadorFrases").innerHTML = contadorFrasesTexto;
            break;
        case 15:
            frase = "Te recuerdo que aun nos queda ir al cine a ver una peli de terror... 6 años llevamos sin cumplir esa promesa";
            document.getElementById("fraseBonita").innerHTML = frase;
            contadorFrases = 15;
            contadorFrasesTexto = "Número de frase = " + contadorFrases;
            document.getElementById("contadorFrases").innerHTML = contadorFrasesTexto;
            break;
        case 16:
            frase = "\"Eres mi mejor momento del día\" ";
            document.getElementById("fraseBonita").innerHTML = frase;
            contadorFrases = 16;
            contadorFrasesTexto = "Número de frase = " + contadorFrases;
            document.getElementById("contadorFrases").innerHTML = contadorFrasesTexto;
            break;
        case 17:
            frase = "Esta noche le echamos un Warzone... o un Fortnite, tu elijes";
            document.getElementById("fraseBonita").innerHTML = frase;
            contadorFrases = 17;
            contadorFrasesTexto = "Número de frase = " + contadorFrases;
            document.getElementById("contadorFrases").innerHTML = contadorFrasesTexto;
            break;
        case 18:
            frase = "Gracias por seguir a mi lado despues de todo lo que pasamos...";
            document.getElementById("fraseBonita").innerHTML = frase;
            contadorFrases = 18;
            contadorFrasesTexto = "Número de frase = " + contadorFrases;
            document.getElementById("contadorFrases").innerHTML = contadorFrasesTexto;
            break;
        case 19:
            frase = "Nuestro hijo se llama Floki y tu ni siquiera te has visto vikingos completamente... vaya decepción";
            document.getElementById("fraseBonita").innerHTML = frase;
            contadorFrases = 19;
            contadorFrasesTexto = "Número de frase = " + contadorFrases;
            document.getElementById("contadorFrases").innerHTML = contadorFrasesTexto;
            break;
        case 20:
            frase = "Me das un abiasito tumbados en cama? esque tengo fío en los pieses";
            document.getElementById("fraseBonita").innerHTML = frase;
            contadorFrases = 20;
            contadorFrasesTexto = "Número de frase = " + contadorFrases;
            document.getElementById("contadorFrases").innerHTML = contadorFrasesTexto;
            break;
        case 21:
            frase = "\"TU EXISTENCIA ME DA CACA\"";
            document.getElementById("fraseBonita").innerHTML = frase;
            contadorFrases = 21;
            contadorFrasesTexto = "Número de frase = " + contadorFrases;
            document.getElementById("contadorFrases").innerHTML = contadorFrasesTexto;
            break;
        case 22:
            frase = "Procede a meterse una botella de agua hasta la garganta*";
            document.getElementById("fraseBonita").innerHTML = frase;
            contadorFrases = 22;
            contadorFrasesTexto = "Número de frase = " + contadorFrases;
            document.getElementById("contadorFrases").innerHTML = contadorFrasesTexto;
            break;
        case 23:
            frase = "Siempre compas 🧭🤍🚀✨";
            document.getElementById("fraseBonita").innerHTML = frase;
            contadorFrases = 23;
            contadorFrasesTexto = "Número de frase = " + contadorFrases;
            document.getElementById("contadorFrases").innerHTML = contadorFrasesTexto;
            break;
        case 24:
            frase = "Si ves esto me debes 100 abiasos de vácula";
            document.getElementById("fraseBonita").innerHTML = frase;
            contadorFrases = 24;
            contadorFrasesTexto = "Número de frase = " + contadorFrases;
            document.getElementById("contadorFrases").innerHTML = contadorFrasesTexto;
            break;
        case 25:
            frase = "Compas de por vida dije yo...";
            document.getElementById("fraseBonita").innerHTML = frase;
            contadorFrases = 25;
            contadorFrasesTexto = "Número de frase = " + contadorFrases;
            document.getElementById("contadorFrases").innerHTML = contadorFrasesTexto;
            break;
        case 26:
            frase = "Compas hasta que me pongas el cuerno dijo ella :(";
            document.getElementById("fraseBonita").innerHTML = frase;
            contadorFrases = 26;
            contadorFrasesTexto = "Número de frase = " + contadorFrases;
            document.getElementById("contadorFrases").innerHTML = contadorFrasesTexto;
            break;
        case 27:
            frase = "Espacio reservado para easter egg 2.0";
            document.getElementById("fraseBonita").innerHTML = frase;
            contadorFrases = 27;
            contadorFrasesTexto = "Número de frase = " + contadorFrases;
            document.getElementById("contadorFrases").innerHTML = contadorFrasesTexto;
            break;
        case 28:
            frase = "Anastasia tiene ganitas de pan, no te da penita Anastasia?";
            document.getElementById("fraseBonita").innerHTML = frase;
            contadorFrases = 28;
            contadorFrasesTexto = "Número de frase = " + contadorFrases;
            document.getElementById("contadorFrases").innerHTML = contadorFrasesTexto;
            break;
        case 29:
            frase = "Te has vuelto a quedar dormida? tira pa clase, VAGA";
            document.getElementById("fraseBonita").innerHTML = frase;
            contadorFrases = 29;
            contadorFrasesTexto = "Número de frase = " + contadorFrases;
            document.getElementById("contadorFrases").innerHTML = contadorFrasesTexto;
            break;
        case 30:
            frase = "App creada cuando llevabamos 1 añito y 8 mesitos ... \n O eran 7 ?";
            document.getElementById("fraseBonita").innerHTML = frase;
            contadorFrases = 30;
            contadorFrasesTexto = "Número de frase = " + contadorFrases;
            document.getElementById("contadorFrases").innerHTML = contadorFrasesTexto;
            break;


        default:
            frase = "De alguna forma has roto esta app... ESTRÁS ORGULLOSA";
            document.getElementById("fraseBonita").innerHTML = frase;
            contadorFrases = 0;
            contadorFrasesTexto = "Número de frase = " + contadorFrases;
            document.getElementById("contadorFrases").innerHTML = contadorFrasesTexto;
            break;
    }

    if (numFrase == 12) {
        document.getElementById("easterEgg").style.visibility = "visible";

    } else
        document.getElementById("easterEgg").style.visibility = "hidden";


        if (numFrase==25){
            cheater=true;
        }


}
/*
############################################################################################################################
################################    AQUI ESTARÍA BIEN PONER UN BOTON "EASTER EGG" EL CUAL   ################################
################################    APAREZCA SOLO CUANDO NUMFRASE == 12, ESTE TE LLEVARIA   ################################
################################    A UN PROMPT QUE HARÍA UNA PREGUNTA, EN CASO DE SER      ################################
################################    RESPONDIDA.... REGALO!                                  ################################
############################################################################################################################
*/




function easterEgg() {

    /*
    Esto podria estar dividido en tres preguntas diferente sque se ejecutene en tres frases diferentes
    las tes juntas, enseñan un código.
    */

    alert("Esto está en pruebas");
    var respuesta1 = 0;
    respuesta1 = prompt("Nuestro día del mes?");

    document.getElementById("easterEgg").style.visibility = "hidden";
    if (respuesta1 == 12) {
        document.getElementById("easterEgg").style.visibility = "hidden";
        document.getElementById("easterEgg").style.display = "none";
        alert("Correcto, regalo desbloqueado ");
        document.getElementById("divEasterEgg").style.visibility = "visible";
        document.getElementById("divEasterEgg").style.display = "block";


    } else {
        alert("Como has podido equivocarte?");
        document.getElementById("easterEgg").style.visibility = "hidden";
    }

}

