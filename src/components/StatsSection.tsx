import React, { useState, useEffect, useRef } from 'react';

interface Stat {
    number: string;
    label: string;
}

interface StatsSectionProps {
    stats: Stat[];
}

const StatsSection: React.FC<StatsSectionProps> = ({ stats }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [animatedNumbers, setAnimatedNumbers] = useState<string[]>([]);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    animateNumbers();
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const animateNumbers = () => {
        stats.forEach((stat, index) => {
            const numericValue = parseInt(stat.number.replace(/[^\d]/g, ''));
            if (!isNaN(numericValue)) {
                let current = 0;
                const increment = numericValue / 50;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= numericValue) {
                        current = numericValue;
                        clearInterval(timer);
                    }

                    setAnimatedNumbers(prev => {
                        const newNumbers = [...prev];
                        newNumbers[index] = stat.number.replace(/\d+/, Math.floor(current).toString());
                        return newNumbers;
                    });
                }, 30);
            } else {
                setAnimatedNumbers(prev => {
                    const newNumbers = [...prev];
                    newNumbers[index] = stat.number;
                    return newNumbers;
                });
            }
        });
    };

    return (
        <div ref={sectionRef} className="py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className={`text-center transition-all duration-700 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                    >
                        <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                            {animatedNumbers[index] || stat.number}
                        </div>
                        <div className="text-gray-600 font-medium uppercase tracking-wide text-sm">
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StatsSection;