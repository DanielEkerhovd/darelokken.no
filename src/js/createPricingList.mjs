export default async function createPricingList() {

    async function loadJSON() {


        try {
            const response = await fetch('../../texts.json');
            const text = await response.json();
            return text;
        } 
        catch (error) {
            console.error('Error loading the file: ', error);
        }
    }

    const texts = await loadJSON();
    console.log(texts);

    const info = texts;
    const prices = texts.pricing.services;
        
    const container = document.getElementById('pricingList');

    prices.forEach((element) => {

        const div = document.createElement('div');
        div.classList.add('flex', 'justify-between');

        const p1 = document.createElement('p');
        p1.id = `${element.type}-title`;
        p1.textContent = element.no

        const p2 = document.createElement('p');

        if (element.pre_text.no !== '') {
            p2.innerHTML = `<span id=${element.type}-preText>${element.pre_text.no}</span> ${element.price} kr	`;
        } else  {
            p2.textContent = element.price + ' kr';
        }

        div.appendChild(p1);
        div.appendChild(p2);

        container.appendChild(div);

    });
};