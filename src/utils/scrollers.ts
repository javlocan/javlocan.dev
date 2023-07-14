const navbarScroller = document.getElementById("navbar") as HTMLElement;
const menuButton = document.getElementById("menubutton") as HTMLElement;
// Este eventlistener pone y quita opacidad al  bajar

window.addEventListener("scroll", (e) => {
  const scroll = window.scrollY || document.documentElement.scrollTop;
  const height = window.innerHeight || document.documentElement.clientHeight;

  const place = height - scroll;
  const percent = (height - scroll) / height;
  const degrees = () => {
    const result = percent * 90;
    if (result > 90) return 90;
    if (result < 0) return 0;
    return result;
  };
  const time = () => {
    const result = percent * 100;
    if (result > 100) return 100;
    if (result < 1) return 1;
    return result;
  };

  console.log(degrees(), time());
  menuButton.style.fontVariationSettings = `"TIME" ${time()}`;
  menuButton.style.transform = `rotate(${-degrees()}deg)`;

  navbarScroller.style.minHeight = `${place}px`;

  /*  if (place * 0.5 < 0) {
    menuButton.classList.add("menu-scroll");
  } else {
    menuButton.classList.remove("menu-scroll");
  } */
});
