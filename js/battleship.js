let view = {
    displayMessage: function (msg){
        let messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },
    displayHit: function (location) {
        let cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
    },
    displayMiss: function (location) {
        let cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    }
};

// commands to test the view object
// view.displayMiss("00");
// view.displayHit("34");
// view.displayMiss("55");
// view.displayHit("12");
// view.displayMiss("25");
// view.displayHit("26");
//
// view.displayMessage("Tap Tap, is this thing on?..")

let model = {
    boardSize: 7,
    numShips: 3,
    shipsSunk: 0,
    shipLength: 3,
    ships: [{locations: ["06", "16", "26"], hits: ["", "", ""] },
        {locations: ["24", "34", "44"], hits: ["", "", ""] },
        {locations: ["10", "11", "12"], hits: ["", "", ""] } ],

    fire: function (guess){
        for (let i = 0; i < this.numShips; i++) {
            let ship = this.ships[i];
            let index = ship.locations.indexOf(guess);
            if (index >= 0) {
                ship.hits[index] = "hit";
                view.displayHit(guess);
                view.displayMessage("HIT!");
                if (this.isSunk(ship)) {
                    view.displayMessage("You sank my Battleship!");
                    this.shipsSunk++;
                }
                return true;
            }
        }
        view.displayMessage(guess);
        view.displayMessage("You missed.");
        return false;
    },
    isSunk: function (ship) {
        for (let i = 0; i < this.shipLength; i++) {
            if (ship.hits[i] !== "hit") {
                return false;
            }
        }
        return true;
    }
};

// code to test the model object
// model.fire("53");
// model.fire("06");
// model.fire("16");
// model.fire("26");
// model.fire("34");
// model.fire("24");
// model.fire("44");
// model.fire("12");
// model.fire("11");
// model.fire("10");

function parseGuess(guess) {
    let alphabet = ["A", "B", "C", "D", "E", "F", "G"];

    if (guess === null || guess.length !== 2) {
        alert("Please enter a letter and number on the board.");
    } else {
        let firstChar = guess.charAt(0);
        let row = alphabet.indexOf(firstChar);
        let column = guess.charAt(1);

        if (isNaN(row) || isNaN(column)) {
            alert("Oops, that isn't on the board.")
        } else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
            alert("Oops, that's off the board!");
        } else {
            return row + column;
        }
    }
    return null;
}

// code to test the parseGuess function
// console.log(parseGuess("A0"));
// console.log(parseGuess("B6"));
// console.log(parseGuess("G3"));
// console.log(parseGuess("H0"));
// console.log(parseGuess("A7"));

