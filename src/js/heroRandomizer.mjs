export default function heroRandomizer() {

    const heroContent = document.getElementById('heroContent');
    const heroImage = document.createElement('img');
    heroImage.classList.add('h-full');
    heroImage.alt = "Hero image";

    const heroImages = ['src/media/model1.png', 'src/media/model2.png', 'src/media/model3.png'];
    heroImage.src = heroImages[Math.floor(Math.random() * heroImages.length)];

    heroContent.innerHTML = "";
    heroContent.appendChild(heroImage);
};