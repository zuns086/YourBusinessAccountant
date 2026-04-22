(function() {
  const slidesContainer = document.querySelector('.slides');
  const slides = document.querySelectorAll('.slide');
  if (!slidesContainer || slides.length === 0) return;

  let current = 0;
  const total = slides.length;

  function showSlide(index) {
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
  }

  function nextSlide() {
    current = (current + 1) % total;
    showSlide(current);
  }

  let timer = setInterval(nextSlide, 3000);

  slidesContainer.addEventListener('mouseenter', () => clearInterval(timer));
  slidesContainer.addEventListener('mouseleave', () => {
    timer = setInterval(nextSlide, 3000);
  });
})();
