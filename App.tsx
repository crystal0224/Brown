import React, { useState, useEffect, useCallback } from 'react';
import { Slide } from './components/Slide';
import { Navigation } from './components/Navigation';
import { ProgressBar } from './components/ProgressBar';
import { slidesData } from './src/slides';
import type { SlideData } from './types';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const totalSlides: number = slidesData.length;

  const handleNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const handlePrev = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        handleNext();
      } else if (event.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleNext, handlePrev]);

  const currentSlideData: SlideData = slidesData[currentSlide];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-200 p-4 sm:p-8 font-sans">
      <div className="relative w-full max-w-7xl">
        <main className="w-full aspect-[16/9] shadow-2xl">
          <div className="w-full h-full bg-white rounded-xl overflow-hidden flex flex-col">
            <Slide slideData={currentSlideData} slideNumber={currentSlide + 1} totalSlides={totalSlides} />
          </div>
        </main>

        <button
          onClick={handlePrev}
          className="absolute top-1/2 -translate-y-1/2 -left-4 sm:-left-12 md:-left-16 p-2 rounded-full bg-white/70 backdrop-blur-sm text-slate-500 hover:text-indigo-600 hover:bg-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-lg"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-12 md:-right-16 p-2 rounded-full bg-white/70 backdrop-blur-sm text-slate-500 hover:text-indigo-600 hover:bg-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-lg"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <footer className="w-full max-w-7xl mt-4 h-12 bg-white rounded-xl shadow-lg border border-slate-200/80 px-4 flex items-center justify-between">
        <span className="text-sm font-medium text-slate-500 w-20 text-center">{currentSlide + 1} / {totalSlides}</span>
        <div className="flex-grow px-4">
          <ProgressBar current={currentSlide + 1} total={totalSlides} />
        </div>
        <div className="w-20"> {/* Empty div to balance footer */} </div>
      </footer>
    </div>
  );
};

export default App;
