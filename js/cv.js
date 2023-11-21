//Funktionen som hämtar datan från json
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
