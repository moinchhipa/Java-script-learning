const max = prompt("Enter the maximum number:");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("guess the number");

while(true) {
    if (guess == "quit") {
        console.log("User quit");
        break;
    }

    if (guess == random) {
        console.log("You guessed the right! congrats!!, random number was", random);
        console.log("Thanks for playing.")
        break;
    } else if (guess < random) {
        guess = prompt("Hint : Your guess was too small. please try again.");
    } else {
        guess = prompt("Hint : Your guess was too large. please try again.");
    }
}