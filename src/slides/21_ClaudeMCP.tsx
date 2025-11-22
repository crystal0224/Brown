import React from 'react';
import type { SlideData } from '../../types';
import { DeepDiveLayout } from '../components/ui/DeepDiveLayout';

const ClaudeMCPContent = () => {
    const mcpData = [
        { name: 'Desktop Commander', description: '로컬 PC의 파일/폴더를 생성, 수정, 삭제하고 명령어를 실행합니다.' },
        { name: 'Sequential Thinking', description: '복잡한 문제를 단계별로 나누어 순차적으로 해결하도록 유도합니다.' },
        { name: 'GitHub MCP', description: 'GitHub 리포지토리를 읽고, 코드를 수정하며, PR(Pull Request)까지 생성합니다.' },
        { name: 'Memory Bank MCP', description: '대화의 핵심 정보를 파일로 저장하여, 이전 대화 내용을 기억하게 만듭니다.' },
        { name: 'Playwright MCP', description: '웹 브라우저를 직접 제어하여 웹사이트를 탐색하고 정보를 수집합니다.' },
        { name: 'DuckDuckGo MCP', description: '실시간 인터넷 검색을 통해 최신 정보에 기반한 답변을 생성합니다.' }
    ];

    return (
        <DeepDiveLayout kicker="메가트렌드 ③ 연결성 / 주요 기술" title="Claude MCP: 나만의 AI 기능 확장하기">
            <div className="grid grid-cols-2 gap-8 h-full">
                {/* Left Column: MCP List */}
                <div className="flex flex-col">
                    <h3 className="font-bold text-xl text-slate-700 mb-4">대표적인 MCP 모듈</h3>
                    <div className="space-y-3 overflow-y-auto pr-2">
                        {mcpData.map(item => (
                            <div key={item.name} className="bg-white border rounded-lg p-3 hover:shadow-md transition-shadow">
                                <h4 className="font-bold text-slate-800 text-sm">{item.name}</h4>
                                <p className="text-xs text-slate-600 mt-1">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Desktop Commander Viz */}
                <div className="flex flex-col bg-slate-100 rounded-lg p-6 shadow-inner border">
                    <h3 className="font-bold text-xl text-slate-700 mb-4 text-center">✨ Desktop Commander 활성화 예시</h3>
                    <div className="bg-slate-800 rounded-lg p-4 text-white font-mono text-xs flex-grow shadow-lg">
                        <div className="flex items-start mb-4">
                            <span className="text-green-400 mr-2 shrink-0">👤 User:</span>
                            <p className="flex-grow">"내 PC에 'Q4-Report' 폴더 만들고, 그 안에 '# Q4 보고서 초안'이라고 적힌 'draft.md' 파일 생성해줘."</p>
                        </div>
                        <div className="flex items-start">
                            <span className="text-cyan-400 mr-2 shrink-0">🤖 Claude:</span>
                            <div className="flex-grow">
                                <p className="mb-2">네, 요청하신 작업을 로컬 PC에서 실행하겠습니다.</p>
                                <div className="bg-black/50 p-3 rounded-md">
                                    <p><span className="text-green-400">$</span> mkdir Q4-Report</p>
                                    <p><span className="text-green-400">$</span> echo "# Q4 보고서 초안" &gt; Q4-Report/draft.md</p>
                                    <p className="mt-2 text-yellow-300">작업이 완료되었습니다. 'Q4-Report' 폴더와 'draft.md' 파일이 생성되었습니다.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DeepDiveLayout>
    );
};

export const claudeMCPSlide: SlideData = {
    layout: 'custom',
    content: <ClaudeMCPContent />
};
