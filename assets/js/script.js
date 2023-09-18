//login
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        const userData = {
            name: name,
            email: email
        };

        fetch("https://frontend-take-home-service.fetch.com/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        .then(response => {
            if (response.ok) {
                // Authentication successful, store a flag in localStorage
                console.log("Logged in successfully");
                localStorage.setItem("isLoggedIn", "true");
                window.location.href = "search.html";
            } else {
                // Handle authentication error
                console.error("Please check your email or name");
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
    });
});


//dog fact fetch button
const dogFactbtn = document.getElementById('dog-fact')
dogFactbtn.addEventListener('click', function() {
    
    fetch('https://dogapi.dog/api/v2/facts')
    .then (function(response) {
        return response.json()
    })
    .then (function (data) {
        var heroText = document.getElementById('hero-text')
        var dogFact = data.data[0].attributes.body
        heroText.innerText = dogFact
        heroText.classList.add('is-size-3')
    })

})





//loguot
const logoutButton = document.getElementById("logout");

// Add an event listener to the logout button
logoutButton.addEventListener("click", function() {
    // Redirect to the login page
    localStorage.setItem("isLoggedIn", "false");
    window.location.href = "index.html";
});


// Dog {
//     id: string
//     img: string
//     name: string
//     age: number
//     zip_code: string
//     breed: string
// }
//     Location {
//         zip_code: string
//         latitude: number
//         longitude: number
//         city: string
//         state: string
//         county: string
//     }
