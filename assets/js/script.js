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
            credentials: "include",
            withCredentials: true,
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

//loguot
const logoutButton = document.getElementById("logout");
    logoutButton.addEventListener("click", function () {
        fetch("https://frontend-take-home-service.fetch.com/auth/logout", {
            method: "POST",
            credentials: "include",
            withCredentials: true
        })
        .then(response => {
            if (response.ok) {
                // Logout successful, update localStorage and redirect to index.html
                console.log("Logged out successfully");
                localStorage.setItem("isLoggedIn", "false");
                window.location.href = "index.html";
            } else {
                // Handle logout error
                console.error("Logout failed");
            }
        })
        .catch(error => {
            console.error("Error:", error);
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
});

//search-breed- doesnt work
// fetch("http://frontend-take-home-service.fetch.com/dogs/search?breeds" , {
//     method : 'GET',
//     headers: {
//         "Content-Type": "application/json"
//     },
//     credentials: "include",
//     withCredentials: true
    
// })
// .then(response => {
//     if (response.ok) {
//         console.log("this is response");
//         console.log(response);
        
//     } else {
        
//         console.error("Please check your email or name");
//     }
// })
// .catch(error => {
//     console.error("Error:", error);
// });

var breedInputEl = document.querySelector("#breedinput");
var breedForm = document.querySelector("#breedform");
var breedNameElement = document.querySelector(".breedname");
var breedImageElement = document.querySelector("#breedimage");
var breedSpecificationsList = document.querySelector(".result ul");

// Function to get information from API on dog breed input
function getInfoByDogBreed(breedName) {
    fetch('https://api.api-ninjas.com/v1/dogs?name=' + breedName, {
        method: 'GET',
        headers: { 'X-Api-Key': 'CaQ8v45mFAOJHJN4gYje4g==wxE7PtrOIoDNbi4t' },
        contentType: 'application/json',
    })
        .then(function(response) {
            return response.json();
        })
        .then(function(breedData) {
            console.log(breedData[0]);

            // Display breed name and image
            breedNameElement.textContent = breedName.charAt(0).toUpperCase() + breedName.slice(1);
            breedImageElement.src = breedData[0].image_link;

            // Clear existing specifications
            breedSpecificationsList.innerHTML = "";

            // Create and append list items for specifications
            function createSpecificationItem(label, value) {
                var li = document.createElement('li');
                li.innerText = label + ": " + value;
                return li;
            }

            breedSpecificationsList.appendChild(createSpecificationItem("Barking Level", breedData[0].barking));
            breedSpecificationsList.appendChild(createSpecificationItem("Coat Length", breedData[0].coat_length));
            breedSpecificationsList.appendChild(createSpecificationItem("Energy Level", breedData[0].energy));
            breedSpecificationsList.appendChild(createSpecificationItem("Good with Children", breedData[0].good_with_children));
            breedSpecificationsList.appendChild(createSpecificationItem("Good with other dogs", breedData[0].good_with_other_dogs));
            breedSpecificationsList.appendChild(createSpecificationItem("Maximum Weight Male", breedData[0].max_weight_male + " pounds"));
            breedSpecificationsList.appendChild(createSpecificationItem("Maximum Weight Female", breedData[0].max_weight_female + " pounds"));
            breedSpecificationsList.appendChild(createSpecificationItem("Maximum Life Expectancy", breedData[0].max_life_expectancy + " years"));
            breedSpecificationsList.appendChild(createSpecificationItem("Trainability", breedData[0].trainability));
            breedSpecificationsList.appendChild(createSpecificationItem("Shedding", breedData[0].shedding));

        })
        .catch(function(error) {
            console.log(error);
            showModal();
        })
}

// Get user input from breed input and fetch data
function getBreedInput(event) {
    event.preventDefault();
    var searchTerm = breedInputEl.value.trim(); // Trim to remove leading/trailing whitespace
    if (searchTerm.length > 0) {
        getInfoByDogBreed(searchTerm);
    }
}

// Function to show pop-up modal
function showModal() {
    notification.classList.remove("hide");
}

// Function to hide pop-up modal
function hideModal() {
    notification.classList.add("hide");
}

breedForm.addEventListener("submit", getBreedInput);







