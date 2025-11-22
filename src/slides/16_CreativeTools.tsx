import React from 'react';
import type { SlideData } from '../../types';
import { InfoCard } from '../components/ui/InfoCard';

export const creativeToolsSlide: SlideData = {
    layout: 'content',
    kicker: '메가트렌드 ② 감각 확장',
    title: '주요 크리에이티브 도구',
    content: (
        <div className="grid grid-cols-2 grid-rows-2 gap-8 h-full">
            <InfoCard title="🎨 이미지 생성/편집" content="• <b>Nano Banana 🍌:</b> 압도적인 성능의 이미지 편집<br/>• <b>Midjourney v7:</b> 사실적인 이미지와 영상 생성 통합<br/>• <b>DALL-E 3:</b> ChatGPT 내에서 쉬운 이미지 생성" borderColor="border-t-teal-500" />
            <InfoCard title="🎬 영상 생성" content="• <b>Sora 2 (OpenAI):</b> 헐리우드급 퀄리티의 영상 생성<br/>• <b>Veo 3 (Google):</b> 4K 고화질 영상 및 편집 기능<br/>• <b>Kling, Luma Dream Machine:</b> 높은 접근성의 영상 도구" borderColor="border-t-teal-500" />
            <InfoCard title="🎵 음악/음성 생성" content="• <b>Suno v4, Udio:</b> 텍스트만으로 전문가 수준의 음악 작곡<br/>• <b>ElevenLabs:</b> 실제 사람과 구분하기 힘든 음성 복제 및 생성" borderColor="border-t-teal-500" />
            <InfoCard title="🌐 통합 플랫폼" content="• <b>GPT-4o:</b> 실시간 음성 대화, 화면 공유를 통한 상호작용<br/>• <b>Gemini 2.5 Pro:</b> 방대한 자료(책 수십 권)를 한번에 분석" borderColor="border-t-teal-500" />
        </div>
    )
};
