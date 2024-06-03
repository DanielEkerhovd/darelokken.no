import texts from '/texts.json' with { type: 'json' };

export default function createPricingList() {

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