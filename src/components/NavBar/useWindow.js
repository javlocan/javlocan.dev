import { useSyncExternalStore } from "react";

function useWindow() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
function subscribe(callback) {
  window.addEventListener("scroll", callback);
  return () => window.removeEventListener("scroll", callback);
}

function getSnapshot() {
  const scroll = window.scrollY || document.documentElement.scrollTop;
  const height = window.innerHeight || document.documentElement.clientHeight;

  const perOne = (height - scroll) / height;
  return { perOne };
}

function getServerSnapshot() {
  return {
    width: 0,
    height: 0,
  };
}

export default useWindow;
