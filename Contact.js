document.getElementById("send-request-btn").addEventListener("click", function() {
    // Get all input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    // Check if all fields are filled
    if (name && email && phone && subject && message) {
        alert("Request sent successfully");
    } else {
        alert("Please fill in all fields before sending the request");
    }
});