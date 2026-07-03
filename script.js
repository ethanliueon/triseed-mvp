
const footerHTML = `
  <footer>
    <p>Contact us: <span class="placeholder" style="display:inline; padding:2px 8px;">phone number placeholder</span> | 
    <a href="mailto:hello@triseedhealth.com">hello@triseedhealth.com</a></p>
    <p>© 2026 TriSeed Health Inc. All rights reserved. | <a href="privacy.html">Privacy Policy / Terms of Use</a></p>
  </footer>
`;


document.addEventListener("DOMContentLoaded", function () {
  const footerSpot = document.getElementById("footer-goes-here");
  if (footerSpot) {
    footerSpot.innerHTML = footerHTML;
  }


  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault(); // stops the page from refreshing/actually submitting normally

      const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbzZYFiCyWuEkCBQroDpquQT1RkV5nhzYvuJayNu3pV__cppntqcuUo9Dir4txQ4NQWI/exec";

      const formData = new FormData(contactForm);

      fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors" // google apps script doesnt send back cors headers, this just lets the request go through
      })
        .then(function () {
          alert("thanks for reaching out! we got your message.");
          contactForm.reset();
        })
        .catch(function (error) {
          alert("hm, something went wrong sending that. try again in a bit.");
          console.log(error);
        });
    });
  }
  }
);


