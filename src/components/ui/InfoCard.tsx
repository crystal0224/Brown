import React from 'react';

interface InfoCardProps {
    title: string;
    content: string;
    icon?: React.ReactNode;
    titleClassName?: string;
    contentClassName?: string;
    borderColor?: string;
}

export const InfoCard: React.FC<InfoCardProps> = ({ title, content, icon = null, titleClassName = '', contentClassName = '', borderColor = 'border-slate-200' }) => (
    <div className={`bg-white border ${borderColor} border-t-8 rounded-lg p-6 h-full flex flex-col shadow-lg transition-transform hover:scale-105`}>
        <h3 className={`font-bold text-xl text-slate-800 mb-3 flex items-center ${titleClassName}`}>{icon}{title}</h3>
        <div className={`text-base text-slate-700 flex-grow ${contentClassName}`} dangerouslySetInnerHTML={{__html: content}}></div>
    </div>
);
