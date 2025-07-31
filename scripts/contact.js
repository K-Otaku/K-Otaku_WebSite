document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("Vn3gUewXVu0Yyk4Ec");

    createCustomAlertElements();
    
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            const templateParams = {
                name: name,
                email: email,
                message: message
            };

            emailjs.send('service_ku1h74u', 'template_dp83iup', templateParams)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    showCustomAlert('Thank you for your message! We will get back to you soon.', 'success');
                    contactForm.reset();
                }, function(error) {
                    console.log('FAILED...', error);
                    showCustomAlert('Sorry, there was an error sending your message. Please try again later.', 'error');
                });
        });
    }

    function createCustomAlertElements() {
        if (!document.querySelector('.custom-alert-overlay')) {
            const overlay = document.createElement('div');
            overlay.className = 'custom-alert-overlay';
            
            const alertBox = document.createElement('div');
            alertBox.className = 'custom-alert';
            
            const iconDiv = document.createElement('div');
            iconDiv.className = 'custom-alert-icon';
            
            const messageDiv = document.createElement('div');
            messageDiv.className = 'custom-alert-message';
            
            const closeBtn = document.createElement('button');
            closeBtn.className = 'custom-alert-btn';
            closeBtn.textContent = 'OK';
            closeBtn.addEventListener('click', closeCustomAlert);
            
            alertBox.appendChild(iconDiv);
            alertBox.appendChild(messageDiv);
            alertBox.appendChild(closeBtn);
            overlay.appendChild(alertBox);
            
            document.body.appendChild(overlay);
            
            overlay.addEventListener('click', function(e) {
                if (e.target === overlay) {
                    closeCustomAlert();
                }
            });
        }
    }
    
    function showCustomAlert(message, type = 'success') {
        const overlay = document.querySelector('.custom-alert-overlay');
        const alertBox = document.querySelector('.custom-alert');
        const iconDiv = document.querySelector('.custom-alert-icon');
        const messageDiv = document.querySelector('.custom-alert-message');
        const closeBtn = document.querySelector('.custom-alert-btn');
        
        alertBox.classList.remove('custom-alert-success', 'custom-alert-error');
        
        if (type === 'success') {
            alertBox.classList.add('custom-alert-success');
            iconDiv.innerHTML = '<i class="fas fa-check-circle"></i>';
        } else {
            alertBox.classList.add('custom-alert-error');
            iconDiv.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
        }
        
        messageDiv.textContent = message;
        
        overlay.classList.add('active');
        setTimeout(() => {
            alertBox.classList.add('active');
        }, 10);
        
        document.addEventListener('keydown', handleEscapeKey);
    }
    
    function closeCustomAlert() {
        const overlay = document.querySelector('.custom-alert-overlay');
        const alertBox = document.querySelector('.custom-alert');
        
        alertBox.classList.remove('active');
        
        setTimeout(() => {
            overlay.classList.remove('active');
        }, 300);
        
        document.removeEventListener('keydown', handleEscapeKey);
    }
    
    function handleEscapeKey(e) {
        if (e.key === 'Escape') {
            closeCustomAlert();
        }
    }
});