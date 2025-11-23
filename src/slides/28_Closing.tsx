import React from 'react';
import type { SlideData } from '../../types';

export const closingSlide: SlideData = {
    layout: 'custom',
    content: (
        <div className="w-full h-full flex flex-col items-center justify-center text-center bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white p-16 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-indigo-900/50 to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-5xl">
                <div className="mb-12">
                    <span className="text-6xl mb-6 block">📖</span>
                    <h1 className="text-5xl font-bold leading-tight tracking-tight text-white mb-4">
                        "매일이 오픈북(Open Book) 시험인 시대"
                    </h1>
                    <p className="text-xl text-indigo-200 font-light italic">
                        대학 시절, 가장 치열하게 공부했던 과목은 아이러니하게도 '오픈북' 시험이었습니다.
                    </p>
                </div>

                <div className="space-y-8">
                    <p className="text-2xl text-slate-300 leading-relaxed font-medium">
                        <span className="text-white font-bold">AI라는 거대한 도서관</span>을 자유자재로 누비기 위해선<br />
                        여전히 우리의 <span className="text-amber-300 font-bold">'이해'와 '노력'</span>이 필요합니다.
                    </p>

                    <div className="w-24 h-1 bg-indigo-500/50 mx-auto rounded-full"></div>

                    <div className="text-xl text-slate-300 leading-relaxed">
                        <p className="mb-2">직무와 기술의 장벽이 무너지고,</p>
                        <p className="mb-6">누구나 무엇이든 시도해볼 수 있는 지금.</p>
                        <p className="text-3xl font-bold text-white mt-8">
                            지금의 '열심'이 여러분의 미래를<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">무한히 확장</span>시켜 줄 것입니다.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};
