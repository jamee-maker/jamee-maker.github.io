document.addEventListener("DOMContentLoaded", () => {
  const setUpScroll = (button, section) => {
    button.addEventListener("click", () => {
      section.scrollIntoView({ behavior: "smooth" });
    });
  };
  setUpScroll(document.getElementById("about"), document.getElementById("me"));
  setUpScroll(
    document.getElementById("skills"),
    document.getElementById("tech")
  );
  setUpScroll(
    document.getElementById("projects"),
    document.querySelector(".projects-container")
  );
  setUpScroll(
    document.getElementById("contact"),
    document.querySelector(".contact-container")
  );
  document.getElementById("top").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  const slidifier = (container) => {
    let slides = container.querySelectorAll(".slide");
    let currentSlide = 0;
    let start = container.getElementsByClassName("start")[0];
    let stop = container.getElementsByClassName("stop")[0];
    let next = container.getElementsByClassName("next")[0];
    let back = container.getElementsByClassName("back")[0];
    let reset = container.getElementsByClassName("reset")[0];
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
  };
  slidifier(document.getElementById("text-adventure"))
  slidifier(document.getElementById("snowman"))
});
