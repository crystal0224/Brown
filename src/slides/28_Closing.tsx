import React from 'react';
import type { SlideData } from '../../types';

export const closingSlide: SlideData = {
    layout: 'custom',
    content: (
        <div className="w-full h-full flex flex-col items-center justify-center text-center bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white p-8 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-indigo-900/50 to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-5xl h-full flex flex-col justify-center space-y-8">
                {/* Main Title Section */}
                <div className="shrink-0">
                    <span className="text-6xl mb-4 block">📖</span>
                    <h1 className="text-4xl font-black leading-tight tracking-tight text-white mb-4">
                        "매일이 오픈북 시험인 시대"
                    </h1>
                    <p className="text-xl text-indigo-200 font-medium leading-relaxed">
                        가장 치열하게 공부했던 과목은<br />
                        아이러니하게도 <span className="text-indigo-300 font-bold">'오픈북' 시험</span>이었습니다.
                    </p>
                </div>

                <div className="w-32 h-1 bg-gradient-to-r from-transparent via-indigo-400 to-transparent mx-auto rounded-full shrink-0"></div>

                {/* Key Message Section */}
                <div className="shrink-0">
                    <p className="text-xl text-slate-200 leading-relaxed font-medium">
                        <span className="text-white font-bold text-2xl">AI라는 거대한 도서관</span>을<br />
                        자유자재로 누비기 위해선<br />
                        여전히 우리의 <span className="text-amber-300 font-bold text-2xl">'이해'와 '노력'</span>이 필요합니다.
                    </p>
                </div>

                <div className="w-32 h-1 bg-gradient-to-r from-transparent via-indigo-400 to-transparent mx-auto rounded-full shrink-0"></div>

                {/* Final Message */}
                <div className="shrink-0">
                    <p className="text-xl text-slate-300 leading-relaxed font-medium mb-5">
                        직무와 기술의 장벽이 무너지고,<br />
                        누구나 무엇이든 시도해볼 수 있는 지금.
                    </p>
                    <p className="text-3xl font-black text-white leading-tight">
                        지금의 <span className="text-amber-300">'열심'</span>이 여러분의 미래를<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">무한히 확장</span>시켜 줄 것입니다.
                    </p>
                </div>
            </div>
        </div>
    )
};
