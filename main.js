const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
let wordChosen;
const startButton = document.querySelector('.main-button--start');
const homePage = document.querySelector('.main-button-container');
const gamePage = document.querySelector('.main-game-container');
const cancelButtonGame = document.querySelector('.button-add--cancel-game');
const cancelButtonAdd = document.querySelector('.button-add--cancel');
const addWordPage = document.querySelector('.main-add-container');
const addWordButton = document.querySelector('.main-button--add');
const saveStartButton = document.querySelector('.button-save-start');
const newGameButton = document.querySelector(".button-add--new-game");
const addWordInput = document.querySelector("#main-add--input");
const winnerPage = document.querySelector('.main-game--winner');
const looserPage = document.querySelector('.main-game--looser');

startButton.addEventListener('click', toggleHomeGameWindow);
cancelButtonGame.addEventListener('click', toggleGameHomeWindow);
addWordButton.addEventListener('click', toggleHomeAddWindow);
cancelButtonAdd.addEventListener('click', toggleAddHomeWindow);
saveStartButton.addEventListener('click', toggleAddGameWindow);



function toggleHomeGameWindow() {
    homePage.classList.add('inactive');
    gamePage.classList.toggle('inactive');
}

function toggleGameHomeWindow() {
    const isAddWordClosed = addWordPage.classList.contains('inactive');

    homePage.classList.toggle('inactive');
    gamePage.classList.toggle('inactive');
}

function toggleHomeAddWindow() {
    homePage.classList.add('inactive');
    addWordPage.classList.toggle('inactive');
}

function toggleAddHomeWindow() {
    homePage.classList.toggle('inactive');
    addWordPage.classList.toggle('inactive');

}

function toggleAddGameWindow() {
    addWordPage.classList.toggle('inactive');
    gamePage.classList.toggle('inactive');
}

function toggleCanvasWinner() {
    canvas.classList.add('inactive');
    winnerPage.classList.remove('inactive');
}

function toggleCanvasLooser() {
    canvas.classList.add('inactive');
    looserPage.classList.toggle('inactive');
}

function resetWindows() {
    canvas.classList.remove('inactive');
    winnerPage.classList.add('inactive');
    looserPage.classList.add('inactive');
}