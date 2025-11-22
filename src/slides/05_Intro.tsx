import React from 'react';
import type { SlideData } from '../../types';

export const introSlide: SlideData = {
    layout: 'custom',
    content: (
        <div className="w-full h-full flex flex-col justify-center bg-white p-20">
            <div className="w-full max-w-3xl text-left">
                <p className="text-xl font-medium text-slate-500 mb-4">그래서 오늘은,</p>
                <p className="text-2xl font-semibold text-slate-700 leading-relaxed tracking-tight">
                    2025년 AI의 주요 변화를 <span className="bg-blue-200/75 px-2 py-1 rounded-md">큰 줄기에서 조망하고</span>,<br />
                    <span className="bg-blue-200/75 px-2 py-1 rounded-md">핵심 도구들을 소개해</span> 드리고자 합니다.
                </p>
            </div>
        </div>
    )
};
