const myCvButton = document.getElementById('cvbutton');

myCvButton.addEventListener('click', function(){
    gtag("event", "min_cv_knapp", {
      event_category: "cv",
      event_label: "etikett",
      value: Number,
    });
});

