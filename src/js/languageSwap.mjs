import texts from '/texts.json' with { type: 'json' };

export default function languageSwap() {

    const info = texts;
    let currentLanguage = 'no';

    const button = document.getElementById('languageChange');
    const nextLanguage = document.getElementById('swapLanguage');
    const languageImage = document.getElementById('languageImage');
    const languages = {
        'no': 'NO',
        'en': 'EN'
    };

    const bestilleButton = document.querySelectorAll('.bestilleTimeButton');
    const priserButton = document.getElementById('priserButton');

    const introTextStart = document.getElementById('introTextStart');
    const introTextEnd = document.getElementById('introTextEnd'); 

    const bestilleTimeTitle = document.getElementById('bestilleTimeTitle');
    const bestilleTimeCall = document.getElementById('bestilleTimeCall');

    const hoursTitle = document.getElementById('hoursTitle');
    const todayTitle = document.getElementById('todayTitle');
    const weekTitle = document.getElementById('weekTitle');
    const tirOnsTitle = document.getElementById('tirOnsTitle');
    const weekendTitle = document.getElementById('weekendTitle');
    const closedTitle = document.getElementById('closedTitle');

    const pricingTitle = document.getElementById('pricingTitle');

    const pricingList = info.pricing.services;

    button.addEventListener('click', () => {

        if (currentLanguage === 'no') {
            currentLanguage = 'en';
            languageImage.src = 'src/media/norwegian.png';
            nextLanguage.textContent = languages.no;
        } else {
            currentLanguage = 'no';
            languageImage.src = 'src/media/english.png';
            nextLanguage.textContent = languages.en;
        }

        bestilleButton.forEach((element) => {
            element.textContent = info.utility.buttons.booking[currentLanguage].toUpperCase();
        });

        priserButton.textContent = info.utility.buttons.pricing[currentLanguage].toUpperCase();

        introTextStart.textContent = info.intro.intro_start[currentLanguage];
        introTextEnd.textContent = info.intro.intro_end[currentLanguage];

        bestilleTimeTitle.textContent = info.booking.booking_header[currentLanguage].toUpperCase();
        bestilleTimeCall.textContent = info.booking.booking_info[currentLanguage];

        hoursTitle.textContent = info.hours.hours_header[currentLanguage];
        todayTitle.textContent = info.hours.hours_today[currentLanguage];
        weekTitle.textContent = info.hours.hours_week[currentLanguage];
        tirOnsTitle.textContent = info.hours.tir_ons[currentLanguage];
        weekendTitle.textContent = info.hours.hours_weekend[currentLanguage];
        closedTitle.textContent = info.utility.closed[currentLanguage];

        pricingTitle.textContent = info.pricing.pricing_header[currentLanguage];

        pricingList.forEach((element) => {
            const service = document.getElementById(`${element.type}-title`);
            const preText = document.getElementById(`${element.type}-preText`);

            service.textContent = element[currentLanguage];
            if (preText) {
                preText.textContent = element.pre_text[currentLanguage];
            }
            
        });

    });

    

    




}