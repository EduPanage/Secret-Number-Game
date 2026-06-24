let secretNumber = Math.floor(Math.random() * 1000) + 1;
let title = document.getElementById('title');
let p = document.getElementById('text');
let input = document.querySelector('input');
let counter = 1;

start_button.onclick = () => {

    console.log("GAME STARTED\n\nTry a number")
    console.log(`The secret number is ${secretNumber}\n\n`)

    start_button.style.display = "none";
    guess_button.style.display = "block";

    title.innerHTML = "Game Started"
    input.style.display = 'block';
    p.innerHTML = "Insert a number bellow";

}

guess_button.onclick = () => {

    let num = parseInt(input.value);

    console.log(`Attemp: ${counter} Number: ${num}`)

    if (num == secretNumber) {
        console.log("You discovered the Secret Number! Congrats!");
        title.innerHTML = "You won!";
        p.innerHTML = `Attemps: ${counter}`;
        guess_button.style.display = 'none';
        restart_button.style.display = 'block';
    }

    else {

        if (num < secretNumber) {
            p.innerHTML = `The secret number is bigger than ${num}`;
            counter++;
        }

        else {
            p.innerHTML = `The secret number is less than ${num}`;
            counter++;
        }

        input.value = "";
        input.focus();
    }
}

restart_button.onclick = () => {

    console.clear();

    secretNumber = Math.floor(Math.random() * 1000) + 1;

    console.log("GAME STARTED\n\nTry a number")
    console.log(`The secret number is ${secretNumber}\n\n`)

    title.innerHTML = "Game Started";
    p.innerHTML = "Insert a number bellow";

    input.value = "";
    input.focus();

    counter = 1;

    restart_button.style.display = 'none';
    guess_button.style.display = 'block';
}

