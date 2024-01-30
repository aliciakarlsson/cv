// Dark theme

//Hämtar variablerna från DOM
const toggle = document.getElementById("theme-toggle");
const sunIcon = document.getElementById("sunicon");
const moonIcon = document.getElementById("moonicon");

//Kollar om det finns lagrat tema eller använder standardtemat
const storedTheme =
  localStorage.getItem("theme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");

// OM det finns lagrat tema gör detta
if (storedTheme) {
  //Sätt det lagrade temat till dokumentet
  document.documentElement.setAttribute("data-theme", storedTheme);
  if (storedTheme === "dark") {
    sunIcon.style.display = "none"; // Dölj solen i dark mode
    moonIcon.style.display = "block"; // Visa månen i dark mode
  } else {
    sunIcon.style.display = "block"; // Visa solen i light mode
    moonIcon.style.display = "none"; // Dölj månen i light mode
  }
}

//Sätter eventlistener på det som växlar tema
toggle.onclick = function () {
  //Hämtar temat
  var currentTheme = document.documentElement.getAttribute("data-theme");
  var targetTheme = "light";
  // Om det är light, byt till dark
  if (currentTheme === "light") {
    targetTheme = "dark";
    sunIcon.style.display = "none"; // Dölj solen när du byter till dark mode
    moonIcon.style.display = "block"; // Visa månen när du byter till dark mode
  } else {
    sunIcon.style.display = "block"; // Visa solen när du byter till light mode
    moonIcon.style.display = "none"; // Dölj månen när du byter till light mode
  }
  //Sätter temat till DOMens attribut och sparar det
  document.documentElement.setAttribute("data-theme", targetTheme);
  localStorage.setItem("theme", targetTheme);
};


toggle.addEventListener('click', function(){
      gtag("event", "dark_mode", {
        event_category: "Knappar",
        event_label: "dark-knapp",
      });
    
})