import React, { useState, useEffect } from 'react';
import { ChevronRight, Play, Shield, Zap, Globe } from 'lucide-react';

interface HeroProps {
    title: string;
    subtitle: string;
    ctaText: string;
    ctaLink: string;
    features: string[];
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, ctaText, ctaLink, features }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className={`relative z-10 text-center text-white transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
                        {title}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed" style={{ color: '#e2e8f0' }}>
                        {subtitle}
                    </p>

                    {/* Feature Pills */}
                    <div className="flex flex-wrap justify-center gap-4 mb-10">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="pill-feature"
                                style={{
                                    backgroundColor: 'rgb(255 255 255 / 0.1)',
                                    backdropFilter: 'blur(4px)',
                                    border: '1px solid rgb(255 255 255 / 0.2)',
                                    borderRadius: '9999px',
                                    padding: '0.5rem 1rem',
                                    fontSize: '0.875rem',
                                    fontWeight: '500'
                                }}
                            >
                                {feature}
                            </div>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                        <a
                            href={ctaLink}
                            className="btn-primary flex items-center gap-2"
                        >
                            {ctaText}
                            <ChevronRight className="w-5 h-5" />
                        </a>
                        <button className="btn-secondary flex items-center gap-2">
                            <Play className="w-5 h-5" />
                            Watch Demo
                        </button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="flex flex-wrap justify-center items-center gap-8 text-sm" style={{ color: '#cbd5e1' }}>
                        <div className="flex items-center gap-2">
                            <Shield className="w-4 h-4" />
                            <span>SOC 2 Certified</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Zap className="w-4 h-4" />
                            <span>99.9% Uptime</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Globe className="w-4 h-4" />
                            <span>200+ Countries</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;