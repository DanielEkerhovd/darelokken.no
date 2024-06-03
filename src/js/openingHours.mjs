export default function openingHours() {

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
            // todayContainer.innerHTML = `${openingHours.saturday.open} - ${openingHours.saturday.close}`;
            todayContainer.innerHTML = `kommer`;
    
        } else {
            // todayContainer.innerHTML = `${openingHours.weekdays.open} - ${openingHours.weekdays.close}`;
            todayContainer.innerHTML = `kommer`;
            
    }
};