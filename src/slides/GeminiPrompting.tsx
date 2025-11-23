import React from 'react';
import type { SlideData } from '../../types';

const GeminiPromptingContent = () => {
    return (
        <div className="w-full h-full flex flex-col p-6 bg-slate-50 overflow-hidden">
            <div className="grid grid-cols-3 gap-4 h-full min-h-0">
                {/* 1. 구조적 프롬프트 */}
                <div className="bg-white rounded-xl shadow-lg p-5 border-t-4 border-blue-500 flex flex-col overflow-hidden">
                    <div className="flex items-center mb-3 shrink-0">
                        <span className="text-3xl mr-2">1️⃣</span>
                        <h3 className="text-lg font-bold text-slate-800 leading-tight">프롬프트 작성법 :<br />길이보다는 '구조'</h3>
                    </div>
                    <p className="text-xs text-slate-600 mb-3 bg-blue-50 p-2 rounded-lg shrink-0">
                        Gemini 3는 reasoning + instruction following 에 최적화
                    </p>
                    <div className="flex-grow flex flex-col space-y-2 min-h-0 overflow-y-auto">
                        <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200 shrink-0">
                            <h4 className="font-bold text-blue-600 mb-1 text-sm">🍪 프롬프트 작성팁</h4>
                            <ul className="text-xs text-slate-700 space-y-1 list-disc list-inside">
                                <li>섹션 태그로 '내용' 구조화하기</li>
                                <li>직설적인 문장 + 제약 (역할 지정 X)</li>
                                <li>템플릿형 작성 권장</li>
                            </ul>
                        </div>
                        <div className="bg-slate-800 text-slate-200 p-2.5 rounded-lg text-[10px] font-mono leading-relaxed overflow-y-auto">
                            <div className="text-green-400">{'<OBJECTIVE_AND_PERSONA>'}</div>
                            <div className="pl-2 mb-1 text-slate-400">: 무엇을, 누구처럼 할 것인지</div>
                            <div className="text-green-400">{'<INSTRUCTIONS>'}</div>
                            <div className="pl-2 mb-1 text-slate-400">: 해야 할 것 / 하면 안 되는 것</div>
                            <div className="text-green-400">{'<CONTEXT>'}</div>
                            <div className="pl-2 mb-1 text-slate-400">: 필요한 배경 정보</div>
                            <div className="text-green-400">{'<OUTPUT_FORMAT>'}</div>
                            <div className="pl-2 text-slate-400">: 마크다운/JSON/표 등 결과 형태</div>
                        </div>
                    </div>
                </div>

                {/* 2. 워크플로 프롬프트 */}
                <div className="bg-white rounded-xl shadow-lg p-5 border-t-4 border-indigo-500 flex flex-col overflow-hidden">
                    <div className="flex items-center mb-3 shrink-0">
                        <span className="text-3xl mr-2">2️⃣</span>
                        <h3 className="text-lg font-bold text-slate-800 leading-tight">프롬프팅 방식의 변화:<br />“한 줄 질문”에서 워크플로</h3>
                    </div>
                    <p className="text-xs text-slate-600 mb-3 bg-indigo-50 p-2 rounded-lg leading-relaxed shrink-0">
                        Gemini 3는 “에이전틱, 문제를 잘 푸는 모델”입니다. 답변 패턴: 목표 질문 → 플랜 분해 → 검증 루프
                    </p>
                    <div className="flex-grow flex flex-col space-y-2 min-h-0 overflow-y-auto">
                        <ul className="text-xs text-slate-700 space-y-1 list-decimal list-inside bg-slate-50 p-2.5 rounded-lg border border-slate-200 shrink-0">
                            <li>사용자의 목표와 현재 상황 질문</li>
                            <li>해야 할 일을 여러 단계의 플랜으로 분해</li>
                            <li>각 단계에서 검증·수정 루프 지원</li>
                        </ul>
                        <div className="bg-indigo-50 p-2.5 rounded-lg border border-indigo-100 overflow-y-auto">
                            <h4 className="font-bold text-indigo-600 mb-1 text-sm">🍪 Workflow 설계 프롬프트</h4>
                            <div className="space-y-2 text-xs">
                                <div className="flex items-start">
                                    <span className="text-red-500 mr-1.5 font-bold flex-shrink-0">❌</span>
                                    <span className="text-slate-500">"이 주제로 방송 대본 써줘"</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-green-500 mr-1.5 font-bold flex-shrink-0">⭕</span>
                                    <span className="text-slate-700">방송 목적, 타깃, 톤 - 3막 구조/5부 구성/ 각 섹션 초안/ 휴먼 피드백에 의한 수정 루프</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. 멀티모달 프롬프트 */}
                <div className="bg-white rounded-xl shadow-lg p-5 border-t-4 border-purple-500 flex flex-col overflow-hidden">
                    <div className="flex items-center mb-3 shrink-0">
                        <span className="text-3xl mr-2">3️⃣</span>
                        <h3 className="text-lg font-bold text-slate-800 leading-tight">멀티모달, 프롬프트=<br />인터페이스 설계</h3>
                    </div>
                    <p className="text-xs text-slate-600 mb-3 bg-purple-50 p-2 rounded-lg leading-relaxed shrink-0">
                        텍스트, 이미지, 영상, 오디오, PDF, 코드까지 한 번에 다루는 멀티모달 모델 (사람 ↔ 모델 ↔ 시스템)
                    </p>
                    <div className="flex-grow flex flex-col space-y-2 min-h-0 overflow-y-auto">
                        <div className="bg-purple-50 p-2.5 rounded-lg border border-purple-100 shrink-0">
                            <h4 className="font-bold text-purple-600 mb-1 text-sm">🍪 프롬프트 작성팁</h4>
                            <ul className="text-xs text-slate-700 space-y-1 list-decimal list-inside">
                                <li>입력(이미지, 텍스트, 파일)의 용도/시점 명확화</li>
                                <li>무엇을 읽고/추출하고/어떤 형식으로 내보낼지 명시</li>
                            </ul>
                        </div>
                        <div className="space-y-1.5 overflow-y-auto">
                            <div className="bg-slate-100 p-2 rounded text-[10px] text-slate-600">
                                <span className="font-bold text-purple-600 block mb-0.5">Ex 1. PDF → 표 → JSON</span>
                                "첨부한 PDF에서 ‘표’만 추출해서, 아래 JSON 스키마에 맞춰 변환해줘."
                            </div>
                            <div className="bg-slate-100 p-2 rounded text-[10px] text-slate-600">
                                <span className="font-bold text-purple-600 block mb-0.5">Ex 2. 이미지 톤앤매너 적용</span>
                                "이미지 A의 썸네일 스타일을 참고해서, 텍스트 B를 같은 톤과 분위기로 다시 써줘."
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 하단 결론 */}
            <div className="mt-4 bg-slate-800 text-white p-3 rounded-xl text-center shadow-lg shrink-0">
                <p className="font-medium text-base">
                    Gemini 3 (Pro)를 쓰실 때: <span className="text-yellow-400 font-bold">"길이"가 아닌 "구조"</span>의 관점으로,
                    <span className="text-blue-300 font-bold"> 에이전틱 Workflow</span> 형태로,
                    <span className="text-purple-300 font-bold"> 멀티모달</span>을 염두하여 점검해보세요.
                </p>
            </div>
        </div>
    );
};

export const geminiPromptingSlide: SlideData = {
    layout: 'content',
    kicker: 'Gemini 3 활용 가이드',
    title: 'Gemini 3 프롬프팅(from 강수진 박사님)',
    content: <GeminiPromptingContent />
};
