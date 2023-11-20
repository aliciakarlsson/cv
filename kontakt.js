// Dark theme
const toggle = document.getElementById("theme-toggle");
const sunIcon = document.getElementById("sunicon");
const moonIcon = document.getElementById("moonicon");

const storedTheme =
  localStorage.getItem("theme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");

if (storedTheme) {
  document.documentElement.setAttribute("data-theme", storedTheme);
  if (storedTheme === "dark") {
    sunIcon.style.display = "none"; // Dölj solen i dark mode
    moonIcon.style.display = "block"; // Visa månen i dark mode
  } else {
    sunIcon.style.display = "block"; // Visa solen i light mode
    moonIcon.style.display = "none"; // Dölj månen i light mode
  }
}

toggle.onclick = function () {
  var currentTheme = document.documentElement.getAttribute("data-theme");
  var targetTheme = "light";

  if (currentTheme === "light") {
    targetTheme = "dark";
    sunIcon.style.display = "none"; // Dölj solen när du byter till dark mode
    moonIcon.style.display = "block"; // Visa månen när du byter till dark mode
  } else {
    sunIcon.style.display = "block"; // Visa solen när du byter till light mode
    moonIcon.style.display = "none"; // Dölj månen när du byter till light mode
  }

  document.documentElement.setAttribute("data-theme", targetTheme);
  localStorage.setItem("theme", targetTheme);
};
