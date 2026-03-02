const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

const sections = document.querySelectorAll(".section, .hero");
sections.forEach((section) => {
  section.classList.add("reveal");
  observer.observe(section);
});
