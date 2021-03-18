document.addEventListener("DOMContentLoaded", () => {
  let top = document.getElementById("top");
  let bio = document.getElementById("me");
  let about = document.getElementById("about");
  let skills = document.getElementById("skills");
  let tech = document.getElementById("tech");
  let projects = document.getElementById("projects");
  let slides = document.querySelector(".projects-container");
  let contact = document.getElementById("contact");
  let links = document.querySelector(".contact-container");
  top.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  about.addEventListener("click", () => {
    bio.scrollIntoView();
  });
  skills.addEventListener("click", () => {
    tech.scrollIntoView();
  });
  projects.addEventListener("click", () => {
    slides.scrollIntoView();
  });
  contact.addEventListener("click", () => {
    links.scrollIntoView();
  });
});
