let order = [];
let clickedOrder = [];
let score = 0;

//0 = verde
//1 = vermelho
//2 = amarelo
//3 = azul

const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');

//Cria ordem aleatória de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//Acende a Próxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
       element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//Checa se os botões clicados são os mesmos das ordens geradas pelo jogo
let checkOrder = () => {
    for (let i in clickedOrder){
        if (clickedOrder[i] != order[i]){
            gameOver();
            break; 
        }
    }
    if (clickedOrder.length == order.length){
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando o próximo nível!`);
        nextLevel();
    }
}

//Função para o clique do usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
}

//Função que retorna a cor
let createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if (color == 1){
        return red;
    } else if(color == 2){
        return yellow;
    } else if(color == 3){
        return blue;
    }
}

//Função para o próximo nével
let nextLevel = () => {
    score++;
    shuffleOrder();
} 

//Função para game over
let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu!\nClique em ok para iniciar novamente.`);
    order = [];
    clickedOrder = [];

    playGame();
}

let playGame = () => {
    alert('Bem-vindo ao nosso game! Iniciando novo jogo!');
    score = 0;

    nextLevel();
}

//Eventos de click para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//Início do jogo 
playGame ();