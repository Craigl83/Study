var secretNumber = 4;

var guess = Number (prompt("Guess a Number?"));

if(guess === secretNumber) {
    alert("You got it Right");
}

else if (Number(guess) > secretNumber){
    alert("Too High!!, Guess Again!!")
}

else {
    alert("Too Low!!, Guess Again!!")
}