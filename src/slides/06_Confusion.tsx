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
        <div className="w-full h-full flex flex-col items-center p-12 bg-slate-50">
            <div className="flex-grow w-full max-w-6xl grid grid-cols-2 gap-12">
                {/* Left Column: Mainstream */}
                <div className="flex flex-col h-full">
                    <div className="flex items-center mb-8 pb-4 border-b-2 border-indigo-100">
                        <span className="text-4xl mr-4">🌊</span>
                        <div>
                            <h3 className="text-2xl font-bold text-slate-800">Mainstream</h3>
                            <p className="text-sm font-medium text-indigo-500 mt-1">지난 11개월간의 흐름</p>
                        </div>
                    </div>
                    <div className="space-y-3">
                        {mainStreamItems.map((item, index) => (
                            <div key={index} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center hover:shadow-md transition-shadow">
                                <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mr-4 flex-shrink-0"></div>
                                <span className="text-slate-700 font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Questions */}
                <div className="flex flex-col h-full">
                    <div className="flex items-center mb-8 pb-4 border-b-2 border-teal-100">
                        <span className="text-4xl mr-4">🤔</span>
                        <div>
                            <h3 className="text-2xl font-bold text-slate-800">Questions</h3>
                            <p className="text-sm font-medium text-teal-500 mt-1">우리가 혼란스러운 이유</p>
                        </div>
                    </div>
                    <div className="space-y-4 flex-grow">
                        {questionItems.map((item, index) => (
                            <div key={index} className="bg-teal-50/50 p-5 rounded-xl border border-teal-100/50 flex items-start">
                                <span className="text-teal-600 font-bold mr-3 text-lg">Q.</span>
                                <span className="text-slate-700 font-semibold text-lg">{item}</span>
                            </div>
                        ))}
                    </div>

                    {/* Message specific to Questions */}
                    <div className="mt-6 bg-white rounded-xl shadow-md border border-teal-100 p-5 flex items-start animate-fade-in-up">
                        <span className="text-2xl mr-3">💡</span>
                        <p className="text-slate-600 font-medium text-base leading-relaxed">
                            "여전히 <span className="text-indigo-600 font-bold">현재진행형</span>이라,<br />딱 하나의 <span className="text-teal-600 font-bold">정답</span>은 없지만..."
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
