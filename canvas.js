var audio = new Audio('audios/audiop.mp3');
var coin = new Audio('audios/coin2.mp3');
coin.volume = 0.3;

audio.play();


var canvas = document.getElementById("idCanvas");
var body = document.getElementById("body");


var reset = document.getElementById('reset').onclick = function () {
    location.reload();
}

// ---------------------------  JOGADOR 1 (GREEN)  -----------------------------------------------------------//
var green = canvas.getContext("2d");
green.fillStyle = 'green'
var x = 140;
var y = 200;
green.fillRect(x, y, 10, 10);

body.addEventListener("keydown", function (evento) {

    // se teclar W
    if (evento.keyCode === 87) {

        if (y == 0) {
            y = 400
        } else {
            y = y - 20;
        }

    };

    // se teclar D
    if (evento.keyCode === 68) {
        if (x == 500) {
            x = 0
        } else {
            x = x + 20;
        }

    };

    // se teclar S
    if (evento.keyCode === 83) {
        if (y == 400) {
            y = 0
        } else {
            y = y + 20;
        }

    };

    // se teclar A
    if (evento.keyCode === 65) {
        if (x == 0) {
            x = 500
        } else {
            x = x - 20;
        }

    };


    Desenha();
});

// ---------------------------  JOGADOR 2 (GOLD)  -----------------------------------------------------------//
var gold = canvas.getContext("2d");
gold.fillStyle = 'gold'
var x2 = 360;
var y2 = 200;
gold.fillRect(x2, y2, 10, 10);

body.addEventListener("keydown", function (evento) {

    // se teclar CIMA
    if (evento.keyCode === 38) {

        if (y2 == 0) {
            y2 = 400
        } else {
            y2 = y2 - 20;
        }

    };

    // se teclar ->
    if (evento.keyCode === 39) {
        if (x2 == 500) {
            x2 = 0
        } else {
            x2 = x2 + 20;
        }

    };

    // se teclar BAIXO
    if (evento.keyCode === 40) {
        if (y2 == 400) {
            y2 = 0
        } else {
            y2 = y2 + 20;
        }

    };

    // se teclar <-
    if (evento.keyCode === 37) {
        if (x2 == 0) {
            x2 = 500
        } else {
            x2 = x2 - 20;
        }

    };


    Desenha();
});

// ---------------------------  FRUTINHA  -----------------------------------------------------------//

var fruta = canvas.getContext("2d");
var imagem = new Image();
imagem.src = "/imagens/morango.png";


var xF = 250;
var yF = 200;

function Fruta() {

    console.log("clicou play");
    audio.play();

    fruta.drawImage(imagem, xF, yF, 25, 25);

}


// ---------------------------  DESENHA E PONTUA  -----------------------------------------------------------//
var placarGreen = document.getElementById('green')
var placarGold = document.getElementById('gold')

var pontosGreen = 0;
var pontosGold = 0;

var pixelVerde = document.getElementById('pixelVerde')



placarGreen.style.color = 'green'


placarGold.style.color = 'gold'


function Desenha() {


    // desenha GREEN
    green.fillStyle = 'green'
    green.clearRect(0, 0, 510, 410);
    green.fillRect(x, y, 10, 10);

    // desenha GOLD
    gold.fillStyle = 'gold'

    gold.fillRect(x2, y2, 10, 10);


    Fruta();

    console.log("X: " + x + " Y: " + y);
    console.log("xF: " + xF + " yF: " + yF);

    function Reiniciar() {
        location.reload()
    }

    if (pontosGold == 17) {



        Swal.fire({
            title: 'Vencedor: Amarelo',
            width: 300,
            padding: '3em',
            color: 'gold',
            background: '#fff url(/images/trees.png)',
            backdrop: `
              rgba(0,0,123,0.4)
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `
        })

        setTimeout(Reiniciar, 2000)



    }

    if (pontosGreen == 17) {



        Swal.fire({
            title: 'Vencedor: Verde',
            width: 300,
            padding: '3em',
            color: 'green',
            background: '#fff url(/images/trees.png)',
            backdrop: `
              rgba(0,0,123,0.4)
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `
        })

        setTimeout(Reiniciar, 2000)
    }
    // pontuar GREEN
    if ((x > (xF - 20)) && (x < (xF + 20)) && (y > (yF - 20)) && (y < (yF + 20))) {

        coin.play();
        console.log("colidiu")
        pontosGreen = pontosGreen + 1;
        placarGreen.style.color = 'green'
        var pixelGreen = `<div id="pixelGreen"></div>`
        placarGreen.innerHTML += pixelGreen + pixelGreen + pixelGreen;

        fruta.clearRect(0, 0, 510, 410);

        xF = Math.ceil((Math.floor(Math.random() * 450) + 10) / 20) * 20;
        yF = Math.ceil((Math.floor(Math.random() * 350) + 10) / 20) * 20;

        console.log("NOVO:   xF: " + xF + " yF: " + yF);

        fruta.drawImage(imagem, xF, yF, 25, 25);

        Desenha();
    }

    // pontuar GOLD
    if ((x2 > (xF - 20)) && (x2 < (xF + 20)) && (y2 > (yF - 20)) && (y2 < (yF + 20))) {
       
        coin.play();
        console.log("colidiu")
        pontosGold = pontosGold + 1;
        placarGold.style.color = 'gold'
        var pixelGold = `<div id="pixelGold"></div>`
        placarGold.innerHTML += pixelGold + pixelGold + pixelGold;


        fruta.clearRect(0, 0, 510, 410);

        xF = Math.ceil((Math.floor(Math.random() * 450) + 10) / 20) * 20;
        yF = Math.ceil((Math.floor(Math.random() * 350) + 10) / 20) * 20;

        console.log("NOVO:   xF: " + xF + " yF: " + yF);

        fruta.drawImage(imagem, xF, yF, 25, 25);

        Desenha();



    }

}


