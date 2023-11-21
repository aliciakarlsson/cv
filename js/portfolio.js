// //KOPIERAD KOD FRÅN https://codepen.io/sajidnagari/pen/xxxORZb. 
// //Det jag har anpassat i den är att ändra variablerna från var till const samt anpassat så det går ha flera modaler med hjälp av research

// Hämta alla knappar som ska öppna modalfönstret
const triggers = document.querySelectorAll('.trigger');

// Gå igenom varje knapp och lägg till en eventlyssnare
triggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
        const modalId = trigger.getAttribute('data-modal');
        const modal = document.getElementById(modalId);

        // Visa den valda modalen
        modal.classList.add('show-modal');
    });
});

// Hämta alla stängknappar för modalfönster
const closeButtons = document.querySelectorAll('.close-button');

// Gå igenom varje stängknapp och lägg till en eventlyssnare
closeButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');

        // Dölj den valda modalen
        modal.classList.remove('show-modal');
    });
});

// Stäng modalen om användaren klickar utanför den
window.addEventListener('click', (event) => {
    triggers.forEach((trigger) => {
        const modalId = trigger.getAttribute('data-modal');
        const modal = document.getElementById(modalId);

        if (event.target === modal) {
            modal.classList.remove('show-modal');
        }
    });
});
