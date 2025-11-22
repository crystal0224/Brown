import React from 'react';
import type { SlideData } from '../../types';

export const switchingCostSlide: SlideData = {
    layout: 'custom',
    content: (
        <div className="w-full h-full flex flex-col items-center justify-center text-center bg-gradient-to-br from-slate-900 to-slate-800 text-white p-16">
            <div className="max-w-4xl">
                <h2 className="text-6xl font-black text-amber-300 tracking-tight drop-shadow-lg">Switching Cost</h2>
                <p className="mt-4 text-4xl font-bold text-slate-300 drop-shadow-md">재학습 비용 &gt; 학습 효과</p>

                <div className="w-40 h-px bg-slate-600 my-12 mx-auto"></div>

                <p className="text-2xl text-slate-400 leading-relaxed">
                    "이걸 배우니 저걸 쓰라고,<br />
                    저걸 배우니 또 이걸 쓰라고..."
                </p>
                <p className="mt-6 text-2xl text-slate-400 leading-relaxed">
                    끊임없이 쏟아지는 새로운 도구들, <br />
                    그리고 <span className="text-amber-300 font-semibold">'학습 피로'</span>
                </p>
            </div>
        </div>
    )
};
