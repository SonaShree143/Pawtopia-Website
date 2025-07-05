 const track = document.getElementById('carouselTrack');
    const dotsContainer = document.getElementById('dotsContainer');
    const totalCards = 8;
    const cardsPerView = window.innerWidth <= 768 ? 1 : 3;
    const totalSlides = Math.ceil(totalCards / cardsPerView);
    let currentIndex = 0;
    let interval;

    function updateCarousel() {
      const width = track.offsetWidth / totalCards;
      track.style.transform = `translateX(-${currentIndex * (100 / totalSlides)}%)`;

      document.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
      });
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateCarousel();
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateCarousel();
    }

    document.querySelector('.next-btn').addEventListener('click', () => {
      nextSlide();
      resetInterval();
    });

    document.querySelector('.prev-btn').addEventListener('click', () => {
      prevSlide();
      resetInterval();
    });

    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => {
        currentIndex = i;
        updateCarousel();
        resetInterval();
      });
      dotsContainer.appendChild(dot);
    }

    function startAutoSlide() {
      interval = setInterval(nextSlide, 3500);
    }

    function resetInterval() {
      clearInterval(interval);
      startAutoSlide();
    }

    window.addEventListener('resize', () => location.reload());

    startAutoSlide();
    updateCarousel();