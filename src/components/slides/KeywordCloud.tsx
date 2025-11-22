import React from 'react';

export const KeywordCloud = () => {
    // FIX: Explicitly type the keywords array to prevent `size` from being inferred as a generic string.
    const keywords: { text: string; color: string; size: 'xl' | 'lg' | 'md' | 'sm' }[] = [
        // Models (Blue) - Massively expanded
        { text: 'GPT-5', color: 'text-blue-600', size: 'xl' },
        { text: 'Claude 4', color: 'text-blue-600', size: 'xl' },
        { text: 'Llama 4', color: 'text-blue-600', size: 'xl' },
        { text: 'Gemini 2.0', color: 'text-blue-600', size: 'xl' },
        { text: 'GPT-4o', color: 'text-blue-500', size: 'lg' },
        { text: 'Claude 3.5', color: 'text-blue-500', size: 'lg' },
        { text: 'Llama 3.3', color: 'text-blue-500', size: 'lg' },
        { text: 'Grok 2', color: 'text-blue-600', size: 'lg' },
        { text: 'Mistral Large', color: 'text-blue-500', size: 'lg' },
        { text: 'Mixtral 8x7B', color: 'text-blue-500', size: 'lg' },
        { text: 'Phi-3', color: 'text-blue-500', size: 'md' },
        { text: 'Gemma 2', color: 'text-blue-500', size: 'md' },
        { text: 'DeepSeek V3', color: 'text-blue-500', size: 'md' },
        { text: 'DeepSeek R1', color: 'text-blue-400', size: 'md' },
        { text: 'Qwen 2.5', color: 'text-blue-500', size: 'md' },
        { text: 'Yi-34B', color: 'text-blue-400', size: 'sm' },
        { text: 'Falcon 180B', color: 'text-blue-400', size: 'sm' },
        { text: 'MPT-30B', color: 'text-blue-400', size: 'sm' },
        { text: 'Vicuna', color: 'text-blue-400', size: 'sm' },
        { text: 'Alpaca', color: 'text-blue-400', size: 'sm' },
        { text: 'Orca 2', color: 'text-blue-400', size: 'sm' },
        { text: 'StableLM', color: 'text-blue-400', size: 'sm' },
        { text: 'RedPajama', color: 'text-blue-400', size: 'sm' },
        { text: 'OpenLLaMA', color: 'text-blue-400', size: 'sm' },
        { text: 'Baichuan', color: 'text-blue-400', size: 'sm' },

        // Concepts (Purple) - Massively expanded
        { text: 'Agentic AI', color: 'text-purple-600', size: 'xl' },
        { text: 'Multimodal AI', color: 'text-purple-600', size: 'xl' },
        { text: 'LRMs', color: 'text-purple-600', size: 'lg' },
        { text: 'MCP', color: 'text-purple-600', size: 'lg' },
        { text: 'RAG', color: 'text-purple-500', size: 'lg' },
        { text: 'Fine-tuning', color: 'text-purple-500', size: 'lg' },
        { text: 'Prompt Engineering', color: 'text-purple-500', size: 'lg' },
        { text: 'Few-shot Learning', color: 'text-purple-500', size: 'md' },
        { text: 'Zero-shot Learning', color: 'text-purple-500', size: 'md' },
        { text: 'In-context Learning', color: 'text-purple-500', size: 'md' },
        { text: 'Chain-of-Thought', color: 'text-purple-500', size: 'md' },
        { text: 'Tree-of-Thought', color: 'text-purple-400', size: 'md' },
        { text: 'ReAct', color: 'text-purple-400', size: 'md' },
        { text: 'LLMOps', color: 'text-purple-500', size: 'md' },
        { text: 'Vector DB', color: 'text-purple-500', size: 'md' },
        { text: 'Embeddings', color: 'text-purple-500', size: 'md' },
        { text: 'RLHF', color: 'text-purple-500', size: 'md' },
        { text: 'RLAIF', color: 'text-purple-500', size: 'md' },
        { text: 'DPO', color: 'text-purple-400', size: 'sm' },
        { text: 'PPO', color: 'text-purple-400', size: 'sm' },
        { text: 'LoRA', color: 'text-purple-400', size: 'sm' },
        { text: 'QLoRA', color: 'text-purple-400', size: 'sm' },
        { text: 'Quantization', color: 'text-purple-400', size: 'sm' },
        { text: 'Distillation', color: 'text-purple-400', size: 'sm' },
        { text: 'Pruning', color: 'text-purple-400', size: 'sm' },
        { text: 'Model Merging', color: 'text-purple-400', size: 'sm' },
        { text: 'Mixture of Experts', color: 'text-purple-400', size: 'sm' },
        { text: 'Speculative Decoding', color: 'text-purple-400', size: 'sm' },
        { text: 'Flash Attention', color: 'text-purple-400', size: 'sm' },
        { text: 'Rotary Embeddings', color: 'text-purple-400', size: 'sm' },
        { text: 'Sliding Window', color: 'text-purple-400', size: 'sm' },
        { text: 'Grouped Query', color: 'text-purple-400', size: 'sm' },
        { text: 'Model Collapse', color: 'text-purple-400', size: 'sm' },
        { text: 'Hallucination', color: 'text-purple-400', size: 'sm' },
        { text: 'Jailbreaking', color: 'text-purple-400', size: 'sm' },

        // Tools & Platforms (Amber) - Massively expanded
        { text: 'Devin', color: 'text-amber-600', size: 'xl' },
        { text: 'Sora', color: 'text-amber-600', size: 'xl' },
        { text: 'Cursor', color: 'text-amber-600', size: 'xl' },
        { text: 'GitHub Copilot', color: 'text-amber-600', size: 'xl' },
        { text: 'Agent Builder', color: 'text-amber-600', size: 'lg' },
        { text: 'Nano Banana', color: 'text-amber-600', size: 'lg' },
        { text: 'v0.dev', color: 'text-amber-500', size: 'lg' },
        { text: 'Bolt.new', color: 'text-amber-500', size: 'lg' },
        { text: 'Replit Agent', color: 'text-amber-500', size: 'lg' },
        { text: 'Windsurf', color: 'text-amber-500', size: 'lg' },
        { text: 'Cline', color: 'text-amber-500', size: 'md' },
        { text: 'Aider', color: 'text-amber-500', size: 'md' },
        { text: 'Continue.dev', color: 'text-amber-500', size: 'md' },
        { text: 'Tabnine', color: 'text-amber-500', size: 'md' },
        { text: 'Codeium', color: 'text-amber-500', size: 'md' },
        { text: 'Midjourney v6', color: 'text-amber-500', size: 'md' },
        { text: 'DALL-E 3', color: 'text-amber-500', size: 'md' },
        { text: 'Stable Diffusion XL', color: 'text-amber-500', size: 'md' },
        { text: 'Runway Gen-3', color: 'text-amber-500', size: 'md' },
        { text: 'Pika 1.0', color: 'text-amber-500', size: 'md' },
        { text: 'ElevenLabs', color: 'text-amber-400', size: 'sm' },
        { text: 'NotebookLM', color: 'text-amber-400', size: 'sm' },
        { text: 'Perplexity', color: 'text-amber-400', size: 'sm' },
        { text: 'Claude Projects', color: 'text-amber-400', size: 'sm' },
        { text: 'ChatGPT Canvas', color: 'text-amber-400', size: 'sm' },
        { text: 'Custom GPTs', color: 'text-amber-400', size: 'sm' },
        { text: 'GPT Store', color: 'text-amber-400', size: 'sm' },
        { text: 'LangChain', color: 'text-amber-400', size: 'sm' },
        { text: 'LangGraph', color: 'text-amber-400', size: 'sm' },
        { text: 'LlamaIndex', color: 'text-amber-400', size: 'sm' },
        { text: 'AutoGen', color: 'text-amber-400', size: 'sm' },
        { text: 'CrewAI', color: 'text-amber-400', size: 'sm' },
        { text: 'Semantic Kernel', color: 'text-amber-400', size: 'sm' },
        { text: 'Haystack', color: 'text-amber-400', size: 'sm' },
        { text: 'Flowise', color: 'text-amber-400', size: 'sm' },
        { text: 'Dify', color: 'text-amber-400', size: 'sm' },
        { text: 'n8n', color: 'text-amber-400', size: 'sm' },

        // Safety & Governance (Green) - Expanded
        { text: 'AI Safety', color: 'text-green-600', size: 'xl' },
        { text: 'AI Alignment', color: 'text-green-600', size: 'lg' },
        { text: 'AI Governance', color: 'text-green-500', size: 'lg' },
        { text: 'Responsible AI', color: 'text-green-500', size: 'md' },
        { text: 'AI Ethics', color: 'text-green-500', size: 'md' },
        { text: 'Explainable AI', color: 'text-green-500', size: 'md' },
        { text: 'Red Teaming', color: 'text-green-500', size: 'md' },
        { text: 'Constitutional AI', color: 'text-green-400', size: 'sm' },
        { text: 'Guardrails', color: 'text-green-400', size: 'sm' },
        { text: 'Model Cards', color: 'text-green-400', size: 'sm' },
        { text: 'Frontier AI', color: 'text-green-400', size: 'sm' },
        { text: 'X-risk', color: 'text-green-400', size: 'sm' },
        { text: 'AGI', color: 'text-green-400', size: 'sm' },
        { text: 'ASI', color: 'text-green-400', size: 'sm' },

        // Infrastructure (Rose) - New category
        { text: 'Groq', color: 'text-rose-600', size: 'lg' },
        { text: 'Together AI', color: 'text-rose-500', size: 'lg' },
        { text: 'Replicate', color: 'text-rose-500', size: 'md' },
        { text: 'Hugging Face', color: 'text-rose-500', size: 'md' },
        { text: 'Ollama', color: 'text-rose-500', size: 'md' },
        { text: 'vLLM', color: 'text-rose-400', size: 'sm' },
        { text: 'TGI', color: 'text-rose-400', size: 'sm' },
        { text: 'LM Studio', color: 'text-rose-400', size: 'sm' },
        { text: 'Pinecone', color: 'text-rose-400', size: 'sm' },
        { text: 'Weaviate', color: 'text-rose-400', size: 'sm' },
        { text: 'Chroma', color: 'text-rose-400', size: 'sm' },
        { text: 'Qdrant', color: 'text-rose-400', size: 'sm' },
        { text: 'Milvus', color: 'text-rose-400', size: 'sm' },

        // Emerging Trends (Cyan) - New category
        { text: 'AI Agents', color: 'text-cyan-600', size: 'xl' },
        { text: 'Computer Use', color: 'text-cyan-600', size: 'lg' },
        { text: 'Web Agents', color: 'text-cyan-500', size: 'lg' },
        { text: 'Code Agents', color: 'text-cyan-500', size: 'md' },
        { text: 'Research Agents', color: 'text-cyan-500', size: 'md' },
        { text: 'Multi-Agent', color: 'text-cyan-500', size: 'md' },
        { text: 'Agent Swarms', color: 'text-cyan-400', size: 'sm' },
        { text: 'Tool Use', color: 'text-cyan-400', size: 'sm' },
        { text: 'Function Calling', color: 'text-cyan-400', size: 'sm' },
        { text: 'Reasoning Models', color: 'text-cyan-400', size: 'sm' },
        { text: 'o1-preview', color: 'text-cyan-400', size: 'sm' },
        { text: 'o1-mini', color: 'text-cyan-400', size: 'sm' },
    ];

    const shuffledKeywords = keywords.slice().sort(() => Math.random() - 0.5);

    const getKeywordClasses = (size: 'xl' | 'lg' | 'md' | 'sm') => {
        switch (size) {
            case 'xl': return 'text-6xl font-black';
            case 'lg': return 'text-4xl font-bold';
            case 'md': return 'text-2xl font-bold';
            case 'sm': return 'text-xl font-semibold';
            default: return 'text-lg font-semibold';
        }
    };

    return (
        <div className="w-full h-full bg-white overflow-hidden p-8">
            <div className="w-full h-full flex flex-wrap items-center justify-center content-center gap-x-6 gap-y-3">
                {shuffledKeywords.map((term, i) => (
                    <div
                        key={`${term.text}-${i}`}
                        className={`tracking-tight whitespace-nowrap ${term.color} ${getKeywordClasses(term.size)}`}
                    >
                        {term.text}
                    </div>
                ))}
            </div>
        </div>
    );
};
