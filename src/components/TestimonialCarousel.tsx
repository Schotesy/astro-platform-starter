import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface Testimonial {
    name: string;
    role: string;
    content: string;
    avatar: string;
    company: string;
}

interface TestimonialCarouselProps {
    testimonials: Testimonial[];
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ testimonials }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [testimonials.length, isAutoPlaying]);

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setIsAutoPlaying(false);
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setIsAutoPlaying(false);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
        setIsAutoPlaying(false);
    };

    return (
        <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
                <Quote className="absolute top-6 left-6 w-12 h-12 text-blue-100" />

                <div className="relative z-10">
                    <div className="flex mb-6">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                    </div>

                    <blockquote className="text-xl md:text-2xl text-gray-800 mb-8 leading-relaxed font-medium">
                        "{testimonials[currentIndex].content}"
                    </blockquote>

                    <div className="flex items-center gap-4">
                        <img
                            src={testimonials[currentIndex].avatar}
                            alt={testimonials[currentIndex].name}
                            className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
                        />
                        <div>
                            <div className="font-bold text-gray-900 text-lg">
                                {testimonials[currentIndex].name}
                            </div>
                            <div className="text-gray-600">
                                {testimonials[currentIndex].role}
                            </div>
                            <div className="text-blue-600 font-medium">
                                {testimonials[currentIndex].company}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-8">
                <button
                    onClick={goToPrevious}
                    className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300"
                >
                    <ChevronLeft className="w-6 h-6 text-gray-600" />
                </button>

                <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                        />
                    ))}
                </div>

                <button
                    onClick={goToNext}
                    className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300"
                >
                    <ChevronRight className="w-6 h-6 text-gray-600" />
                </button>
            </div>
        </div>
    );
};

export default TestimonialCarousel;