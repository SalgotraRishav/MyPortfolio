function limitCharacters() {
    var messageInput = document.getElementById("message");
    var remainingCharsLabel = document.getElementById("remChars");
    var remainingChars = 50 - messageInput.value.length;

    if (remainingChars >= 0) {
        remainingCharsLabel.innerHTML = "Message: " + remainingChars + " characters remaining";
    } else {
        messageInput.value = messageInput.value.slice(0, 50);
    }
}

function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Example validation: Check if name is not empty
    if (name.trim() === "") {
        alert("Please enter your name");
        return false;
    }

    // Example validation: Check if email is valid
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    // Example validation: Check if message is not empty
    if (message.trim() === "") {
        alert("Please enter a message");
        return false;
    }

    document.getElementById("successMessage").style.display = "block";
    setTimeout(function() {
        document.getElementById("successMessage").style.display = "none";
    }, 3000); // Hide after 3 seconds    

    // All fields are valid
    return true;
}
