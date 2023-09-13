const logoutButton = document.getElementById("logout");

// Add an event listener to the logout button
logoutButton.addEventListener("click", function() {
    // Redirect to the login page
    window.location.href = "login.html";
});