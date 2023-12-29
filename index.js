let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x')
  navbar.classList.toggle('active')
}


let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  let header = document.querySelector(".header");

  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove('bx-x')
  navbar.classList.remove('active')

};

let darkModeIcon = document.querySelector("#darkMode-icon");

darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle("bx-sun");
  document.body.classList.toggle("dark-mode");
};

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(".home-img img, .project-box, .contactform", {
  origin: "bottom",
});

const form = document.querySelector("form");
const fullname = document.getElementById("name");
const email = document.getElementById("email");
const number = document.getElementById("mobile");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail() {
  const bodyMessage = `Full name: ${fullname.value}<br> Email: ${email.value}<br> Mobile Number: ${number.value}<br><br> ${message.value}<br>`;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "saeedesai9102@gmail.com",
    Password: "6F3AF2DA8DC5CC235B1DF6FAAFBA9D160F96",
    To: "saee9102@gmail.com",
    From: "saee9102@gmail.com",
    Subject: subject.value,
    Body: bodyMessage,
  }).then((message) => {
    if (message == "OK") {
      Swal.fire({
        title: "Message Sent!",
        text: "Thank you for connecting with me!!",
        icon: "success",
      });
      form.reset();
    }
  });
}
