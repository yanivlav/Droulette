document.addEventListener("DOMContentLoaded", function () {
    // Get the spin button
    var spinButton = document.getElementById("spin-button");

    // Add an event listener to the spin button
    spinButton.addEventListener("click", function () {
        // Make an AJAX request to the /spin route
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "/spin");
        xhr.onload = function () {
            // Handle the response from the server
            if (xhr.status == 200) {
                // Replace the current page with the response from the server
                document.write(xhr.responseText);
            }
        };
        xhr.send();
    });
});
