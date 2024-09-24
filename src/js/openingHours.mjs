export default function openingHours() {

    const openingHours = {

        monday: {
            open: '09:00',
            close: '17:00'
        },
        tuesday: {
            open: '09:00',
            close: '18:00'
        },
        wednesday: {
            open: '09:00',
            close: '18:00'
        },
        thursday: {
            open: '09:00',
            close: '17:00'
        },
        friday: {
            open: '09:00',
            close: '17:00'
        },
        saturday: {
            open: '',
            close: 'closed'
        },
        sunday: {
            open: '',
            close: 'closed'
        }
    };
    
    const todayContainer = document.getElementById('hoursToday');
    
    const today = new Date();
    const day = today.getDay();
    
    todayContainer.innerHTML = ""
    
    switch(day) {
        case 1:
            todayContainer.innerHTML = `${openingHours.monday.open} - ${openingHours.monday.close}`;
            break;
        case 2:
            todayContainer.innerHTML = `${openingHours.tuesday.open} - ${openingHours.tuesday.close}`;
            break;
        case 3:
            todayContainer.innerHTML = `${openingHours.wednesday.open} - ${openingHours.wednesday.close}`;
            break;
        case 4:
            todayContainer.innerHTML = `${openingHours.thursday.open} - ${openingHours.thursday.close}`;
            break;
        case 5:
            todayContainer.innerHTML = `${openingHours.friday.open} - ${openingHours.friday.close}`;
            break;
        case 6:
        case 0:
            todayContainer.innerHTML = "Stengt";
            break;
    };
};