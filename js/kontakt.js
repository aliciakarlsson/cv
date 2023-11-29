const submitBtn = document.getElementById('submitbutton');
let emailInput = document.getElementById('writehere');
let nameInput = document.getElementById('writehere2');
let subjectInput = document.getElementById('subject');

submitBtn.addEventListener('click', function(event){

    event.preventDefault();

    emailInput.value = '';
    nameInput.value = '';
    subjectInput.value = '';
});

