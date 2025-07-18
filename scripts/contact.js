// Contact form handler with EmailJS integration
document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS with your User ID
    // You need to sign up at https://www.emailjs.com/ and get your user ID
    emailjs.init("Vn3gUewXVu0Yyk4Ec"); // Replace with your actual EmailJS user ID
    
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Prepare template parameters
            const templateParams = {
                name: name,
                email: email,
                message: message
            };
            
            // Send the email using EmailJS
            emailjs.send('service_ku1h74u', 'template_dp83iup', templateParams) // Replace 'template_id' with your actual template ID
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    alert('Thank you for your message! We will get back to you soon.');
                    contactForm.reset();
                }, function(error) {
                    console.log('FAILED...', error);
                    alert('Sorry, there was an error sending your message. Please try again later.');
                });
        });
    }
});