import React from 'react';
import { DeepDiveLayout } from '../ui/DeepDiveLayout';

export const NanoBananaVisualDemo = () => {
    const FeatureItem = ({ icon, title, description }: { icon: string, title: string, description: string }) => (
        <div className="flex items-start p-3 bg-white rounded-lg border shadow-sm">
            <span className="text-2xl mr-4 mt-1">{icon}</span>
            <div>
                <h4 className="font-bold text-slate-800">{title}</h4>
                <p className="text-sm text-slate-600">{description}</p>
            </div>
        </div>
    );

    return (
        <DeepDiveLayout kicker="메가트렌드 ② 감각 확장 / 주요 도구" title="Nano Banana: '말로 하는 포토샵'">
            <div className="flex-grow grid grid-cols-12 gap-8 items-stretch">
                {/* Left Panel: Features */}
                <div className="col-span-4 flex flex-col space-y-4 justify-center">
                    <FeatureItem
                        icon="💬"
                        title="자연어 편집"
                        description="복잡한 포토샵 기술 없이, 자연어로 정교한 이미지 편집"
                    />
                    <FeatureItem
                        icon="🎭"
                        title="캐릭터 일관성"
                        description="여러 이미지에 걸쳐 동일 인물의 특징을 일관되게 유지"
                    />
                    <FeatureItem
                        icon="⚡"
                        title="초고속 생성"
                        description="1-2초 내에 결과물을 생성하여 빠른 반복 작업 가능"
                    />
                    <FeatureItem
                        icon="🖼️"
                        title="멀티 이미지 컨텍스트"
                        description="여러 이미지를 참조하여 스타일과 서사를 일관되게 적용"
                    />
                </div>

                {/* Right Panel: Visualization */}
                <div className="col-span-8 bg-slate-100 rounded-lg p-6 shadow-inner border flex flex-col justify-center">
                    <h3 className="font-bold text-xl text-slate-700 text-center mb-4">✨ 딸래미 돌사진 만들어주기!</h3>

                    <div className="flex-grow flex flex-col justify-center space-y-4">
                        <div>
                            <p className="text-sm font-bold text-slate-500 mb-2 text-center tracking-widest uppercase">Inputs</p>
                            <div className="grid grid-cols-3 gap-4 items-center">
                                <div className="flex flex-col items-center text-center p-3 bg-white rounded-md border shadow-sm h-full">
                                    <p className="font-semibold text-sm">Style Reference</p>
                                    <p className="text-xs text-slate-500 mt-1">인스타 스튜디오 사진</p>
                                </div>
                                <div className="flex flex-col items-center text-center p-3 bg-white rounded-md border shadow-sm h-full">
                                    <p className="font-semibold text-sm">Daughter's Photo</p>
                                    <p className="text-xs text-slate-500 mt-1">정면 사진</p>
                                </div>
                                <div className="flex flex-col items-center text-center p-3 bg-white rounded-md border shadow-sm h-full">
                                    <p className="font-semibold text-sm">Refined Prompt</p>
                                    <p className="text-xs text-slate-500 mt-1 italic">"Blend the baby's face into the studio photo, matching the soft lighting and warm tones."</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-bold text-slate-500 mb-2 text-center tracking-widest uppercase">Outputs</p>
                            <div className="flex justify-center items-center gap-3">
                                <div className="w-20 h-20 bg-slate-200 rounded-md border-2 border-slate-300"></div>
                                <div className="relative w-20 h-20 bg-slate-200 rounded-md border-4 border-blue-500 ring-2 ring-blue-500/50">
                                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                        <span className="text-white font-bold text-sm">PICK!</span>
                                    </div>
                                </div>
                                <div className="w-20 h-20 bg-slate-200 rounded-md border-2 border-slate-300"></div>
                                <div className="w-20 h-20 bg-slate-200 rounded-md border-2 border-slate-300"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DeepDiveLayout>
    );
};
