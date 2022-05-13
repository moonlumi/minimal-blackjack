
let cards = []

let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    name: "Amal",
    chips: 400


}


let playerEl = document.getElementById("player-el")
console.log(playerEl)
playerEl.textContent = player.name + ": $" + player.chips

function getRandom() {
    let random_num = Math.floor(Math.random() * 13) + 1
    if (random_num == 1) {
        return 11
    }
    else if (random_num > 10) {
        return 10
    } else {
        return random_num
    }
}


function startGame() {
    isAlive = true
    let firstCard = getRandom()
    let secondCard = getRandom()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {

    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent = cardsEl.textContent + cards[i] + " "
    }

    if (sum < 21) {
        message = ("Do you want to draw a new card?")

    }
    else if (sum === 21) {
        message = ("Woohoo! You got blackjack")
        player.chips = player.chips * 1.5
        playerEl.textContent = player.name + ": $" + player.chips

        hasBlackJack = true
    }
    else {
        message = "You're out of the game"
        player.chips -= 400
        playerEl.textContent = player.name + ": $" + player.chips

        isAlive = false

    }

    console.log(message)
    messageEl.innerText = message
    sumEl.textContent = "Sum: " + sum

}

function newCard() {
    if (isAlive == true && hasBlackJack == false) {
        console.log("Picking a new card")

        let card = getRandom()
        cards.push(card)
        sum += card
        console.log(cards)
        renderGame()

    }

}
function newGame() {
    cards = []
    
    sum = 0
    hasBlackJack = false
    isAlive = false
    message = ""
    if(player.chips<400){
        player.chips=400
        playerEl.textContent = player.name + ": $" + player.chips
    }
   
    startGame()
}

var input = document.getElementById("myInput");
// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("myBtn").click();
  }
});