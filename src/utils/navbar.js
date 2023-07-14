const navContainer = document.getElementById("navbar");
const navIcon = document.getElementById("navicon");
// Este eventlistener pone y quita opacidad al  bajar

window.addEventListener("scroll", () => {
  const scroll = window.scrollY || document.documentElement.scrollTop;
  const height = window.innerHeight || document.documentElement.clientHeight;

  const perOne = (height - scroll) / height;

  const degrees = () => {
    const result = perOne * 90;
    if (result > 90) return 90;
    if (result < 0) return 0;
    return result;
  };
  const time = () => {
    const result = perOne * 100;

    if (result > 100) return 100;
    if (result < 1) return 1;
    return result;
  };

  const scale = () => {
    const result = 1 / perOne;
    if (result < 1 || result > 1.5) return 1.5;
    return result;
  };

  const place = () => {
    const result = perOne * 85;
    if (result > 90) return 85;
    if (result < 0) return 0;
    return result;
  };

  navIcon.style.fontVariationSettings = `"TIME" ${time()}`;
  navIcon.style.fontSize = `${scale() * 2.2}rem`;
  navIcon.style.transform = `rotate(${-degrees()}deg)`;
  navIcon.style.marginTop = `${place()}vh`;

  if (perOne < 0.5) {
    navContainer.classList.add("scrolled--container");
  } else {
    navContainer.classList.remove("scrolled--container");
  }
  navIcon.addEventListener("click", () => {
    if (perOne > 0.0) {
      // si está arriba
      window.scrollTo(0, height);
    } else {
      // si está abajo
      if (navContainer.classList.contains("open--container")) {
        navContainer.classList.remove("open--container");
      } else {
        navContainer.classList.add("open--container");
      }
    }
  });
});
