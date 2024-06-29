function showMessageSentConfirmation() {
    const inputtedFirstName = document.getElementById("first-name-field").value; 
    const inputtedLastName = document.getElementById("last-name-field").value;
    const inputtedEmailAddress = document.getElementById("email-address-field").value;
    const inputtedMessage = document.getElementById("message-input").value;
    if (inputtedFirstName === "" || inputtedLastName === "" || inputtedEmailAddress === "" || inputtedMessage === "") {
        var alertMessage = "ERROR: The following fields are blank:"
        if (inputtedFirstName === "") { alertMessage += "\nFirst Name"; }
        if (inputtedLastName === "") { alertMessage += "\nLast Name"; }
        if (inputtedEmailAddress === "") { alertMessage += "\nEmail Address"; }
        if (inputtedMessage === "") { alertMessage += "\nMessage"}
        alert(alertMessage);
    }
    else {
        const contactUsForm = document.getElementById("contact-us-form");
        contactUsForm.classList.add("hidden");
        document.getElementById("first-name-field").value = "";
        document.getElementById("last-name-field").value = "";
        document.getElementById("email-address-field").value = "";
        document.getElementById("message-input").value = "";
        const messageSentConfirmation = document.getElementById("message-sent-confirmation");
        messageSentConfirmation.classList.add("visible");
    }
}