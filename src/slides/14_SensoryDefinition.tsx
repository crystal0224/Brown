import React from 'react';
import type { SlideData } from '../../types';
import { MegatrendFeatureCard } from '../components/ui/MegatrendFeatureCard';

export const sensoryDefinitionSlide: SlideData = {
    layout: 'content',
    kicker: '메가트렌드 ② 감각 확장',
    title: '감각 확장이란?: 인간처럼 보고, 듣고, 말하는 능력',
    content: (
        <div className="h-full flex flex-col justify-center space-y-6">
            <p className="text-center text-xl font-semibold text-slate-700 bg-slate-100 p-4 rounded-lg border">텍스트뿐만 아니라 이미지, 소리, 영상 등 다양한 형태의 정보를 인간처럼 동시에 이해하고,<br />그에 맞는 결과물을 생성하는 '멀티모달(Multimodal)' 능력</p>
            <div className="grid grid-cols-3 gap-6">
                <MegatrendFeatureCard icon="👁️" title="시각 이해 (Vision)"><p>이미지와 영상 속 객체, 상황, 감정까지 파악하고 설명합니다.</p></MegatrendFeatureCard>
                <MegatrendFeatureCard icon="🎧" title="청각 이해 (Audio)"><p>음성을 실시간으로 인식하고, 억양이나 감정까지 이해하며 대화합니다.</p></MegatrendFeatureCard>
                <MegatrendFeatureCard icon="🎨" title="복합 생성 (Generation)"><p>텍스트 설명만으로 매우 사실적인 이미지, 영상, 음악을 생성합니다.</p></MegatrendFeatureCard>
            </div>
            <div className="text-center p-4 bg-teal-50 border-2 border-teal-200 rounded-lg">
                <div className="grid grid-cols-3 gap-x-6 gap-y-4 text-sm">
                    <div className="text-left p-3 bg-white rounded-md border">
                        <p className="font-bold">Omni-Modal Models</p>
                        <p className="text-slate-600 text-xs">GPT-4o, Gemini 등 보고 듣고 말하는 통합 AI</p>
                    </div>
                    <div className="text-left p-3 bg-white rounded-md border">
                        <p className="font-bold">Generative Tools</p>
                        <p className="text-slate-600 text-xs">Sora 2 (영상), Nano Banana (이미지 편집) 등</p>
                    </div>
                    <div className="text-left p-3 bg-white rounded-md border">
                        <p className="font-bold">Open Source Multimodality</p>
                        <p className="text-slate-600 text-xs">Llama 3.2 등 오픈소스 진영의 멀티모달 모델</p>
                    </div>
                </div>
            </div>
        </div>
    )
};
