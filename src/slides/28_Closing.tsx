import React from 'react';
import type { SlideData } from '../../types';

export const closingSlide: SlideData = {
    layout: 'custom',
    content: (
        <div className="w-full h-full flex flex-col items-center justify-center text-center bg-slate-900 text-white p-12">
            <h1 className="text-5xl font-bold leading-snug tracking-tight">
                자동통역이 나오길 기다리며<br />영어공부를 하지 않은 사람들
            </h1>
            <p className="mt-10 text-xl text-slate-400 font-medium" dangerouslySetInnerHTML={{ __html: "기회는 준비된 자에게...<br/>한계와 특성을 알고 영리하게 사용하는 것은 어떨까요?" }} />
        </div>
    )
};
