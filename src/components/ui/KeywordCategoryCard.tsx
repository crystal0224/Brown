import React from 'react';

export const KeywordCategoryCard: React.FC<{ title: string, icon: string, keywords: string[], color: any, onKeywordClick: (keyword: string) => void, trendMessage?: string }> = ({ title, icon, keywords, color, onKeywordClick, trendMessage }) => (
    <div className={`bg-white border-2 ${color.border} rounded-lg p-3 shadow-md h-full flex flex-col`}>
        <div className="flex-grow overflow-y-auto pr-2">
            <h3 className={`text-lg font-bold ${color.text} mb-2 flex items-center`}>
                <span className="mr-2 text-xl">{icon}</span>
                {title}
            </h3>
            <div className="flex flex-wrap gap-x-1.5 gap-y-0.5">
                {keywords.map(k => (
                    <div
                        key={k}
                        className="cursor-pointer"
                        onClick={() => onKeywordClick(k)}
                    >
                        <span className={`inline-block ${color.bgPill} ${color.textPill} px-1.5 py-0.5 rounded-full text-[10px] font-semibold`}>{k}</span>
                    </div>
                ))}
            </div>
        </div>
        {trendMessage && (
            <div className="mt-3 pt-2 border-t border-dashed border-slate-200 flex-shrink-0">
                <p className={`text-[11px] text-slate-700 font-semibold leading-relaxed`}>{trendMessage}</p>
            </div>
        )}
    </div>
);
