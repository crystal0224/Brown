import React from 'react';

export type SlideLayout = 'title' | 'content' | 'custom';

export interface SlideData {
  layout: SlideLayout;
  kicker?: string;
  title?: string;
  spotlightTitle?: string;
  content?: React.ReactNode;
}