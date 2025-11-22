import React from 'react';
import type { SlideData } from '../types';

interface SlideProps {
    slideData: SlideData;
    slideNumber: number;
    totalSlides: number;
}

const getTrendInfo = (kicker: string) => {
    if (kicker.includes('자율성')) return { num: '①', color: 'blue' };
    if (kicker.includes('감각 확장')) return { num: '②', color: 'teal' };
    if (kicker.includes('연결성')) return { num: '③', color: 'purple' };
    return null;
}

const TitleLayout: React.FC<{ title: string; content?: React.ReactNode }> = ({ title, content }) => (
  <div className="w-full h-full flex flex-col items-center justify-center text-center p-16 bg-white relative overflow-hidden">
     {content}
  </div>
);

const ContentLayout: React.FC<{ slideData: SlideData; slideNumber: number; totalSlides: number }> = ({ slideData, slideNumber, totalSlides }) => {
    const trend = slideData.kicker ? getTrendInfo(slideData.kicker) : null;
    return (
      <div className="w-full h-full flex flex-col py-8 px-10 bg-white overflow-hidden">
          <header className="flex-shrink-0 mb-4 flex items-center">
            {trend && (
                <div className={`w-12 h-12 rounded-full bg-${trend.color}-100 text-${trend.color}-600 flex items-center justify-center text-2xl font-black mr-4`}>
                    {trend.num}
                </div>
            )}
            <div className="flex-grow">
                {slideData.kicker && <p className={`text-base font-bold ${trend ? `text-${trend.color}-600` : 'text-indigo-600' } mb-0`}>{slideData.kicker}</p>}
                {slideData.title && <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight" dangerouslySetInnerHTML={{ __html: slideData.title }}></h2>}
            </div>
          </header>
        <div className="flex-grow flex flex-col overflow-y-auto text-slate-700">
            <div className="flex-grow">{slideData.content}</div>
        </div>
      </div>
    );
};


export const Slide: React.FC<SlideProps> = ({ slideData, slideNumber, totalSlides }) => {
  switch (slideData.layout) {
    case 'title':
      return <TitleLayout title={slideData.title} content={slideData.content} />;
    case 'content':
      return <ContentLayout slideData={slideData} slideNumber={slideNumber} totalSlides={totalSlides} />;
    case 'custom':
        return <>{slideData.content}</>;
    default:
      return <div>Unknown slide layout</div>;
  }
};