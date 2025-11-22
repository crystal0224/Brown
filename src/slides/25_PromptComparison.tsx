import React from 'react';
import type { SlideData } from '../../types';
import { PromptComparisonSlide } from '../components/slides/PromptComparisonSlide';

export const promptComparisonSlide: SlideData = {
    layout: 'custom',
    content: <PromptComparisonSlide />
};
