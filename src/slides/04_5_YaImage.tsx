import React from 'react';
import type { SlideData } from '../../types';

export const yaImageSlide: SlideData = {
    layout: 'content',
    title: '',
    content: (
        <div className="w-full h-full flex items-center justify-center bg-black">
            <div className="relative w-[60%] h-[60%]">
                <img
                    src="/ya_upscaled.png"
                    alt="Ya"
                    className="w-full h-full object-contain"
                />
            </div>
        </div>
    )
};
