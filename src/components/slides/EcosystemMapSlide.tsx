import React from 'react';
import { DeepDiveLayout } from '../ui/DeepDiveLayout';

export const EcosystemMapSlide = () => {
    // FIX: Add explicit prop types for ToolCard to make optional props work correctly.
    interface ToolCardProps {
        name: string;
        provider?: string;
        providerColor?: string;
        note?: string;
    }
    const ToolCard: React.FC<ToolCardProps> = ({ name, provider, providerColor, note }) => (
        <div className="bg-white p-3 rounded-lg border-2 border-slate-300 shadow-sm text-center relative hover:border-indigo-400 transition-all">
            {provider && (
                <span className={`absolute -top-2 -right-2 text-xs font-bold px-2 py-0.5 rounded-full text-white ${providerColor}`}>
                    {provider}
                </span>
            )}
            <p className="font-bold text-slate-800 text-sm">{name}</p>
            {note && <p className="text-xs text-slate-500 mt-1">{note}</p>}
        </div>
    );

    // FIX: Add explicit prop types for CategoryColumn to make optional props work correctly.
    interface CategoryColumnProps {
        title: string;
        children: React.ReactNode;
        label?: string;
        labelColor?: string;
        note?: string;
    }
    const CategoryColumn: React.FC<CategoryColumnProps> = ({ title, children, label, labelColor, note }) => (
        <div className="flex flex-col gap-y-3">
            {label && <p className={`text-center font-bold text-sm px-2 py-1 rounded-md ${labelColor} mb-2 shadow-sm`}>{label}</p>}
            <h3 className="text-base font-black text-center text-slate-700 p-2 bg-white rounded-md border-2 border-slate-400 shadow-md">{title}</h3>
            {note && <p className="text-center text-xs text-slate-500 -mt-2 mb-2">{note}</p>}
            <div className="flex flex-col gap-y-2">{children}</div>
        </div>
    );

    const TopInfoBox = ({ title, content, color }: { title: string, content: string, color: any }) => (
        <div className={`p-3 rounded-lg border-2 ${color.border} ${color.bg} shadow-inner h-full flex flex-col`}>
            <h4 className="font-extrabold text-slate-700 text-center text-base">{title}</h4>
            <div className="text-center text-xs text-slate-600 whitespace-pre-line mt-2 flex-grow flex items-center justify-center">{content}</div>
        </div>
    )

    return (
        <DeepDiveLayout kicker="나의 도구 지도" title="My AI Ecosystem & Tool Map (2024년 하반기)">
            <div className="h-full w-full flex flex-col gap-3 p-2 bg-amber-50/50 rounded-lg border-4 border-dashed border-amber-200 text-[10px]">
                {/* Top Row: General Concepts */}
                <div className="grid grid-cols-3 gap-3">
                    <TopInfoBox
                        title="피로감 😩"
                        content={`이걸 배우니 저걸 쓰라고,\n저걸 배우니 또 이걸 쓰라고...\n재학습 비용 > 학습 효과`}
                        color={{ border: 'border-red-200', bg: 'bg-red-50' }}
                    />
                    <TopInfoBox
                        title="Context Engineering 🧠"
                        content={`결국 AI에게 어떤 맥락을 주느냐가 핵심.\n'방망이 깎는 노인'의 심정으로.`}
                        color={{ border: 'border-blue-200', bg: 'bg-blue-50' }}
                    />
                    <TopInfoBox
                        title="시행착오 🛠️"
                        content={`시행착오 없이 얻는 것은 없다.\n결정론적 접근을 넘어 부딪히며 배우기.`}
                        color={{ border: 'border-green-200', bg: 'bg-green-50' }}
                    />
                </div>

                {/* Main Content: Tool Map */}
                <div className="flex-grow grid grid-cols-12 gap-3 items-start">
                    {/* Left Categories */}
                    <div className="col-span-2 flex flex-col gap-y-3">
                        <CategoryColumn title="LLM 모델">
                            <ToolCard name="GPT-5" provider="OpenAI" providerColor="bg-green-500" />
                            <ToolCard name="Claude Sonnet/Opus" provider="Anthropic" providerColor="bg-orange-500" />
                            <ToolCard name="Gemini 2.5 Pro" provider="Google" providerColor="bg-blue-500" />
                            <ToolCard name="Llama 3.1" provider="Meta" providerColor="bg-sky-500" />
                            <ToolCard name="Grok, DeepSeek" provider="etc." providerColor="bg-slate-500" />
                        </CategoryColumn>
                    </div>

                    {/* Main Workflow */}
                    <div className="col-span-8 grid grid-cols-3 gap-3">
                        <CategoryColumn title="브라우저 + AI" label="다시 배운 것" labelColor="bg-green-200 text-green-800">
                            <ToolCard name="Comet Browser" provider="Perplexity" providerColor="bg-yellow-500" />
                            <ToolCard name="Atlas" provider="OpenAI" providerColor="bg-green-500" />
                        </CategoryColumn>

                        <CategoryColumn title="Workflow Automation">
                            <ToolCard name="Claude Skills" provider="Anthropic" providerColor="bg-orange-500" />
                            <ToolCard name="Agent Builder" provider="OpenAI" providerColor="bg-green-500" />
                            <ToolCard name="Opal / Gems" provider="Google" providerColor="bg-blue-500" />
                        </CategoryColumn>

                        <CategoryColumn title="Vibe Coding" note="(App builder)">
                            <ToolCard name="Replit" />
                            <ToolCard name="Lovable" />
                            <ToolCard name="Cursor" />
                            <ToolCard name="Bolt" />
                        </CategoryColumn>

                        <CategoryColumn title="Creative & Code" label="원래 쓰던 것" labelColor="bg-blue-200 text-blue-800">
                            <ToolCard name="Claude Code" note="CLAUDE.md, Claudia" />
                            <ToolCard name="MCP" note="Obsidian MCP 활용" />
                            <ToolCard name="Google AI Studio" />
                            <ToolCard name="Figma (+MCP)" />
                        </CategoryColumn>

                        <CategoryColumn title="Generative Tools">
                            <ToolCard name="GEM" provider="Speckit" providerColor="bg-red-400" />
                            <ToolCard name="Nano Banana" />
                            <ToolCard name="Codex" />
                            <ToolCard name="Cursor" note="cursor.rule, Git worktree" />
                        </CategoryColumn>

                        <CategoryColumn title="No-Code">
                            <ToolCard name="Sheet / Apps Script" provider="Google" providerColor="bg-blue-500" />
                            <ToolCard name="Zapier / Make" />
                            <ToolCard name="Flowise / LangChain" />
                        </CategoryColumn>
                    </div>

                    {/* Right Category */}
                    <div className="col-span-2 flex flex-col gap-y-3">
                        <CategoryColumn title="Future Watch" label="아직 제대로 못 배운 것" labelColor="bg-red-200 text-red-800">
                            <ToolCard name="Veo 3" provider="Google" providerColor="bg-blue-500" />
                        </CategoryColumn>
                        <CategoryColumn title="Agent Chat" note="OpenAI: Chatkit">
                            <ToolCard name="Make / Zapier" provider="No-Code" providerColor="bg-purple-500" />
                        </CategoryColumn>
                    </div>
                </div>
            </div>
        </DeepDiveLayout>
    );
};
