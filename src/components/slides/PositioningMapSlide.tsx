import React from 'react';
import { DeepDiveLayout } from '../ui/DeepDiveLayout';

export const PositioningMapSlide = () => {
    const AutomationViz = () => (
        <div className="flex flex-col items-center justify-center space-y-1 p-1">
            <div className="px-2 py-1 bg-white rounded-md border-2 border-blue-300 shadow-sm font-semibold text-xs">⚡ 트리거</div>
            <div className="text-lg text-blue-400">⬇️</div>
            <div className="px-2 py-1 bg-white rounded-md border-2 border-blue-300 shadow-sm font-semibold text-xs">🚀 액션</div>
            <p className="text-[10px] text-blue-700 mt-1 font-semibold bg-blue-100 p-1 rounded-md w-full text-center">"자동 버튼 매크로"</p>
        </div>
    );

    const AgentViz = () => (
        <div className="flex flex-col items-center justify-center space-y-1 p-1">
            <div className="px-2 py-1 bg-white rounded-md border-2 border-purple-300 shadow-sm font-semibold text-xs">🎯 목표</div>
            <div className="text-lg text-purple-400">⬇️</div>
            <div className="p-1 bg-purple-100 rounded-lg border-2 border-purple-300 shadow-md font-semibold text-xs">
                🤖 AI 모델
                <p className="text-[9px] font-normal text-purple-600">(추론/계획)</p>
            </div>
            <div className="text-lg text-purple-400">⬇️</div>
            <div className="flex gap-1">
                <div className="p-1 bg-white rounded-md border text-[9px]">🛠️</div>
                <div className="p-1 bg-white rounded-md border text-[9px] border-purple-400 ring-1 ring-purple-300">🛠️</div>
                <div className="p-1 bg-white rounded-md border text-[9px]">🛠️</div>
            </div>
            <p className="text-[10px] text-purple-700 mt-1 font-semibold bg-purple-100 p-1 rounded-md w-full text-center">"스스로 생각하는 조수"</p>
        </div>
    );

    const tableData = [
        { category: "🎯 핵심 역할", automation: "앱 간 연결로 규칙적인 자동화 수행", agent: "AI가 판단하며 지능형 자동화 수행" },
        { category: "⚙️ 작동 원리", automation: "이 일이 일어나면 → 저 일을 해라 (트리거 + 액션)", agent: "상황을 이해하고 → 가장 적절한 행동을 선택 (모델 + 추론 + 도구 호출)" },
        { category: "🌐 통합 범위", automation: "앱-to-앱 데이터 이동 중심", agent: "AI + 도구 + UI + 워크플로우 통합" },
        { category: "💡 지능 수준", automation: "규칙 기반 (정해진 절차만 수행)", agent: "판단 기반 (목표 달성을 위해 스스로 선택)" },
        { category: "💼 활용 예시", automation: "CRM → Slack 알림 / 메일 발송", agent: "고객 응대 봇 / 리포트 작성 AI" },
        { category: "⚡ 운영 성격", automation: "가볍고 빠름 – 업무 보조용", agent: "무겁지만 강력 – 프로덕션 레벨 에이전트" },
        { category: "🤔 비유", automation: <AutomationViz />, agent: <AgentViz /> },
    ];

    return (
        <DeepDiveLayout kicker="실전 도구 비교" title="자동화 플랫폼 vs AI 에이전트 빌더">
            <div className="flex-grow bg-white rounded-lg p-4 shadow-md border flex flex-col">
                <div className="overflow-auto flex-grow">
                    <table className="w-full text-sm h-full">
                        <thead>
                            <tr className="border-b-2 border-slate-200 sticky top-0 bg-white">
                                <th className="text-left font-bold text-slate-600 p-2 w-[20%]">구분</th>
                                <th className="text-left font-bold text-blue-600 bg-blue-50 p-2 rounded-t-md w-[40%]">자동화 플랫폼</th>
                                <th className="text-left font-bold text-purple-600 bg-purple-50 p-2 rounded-t-md w-[40%]">AI 에이전트 빌더</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((row, index) => (
                                <tr key={index} className="border-b border-slate-100 last:border-b-0">
                                    <td className="p-2 font-semibold text-slate-700 align-top">{row.category}</td>
                                    <td className="p-2 text-slate-600 align-top bg-blue-50/50">{row.automation}</td>
                                    <td className="p-2 text-slate-600 align-top bg-purple-50/50">{row.agent}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </DeepDiveLayout>
    );
};
