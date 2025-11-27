import React from 'react';
import type { SlideData } from '../../types';

const AIResponsibilityContent = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center bg-white p-6 text-center overflow-hidden">
            <div className="max-w-5xl w-full h-full flex flex-col justify-center">
                <h2 className="text-3xl font-black text-slate-800 mb-6 leading-tight shrink-0">
                    "AI로 해봤는데, 별로던데요?"
                </h2>

                <div className="grid grid-cols-2 gap-6 items-center mb-6 shrink-0">
                    <div className="bg-slate-50 p-5 rounded-3xl border-4 border-slate-200 flex flex-col items-center h-44 justify-center transform hover:scale-105 transition-transform">
                        <span className="text-6xl mb-3">🏃</span>
                        <h3 className="text-lg font-bold text-slate-700">최고의 유산소 기구</h3>
                    </div>
                    <div className="bg-slate-50 p-5 rounded-3xl border-4 border-slate-200 flex flex-col items-center h-44 justify-center transform hover:scale-105 transition-transform">
                        <span className="text-6xl mb-3">👕</span>
                        <h3 className="text-lg font-bold text-slate-700">비싼 빨래 건조대</h3>
                    </div>
                </div>

                <div className="bg-slate-50 rounded-3xl p-5 border-4 border-slate-200 flex items-center justify-center shrink-0">
                    <p className="text-xl font-bold text-slate-700 leading-relaxed">
                        러닝머신은 죄가 없습니다.<br />
                        <span className="text-slate-600">AI도 마찬가지입니다.</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export const aiResponsibilitySlide: SlideData = {
    layout: 'content',
    kicker: '마지막 당부',
    title: '도구의 탓일까요?',
    content: <AIResponsibilityContent />
};
