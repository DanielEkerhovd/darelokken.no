export default function scrollEvents() {

    const bestilleButtons = document.querySelectorAll('.bestilleTimeButton');
    const priserButton = document.getElementById('priserButton');
    const bestillTimeContent = document.getElementById('bestilleTime');
    const sePriser = document.getElementById('sePriser');

    bestilleButtons.forEach(button => {
        button.addEventListener('click', () => {
            firstRow.scrollIntoView({behavior: "smooth"});
        });
    });

    priserButton.addEventListener('click', () => {
        sePriser.scrollIntoView({behavior: "smooth"});
    });
};