import React from 'react';
import { ArrowRight, TrendingUp, Shield, Zap, Globe } from 'lucide-react';

interface Feature {
    icon: string;
    title: string;
    description: string;
    stats: string;
}

interface FeatureGridProps {
    features: Feature[];
}

const FeatureGrid: React.FC<FeatureGridProps> = ({ features }) => {
    const getIconComponent = (iconName: string) => {
        switch (iconName) {
            case '📡': return <Globe className="w-8 h-8 text-blue-600" />;
            case '📊': return <TrendingUp className="w-8 h-8 text-green-600" />;
            case '🔒': return <Shield className="w-8 h-8 text-purple-600" />;
            case '⚡': return <Zap className="w-8 h-8 text-yellow-600" />;
            default: return <div className="text-2xl">{iconName}</div>;
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
                <div
                    key={index}
                    className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2"
                >
                    <div className="mb-6">
                        {getIconComponent(feature.icon)}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                        {feature.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                        {feature.description}
                    </p>

                    <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                            {feature.stats}
                        </span>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FeatureGrid;