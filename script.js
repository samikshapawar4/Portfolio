var typed = new Typed('#element', {
    strings: ['Web Developer. ', 'Graphic Designer.', 'Web Designer.', 'Video Editor.'],
    typeSpeed: 50,
});
window.onload = function() {
    let skills = document.querySelectorAll('.skill-fill');

    skills.forEach(skill => {
        let percentage = skill.getAttribute('data-percentage');
        skill.style.width = percentage + '%';
    });
};
document.getElementById("resumeButton").addEventListener("click", function() {
    window.open('URL_TO_YOUR_RESUME.pdf', '_blank');
  });
  document.getElementById("resumeButton").addEventListener("click", function() {
    // Create an 'a' element
    var downloadLink = document.createElement("a");
    // Set the href to the path of your resume file
    downloadLink.href = 'URL_TO_YOUR_RESUME.pdf';
    // Use the 'download' attribute to specify the filename it should be saved as
    downloadLink.download = 'Your_Resume_File_Name.pdf';
    // Append the element to the body
    document.body.appendChild(downloadLink);
    // Trigger a click on the element
    downloadLink.click();
    // Remove the element from the body after download
    document.body.removeChild(downloadLink);
  });
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Simple validation (for demonstration purposes)
    if(name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill in all fields.');
    } else {
        // Here you can implement the code to actually submit the form,
        // e.g., using fetch API to send data to a server.
        alert('Thank you for your message!');
    }
});
