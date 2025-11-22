import React from 'react';
import type { SlideData } from '../../types';
import { EvolutionCard } from '../components/ui/EvolutionCard';

export const sensoryEvolutionSlide: SlideData = {
    layout: 'content',
    kicker: '메가트렌드 ② 감각 확장',
    title: 'AI가 인간처럼 보고, 듣고, 말한다',
    content: (
        <div className="grid grid-cols-2 gap-8 h-full items-center">
            <EvolutionCard
                year="2024"
                title="Siloed Senses: Text-based Support"
                description="결론: 문제 해결을 위해 여러 번의 텍스트 기반 소통이 필요함"
                color={{ bg: 'bg-slate-500', border: 'border-slate-300', resultBg: 'bg-red-50', resultText: 'text-red-700', resultBorder: 'border-red-200' }}
            >
                <div className="space-y-3 text-sm">
                    <div className="flex items-center"><span className="font-bold w-24">USER 👤:</span><div className="p-2 bg-slate-200 rounded-md flex-1">블렌더가 작동 안돼요.</div></div>
                    <div className="flex items-center"><span className="font-bold w-24 text-right pr-2">🤖 AI:</span><div className="p-2 bg-white border rounded-md flex-1">모델명이 어떻게 되나요?</div></div>
                    <div className="flex items-center"><span className="font-bold w-24">USER 👤:</span><div className="p-2 bg-slate-200 rounded-md flex-1">모델명은 X-1000입니다.</div></div>
                    <div className="flex items-center"><span className="font-bold w-24 text-right pr-2">🤖 AI:</span><div className="p-2 bg-white border rounded-md flex-1">어떤 소리가 나나요?</div></div>
                </div>
            </EvolutionCard>
            <EvolutionCard
                year="2025"
                title="Fused Senses: Multimodal Support"
                description="결론: 하나의 사진으로 AI가 문제를 즉시 파악하고 해결책을 제시함"
                color={{ bg: 'bg-teal-600', border: 'border-teal-300', resultBg: 'bg-green-50', resultText: 'text-green-700', resultBorder: 'border-green-200' }}
                customBg="bg-teal-50"
            >
                <div className="space-y-3 text-sm">
                    <div className="flex items-start">
                        <span className="font-bold w-24">USER 👤:</span>
                        <div className="p-2 bg-teal-200 rounded-md flex-1">
                            <p className="font-semibold">(제품 에러코드 사진 전송)</p>
                            <p className="italic">"이게 무슨 뜻이죠?"</p>
                        </div>
                    </div>
                    <div className="flex items-start mt-3"><span className="font-bold w-24 text-right pr-2">🤖 AI:</span>
                        <div className="p-3 bg-white border rounded-md flex-1">
                            <p className="font-semibold mb-2">사진을 보니 E-05 에러코드가 맞네요.</p>
                            <p className="text-slate-600">내부 필터 막힘 문제입니다. 해결 방법을 영상으로 보내드렸습니다.</p>
                        </div>
                    </div>
                </div>
            </EvolutionCard>
        </div>
    )
};
