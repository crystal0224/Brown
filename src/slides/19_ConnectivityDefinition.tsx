import React from 'react';
import type { SlideData } from '../../types';
import { MegatrendFeatureCard } from '../components/ui/MegatrendFeatureCard';

export const connectivityDefinitionSlide: SlideData = {
    layout: 'content',
    kicker: '메가트렌드 ③ 연결성',
    title: '연결성이란?: 세상의 모든 데이터와 실시간으로 소통하는 능력',
    content: (
        <div className="h-full flex flex-col justify-center space-y-6">
            <p className="text-center text-xl font-semibold text-slate-700 bg-slate-100 p-4 rounded-lg border">AI가 특정 데이터베이스나 서비스에 갇혀있지 않고, 표준화된 프로토콜을 통해<br />세상의 모든 정보와 실시간으로 안전하게 연결되는 능력</p>
            <div className="grid grid-cols-3 gap-6">
                <MegatrendFeatureCard icon="🔌" title="표준 프로토콜"><p>마치 USB-C처럼, 하나의 표준(MCP)으로 모든 데이터 소스와 AI를 손쉽게 연결합니다.</p></MegatrendFeatureCard>
                <MegatrendFeatureCard icon="🔗" title="실시간 접근"><p>최신 외부 지식을 실시간으로 참조하여 항상 정확하고 최신의 정보를 제공합니다.</p></MegatrendFeatureCard>
                <MegatrendFeatureCard icon="🧱" title="데이터 사일로 해소"><p>서로 다른 앱에 흩어진 데이터를 하나로 연결하여 종합적인 분석과 자동화를 실현합니다.</p></MegatrendFeatureCard>
            </div>
            <div className="text-center p-4 bg-purple-50 border-2 border-purple-200 rounded-lg">
                <div className="grid grid-cols-3 gap-x-6 gap-y-4 text-sm">
                    <div className="text-left p-3 bg-white rounded-md border">
                        <p className="font-bold">Core Protocol & Tech</p>
                        <p className="text-slate-600 text-xs">MCP (표준 규약), RAG (외부 정보 참조)</p>
                    </div>
                    <div className="text-left p-3 bg-white rounded-md border">
                        <p className="font-bold">Connected Services</p>
                        <p className="text-slate-600 text-xs">Windows Copilot (PC), Bard Extensions (구글)</p>
                    </div>
                    <div className="text-left p-3 bg-white rounded-md border">
                        <p className="font-bold">Data Infrastructure</p>
                        <p className="text-slate-600 text-xs">Vector DB ('의미' 기반 검색 데이터베이스)</p>
                    </div>
                </div>
            </div>
        </div>
    )
};
