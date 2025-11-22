import React from 'react';
import type { SlideData } from '../../types';

const PrinciplesContent = () => {
    const PrincipleCard = ({ icon, title, content }: { icon: string, title: string, content: string }) => (
        <div className="bg-white rounded-xl shadow-lg p-8 text-center flex flex-col items-center border border-slate-200/80 transition-transform hover:scale-105 hover:shadow-2xl">
            <div className="text-6xl mb-6 text-indigo-500">{icon}</div>
            <div className="flex flex-col flex-grow justify-start">
                <h3 className="text-2xl font-black text-slate-800 mb-4">{title}</h3>
                <p className="text-lg text-slate-600 font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: content }}></p>
            </div>
        </div>
    );
    return (
        <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-slate-50">
            <div className="w-full max-w-6xl grid grid-cols-3 gap-8">
                <PrincipleCard
                    icon="🎯"
                    title="Goal First (목표 우선)"
                    content="'만들었으니까 써볼까?'가 아니라<br/><b>'이 목표를 위해 만들어보자'</b>는<br/>관점이 중요합니다."
                />
                <PrincipleCard
                    icon="🧠"
                    title="고지식한 천재 팀원"
                    content="AI는 명확한 지시와 맥락을 줘야 최고의 성능을 냅니다.<br/><b>'막 시키면 막일하고,<br/>제대로 시키면 제대로 일합니다.'</b>"
                />
                <PrincipleCard
                    icon="🔍"
                    title="비판적 수용"
                    content="AI의 결과물은 항상 검증이 필요한 <br/><b>초안으로 봐야 합니다.<br/><b>'많이 발전했지만, 그럴듯한 거짓일 수 있음을 기억하세요.'</b>"
                />
            </div>
        </div>
    );
};

export const principlesSlide: SlideData = {
    layout: 'content',
    kicker: 'AI 활용 원칙',
    title: 'AI 시대를 맞이하는 3가지 원칙',
    content: <PrinciplesContent />
};
