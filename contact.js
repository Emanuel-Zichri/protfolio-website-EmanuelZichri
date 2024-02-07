const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("confirmation-message");

const sendEmail = (e) => {
  e.preventDefault();
  emailjs
    .sendForm(
      "service_9oj1ykg",
      "template_z39xg1s",
      "#contact-form",
      "Xh_A0vAQGUxZbt_GD"
    )
    .then(() => {
      contactMessage.textContent = "Message sent successfully";
      setTimeout(() => {
        contactMessage.textContent = "";
      }, 5000);
    })
    .catch((error) => {
      console.error("Error sending email:", error);
      contactMessage.textContent =
        "Error sending message. Please try again later.";
    });
};

contactForm.addEventListener("submit", sendEmail);

document
  .querySelector(".contact__button")
  .addEventListener("click", function () {
    var name = document.querySelector('.contact__input[type="text"]').value;
    var email = document.querySelector('.contact__input[type="email"]').value;
    var message = document.querySelector(
      '.contact__input[type="textarea"]'
    ).value;

    if (name.trim() !== "" && email.trim() !== "" && message.trim() !== "") {
      contactMessage.textContent = "Message sent successfully";
      contactForm.reset();
    } else {
      contactMessage.textContent = "Please fill in all fields.";
    }
  });
