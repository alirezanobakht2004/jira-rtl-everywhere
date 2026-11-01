(() => {
  const root = document.documentElement;
  const enabled = localStorage.getItem("rtl-everywhere-enabled") !== "false";
  root.classList.toggle("rtl-everywhere", enabled);
  root.setAttribute("dir", enabled ? "rtl" : "ltr");
})();
