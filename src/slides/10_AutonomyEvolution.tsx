import React from 'react';
import type { SlideData } from '../../types';
import { EvolutionCard } from '../components/ui/EvolutionCard';

export const autonomyEvolutionSlide: SlideData = {
    layout: 'content',
    kicker: '메가트렌드 ① 자율성',
    title: 'AI가 스스로 일하기 시작했다',
    content: (
        <div className="grid grid-cols-2 gap-8 h-full items-center">
            <EvolutionCard
                year="2024"
                title="AI as a Tool: The Micromanager"
                description="결론: 사용자가 전 과정을 직접 계획하고 단계별로 지시해야 함"
                color={{ bg: 'bg-slate-500', border: 'border-slate-300', resultBg: 'bg-red-50', resultText: 'text-red-700', resultBorder: 'border-red-200' }}
            >
                <div className="space-y-3 text-sm">
                    <div className="flex items-center"><span className="font-bold w-24">USER 👤:</span><div className="p-2 bg-slate-200 rounded-md flex-1">캠페인 아이디어 줘.</div></div>
                    <div className="flex items-center"><span className="font-bold w-24 text-right pr-2">🤖 AI:</span><div className="p-2 bg-white border rounded-md flex-1">아이디어 목록...</div></div>
                    <div className="flex items-center"><span className="font-bold w-24">USER 👤:</span><div className="p-2 bg-slate-200 rounded-md flex-1">블로그 글 써줘.</div></div>
                    <div className="flex items-center"><span className="font-bold w-24 text-right pr-2">🤖 AI:</span><div className="p-2 bg-white border rounded-md flex-1">블로그 초안...</div></div>
                    <div className="flex items-center"><span className="font-bold w-24">USER 👤:</span><div className="p-2 bg-slate-200 rounded-md flex-1">트윗 3개 만들어줘.</div></div>
                    <div className="flex items-center"><span className="font-bold w-24 text-right pr-2">🤖 AI:</span><div className="p-2 bg-white border rounded-md flex-1">트윗 3개...</div></div>
                </div>
            </EvolutionCard>
            <EvolutionCard
                year="2025"
                title="AI as an Agent: The Self-Starter"
                description="결론: AI가 계획을 제안하고, 사용자의 승인 하에 자율적으로 실행함"
                color={{ bg: 'bg-blue-600', border: 'border-blue-300', resultBg: 'bg-green-50', resultText: 'text-green-700', resultBorder: 'border-green-200' }}
                customBg="bg-blue-50"
            >
                <div className="space-y-3 text-sm">
                    <div className="flex items-center"><span className="font-bold w-24">USER 👤:</span><div className="p-2 bg-blue-200 rounded-md flex-1 font-semibold">신제품 마케팅 캠페인 실행해줘.</div></div>
                    <div className="flex items-start mt-3"><span className="font-bold w-24 text-right pr-2">🤖 AI:</span>
                        <div className="p-3 bg-white border rounded-md flex-1">
                            <p className="font-semibold mb-2">네, 목표를 확인했습니다. 다음과 같이 계획을 제안합니다. 진행할까요?</p>
                            <ul className="list-disc list-inside text-slate-600 space-y-1">
                                <li>시장 트렌드 분석 (웹 검색)</li>
                                <li>블로그, 트윗, 이메일 초안 작성</li>
                                <li>최종안 승인 요청</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex items-center"><span className="font-bold w-24">USER 👤:</span><div className="p-2 bg-slate-200 rounded-md flex-1">응, 계획대로 진행해.</div></div>
                    <div className="flex items-start mt-3"><span className="font-bold w-24 text-right pr-2">🤖 AI:</span>
                        <div className="p-2 bg-white border rounded-md flex-1 text-green-600 font-semibold animate-pulse">
                            [실행 중] 시장 트렌드 분석 완료...
                        </div>
                    </div>
                </div>
            </EvolutionCard>
        </div>
    )
};
