import { useState, useEffect, useRef, useCallback } from "react";

//import { useWindow } from "./useWindow";
import "./NavBar.css";

export const NavBarComponent = () => {
  const [open, setOpen] = useState(false);
  const [icon, setIcon] = useState("B");
  const [position, setPosition] = useState();
  const perOneValue = useRef();

  useEffect(() => {
    const navIcon = document.getElementById("navicon");

    window.addEventListener("scroll", () => {
      const perOne = getPerOne();
      perOneValue.current = perOne;
      console.log(perOneValue.current);

      if (perOne > 0) setIcon("B");
      if (perOne < 0) setIcon("A");
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

      const size = () => {
        const result = 1 / perOne;
        if (result < 1 || result > 1.5) return 1.5;
        return result;
      };

      const place = () => {
        const result = perOne * 80;
        if (result > 80) return 80;
        if (result < 0) return 0;
        return result;
      };

      navIcon.style.fontVariationSettings = `"TIME" ${time()}`;
      navIcon.style.fontSize = `${size() * 2.2}rem`;
      navIcon.style.transform = `rotate(${-degrees()}deg)`;
      navIcon.style.marginTop = `${place()}vh`;
      navIcon.style.marginTop = `${place()}dvh`;
    });
  }, []);

  const handleClick = () => {
    if (perOneValue.current > 0.1) {
      window.scrollTo(0, window.innerHeight);
    } else {
    }
  };

  return (
    <nav className="nav-container" id="navbar">
      <div id="navicon" className="nav-icon" onClick={() => handleClick()}>
        {icon}
      </div>
    </nav>
  );
};

const getPerOne = () => {
  const scroll = window.scrollY || document.documentElement.scrollTop;
  const height = window.innerHeight || document.documentElement.clientHeight;

  return (height - scroll) / height;
};
