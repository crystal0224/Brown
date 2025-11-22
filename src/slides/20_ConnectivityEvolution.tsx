import React from 'react';
import type { SlideData } from '../../types';
import { EvolutionCard } from '../components/ui/EvolutionCard';

export const connectivityEvolutionSlide: SlideData = {
    layout: 'content',
    kicker: '메가트렌드 ③ 연결성',
    title: 'AI가 세상의 모든 데이터와 연결되다',
    content: (
        <div className="grid grid-cols-2 gap-8 h-full items-center">
            <EvolutionCard
                year="2024"
                title="Custom APIs: The Tangled Web"
                description="결론: 데이터 소스를 연결할 때마다 많은 시간과 비용이 드는 개발 작업이 필요"
                color={{ bg: 'bg-slate-500', border: 'border-slate-300', resultBg: 'bg-red-50', resultText: 'text-red-700', resultBorder: 'border-red-200' }}
            >
                <div className="flex flex-col items-center justify-center h-full space-y-4">
                    <div className="font-bold text-lg">🤖 AI</div>
                    <div className="text-red-500 font-mono text-sm tracking-tighter text-center">••• 복잡한 커스텀 API •••<br />••• 느리고 비싼 개발 •••</div>
                    <div className="flex justify-around w-full">
                        <div className="p-2 text-center border rounded-md bg-white">📄<br />Google Drive</div>
                        <div className="p-2 text-center border rounded-md bg-white">💬<br />Slack</div>
                        <div className="p-2 text-center border rounded-md bg-white">📚<br />Notion</div>
                    </div>
                </div>
            </EvolutionCard>
            <EvolutionCard
                year="2025"
                title="Standard Protocol: The Universal Plug"
                description="결론: 'AI용 USB-C'처럼, 하나의 표준으로 모든 서비스에 즉시 연결 가능"
                color={{ bg: 'bg-purple-600', border: 'border-purple-300', resultBg: 'bg-green-50', resultText: 'text-green-700', resultBorder: 'border-green-200' }}
                customBg="bg-purple-50"
            >
                <div className="flex flex-col items-center justify-center h-full space-y-3">
                    <div className="font-bold text-lg">🤖 AI</div>
                    <div className="text-2xl">↕️</div>
                    <div className="p-3 bg-purple-100 border-2 border-purple-300 rounded-lg text-purple-800 font-bold">🔌 MCP (Universal Plug)</div>
                    <div className="text-2xl">↕️</div>
                    <div className="grid grid-cols-3 gap-2 w-full text-center">
                        <div className="p-2 border rounded-md bg-white text-sm">Google Drive</div>
                        <div className="p-2 border rounded-md bg-white text-sm">Slack</div>
                        <div className="p-2 border rounded-md bg-white text-sm">Notion</div>
                        <div className="p-2 border rounded-md bg-white text-sm">GitHub</div>
                        <div className="p-2 border rounded-md bg-white text-sm">Salesforce</div>
                        <div className="p-2 border rounded-md bg-white text-sm">...etc</div>
                    </div>
                </div>
            </EvolutionCard>
        </div>
    )
};
