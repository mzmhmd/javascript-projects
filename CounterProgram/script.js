const num = document.getElementById("num");
const dec = document.getElementById("dec");
const reset = document.getElementById("reset");
const inc = document.getElementById("inc");

let count = 0;

dec.onclick = function(){
    count--;
    num.textContent = count;
}

reset.onclick = function(){
    count = 0;
    num.textContent = count;
}

inc.onclick = function(){
    count++;
    num.textContent = count;
}