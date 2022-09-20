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
    game.strokeStyle = "#0a3871";

    function head() {

        game.beginPath();
        game.arc(Number(canvasSize / 2), 25, 10, 0, Math.PI * 2, true);

        game.stroke();
    }

    function draw($pathFromx, $pathFromy, $pathTox, $pathToy) {

        game.moveTo($pathFromx, $pathFromy);
        game.lineTo($pathTox, $pathToy);
        game.stroke();
    }

    function frame1() {
        draw(70, 150, 225, 150);
    };

    function frame2() {
        draw(Number(canvasSize / 2) - 50, 5, Number(canvasSize / 2) - 50, 150);
    };

    function frame3() {
        draw(Number(canvasSize / 2) - 50, 5, Number(canvasSize / 2), 5);
    };

    function frame4() {
        draw(Number(canvasSize / 2), 5, Number(canvasSize / 2), 15);
    };

    function torso() {
        draw(Number(canvasSize / 2), 36, Number(canvasSize / 2), 70);
    };

    function rightArm() {
        draw(Number(canvasSize / 2), 40, Number(canvasSize / 2) - 15, 50);
    };

    function leftArm() {
        draw(Number(canvasSize / 2), 40, Number(canvasSize / 2) + 15, 50);
    };

    function rightLeg() {
        draw(Number(canvasSize / 2), 70, Number(canvasSize / 2) - 15, 100);
    };

    function leftLeg() {
        draw(Number(canvasSize / 2), 70, Number(canvasSize / 2) + 15, 100);
    };
    drawArray = [rightLeg, leftLeg, rightArm, leftArm, torso, head, frame4, frame3, frame2, frame1];
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
        /* game.textAlign = center */
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