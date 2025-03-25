const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
const results = document.getElementById("results");

let attempts = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`Enter a number between ${minNum} to ${maxNum}`);
    
    if (guess === null) {
        window.alert("Game cancelled.");
        break;
    }

    guess = Number(guess);

    if(isNaN(guess)){
        window.alert(`Enter a valid number`);
    }
    else if(guess<1 || guess>100){
        window.alert(`Enter a valid number`);
    }
    else{
        attempts++;

        if(guess>answer){
            window.alert(`Too Big! Try Again!`);
        }
        else if(guess<answer){
            window.alert(`Too Small! Try Again!`);
        }
        else{
            results.textContent = `Perfect! The answer is ${answer} and you got ${attempts} attempts to complete`;
            running = false;
        }
    }
}