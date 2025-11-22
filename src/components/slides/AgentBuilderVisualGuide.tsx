import React from 'react';
import { DeepDiveLayout } from '../ui/DeepDiveLayout';

export const AgentBuilderVisualGuide = () => {
    const FeatureItem = ({ title, description }: { title: string, description: string }) => (
        <div>
            <h4 className="font-bold text-slate-800">{title}</h4>
            <p className="text-sm text-slate-600">{description}</p>
        </div>
    );

    const Node = ({ color, icon, label }: { color: any, icon: string, label: string }) => (
        <div className={`flex items-center p-2 rounded-md border-2 ${color.border} ${color.bg} shadow-sm w-full`}>
            <span className="text-lg mr-2">{icon}</span>
            <span className={`font-semibold text-sm ${color.text}`}>{label}</span>
        </div>
    );

    return (
        <DeepDiveLayout kicker="메가트렌드 ① 자율성 / 주요 도구" title="Agent Builder: 코딩 없이 만드는 AI 자동화">
            <div className="flex-grow grid grid-cols-12 gap-6 items-stretch">
                {/* Left Panel: Features */}
                <div className="col-span-5 bg-white rounded-lg p-6 shadow-md border flex flex-col space-y-4">
                    <h3 className="font-bold text-lg text-slate-700 mb-2 border-b pb-2">✨ 핵심 특징</h3>
                    <FeatureItem title="🎨 비주얼 캔버스" description="코드 없이 드래그앤드롭으로 AI의 작업 흐름을 시각적으로 설계합니다." />
                    <div>
                        <h4 className="font-bold text-slate-800">🔌 자동 연결</h4>
                        <p className="text-sm text-slate-600">Google Drive, Slack, Notion, GitHub, Database 등 주요 서비스를 클릭 한 번으로 인증하고 연결합니다.</p>
                    </div>
                    <FeatureItem title="🛡️ 안전 내장" description="개인정보 자동 필터링, 공격 방지 등 안전 기능이 기본 탑재되어 있습니다." />
                    <FeatureItem title="⚡ 즉시 테스트 & 배포" description="만든 워크플로우를 실시간으로 테스트하고, 버튼 하나로 즉시 배포합니다." />
                </div>
                {/* Right Panel: Build Process Visualization */}
                <div className="col-span-7 bg-slate-100 rounded-lg p-4 shadow-inner border flex flex-col">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="font-bold text-lg text-slate-700 text-center flex-grow">🖱️ "교육장소별 맞춤형 메일링" 워크플로우</h3>
                        <div className="flex space-x-2">
                            <button className="px-3 py-1 text-xs font-bold text-white bg-blue-500 rounded-md shadow hover:bg-blue-600">Preview</button>
                            <button className="px-3 py-1 text-xs font-bold text-white bg-green-500 rounded-md shadow hover:bg-green-600">Deploy</button>
                        </div>
                    </div>
                    <div className="flex-grow flex gap-2">
                        {/* Panel */}
                        <div className="w-1/4 bg-white rounded-md p-3 border space-y-2">
                            <h4 className="font-bold text-xs text-center mb-2">Node Palette</h4>
                            <Node color={{ border: 'border-green-300', bg: 'bg-green-50', text: 'text-green-800' }} icon="🟢" label="Trigger" />
                            <Node color={{ border: 'border-purple-300', bg: 'bg-purple-50', text: 'text-purple-800' }} icon="🟣" label="Get Data" />
                            <Node color={{ border: 'border-blue-300', bg: 'bg-blue-50', text: 'text-blue-800' }} icon="🔵" label="Loop" />
                            <Node color={{ border: 'border-yellow-300', bg: 'bg-yellow-50', text: 'text-yellow-800' }} icon="🟡" label="Generate" />
                            <Node color={{ border: 'border-sky-300', bg: 'bg-sky-50', text: 'text-sky-800' }} icon="🔷" label="Send Email" />
                        </div>
                        {/* Canvas */}
                        <div className="w-3/4 bg-white rounded-md border p-3 flex flex-col items-center justify-center relative bg-grid-slate-200">
                            <div className="space-y-1 flex flex-col items-center w-4/5">
                                <Node color={{ border: 'border-green-300', bg: 'bg-green-50', text: 'text-green-800' }} icon="🟢" label="교육 시작 시" />
                                <div className="text-slate-400 font-mono">↓</div>
                                <Node color={{ border: 'border-purple-300', bg: 'bg-purple-50', text: 'text-purple-800' }} icon="🟣" label="교육생 명단 가져오기" />
                                <div className="text-slate-400 font-mono">↓</div>
                                <div className="w-full p-2 border-2 border-blue-300 border-dashed rounded-md bg-blue-50">
                                    <Node color={{ border: 'border-blue-300', bg: 'bg-white', text: 'text-blue-800' }} icon="🔵" label="교육장소별 반복" />
                                    <div className="text-slate-400 font-mono text-center">↓</div>
                                    <Node color={{ border: 'border-yellow-300', bg: 'bg-white', text: 'text-yellow-800' }} icon="🟡" label="맞춤형 메일 내용 생성" />
                                    <div className="text-slate-400 font-mono text-center">↓</div>
                                    <Node color={{ border: 'border-sky-300', bg: 'bg-white', text: 'text-sky-800' }} icon="🔷" label="참가자에게 메일 발송" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
                .bg-grid-slate-200 {
                    background-image: linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px);
                    background-size: 20px 20px;
                }
            `}</style>
        </DeepDiveLayout>
    );
};
