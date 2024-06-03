

// Click events

const bestilleButtons = document.querySelectorAll('.bestilleTime');
const firstRow = document.getElementById('firstRow');
const secondRow = document.getElementById('secondRow');

bestilleButtons.forEach(button => {
    button.addEventListener('click', () => {
        firstRow.scrollIntoView({behavior: "smooth"});
    });
});

