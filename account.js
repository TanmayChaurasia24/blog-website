    document.addEventListener("DOMContentLoaded", function () {
        // Wait for the DOM content to be fully loaded
        var signupButton = document.querySelector(".done-signup");

        if (signupButton) {
        signupButton.addEventListener("click", function (event) {
            event.preventDefault();

            const username = document.querySelector("#username").value;
            const password = document.querySelector("#password").value;
            const email = document.querySelector("#email").value;

            // Check if username, password, and email are not empty
            if (username !== "" && password !== "" && email !== "") {
            // Perform other actions or redirection here
            window.location.href = "index.html";
            document.querySelector(".signup").style.display = "none";
            document.querySelector(".login").style.display = "none";
            } else {
            // Handle the case where one or more fields are empty
            alert("Please fill in all the required fields.");
            }
        });
        }
    });