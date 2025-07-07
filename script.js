(function() {
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
})();

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const status = document.getElementById("form-status");

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
        .then(function() {
            status.textContent = "Request submitted successfully!";
            status.style.color = "green";
            document.getElementById('contactForm').reset();
        }, function(error) {
            status.textContent = "Failed to send request. Please try again.";
            status.style.color = "red";
            console.error(error);
        });
});
