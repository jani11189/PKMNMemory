let clickCounter = 0;
let firstCard;
let firstCardId;
let secondCard;
let secondCardId;

function createMap(text) {
    cImage = document.createElement("img");
    cImage.src = "qMark.png";
    cImage.alt = text;
    cImage.name = text;
    cImage.id = text;
    cImage.addEventListener("click", flipCardOpen);
    document.getElementById("main").appendChild(cImage);
}

function flipCardOpen() {
    clickCounter++;
    console.log(clickCounter);
    if (clickCounter % 2 !== 0) {
        firstCard = this.name;
        this.alt = "qMark.png";
        this.src = firstCard;
        firstCardId = this.name + clickCounter;
        this.id = firstCardId;
        document.getElementById(firstCardId).removeEventListener("click", flipCardOpen);
    }
    if (clickCounter % 2 == 0) {
        secondCard = this.name;
        this.alt = "qMark.png";
        this.src = secondCard;
        secondCardId = this.name + clickCounter;
        this.id = secondCardId;
        document.getElementById(secondCardId).removeEventListener("click", flipCardOpen);
        setTimeout(checkMatch, 300);
        let attempts = clickCounter/2;
        document.getElementById("attempts").innerHTML = attempts + " attempts.";
    }
}

function checkMatch() {
    if (firstCard == secondCard) {
        //window.alert("It's a match!");
        document.getElementById(firstCardId).style.border = "2px solid Yellow";
        document.getElementById(secondCardId).style.border = "2px solid Yellow";
    }
    if (firstCard !== secondCard) {
        document.getElementById(firstCardId).src = "qMark.png";
        document.getElementById(secondCardId).src = "qMark.png";
        document.getElementById(firstCardId).addEventListener("click", flipCardOpen);
        document.getElementById(secondCardId).addEventListener("click", flipCardOpen);
    }
}

function startGame() {
    let cDeck = [
        "charmander.png",
        "charmander.png",
        "squirtle.png",
        "squirtle.png",
        "bulbasaur.png",
        "bulbasaur.png",
        "charizard.png",
        "charizard.png",
        "blastoise.png",
        "blastoise.png",
        "venusaur.png",
        "venusaur.png",
        "togepi.png",
        "togepi.png",
        "pikachu.png",
        "pikachu.png",

    ];
    for (let i = cDeck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let k = cDeck[i];
        cDeck[i] = cDeck[j];
        cDeck[j] = k;
    }
    cDeck.forEach(createMap);
}

function resetGame(){
    location.reload();
    startGame();
}

