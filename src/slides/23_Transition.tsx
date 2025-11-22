import React from 'react';
import type { SlideData } from '../../types';
import { DeepDiveLayout } from '../components/ui/DeepDiveLayout';

export const transitionSlide: SlideData = {
    layout: 'custom',
    content: (
        <DeepDiveLayout kicker="잠시 다른 화면으로" title="한번 더 정리해본 도구들 흐름">
            <div className="w-full h-full flex items-center justify-center bg-slate-100 rounded-lg border-4 border-dashed border-slate-200">
                <div className="text-center">
                    <p className="text-3xl font-bold text-slate-400">📝 이동 </p>
                </div>
            </div>
        </DeepDiveLayout>
    )
};
