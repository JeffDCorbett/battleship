let scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];
let output;
let i = 0;

while (i < scores.length) {
    output = "Bubble solution #" + i + " score: " + scores[i];
    console.log(output);
    i = i + 1;
}

let scores1 = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];
let output1;

for (let i = 0; i < scores1.length; i = i + 1) {
    output1 = "Bubble solution #" + i + " score: " + scores1[i];
    console.log(output1);
}