import React from 'react';
import type { SlideData } from '../../types';

export const titleSlide: SlideData = {
    layout: 'title',
    title: 'AI 2025: The Next Wave',
    content: (
        <div className="w-full h-full flex flex-col items-center justify-center text-center p-12 bg-white relative">
            <div className="relative z-10 flex flex-col items-center">
                <h1 className="text-7xl font-black text-indigo-600 tracking-tighter whitespace-nowrap">AI 2025: The Next Wave</h1>
                <p className="mt-6 text-2xl text-slate-500 font-medium">11개월간의 변화 따라잡기</p>
            </div>
            <div className="absolute bottom-12 text-slate-400 font-bold text-lg tracking-wide">
                SK아카데미 배수정RF
            </div>
        </div>
    )
};
