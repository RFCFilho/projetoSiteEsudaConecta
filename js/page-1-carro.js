const carousel = document.getElementById('carousel-container');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');

        if (carousel && prevBtn && nextBtn) {
            nextBtn.addEventListener('click', () => {
                // Rola 300px para a direita
                carousel.scrollBy({ left: 300, behavior: 'smooth' });
            });

            prevBtn.addEventListener('click', () => {
                // Rola 300px para a esquerda
                carousel.scrollBy({ left: -300, behavior: 'smooth' });
            });
        }