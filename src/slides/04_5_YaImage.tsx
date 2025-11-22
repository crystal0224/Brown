import React from 'react';
import type { SlideData } from '../../types';

export const yaImageSlide: SlideData = {
    layout: 'content',
    title: '',
    content: (
        <div className="w-full h-full flex items-center justify-center bg-white">
            <img
                src="/ya_upscaled.png"
                alt="Ya"
                className="w-full h-full object-cover"
                style={{
                    imageRendering: 'high-quality',
                }}
            />
        </div>
    )
};
