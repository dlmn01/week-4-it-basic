document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Bedankt voor je bericht! Ik neem zo snel mogelijk contact met je op.');
    this.reset();
});
