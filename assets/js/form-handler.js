/**
 * Google Form Handler
 * This script handles form submission to Google Forms using the iframe technique
 */
// Variable to track form submission
var submitted = false;

document.addEventListener('DOMContentLoaded', function() {
  console.log('Document loaded successfully');
  const form = document.getElementById('contactForm');
  const successDiv = document.getElementById('success');
  const iframe = document.getElementById('hidden_iframe');
  
  if (form && iframe) {
    // Handle the iframe load event to show success message after form submission
    iframe.addEventListener('load', function() {
      if (submitted) {
        // Show success message
        successDiv.innerHTML = '<div class="alert alert-success">Your message has been sent successfully!</div>';
        
        // Clear form
        form.reset();
        
        // Reset submission flag
        submitted = false;
        
        // Enable submit button
        const submitButton = document.getElementById('sendMessageButton');
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.innerHTML = 'Send Message';
        }
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          successDiv.innerHTML = '';
        }, 5000);
      }
    });
    
    // Handle form submission
    form.addEventListener('submit', function() {
      // Show loading state
      const submitButton = document.getElementById('sendMessageButton');
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.innerHTML = 'Sending...';
      }
    });
  }
});
