let players = ['Player A', 'Player B'];

let vowels = 'அ/ஆ$இ/ஈ$உ/ஊ$எ/ஏ$ஒ/ஓ'.split("$");
let consonants = 'கசடதநபமயரலவ'.split("");
let letters = vowels.concat(consonants);

let updatePlayersList = () => {
    let elem = document.getElementById("plist");
    players = elem.value.split("\n")
}

let randIntBet = (x, y) => {
    return Math.floor((Math.random() * y) + x - 1)
}

let getNext = (arr, curIx) => {
    let ix = 0;
    do { ix = randIntBet(1, arr.length); }
    while (ix == curIx);
    return arr[ix];
}

let getNextPlayer = (curPlayer) => {
    let curIx = curPlayer ? players.indexOf(curPlayer) : 0;
    let ix = curIx + 1
    ix = (ix > players.length - 1) ? ix - players.length : ix;
    console.log(curPlayer, curIx, ix)
    return players[ix];
}

let getNextLetter = (curLetter) => {
    let curIx = curLetter ? letters.indexOf(curLetter) : 0;
    return getNext(letters, curIx)
}

let nextGame = () => {
    let curPlayer = document.getElementById("player").textContent;
    document.getElementById("player").textContent = getNextPlayer(curPlayer);

    let curLetter = document.getElementById("letter").textContent;
    document.getElementById("letter").textContent = getNextLetter(curLetter);
}

let togglePlayerList = () => {
    let elem = document.getElementById("plist");
    if (elem.style.display == "none") {
        elem.style.display = "block";
    }
    else { elem.style.display = "none"; }
 }

let toggleLang = () => {
    let lang = document.getElementById("lang");
    lang.textContent = (lang.textContent == 'English')? 'தமிழ்' : 'English' ;
}

window.onload = nextGame
