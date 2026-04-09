import emailjs from "emailjs-com";

function sendEmail(e) {
  e.preventDefault();
  emailjs
    .sendForm("service_id", "template_id", e.target, "492Cth8xbkTP_n_g-")
    .then(
      (result) => {
        console.log("Email sent!", result.text);
      },
      (error) => {
        console.log(error.text);
      },
    );
}
