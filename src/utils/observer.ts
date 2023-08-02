const sections = document.querySelectorAll("section");
const about = document.getElementById("about") as HTMLElement;
const navbarObserver = document.getElementById("navbar") as HTMLElement;

// We are gonna observe two things:
// - sections: to uncover as we scroll, then unobserve
// - the first section (about) to manipulate the navbarObserver

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        sectionObserver.unobserve(entry.target);
      }
    });
  },
  {
    rootMargin: "-10%",
  }
);

sections.forEach((section) => {
  sectionObserver.observe(section);
});
