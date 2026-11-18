var form = document.getElementById("contact-form");

if (form) {
  form.onsubmit = function (e) {
    e.preventDefault();
    var btn = form.querySelector("button");
    var out = document.getElementById("result");
    btn.disabled = true;
    btn.innerHTML = "Sending...";

    fetch("https://script.google.com/macros/s/AKfycbzZYFiCyWuEkCBQroDpquQT1RkV5nhzYvuJayNu3pV__cppntqcuUo9Dir4txQ4NQWI/exec", {
      method: "POST",
      body: new FormData(form),
      mode: "no-cors"
    }).then(function () {
      out.innerHTML = "Thanks, your message has been sent. We'll reply by email.";
      form.reset();
    }).catch(function () {
      out.innerHTML = "Sorry, that didn't go through. You can email us at hello@triseedhealth.com instead.";
    }).then(function () {
      btn.disabled = false;
      btn.innerHTML = "Send";
    });
  };
}
