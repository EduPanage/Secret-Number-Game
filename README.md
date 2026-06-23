# Number's Game

A simple JavaScript project where the player must guess a randomly generated number between **1 and 1000**.

The game was developed to practice fundamental JavaScript concepts such as variables, loops, conditionals, user interaction, and event handling.

## Features

* Generate a random secret number between 1 and 1000.
* Receive guesses through browser prompts.
* Provide hints indicating whether the secret number is higher or lower.
* Count the total number of attempts.
* Allow the user to cancel the game at any moment.
* Display game logs in the browser console.

## Technologies

* HTML5
* CSS3
* JavaScript (Vanilla JS)

## How It Works

When the **Start** button is clicked, a random number is generated:

```javascript
const secretNum = Math.floor(Math.random() * 1000) + 1;
```

The player must keep guessing until the correct number is found.

For each incorrect attempt, the game provides a hint:

```javascript
if (number < secretNum) {
    alert(`The secret number is greater than ${number}`);
} else {
    alert(`The secret number is less than ${number}`);
}
```

Once the correct number is guessed, the game displays the total number of attempts used.

## Running the Project

1. Clone this repository.

2. Open the project folder.

3. Run the `index.html` file in your browser.

4. Open the browser console (`F12`).

5. Click the **Start** button and begin guessing.

## Preview

<img width="818" height="585" alt="image" src="https://github.com/user-attachments/assets/f8032019-e7fd-45eb-beb4-cd4ff0b44845" />


## Project Structure

```text
numbers-game/
│
├── index.html
├── style.css
├── script.js


## Learning Objectives

This project was created to practice:

* DOM manipulation
* Event listeners
* Conditional statements (`if/else`)
* Loops (`while`)
* Random number generation
* Template literals
* Browser dialogs (`alert`, `prompt`)
* Console debugging

## Future Improvements

* Replace `prompt()` with input fields on the page.
* Display attempt history.
* Add difficulty levels.
* Create a scoring system.
* Store best scores using Local Storage.

## License

This project is available for educational purposes and personal learning.
