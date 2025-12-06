// Image Carousel - Vanilla JavaScript implementation
class ImageCarousel {
    constructor(containerSelector, images, options = {}) {
        this.container = document.querySelector(containerSelector);
        if (!this.container) {
            console.error(`Carousel container "${containerSelector}" not found`);
            return;
        }

        this.images = images;
        this.currentIndex = 0;
        this.autoPlayInterval = options.autoPlayInterval || 5000;
        this.intervalId = null;

        this.init();
    }

    init() {
        this.render();
        this.attachEventListeners();
        if (this.autoPlayInterval > 0) {
            this.startAutoPlay();
        }
    }

    render() {
        const chevronLeft = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>`;
        const chevronRight = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>`;

        const slidesHTML = this.images.map((image, index) => `
            <div class="carousel-slide ${index === this.currentIndex ? 'active' : ''}"
                 style="background-image: url('${image.url}')">
                ${image.title ? `
                    <div class="carousel-content">
                        <h3>${image.title}</h3>
                        ${image.description ? `<p>${image.description}</p>` : ''}
                    </div>
                ` : ''}
            </div>
        `).join('');

        const indicatorsHTML = this.images.map((_, index) => `
            <button class="carousel-indicator ${index === this.currentIndex ? 'active' : ''}"
                    data-index="${index}"
                    aria-label="Go to slide ${index + 1}"></button>
        `).join('');

        this.container.innerHTML = `
            <div class="carousel-container">
                <div class="carousel-wrapper">
                    <button class="carousel-button carousel-button-prev" aria-label="Previous slide">
                        ${chevronLeft}
                    </button>

                    <div class="carousel-slides">
                        ${slidesHTML}
                    </div>

                    <button class="carousel-button carousel-button-next" aria-label="Next slide">
                        ${chevronRight}
                    </button>
                </div>

                <div class="carousel-indicators">
                    ${indicatorsHTML}
                </div>
            </div>
        `;
    }

    attachEventListeners() {
        const prevBtn = this.container.querySelector('.carousel-button-prev');
        const nextBtn = this.container.querySelector('.carousel-button-next');
        const indicators = this.container.querySelectorAll('.carousel-indicator');

        if (prevBtn) prevBtn.addEventListener('click', () => this.goToPrevious());
        if (nextBtn) nextBtn.addEventListener('click', () => this.goToNext());

        indicators.forEach(indicator => {
            indicator.addEventListener('click', (e) => {
                const index = parseInt(e.target.dataset.index);
                this.goToSlide(index);
            });
        });
    }

    goToPrevious() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        this.updateSlides();
        this.resetAutoPlay();
    }

    goToNext() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.updateSlides();
        this.resetAutoPlay();
    }

    goToSlide(index) {
        this.currentIndex = index;
        this.updateSlides();
        this.resetAutoPlay();
    }

    updateSlides() {
        const slides = this.container.querySelectorAll('.carousel-slide');
        const indicators = this.container.querySelectorAll('.carousel-indicator');

        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === this.currentIndex);
        });

        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentIndex);
        });
    }

    startAutoPlay() {
        this.intervalId = setInterval(() => {
            this.goToNext();
        }, this.autoPlayInterval);
    }

    stopAutoPlay() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    resetAutoPlay() {
        this.stopAutoPlay();
        if (this.autoPlayInterval > 0) {
            this.startAutoPlay();
        }
    }

    destroy() {
        this.stopAutoPlay();
        this.container.innerHTML = '';
    }
}

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ImageCarousel;
}
