window.addEventListener('load', setCanvas);
window.addEventListener('resize', setCanvasSize);

function setCanvasSize() {
    if (window.innerWidth < 760) {
        canvas.setAttribute('width', window.innerWidth * 0.9);
        canvas.setAttribute('height', window.innerHeight * 0.4);
    } else if (window.innerWidth > 760) {
        canvas.setAttribute('width', 700);
        canvas.setAttribute('height', 700);
    }

    /*  canvas.setAttribute('width', window.innerWidth * 0.9);
     canvas.setAttribute('height', window.innerHeight * 0.4); */

}
/* setCanvasSize() */



function setCanvas() {

    /* randomWord(); */
    let wordsList = ["manzana", "Javascript", "computador", "Pantalla", "HTML", "escritorio", "ciudad", "continente", "suelo"];

    function randomWord() {

        let i = Math.round(Math.random() * (wordsList.length - 1));

        wordChosen = wordsList[i];
        wordChosen = wordChosen.toLowerCase();
        /* wordChosenV2 = */
        console.log(wordChosen);
        /* result(); */

    }

    function addWord() {
        if (addWordInput.value) {
            wordsList.push(addWordInput.value);
        }

    }

    function startGame() {

        game.beginPath();
        game.strokeStyle = "#0a3871";
        /* game.lineWidth = 2; */
    };

    function head() {

        game.beginPath();
        game.arc(165, 25, 10, 0, Math.PI * 2, true);
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
        draw(95, 5, 95, 150);
    };

    function frame3() {
        draw(95, 5, 165, 5);
    };

    function frame4() {
        draw(165, 5, 165, 15);
    };

    function torso() {
        draw(165, 36, 165, 70);
    };

    function rightArm() {
        draw(165, 40, 150, 50);
    };

    function leftArm() {
        draw(165, 40, 180, 50);
    };

    function rightLeg() {
        draw(165, 70, 150, 100);
    };

    function leftLeg() {
        draw(165, 70, 180, 100);
    };
    drawArray = [rightLeg, leftLeg, rightArm, leftArm, torso, head, frame4, frame3, frame2, frame1];

    let guionList = [];

    function guion() {
        guionList = [];
        elementsizeW = 250 / wordChosen.length;
        game.font = elementsizeW + 'px Verdana';
        for (let j = 0; j < wordChosen.length; j++) {
            guionList.push("_");
            /* game.textAlign = center */
            game.fillText('_', 15 + (elementsizeW * j), 250);
            /* game.moveTo(10 + (elementsizeW * j), 250);
            game.lineTo(30 + (elementsizeW * j), 250); */
        }



    };
    newGameButton.addEventListener('click', resetGame);
    cancelButtonGame.addEventListener('click', resetGame);
    saveStartButton.addEventListener('click', addWord);
    saveStartButton.addEventListener('click', resetGame);
    window.addEventListener('keydown', letterABC);

    let k = 0;

    function letterABC(event) {
        /* console.log(event); */
        let thereIs = false;
        let thereIsn = false;
        for (let j = 0; j < wordChosen.length; j++) {
            if (event.key == wordChosen[j]) {
                thereIs = true;
                game.clearRect(10 + (elementsizeW * j), 250, elementsizeW, elementsizeW);
                game.fillText(wordChosen[j], 15 + (elementsizeW * j), 250);
                guionList[j] = wordChosen[j];
            } else if (event.key != wordChosen[j]) {
                thereIsn = true

            }

        }

        if (!thereIs && thereIsn) {
            drawArray[k]();
            game.fillText(event.key, 15 + (elementsizeW * k), 350)
            k++
        }

        if (!guionList.includes("_") && k < 10) {
            game.clearRect(0, 0, 320, 450);
            game.font = 20 + 'px Verdana'
            game.fillText("Bien Hecho, Has Ganando!", 15, 200);
            /*  game.font = elementsizeW + 'px Verdana'; */
        } else if (k == 10) {
            game.clearRect(0, 0, 320, 450)
            game.fillText("Has perdido!", 15, 200);
            console.log("has perdido")
        }
    }




    function resetGame() {
        k = 0;
        game.clearRect(0, 0, 320, 450);
        startGame();
        randomWord();
        guion();

    }

    startGame();
    randomWord();
    guion();

}