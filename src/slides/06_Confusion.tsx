import React from 'react';
import type { SlideData } from '../../types';

const ConfusionContent = () => {
    const mainStreamItems = [
        '유사한 기능을 가진 다수의 모델 등장',
        '기존 분류체계를 넘나드는 기능',
        '무료 서비스의 유료화 및 접근성 변화',
        '무료 API 사용량(Free Tier)의 축소',
        '거대 플랫폼 기업으로의 기술 통합',
        '잦은 UI 및 서비스 명칭 변경',
    ];

    const questionItems = [
        '뭐가 다르고, 그래서 뭐가 더 좋아졌는가?',
        '어떤 도구로 어디까지 할 수 있는가?',
        '이럴 땐, 어떤 서비스를 써야 하는가?',
        '그래서, 비용은 얼마나 드는가?',
    ];

    return (
        <div className="w-full h-full flex flex-col items-center p-8 bg-slate-100 overflow-hidden">
            <div className="flex-grow w-full max-w-6xl grid grid-cols-2 gap-12 h-full min-h-0">
                {/* Left Column: Mainstream */}
                <div className="flex flex-col h-full overflow-hidden">
                    <div className="flex items-center mb-4 pb-2 border-b-4 border-indigo-500 shrink-0">
                        <span className="text-4xl mr-3">🌊</span>
                        <div>
                            <h3 className="text-2xl font-black text-slate-900">Mainstream</h3>
                            <p className="text-sm font-bold text-indigo-600 mt-0.5">지난 11개월간의 흐름</p>
                        </div>
                    </div>
                    <div className="space-y-3 overflow-y-auto pr-2">
                        {mainStreamItems.map((item, index) => (
                            <div key={index} className="bg-white p-3.5 rounded-r-xl border-l-8 border-indigo-500 shadow-md flex items-center hover:shadow-lg transition-all hover:-translate-y-0.5">
                                <span className="text-slate-800 font-bold text-base">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Questions */}
                <div className="flex flex-col h-full overflow-hidden">
                    <div className="flex items-center mb-4 pb-2 border-b-4 border-teal-500 shrink-0">
                        <span className="text-4xl mr-3">🤔</span>
                        <div>
                            <h3 className="text-2xl font-black text-slate-900">Questions</h3>
                            <p className="text-sm font-bold text-teal-600 mt-0.5">우리가 혼란스러운 이유</p>
                        </div>
                    </div>
                    <div className="space-y-3 flex-grow overflow-y-auto pr-2">
                        {questionItems.map((item, index) => (
                            <div key={index} className="bg-white p-3.5 rounded-r-xl border-l-8 border-teal-500 shadow-md flex items-start hover:shadow-lg transition-all hover:-translate-y-0.5">
                                <span className="text-teal-600 font-black mr-2 text-lg">Q.</span>
                                <span className="text-slate-800 font-bold text-lg">{item}</span>
                            </div>
                        ))}
                    </div>

                    {/* Message specific to Questions */}
                    <div className="mt-4 bg-gradient-to-r from-indigo-50 to-teal-50 rounded-lg shadow-md border-2 border-indigo-300 p-4 flex items-center shrink-0">
                        <span className="text-2xl mr-3">💡</span>
                        <p className="text-slate-800 font-semibold text-base leading-relaxed">
                            여전히 <span className="text-indigo-600 font-bold">현재진행형</span>이라, 딱 하나의 <span className="text-teal-600 font-bold">정답</span>은 없지만...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const confusionSlide: SlideData = {
    layout: 'content',
    kicker: '변화의 핵심',
    title: '그래서, 무엇이 혼란스러운가?',
    content: <ConfusionContent />
};
