import React from 'react';
import type { SlideData } from '../../types';
import { DeepDiveLayout } from '../components/ui/DeepDiveLayout';

const VibeCodingContent = () => {
    const VibeCodingExample = ({ icon, title, initialRequest, refinementRequest, initialResult, finalResult }: any) => (
        <div className="bg-white rounded-lg p-4 border shadow-md flex-1 flex flex-col">
            <h4 className="font-bold text-lg text-center mb-3 text-indigo-700">{icon} {title}</h4>
            <div className="space-y-3 text-xs flex-grow flex flex-col">
                <div className="p-2 bg-slate-100 rounded">
                    <p className="font-semibold">1. 최초 요청 (Initial Request)</p>
                    <p className="text-slate-600 italic">"{initialRequest}"</p>
                </div>
                <div className="p-2 bg-green-50 rounded border border-green-200 text-center">
                    <p className="font-semibold text-green-800">{initialResult}</p>
                </div>
                <div className="p-2 bg-slate-100 rounded">
                    <p className="font-semibold">2. 수정 요청 (Refinement)</p>
                    <p className="text-slate-600 italic">"{refinementRequest}"</p>
                </div>
                <div className="p-2 bg-green-50 rounded border border-green-200 text-center flex-grow flex items-center justify-center">
                    {typeof finalResult === 'string'
                        ? <p className="font-semibold text-green-800">{finalResult}</p>
                        : finalResult
                    }
                </div>
            </div>
        </div>
    );

    const PieChart = () => (
        <div className="w-full flex flex-col items-center justify-center p-2">
            <div className="w-16 h-16">
                <svg viewBox="0 0 32 32">
                    <circle r="16" cx="16" cy="16" fill="#fbbf24" />
                    <circle r="16" cx="16" cy="16" fill="transparent" stroke="#3b82f6" strokeWidth="32" strokeDasharray="50 100" />
                    <circle r="16" cx="16" cy="16" fill="transparent" stroke="#4ade80" strokeWidth="32" strokeDasharray="30 100" strokeDashoffset="-50" />
                </svg>
            </div>
            <p className="text-xs font-semibold text-slate-700 mt-2">Sales by Channel</p>
        </div>
    );

    const WorkflowDiagram = () => (
        <div className="flex flex-col items-center space-y-1 text-xs font-semibold text-slate-700 p-2">
            <div className="px-3 py-1 bg-white border-2 border-slate-300 rounded-md shadow-sm">휴가 신청</div>
            <div className="text-slate-400 text-base">↓</div>
            <div className="px-3 py-1 bg-white border-2 border-blue-400 rounded-md shadow-sm text-blue-800">팀장 승인</div>
            <div className="text-slate-400 text-base">↓</div>
            <div className="px-3 py-1 bg-green-200 border-2 border-green-400 rounded-md shadow-sm text-green-800">완료</div>
        </div>
    );

    const FilterApp = () => (
        <div className="w-full max-w-[200px] mx-auto p-3 bg-white border-2 border-slate-200 rounded-lg shadow-sm">
            <label htmlFor="region-filter" className="block text-xs font-bold text-slate-600 mb-1">지역별 필터</label>
            <select id="region-filter" className="w-full p-1.5 border border-slate-300 rounded-md text-xs focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                <option>서울</option>
                <option>부산</option>
                <option>인천</option>
            </select>
            <div className="mt-2 w-full h-20 bg-slate-100 rounded-md border flex items-center justify-center">
                <p className="text-slate-400 text-sm">[데이터 표시 영역]</p>
            </div>
        </div>
    );

    return (
        <DeepDiveLayout kicker="AI 민주화" title="Vibe Coding: 아이디어를 현실로 만드는 과정">
            <div className="flex-grow flex flex-col">
                <p className="text-center font-semibold text-lg mb-6 bg-white p-4 rounded-lg border shadow-sm">단순히 결과물을 생성하는 것을 넘어, 사용자와 대화하며 반복적으로 수정하고 개선하는 것이 핵심입니다.</p>
                <div className="flex-grow flex gap-6">
                    <VibeCodingExample
                        icon="📊"
                        title="마케팅 대시보드"
                        initialRequest="지난 달 데이터를 보여주는 대시보드 만들어줘."
                        refinementRequest="차트를 막대그래프에서 파이차트로 바꿔줘."
                        initialResult="기본 대시보드 생성 (막대그래프)"
                        finalResult={<PieChart />}
                    />
                    <VibeCodingExample
                        icon="📋"
                        title="내부 HR 도구"
                        initialRequest="휴가 신청 시스템 만들어줘."
                        refinementRequest="팀장 승인 단계를 추가해줘."
                        initialResult="기본 휴가 신청 폼 생성"
                        finalResult={<WorkflowDiagram />}
                    />
                    <VibeCodingExample
                        icon="📈"
                        title="데이터 분석 앱"
                        initialRequest="이 CSV 파일로 분석 앱 만들어줘."
                        refinementRequest="지역별로 필터링하는 기능 넣어줘."
                        initialResult="데이터 시각화 앱 생성"
                        finalResult={<FilterApp />}
                    />
                </div>
            </div>
        </DeepDiveLayout>
    );
};

export const vibeCodingSlide: SlideData = {
    layout: 'custom',
    content: <VibeCodingContent />
};
