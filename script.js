// Toggle the navigation menu on small screens
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

// Smooth scroll when navigating between sections
const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
  link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      window.scrollTo({
          top: targetSection.offsetTop - 20, // Scroll to section with a little offset
          behavior: 'smooth'
      });
  });
});

// Open Gmail with pre-filled message
function sendEmail(event) {
  event.preventDefault(); // Prevent form submission

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const subject = `Message from ${name}`;
  const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;

  window.location.href = `mailto:shazidsaharia21@gmail.com?subject=${subject}&body=${body}`;
}