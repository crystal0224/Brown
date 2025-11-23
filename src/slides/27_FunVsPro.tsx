import React from 'react';
import type { SlideData } from '../../types';

export const funVsProSlide: SlideData = {
    layout: 'custom',
    content: (
        <div className="w-full h-full flex flex-col items-center justify-center text-center bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white p-16">
            <div className="w-full max-w-5xl grid grid-cols-2 gap-16 items-center">
                <div className="text-right border-r-2 border-slate-600 pr-16">
                    <h2 className="text-7xl font-black text-teal-300 tracking-tighter">For Fun?</h2>
                    <p className="text-5xl font-bold text-slate-400 mt-2">Why?</p>
                    <p className="mt-8 text-xl text-slate-300 font-medium">
                        재미로 쓰기엔 '굳이' 싶고,
                    </p>
                </div>

                <div className="text-left">
                    <h2 className="text-7xl font-black text-amber-300 tracking-tighter">For Pro?</h2>
                    <p className="text-5xl font-bold text-slate-400 mt-2">How?</p>
                    <p className="mt-8 text-xl text-slate-300 font-medium">
                        대량패치로 쓰기엔 아직 부족한.
                    </p>
                </div>
            </div>

            <div className="mt-24 w-full max-w-4xl bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 animate-fade-in-up">
                <h3 className="text-2xl font-bold text-indigo-300 mb-4 text-left">
                    그래서 최근 하고 있는 노력은...
                </h3>
                <div className="text-left space-y-2">
                    <p className="text-lg text-slate-200 leading-relaxed">
                        할 수 있는 일의 영역이 다양해진만큼 <span className="text-white font-bold">업무 프로세스에 대한 이해도</span>가 필요하다고 생각.
                    </p>
                    <p className="text-lg text-slate-300">
                        PM, UI/UX디자이너, 개발자들의 업무 지식을 기본적인 수준에서 학습
                    </p>
                </div>
            </div>
        </div>
    )
};
