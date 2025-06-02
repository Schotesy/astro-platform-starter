import React from 'react';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';

interface CTASectionProps {
    title: string;
    subtitle: string;
    primaryCTA: string;
    secondaryCTA: string;
}

const CTASection: React.FC<CTASectionProps> = ({
    title,
    subtitle,
    primaryCTA,
    secondaryCTA
}) => {
    return (
        <div className="container mx-auto px-4 text-center text-white">
            <div className="max-w-4xl mx-auto">
                <div className="mb-6">
                    <Sparkles className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
                </div>

                <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    {title}
                </h2>

                <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-2xl mx-auto leading-relaxed">
                    {subtitle}
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                    <button className="group bg-white text-blue-600 hover:bg-gray-50 font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center gap-2 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                        {primaryCTA}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button className="group bg-transparent border-2 border-white/30 hover:border-white text-white hover:bg-white/10 font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center gap-2">
                        <Calendar className="w-5 h-5" />
                        {secondaryCTA}
                    </button>
                </div>

                <div className="text-sm text-blue-200">
                    <span className="inline-flex items-center gap-2">
                        ✨ No credit card required • 14-day free trial • Cancel anytime
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CTASection;