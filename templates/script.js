// document.addEventListener("DOMContentLoaded", function () {
//     // Get the spin button
//     var spinButton = document.getElementById("spin-button");

//     // Add an event listener to the spin button
//     spinButton.addEventListener("click", function () {
//         // Make an AJAX request to the /spin route
//         var xhr = new XMLHttpRequest();
//         xhr.open("GET", "/spin");
//         xhr.onload = function () {
//             // Handle the response from the server
//             if (xhr.status == 200) {
//                 // Replace the current page with the response from the server
//                 document.write(xhr.responseText);
//             }
//         };
//         xhr.send();
//     });
// });
const spinButton = document.getElementById("spin-button");
const playAgainButton = document.getElementById("play-again-button");
const pocketColorElement = document.getElementById("pocket-color");
const pocketNumberElement = document.getElementById("pocket-number");

// Define a function that generates a random color and number for the roulette pocket.
function spin() {
    // Generate a random number between 0 and 36.
    const pocketNumber = Math.floor(Math.random() * 37);

    // Determine the color of the pocket based on the pocket number.
    let pocketColor;
    if (pocketNumber === 0) {
        pocketColor = "green";
    } else if (pocketNumber % 2 === 0) {
        pocketColor = "black";
    } else {
        pocketColor = "red";
    }

    // Update the pocket color and number elements with the generated values.
    pocketColorElement.innerText = pocketColor;
    pocketNumberElement.innerText = pocketNumber;
}

// Attach an event listener to the spin button that calls the spin function when clicked.
spinButton.addEventListener("click", spin);

// Attach an event listener to the play again button that reloads the page when clicked.
playAgainButton.addEventListener("click", () => {
    window.location.reload();
});