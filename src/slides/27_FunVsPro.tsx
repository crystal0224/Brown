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
        </div>
    )
};
