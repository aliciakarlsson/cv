const myCvButton = document.getElementById('cvbutton');

myCvButton.addEventListener('click', function(){
    gtag("event", "cv_click", {
      event_category: "Knappar",
      event_label: "CV-knapp",
    });
});

