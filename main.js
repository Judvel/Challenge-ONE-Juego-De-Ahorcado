const startButton = document.querySelector('.main-button--start');
const homePage = document.querySelector('.main-button-container');
const gamePage = document.querySelector('.main-game-container');
const cancelButtonGame = document.querySelector('.button-add--cancel-game');
const cancelButtonAdd = document.querySelector('.button-add--cancel');
const addWordPage = document.querySelector('.main-add-container');
const addWordButton = document.querySelector('.main-button--add');
const saveStartButton = document.querySelector('.button-save-start');

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