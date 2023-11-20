async function getData() {
  const jsonResponse = await fetch("cv.json");

  if (jsonResponse.ok) {
    const json = await jsonResponse.json();

    //Kollar respons från jsonfil
    console.log(json);

    json.forEach(function (object) {
      //Hämtar elementet jag ska placera informationen i
      const aboutMe = document.getElementById("about-me");
      //Placerar texten i p-taggen
      aboutMe.textContent = object.aboutMe;

      //Hämtar element för utbildning
      const education = document.getElementById("education");
      //Placerar text i p-tagg
      education.textContent = object.education.school;

      //Hämtar rubrik-elementet
      const workPlaceOne = document.getElementById("place1");
      //Placerar text i rubrik
      workPlaceOne.innerText = object.workExperience[0].workPlaceOne;

      //Hämtar textelement
      const taskOne = document.getElementById("task1");
      //Placerar beskrivningen i taggen
      taskOne.textContent = object.workExperience[0].taskOne;

      const workPlaceTwo = document.getElementById("place2");
      workPlaceTwo.textContent = object.workExperience[1].workPlaceTwo;

      const taskTwo = document.getElementById("task2");
      taskTwo.textContent = object.workExperience[1].taskTwo;

      const workPlaceThree = document.getElementById("place3");
      workPlaceThree.textContent = object.workExperience[2].workPlaceThree;

      const taskThree = document.getElementById("task3");
      taskThree.textContent = object.workExperience[2].taskThree;

      const workPlaceFour = document.getElementById("place4");
      workPlaceFour.textContent = object.workExperience[3].workPlaceFour;

      const taskFour = document.getElementById("task4");
      taskFour.textContent = object.workExperience[3].taskFour;

      console.log();
    });
  } else {
    console.log(jsonResponse.status);
  }
}

//Kallar på funktionen
getData();

// Dark theme

//Hämtar variablerna från DOM
const toggle = document.getElementById("theme-toggle");
const sunIcon = document.getElementById("sunicon");
const moonIcon = document.getElementById('moonicon');

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
