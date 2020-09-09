
const   score = document.querySelector('.score'),
        start = document.querySelector('.game__start'),
        gameArea = document.querySelector('.game__area'),
        car = document.createElement('div');
car.classList.add('car');

start.addEventListener('click', startGame);
document.addEventListener('keydown', startRun);
document.addEventListener('keyup', stopRun);

const keys = {
    ArrowUp:    false,
    ArrowDown:  false,
    ArrowRight: false,
    ArrowLeft:  false 
};

const setting = {
    start:  false,
    score:  0,
    speed:  3
};

function startGame(event) {
    start.classList.add('hide');
    setting.start = true;
    gameArea.appendChild(car);
    requestAnimationFrame(playGame);
}

function playGame() {
    console.log('playGame!');
    if (setting.start) {
        requestAnimationFrame(playGame);
    }
}

function startRun(event) {
    event.preventDefault(); 
    keys[event.key] = true;
}

function stopRun(event) {
    keys[event.key] = true;
    setting.start = false;
}
