import React from 'react';

export const EvolutionCard: React.FC<{ year: string, title: string, description: string, children: React.ReactNode, color: any, customBg?: string }> = ({ year, title, description, children, color, customBg = '' }) => (
    <div className={`bg-white border-2 ${color.border} rounded-xl shadow-lg p-6 h-full flex flex-col ${customBg}`}>
        <div className="flex items-center mb-4">
            <span className={`px-3 py-1 text-sm font-bold text-white ${color.bg} rounded-full`}>{year}</span>
            <h3 className="ml-3 text-xl font-bold text-slate-800">{title}</h3>
        </div>
        <div className="flex-grow flex flex-col justify-center space-y-4 bg-slate-50 p-4 rounded-lg border border-slate-200">
            {children}
        </div>
        <div className={`mt-4 p-3 rounded-md font-semibold text-center text-sm ${color.resultBg} ${color.resultText} border ${color.resultBorder}`}>
            {description}
        </div>
    </div>
);
