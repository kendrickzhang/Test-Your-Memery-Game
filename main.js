//array of memes
const memes = [
    {name: 'kim', image: 'assets/kimye.png', type: 'kimye'},
    {name: 'kanye', image: 'assets/kanye.jpg', type: 'kimye'},
    {name: 'drPhil', image: 'assets/drphil.png', type: 'phillOfShit'},
    {name: 'bullcrap', image: 'assets/bullcrap.png',type: 'phillOfShit'},
    {name: 'brian', image: 'assets/brian.jpg', type: 'pbjTime'},
    {name: 'brian2', image: 'assets/brian2.png', type: 'pbjTime'},
    {name: 'trump', image: 'assets/trump.jpg', type: 'awkward'},
    {name: 'ivanka', image: 'assets/ivanka.jpg', type: 'awkward'},
    {name: 'kids', image: 'assets/kids.jpg', type: 'delicious'},
    {name: 'tide', image: 'assets/tide.png', type: 'delicious'},
    {name: 'kju', image: 'assets/kju.jpg', type: 'hairDid'},
    {name: 'paulyd', image: 'assets/paulyd.jpeg', type: 'hairDid'},
    {name: 'noBug', image: 'assets/nobug.jpeg', type: 'programmers'},
    {name: 'noWork', image: 'assets/nowork.jpg', type: 'programmers'},
    {name: 'grope', image: 'assets/grope.jpg', type: 'poster'},
    {name: 'dope', image: 'assets/dope.jpg', type: 'poster'},
    {name: 'bacardi', image: 'assets/bacardi.jpg', type: 'oww'},
    {name: 'cardiB', image: 'assets/cardib.jpg', type: 'oww'},
    {name: 'fuel', image: 'assets/fuel.jpg', type: 'coding'},
    {name: 'life', image: 'assets/life.jpg', type: 'coding'},
];


function gameTitle() {
    //create game title
    const divTitle = document.querySelector('#title');
    const title = document.createElement("p");
    title.classList.add('gameTitle');
    title.innerHTML = `Test &lambda;our Memery!`;
    divTitle.appendChild(title);
}
gameTitle();

function gameMessage() {
    const divMessage = document.querySelector('#message');
    const message = document.createElement("ul");
    message.classList.add('gameMessage');
    message.innerHTML = `<li style="color:royalblue; font-size:22pt;">Memery Hints:</li>
                            <li>Kimye</li>
                            <li>Dr. Phil Of Shit</li>
                            <li>BaCardi</li>
                            <li>Peanut Butter Jelly Time!</li>
                            <li>The Era of Dope & Grope</li>
                            <li>Caffeine & Code</li>
                            <li>Trump's fantasy</li>
                            <li>Children's Favorite Snack</li>
                            <li>Kim Jung Un's Hair Idol</li>
                            <li>Programmer's Dilemma</li>`;
    divMessage.appendChild(message);
}
gameMessage();

function startScreen() {
    const startMessage = document.createElement("div");
    startMessage.classList.add('startScreen');
    startMessage.innerHTML = `<div class="startScreenContent">
                                <h1 class="modalText" style="font-family:'Wendy One',sans-serif;">Test λour Memery!</h1>
                                <p class="modalText" style="font-size:22pt;">A simple and challenging memory matching game!</p>
                                <p class="modalText" style="font-size:22pt;">Objective: Click each tile to reveal its content.</p>
                                <p class="modalText" style="font-size:22pt;">Each tile is unique, but there's a matching association per two photos.</p>
                                <p class="modalText" style="font-size:22pt;">(Check the hints on the left!)</p>
                                <button id="hideModal">Play Now</button>
                                </div>`
    grid.appendChild(startMessage);
    document.querySelector('.startScreen').style.display = 'block';
    
    startMessage.addEventListener('click', (e) => {
        startMessage.style.display = 'none';
        gameTimer();
    });
}

function loseScreen() {
    const loseMessage = document.createElement("div");
    loseMessage.classList.add('loseScreen');
    loseMessage.innerHTML = `<div class="loseScreenContent">
                                <h1 class="loseModalText" style="font-family:'Wendy One',sans-serif;">Timer Has Expired</h1>
                                <p class="loseModalText" style="font-size:22pt;">Try Again?</p>
                                <button id="hideLoseModal">New Game</button>
                                </div>`
    grid.appendChild(loseMessage);
    document.querySelector('.loseScreen').style.display = 'block';
    
    loseMessage.addEventListener('click', (e) => {
        loseMessage.style.display = 'none';
        location.reload();
    });
}

function winScreen() {
    const winMessage = document.createElement("div");
    winMessage.classList.add('winScreen');
    winMessage.innerHTML = `<div class="winScreenContent">
                                <h1 class="winModalText" style="font-family:'Wendy One',sans-serif;">WINNER WINNER CHICKEN DINNER</h1>
                                <p class="winModalText" style="font-size:22pt;">Try Again?</p>
                                <button id="hideWinModal">New Game</button>
                                </div>`
    grid.appendChild(winMessage);
    document.querySelector('.winScreen').style.display = 'block';
    
    winMessage.addEventListener('click', (e) => {
        winMessage.style.display = 'none';
        location.reload();
    });

}

function gameTimer() {
    const divTimer = document.querySelector('#timer');
    const timer = document.createElement("h1");
    timer.classList.add('gameTimer');
    timer.innerHTML = `0:45`;
    divTimer.appendChild(timer);

    let timeLeft = 45;
    let gameTime = document.querySelector('.gameTimer');
    let countDown = setInterval(counting, 1000);
    
    function counting() {
        if (timeLeft === 0 && keepCount !== 10 && all.length !== 20) {
            clearInterval(countDown);
            loseScreen();
        }
        else {
            timeLeft -= 1;
            gameTime.innerHTML = "0:" + timeLeft;
        }
    }
}

//selectors
const grid = document.querySelector("#gameGrid");
const all = document.querySelectorAll('.matched');

//reset moves
let firstClick = "null";
let secondClick = "null";
let checkClicks = [];
let keepCount = 0;

//shuffle array
const newGame = shuffle(memes);

function startGame() {
    //create the tiless
    for (i = 0; i < newGame.length; i += 1) {
        const tiles = document.createElement("div");
        tiles.classList.add('tiles', 'hide');
        tiles.innerHTML = `<img src="${newGame[i].image}" class="imgOff" data-name="${newGame[i].type}">`;

        //add event listeners
        tiles.addEventListener('click', (event) => {
            event.preventDefault();
            let selected = event.target;
            //restricting event listeners to only div.tiles
            if (selected.className !== 'tiles') {
                handleClicks(selected);
            }
            else {
                return ;   
            }
        });
        grid.appendChild(tiles);
    }
    setTimeout(startScreen, 1500);
}
startGame();

//tried Fisher-Yates shuffle but it was returning some undefined objects in my array
//using John Master's shuffle method from 'high-low' assignment
function shuffle(arr) {
    return arr.sort(() => 0.5 - Math.random());
}

//restrict to two clicks
function handleClicks(e) {
    //break continuous looping
    let stop = false;
    let thisTile = e;
    let lastTile = checkClicks[0];
    //loop through two clicks
    while (checkClicks.length < 2 && stop === false) {
        //first click
        if (checkClicks.length === 1) {
            e.classList.add('show');
            e.classList.remove('hide');
            checkClicks.push(e);
            //run checkMatch after 1st click
            checkMatch(thisTile, lastTile);
        }
        //none clicked
        else {
            e.classList.add('show');
            e.classList.remove('hide');
            checkClicks.push(e);
        }
        stop = true;
    }
}

//compare both tiles
function checkMatch(a, b) {
    let match = false;
    if (a.dataset.name === b.dataset.name) {
        match = true;
        keepCount += 1;
        console.log(match + keepCount);
        setTimeout(proceed, 1000);
        function proceed() {
            checkClicks = [];
            a.classList.add('matched');
            b.classList.add('matched');
        }
        checkWin();
    }
    else {
        console.log(match);
        setTimeout(flipBack, 1000);
        function flipBack() {
            a.classList.remove('show');
            a.classList.add('hide');
            b.classList.remove('show');
            b.classList.add('hide');
            checkClicks = [];
        }
    }
}

function checkWin() {
    let result = false;
    if (keepCount === 10 || all.length === 20) {
        console.log('Winner Winner Chicken Dinner!');
        result = true;
        return result;
        winScreen();
    }
    else {
        return result;
    }
}