import React from 'react';
import type { SlideData } from '../../types';
import { MegatrendFeatureCard } from '../components/ui/MegatrendFeatureCard';

export const autonomyDefinitionSlide: SlideData = {
    layout: 'content',
    kicker: '메가트렌드 ① 자율성',
    title: '자율성이란?: AI가 스스로 생각하고 일하는 능력',
    content: (
        <div className="h-full flex flex-col justify-center space-y-4">
            <div className="flex gap-6 p-4 items-center">
                <div className="w-3/5">
                    <p className="text-lg font-semibold text-slate-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: "AI가 최종 목표(What)만으로 스스로 계획(How)을 세우고,<br/>필요한 도구를 사용하여 과업을 완수하는 능력. 단순 '수행'을 넘어 '실행'으로." }}></p>
                </div>
                <div className="w-2/5 border-l-4 border-blue-200 pl-6">
                    <h4 className="font-bold text-slate-800 mb-2 text-sm">3대 추론 모델</h4>
                    <ul className="text-xs space-y-1 text-slate-600 mb-2">
                        <li><b className="font-semibold text-slate-800">OpenAI GPT-5/4o:</b> 범용 추론</li>
                        <li><b className="font-semibold text-slate-800">Claude 4:</b> 코딩 & 기업용</li>
                        <li><b className="font-semibold text-slate-800">Gemini 2.5 Pro:</b> 대규모 문서 분석</li>
                    </ul>
                    <h4 className="font-bold text-slate-800 mb-2 text-sm">기타 주요 모델</h4>
                    <ul className="text-xs space-y-1 text-slate-600">
                        <li><b className="font-semibold text-slate-800">DeepSeek, Grok 등</b></li>
                    </ul>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
                <MegatrendFeatureCard icon="🧠" title="추론 및 계획"><p>복잡한 목표를 작은 단계로 분해, 여러 차례의 상호작용을 통해 최적의 실행 경로 설계.</p></MegatrendFeatureCard>
                <MegatrendFeatureCard icon="🛠️" title="도구 사용"><p>목표 달성에 필요한 웹 검색, 코드 실행 등 외부 도구의 자율적 활용.</p></MegatrendFeatureCard>
                <MegatrendFeatureCard icon="🔄" title="자기 수정"><p>실행 중 오류 인지 및 계획 수정, 과업 완수.</p></MegatrendFeatureCard>
                <MegatrendFeatureCard icon="🤝" title="멀티에이전트 협업"><p>다양한 역할을 맡은 여러 AI 에이전트가 팀을 이뤄 복잡한 프로젝트 수행.</p></MegatrendFeatureCard>
            </div>
            <div className="text-center p-4 bg-blue-50 border-2 border-blue-200 rounded-lg">
                <div className="grid grid-cols-3 gap-x-6 gap-y-4 text-sm">
                    <div className="text-left p-3 bg-white rounded-md border">
                        <p className="font-bold">Agentic AI & LRMs</p>
                        <p className="text-slate-600 text-xs">스스로 계획하고 추론하는 AI 핵심 개념</p>
                    </div>
                    <div className="text-left p-3 bg-white rounded-md border">
                        <p className="font-bold">Agent Builder & Opal</p>
                        <p className="text-slate-600 text-xs">코딩 없이 에이전트를 만드는 비주얼 빌더</p>
                    </div>
                    <div className="text-left p-3 bg-white rounded-md border">
                        <p className="font-bold">AutoGen, CrewAI, LangGraph</p>
                        <p className="text-slate-600 text-xs">여러 AI가 협업하는 멀티-에이전트 개발 프레임워크</p>
                    </div>
                </div>
            </div>
        </div>
    )
};
