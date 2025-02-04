document.getElementById("submit-btn").addEventListener("click", function(event) {
    // Prevent form from submitting
    event.preventDefault();

    // Get the input values
    var name = document.getElementById("Fname").value;
    var password = document.getElementById("pass").value;

    // Check if both fields are filled
    if (name && password) {
        alert("Login complete");
    } else {
        alert("Please enter both name and password");
    }
});