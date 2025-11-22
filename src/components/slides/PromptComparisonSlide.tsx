import React from 'react';
import { DeepDiveLayout } from '../ui/DeepDiveLayout';

const StructuredPrompt = () => (
    <div className="font-mono text-[9px] leading-tight text-slate-300 h-full flex flex-col p-2 overflow-y-hidden">
        <p className="text-amber-300 font-bold text-sm flex-shrink-0">Brainstormer</p>
        <div className="mt-1 space-y-1 flex-grow">
            <div>
                <span className="text-green-400 font-bold">Persona</span>
                <p className="text-slate-300 pl-2">Inspire creativity for brainstorming gifts, themes, stories, etc.</p>
            </div>
            <div>
                <p className="text-green-400 font-bold">Task</p>
                <ul className="list-disc list-inside pl-2 text-[8px] text-slate-400">
                    <li>Generate original, relevant & out-of-the-box ideas.</li>
                    <li>Collaborate & take input to tailor suggestions.</li>
                </ul>
            </div>
            <div>
                <p className="text-green-400 font-bold">Context</p>
                <ul className="list-disc list-inside pl-2 text-[8px] text-slate-400">
                    <li>Ask clarifying questions for inspiration.</li>
                    <li>Use an energetic, enthusiastic tone.</li>
                </ul>
            </div>
            <div>
                <p className="text-green-400 font-bold">Format</p>
                <ol className="list-decimal list-inside pl-2 text-[8px] text-slate-400">
                    <li><b>Understand:</b> Ask questions to tailor ideas.</li>
                    <li><b>Options:</b> Offer 3+ numbered, tailored ideas.</li>
                    <li><b>Feedback:</b> Ask for details to add or change.</li>
                    <li><b>Deepen:</b> Flesh out details for the chosen idea.</li>
                </ol>
            </div>
        </div>
    </div>
);


export const PromptComparisonSlide = () => {
    return (
        <DeepDiveLayout kicker="핵심 원칙" title="결국, Prompt가 중요합니다!">
            <div className="flex-grow grid grid-cols-2 gap-8">
                {/* Left side: Simple Prompt */}
                <div className="bg-white rounded-lg p-6 border shadow-lg flex flex-col">
                    <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center">🤔 그냥 물어보기 (Before)</h3>
                    <div className="flex-grow flex items-center justify-center bg-slate-50 rounded-md p-4 border">
                        <p className="text-lg font-semibold text-slate-600 italic">"브레인스토밍 할 수 있는<br />Gems를 만들어줘"</p>
                    </div>
                    <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-md border border-red-200 text-sm">
                        <p><b>결과:</b> AI가 의도를 정확히 파악하기 어려워, 일반적이고 피상적인 답변을 내놓을 확률이 높습니다.</p>
                    </div>
                </div>

                {/* Right side: Detailed Prompt */}
                <div className="bg-white rounded-lg p-6 border-2 border-indigo-400 shadow-2xl flex flex-col">
                    <h3 className="text-2xl font-bold text-indigo-700 mb-4 text-center">✨ 설계해서 물어보기 (After)</h3>
                    <div className="flex-grow bg-slate-800 rounded-md p-2 overflow-hidden">
                        <StructuredPrompt />
                    </div>
                    <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-md border border-green-200 text-sm">
                        <p><b>결과:</b> 명확한 역할(Persona), 과업(Task), 맥락(Context), 형식(Format)을 지정하여 AI가 최고의 성능을 발휘하도록 유도합니다.</p>
                    </div>
                </div>
            </div>
        </DeepDiveLayout>
    );
};
