import loadJSON from './loadJSON.mjs';

export default async function createPricingList() {

    const texts = await loadJSON();

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
            p2.innerHTML = `<span class=" font-light" id=${element.type}-preText>${element.pre_text.no}</span> ${element.price} kr	`;
        } else  {
            p2.textContent = element.price + ' kr';
        }

        div.append(p1, p2);

        container.appendChild(div);

    });

    const moreInfo = document.createElement('p');
    moreInfo.id = "morePriceInfo"
    moreInfo.classList.add('text-center', 'text-sm', 'mt-4');
    moreInfo.textContent = info.utility.more_options.no;
    container.appendChild(moreInfo);
};