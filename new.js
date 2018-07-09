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
]

const grid = document.querySelector('#gameGrid');
const tiles = document.querySelector('.tiles');
let firstClick = 'null';
let secondClick = 'null';
let clickCount = 0;

function initGame() {
    const newGame = shuffle(memes);
    for (let i = 0; i < newGame.length; i += 1) {
        const tiles = document.createElement('div');
        tiles.classList.add('tilesHide', 'tiles');
        grid.addEventListener('click', (e) => {
            e.preventDefault();
            let selected = e.target;
            if (selected.nodeName === 'gameGrid') {
                return ;
            }
            else {
                selected.classList.remove('tilesHide');
                selected.classList.add('tilesShow', 'tilesOpen');
                tiles.dataset.name = newGame[i].name;
                tiles.style.backgroundImage = `url('${newGame[i].image}')`;
            }
        });
        grid.appendChild(tiles);
    }


    function shuffle(arr) {
        return arr.sort(() => 0.5 - Math.random());
    }

}
initGame();



