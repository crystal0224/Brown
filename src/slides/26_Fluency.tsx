import React from 'react';
import type { SlideData } from '../../types';

export const fluencySlide: SlideData = {
    layout: 'custom',
    content: (
        <div className="w-full h-full flex flex-col items-center justify-center text-center bg-white p-12">
            <div className="max-w-4xl">
                <h2 className="text-4xl font-bold text-slate-800 leading-snug">
                    처리 유창성 (Processing Fluency)
                </h2>
                <p className="mt-4 text-2xl text-slate-600">
                    : 처리하기 쉬우면, <span className="font-bold text-indigo-600">옳게</span> 느껴진다
                </p>
                <div className="w-48 h-px bg-slate-200 my-12 mx-auto"></div>
                <h2 className="text-4xl font-bold text-slate-800 leading-snug">
                    유창성 착각 (Fluency Illusion)
                </h2>
                <p className="mt-4 text-2xl text-slate-600">
                    : 이해하기 쉬우면, <span className="font-bold text-indigo-600">안다고</span> 착각한다
                </p>
            </div>
        </div>
    )
};
