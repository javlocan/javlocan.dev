const navbar1 = document.getElementById("navbar") as Element;

window.addEventListener("scroll", (e) => {
  const scroll = window.scrollY || document.documentElement.scrollTop;

  const height = window.innerHeight || document.documentElement.clientHeight;
  if (scroll - height * 0.5 > 0) {
    navbar1.classList.add("scroll");
  } else {
    navbar1.classList.remove("scroll");
  }
});
