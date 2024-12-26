
  document.addEventListener("DOMContentLoaded", () => {
    emailjs.init("_I5ZuscZWtk7aGbMO"); // Replace with your EmailJS public key

    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = form.name.value;
      const email = form.email.value;
      const message = form.message.value;

      emailjs.send("service_fxks16o", "template_5nvm9hh", {
        from_name: name,
        from_email: email,
        message: message,
      })
      .then(() => {
        alert("Message sent successfully!");
        form.reset();
      })
      .catch((error) => {
        console.error("Failed to send message:", error);
        alert("Failed to send the message. Please try again.");
      });
    });
  });
