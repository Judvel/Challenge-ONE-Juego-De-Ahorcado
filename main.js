window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);
let wordsList = ["manzana", "javascript", "computador", "pantalla", "HTML", "escritorio", "ciudad", "continente", "suelo"];
let k = 0;
let canvasSize;
let elementsizeH;
let elementsizeW;

/* setCanvasSize() */

function setCanvasSize() {
    if (window.innerHeight > window.innerWidth) {
        canvasSize = window.innerWidth * 0.8;
    } else if (window.innerWidth > 768) {
        canvasSize = 500;
    } else {
        canvasSize = window.innerHeight * 0.8;
    }

    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);
    resetGame();



}

function startGame() {
    game.beginPath();
    game.strokeStyle = "#FFFFFF";

    function head() {

        game.beginPath();
        game.arc(Number(canvasSize / 2), 25, 10, 0, Math.PI * 2, true);

        game.stroke();
    }

    function drawHangman(fromX, fromY, toX, toY) {

        game.moveTo(fromX, fromY);
        game.lineTo(toX, toY);
        game.stroke();
    }

    function line1() {
        drawHangman(Number(canvasSize / 2) - 60, 150, Number(canvasSize / 2), 150);
    };

    function line2() {
        drawHangman(Number(canvasSize / 2) - 50, 5, Number(canvasSize / 2) - 50, 150);
    };

    function line3() {
        drawHangman(Number(canvasSize / 2) - 50, 5, Number(canvasSize / 2), 5);
    };

    function line4() {
        drawHangman(Number(canvasSize / 2), 5, Number(canvasSize / 2), 15);
    };

    function torso() {
        drawHangman(Number(canvasSize / 2), 36, Number(canvasSize / 2), 70);
    };

    function rightArm() {
        drawHangman(Number(canvasSize / 2), 40, Number(canvasSize / 2) - 15, 50);
    };

    function leftArm() {
        drawHangman(Number(canvasSize / 2), 40, Number(canvasSize / 2) + 15, 50);
    };

    function rightLeg() {
        drawHangman(Number(canvasSize / 2), 70, Number(canvasSize / 2) - 15, 100);
    };

    function leftLeg() {
        drawHangman(Number(canvasSize / 2), 70, Number(canvasSize / 2) + 15, 100);
    };
    drawArray = [line1, line2, line3, line4, head, torso, leftArm, rightArm, leftLeg, rightLeg];
    elementsizeH = Number(canvasSize / 10);
}



function randomWord() {

    let i = Math.round(Math.random() * (wordsList.length - 1));

    wordChosen = wordsList[i];
    wordChosen = wordChosen.toUpperCase();

    console.log(wordChosen);

}
randomWord();

function addWord() {
    if (addWordInput.value) {
        wordsList.push(addWordInput.value);
    }

}

let guionList = [];

function guion() {
    guionList = [];
    elementsizeW = Number(canvasSize / wordChosen.length);
    game.font = elementsizeW + 'px Verdana';
    for (let j = 0; j < wordChosen.length; j++) {
        guionList.push("_");
        game.fillStyle = "#FFFFFF";

        game.fillText('_', 5 + (elementsizeW * j), elementsizeH * 8);
        /* game.moveTo(10 + (elementsizeW * j), 250);
        game.lineTo(30 + (elementsizeW * j), 250); */
    }


};

newGameButton.addEventListener('click', resetGame);
startButton.addEventListener('click', resetGame);
cancelButtonGame.addEventListener('click', resetGame);
saveStartButton.addEventListener('click', addWord);
saveStartButton.addEventListener('click', resetGame);
window.addEventListener('keydown', letterABC);

let n = 0;

function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}

function letterABC(event) {

    let thereIs = false;
    let thereIsn = false;

    for (let j = 0; j < wordChosen.length; j++) {
        if (isLetter(event.key)) {

            if (event.key.toUpperCase() == wordChosen[j]) {
                thereIs = true;
                /* game.clearRect(10 + (elementsizeW * j), elementsizeH * 8, elementsizeW, elementsizeH); */
                game.font = elementsizeW + 'px Verdana';
                game.fillText(wordChosen[j], 5 + (elementsizeW * j), elementsizeH * 8);
                guionList[j] = wordChosen[j];
            } else if (event.key != wordChosen[j]) {
                thereIsn = true
            }
        }
    }



    if (!thereIs && thereIsn) {

        drawArray[k]();
        game.font = 20 + 'px Verdana';
        widthCanvas = Number(canvasSize / 15);

        game.fillText(event.key, 5 + widthCanvas * k, elementsizeH * 9)

        k++
    }

    if (!guionList.includes("_") && k < 10) {

        k = 0;
        toggleCanvasWinner();
        /*  game.font = elementsizeW + 'px Verdana'; */
    } else if (k >= 10) {
        toggleCanvasLooser();

    }
}

function resetGame() {
    k = 0;
    game.clearRect(0, 0, canvasSize, canvasSize);
    resetWindows();
    /* startGame(); */
    randomWord();
    guion();
    startGame();

}