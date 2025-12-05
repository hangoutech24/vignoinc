import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import './ImageCarousel.css'

const ImageCarousel = ({ images, autoPlayInterval = 5000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        if (autoPlayInterval > 0) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
            }, autoPlayInterval)
            return () => clearInterval(interval)
        }
    }, [images.length, autoPlayInterval])

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    const goToSlide = (index) => {
        setCurrentIndex(index)
    }

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                <button className="carousel-button carousel-button-prev" onClick={goToPrevious} aria-label="Previous slide">
                    <ChevronLeft size={24} />
                </button>
                
                <div className="carousel-slides">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
                            style={{ backgroundImage: `url(${image.url})` }}
                        >
                            {image.title && (
                                <div className="carousel-content">
                                    <h3>{image.title}</h3>
                                    {image.description && <p>{image.description}</p>}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <button className="carousel-button carousel-button-next" onClick={goToNext} aria-label="Next slide">
                    <ChevronRight size={24} />
                </button>
            </div>

            <div className="carousel-indicators">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default ImageCarousel

