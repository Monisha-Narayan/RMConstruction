// Initialize EmailJS
(function() {
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS Public Key
})();

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const status = document.getElementById("form-status");

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this) // Replace with your EmailJS Service & Template ID
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
