// array iteration with for loop

let scores1 = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];
let highScore = 0;
let output1;
let bestSolutions = [];

for (let i = 0; i < scores1.length; i++) {
    output1 = "Bubble solution #" + i + " score: " + scores1[i];
    console.log(output1);
    if (scores1[i] > highScore) {
        highScore = scores1[i];
    }
}
for (let i = 0; i < scores1.length; i++) {
    if (scores1[i] === highScore) {
        bestSolutions.push(i);
    }
}
console.log("Bubbles test: " + scores.length);
console.log("Highest bubble score: " + highScore);
console.log("Solutions with the highest score: " + bestSolutions);