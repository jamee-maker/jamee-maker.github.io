document.addEventListener("DOMContentLoaded", () => {
  let top = document.getElementById("top");
  let bio = document.getElementById("me");
  let about = document.getElementById("about");
  let skills = document.getElementById("skills");
  let tech = document.getElementById("tech");
  let projects = document.getElementById("projects");
  let carousel = document.querySelector(".projects-container");
  let contact = document.getElementById("contact");
  let links = document.querySelector(".contact-container");
  let java = document.getElementById("java");
  let slides = document.querySelectorAll("#slides .slide");
  let currentSlide = 0;
  const nextSlide = () => {
    slides[currentSlide].className = "slide";
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = "slide showing";
  };
  const prevSlide = () => {
    slides[currentSlide].className = "slide";
    currentSlide = (currentSlide - 1) % slides.length;
    slides[currentSlide].className = "slide showing";
  };
  const reseter = () => {
    slides[currentSlide].className = "slide";
    currentSlide = 0;
    slides[currentSlide].className = "slide showing";
  };
  let start = document.getElementById("start");
  let stop = document.getElementById("stop");
  let next = document.getElementById("next");
  let back = document.getElementById("back");
  let reset = document.getElementById("reset");
  reset.addEventListener("click", () => {
    reseter();
  });
  next.addEventListener("click", () => {
    if (currentSlide < 4) {
      nextSlide();
    }
  });
  back.addEventListener("click", () => {
    if (currentSlide > 0) {
      prevSlide();
    }
  });
  start.addEventListener("click", () => {
    let interval = setInterval(nextSlide, 5000);
    stop.addEventListener("click", () => {
      clearInterval(interval);
    });
  });
  let slides1 = document.querySelectorAll("#slides1 .slide1");
  let currentSlide1 = 0;
  let start1 = document.getElementById("start1");
  let stop1 = document.getElementById("stop1");
  let next1 = document.getElementById("next1");
  let back1 = document.getElementById("back1");
  let reset1 = document.getElementById("reset1");
  const nextSlide1 = () => {
    slides1[currentSlide1].className = "slide1";
    currentSlide1 = (currentSlide1 + 1) % slides1.length;
    slides1[currentSlide1].className = "slide1 showing1";
  };
  const prevSlide1 = () => {
    slides1[currentSlide1].className = "slide1";
    currentSlide1 = (currentSlide1 - 1) % slides1.length;
    slides1[currentSlide1].className = "slide1 showing1";
  };
  const reseter1 = () => {
    slides1[currentSlide1].className = "slide1";
    currentSlide1 = 0;
    slides1[currentSlide1].className = "slide1 showing1";
  };
  reset1.addEventListener("click", () => {
    reseter1();
  });
  next1.addEventListener("click", () => {
    if (currentSlide1 < 4) {
      nextSlide1();
    }
  });
  back1.addEventListener("click", () => {
    if (currentSlide1 > 0) {
      prevSlide1();
    }
  });
  start1.addEventListener("click", () => {
    let interval1 = setInterval(nextSlide1, 5000);
    stop1.addEventListener("click", () => {
      clearInterval(interval1);
    });
  });
  java.addEventListener("click", () => {});
  top.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  about.addEventListener("click", () => {
    bio.scrollIntoView({ behavior: "smooth" });
  });
  skills.addEventListener("click", () => {
    tech.scrollIntoView({ behavior: "smooth" });
  });
  projects.addEventListener("click", () => {
    carousel.scrollIntoView({ behavior: "smooth" });
  });
  contact.addEventListener("click", () => {
    links.scrollIntoView({ behavior: "smooth" });
  });
});
