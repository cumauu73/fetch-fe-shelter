document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        // Create an object with user data
        const userData = {
            name: name,
            email: email
        };

        // Make a POST request to the authentication endpoint
        fetch("https://frontend-take-home-service.fetch.com/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        .then(response => {
            if (response.ok) {
                // Authentication successful, redirect or perform further actions
                console.log("logedin successfully");
            } else {
                // Handle authentication error
                console.error("please check yout email or name");
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
    });
});