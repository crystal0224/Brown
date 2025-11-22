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

    const InfoColumn = ({ icon, title, subtitle, items, color }: { icon: string, title: string, subtitle: string, items: string[], color: any }) => (
        <div className={`bg-white rounded-2xl shadow-xl p-8 flex flex-col border-t-8 ${color.border} h-full`}>
            <div className="flex items-center mb-6">
                <div className="text-6xl mr-5">{icon}</div>
                <div>
                    <h3 className="text-3xl font-black text-slate-800">{title}</h3>
                    <p className="text-lg font-bold text-slate-500">{subtitle}</p>
                </div>
            </div>
            <ul className="space-y-4 text-lg text-slate-700 list-inside flex-grow">
                {items.map((item, index) => (
                    <li key={index} className="flex items-start">
                        <svg className={`w-6 h-6 ${color.text} mr-3 mt-1 flex-shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <div className="w-full h-full flex items-center justify-center p-8 bg-slate-50 relative">
            <div className="grid grid-cols-2 gap-8 w-full max-w-6xl h-full">
                <InfoColumn
                    icon="🌊"
                    title="Mainstream"
                    subtitle="(지난 10개월간의 흐름)"
                    items={mainStreamItems}
                    color={{ border: 'border-indigo-500', text: 'text-indigo-500' }}
                />
                <InfoColumn
                    icon="🤔"
                    title="Questions"
                    subtitle="(우리가 혼란스러운 이유)"
                    items={questionItems}
                    color={{ border: 'border-teal-500', text: 'text-teal-500' }}
                />
            </div>
            <div className="absolute bottom-8 right-8 max-w-md animate-fade-in-up z-10">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border border-slate-200 relative overflow-hidden">
                    {/* Decorative gradient bar */}
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-indigo-500 to-teal-500"></div>

                    <div className="flex items-start gap-4">
                        <span className="text-3xl select-none">💡</span>
                        <div>
                            <p className="text-slate-600 font-medium text-lg leading-relaxed">
                                "여전히 <span className="text-indigo-600 font-bold">현재진행형</span>이라,<br />
                                딱 하나의 <span className="text-teal-600 font-bold">정답</span>은 없지만..."
                            </p>
                        </div>
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
