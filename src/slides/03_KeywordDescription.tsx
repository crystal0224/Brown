import React from 'react';
import type { SlideData } from '../../types';
import { KeywordSlideContent } from '../components/slides/KeywordSlideContent';

export const keywordDescriptionSlide: SlideData = {
    layout: 'content',
    kicker: '참고: 키워드 분류',
    title: '주요 키워드 설명',
    content: <KeywordSlideContent />
};
