document.addEventListener('DOMContentLoaded', function () {
    // Verifica se o elemento do carrossel existe antes de inicializar
    const splideElement = document.getElementById('splide-pacientes');
    
    if (splideElement) {
        new Splide(splideElement, {
            type: 'loop', 
            autoplay: true, 
            interval: 2000, 
            pauseOnHover: false, 
            perPage: 3, 
            gap: '20px', 
            focus: 'center', 
            pagination: false, // <--- Esta linha remove os traços (dots)
            breakpoints: {
                992: {
                    perPage: 2, 
                    gap: '15px',
                },
                640: {
                    perPage: 1, 
                    focus: 0,
                }
            }
        }).mount();
    }
});