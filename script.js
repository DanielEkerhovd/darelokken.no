// Click events

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

// Today's date

const openingHours = {

    weekdays: {
        open: '08:00',
        close: '17:00'
    },
    saturday: {
        open: '09:00',
        close: '14:00'
    },
    sunday: {
        open: 'closed',
        close: 'closed'
    }
};

const todayContainer = document.getElementById('hoursToday');

const today = new Date();
const day = today.getDay();

todayContainer.innerHTML = ""

if (day === 0) {
    todayContainer.innerHTML = `${openingHours.sunday.close}`;
} else if (day === 6) {
    todayContainer.innerHTML = `${openingHours.saturday.open} - ${openingHours.saturday.close}`;
} else {
    todayContainer.innerHTML = `${openingHours.weekdays.open} - ${openingHours.weekdays.close}`;
}

// Hero image randomizer

const heroContent = document.getElementById('heroContent');
const heroImage = document.createElement('img');
heroImage.classList.add('h-full');

const heroImages = ['src/media/model1.png', 'src/media/model2.png', 'src/media/model3.png'];
heroImage.src = heroImages[Math.floor(Math.random() * heroImages.length)];

heroContent.innerHTML = "";
heroContent.appendChild(heroImage);
