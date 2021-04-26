function lieDetectorTest(){
    let lies = 0;
    let stolenDiamond = {};

    if (stolenDiamond) {//falsey
        console.log("You stole the diamond!");
        lies++;
    }
    let car = {
        keysInPocket: null
    };
    if (car.keysInPocket) {//truthy
        console.log("Uh oh, guess you stole the car!");
        lies++;
    }
    if (car.emptyGasTank) {//truthy
        console.log("You drove the car after you stole it!");
        lies++;
    }
    let foundYouAtTheCrimeScene = [ ];
    if (foundYouAtTheCrimeScene) {//falsey
        console.log("A sure sign of guilt");
        lies++;
    }
    if (foundYouAtTheCrimeScene[0]){//truthy
        console.log("Caught with a stolen item!");
        lies++;
    }
    let yourName = " ";
    if (yourName) {//falsey
        console.log("Guess you lied about your name!");
        lies++;
    }
    return lies;
}

let numberOfLies = lieDetectorTest();
console.log("You told " + numberOfLies + " lies!");
if (numberOfLies >= 3) {
    console.log("Guilty as charged!")
}