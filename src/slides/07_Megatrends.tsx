import React from 'react';
import type { SlideData } from '../../types';

const MegatrendsContent = () => {
    const TrendColumn = ({ title, subtitle, color, fromText, fromDesc, toText, toDesc }: any) => (
        <div className="flex flex-col h-full bg-white rounded-xl shadow-xl overflow-hidden border-2 border-slate-200">
            <div className={`p-5 text-center ${color.bgStrong}`}>
                <h3 className="text-3xl font-black text-white">{title}</h3>
                <p className="text-md font-bold text-white/70 tracking-widest">{subtitle}</p>
            </div>
            <div className="flex-grow flex flex-col justify-center items-center p-6 space-y-4">
                <div className="w-full p-4 rounded-lg bg-slate-100 border border-slate-200 text-center flex-grow flex flex-col justify-center">
                    <p className="text-slate-500"><b>{fromText}</b></p>
                    <p className="text-sm text-slate-600 mt-2">{fromDesc}</p>
                </div>
                <svg className="w-8 h-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 17l-4 4m0 0l-4-4m4 4V3" />
                </svg>
                <div className={`w-full p-4 rounded-lg text-center ${color.bgWeak} border-2 ${color.border} flex-grow flex flex-col justify-center`}>
                    <p className={`font-bold ${color.text}`}>{toText}</p>
                    <p className={`text-sm ${color.text} opacity-90 mt-2`}>{toDesc}</p>
                </div>
            </div>
        </div>
    );

    return (
        <div className="w-full h-full flex items-center justify-center p-8 bg-slate-50">
            <div className="grid grid-cols-3 gap-8 w-full h-full">
                <TrendColumn
                    title="① 자율성"
                    subtitle="AUTONOMY"
                    color={{ bgStrong: 'bg-blue-600', bgWeak: 'bg-blue-50', text: 'text-blue-800', border: 'border-blue-300' }}
                    fromText='도구 (Tool)'
                    fromDesc="사용자가 모든 하위 작업을 명시적으로, 순차적으로 지시"
                    toText='에이전트 (Agent)'
                    toDesc="사용자는 최종 목표만 제시, AI가 계획을 수립하고 자율적으로 실행"
                />
                <TrendColumn
                    title="② 감각 확장"
                    subtitle="SENSORY EXPANSION"
                    color={{ bgStrong: 'bg-teal-600', bgWeak: 'bg-teal-50', text: 'text-teal-800', border: 'border-teal-300' }}
                    fromText="단일 감각 모델"
                    fromDesc="AI가 텍스트 기반의 정보만 처리"
                    toText="다중 감각 모델"
                    toDesc="AI가 텍스트, 이미지, 음성 등 여러 정보를 동시에 통합적으로 이해"
                />
                <TrendColumn
                    title="③ 연결성"
                    subtitle="CONNECTIVITY"
                    color={{ bgStrong: 'bg-purple-600', bgWeak: 'bg-purple-50', text: 'text-purple-800', border: 'border-purple-300' }}
                    fromText="개별 앱 통합"
                    fromDesc="각 데이터 소스마다 별도의 맞춤형 API 연동 개발이 필요"
                    toText="표준 프로토콜"
                    toDesc="단일 표준 프로토콜(MCP)을 통해 모든 데이터 소스와 즉시 연결"
                />
            </div>
        </div>
    );
};

export const megatrendsSlide: SlideData = {
    layout: 'content',
    kicker: '3대 메가트렌드',
    title: '한눈에 보는 패러다임 변화: 2024 vs 2025',
    content: <MegatrendsContent />
};
