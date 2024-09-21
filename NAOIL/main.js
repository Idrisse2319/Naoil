let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');
const carouselItem = document.querySelectorAll('.carousel-item');
        const modal = document.getElementById('modal');
        const modalContent = document.getElementById('modal-content');
        const closeBtn = document.getElementById('close');


function showSlide(index) {
    const totalSlides = slides.length;
    currentIndex = (index + totalSlides) % totalSlides;
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
    updateDots();
}

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function openModal(index) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    modalImage.src = slides[index].querySelector('img').src; // Récupère l'image de l'élément cliqué
    modal.style.display = 'flex'; // Affiche la modale
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none'; // Masque la modale
}

setInterval(nextSlide, 3000);