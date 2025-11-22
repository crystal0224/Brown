import React from 'react';

interface SidebarProps {
  sections: string[];
  currentSection?: string;
}

const SECTION_ICONS = {
  '인트로': '🚀',
  '메가트렌드 ① 자율성': '🤖',
  '메가트렌드 ② 감각 확장': '👁️',
  '메가트렌드 ③ 연결성': '🔗',
  'AI 민주화': '🎨',
  '생태계와 모델': '🗺️',
  '미래 전망': '🔮'
};


export const Sidebar: React.FC<SidebarProps> = ({ sections, currentSection }) => {
  return (
    <aside className="w-[240px] flex-shrink-0 bg-slate-800 rounded-xl p-6 flex flex-col shadow-lg">
        <h2 className="text-xl font-bold text-white mb-2">AI 2025</h2>
        <p className="text-sm text-slate-400 mb-8">The Next Wave</p>
        <nav>
            <ul className="space-y-2">
            {sections.map((section) => {
                const isActive = section === currentSection;
                return (
                <li
                    key={section}
                    className={`
                    px-4 py-3 rounded-md text-sm font-semibold transition-colors duration-200
                    ${isActive
                        ? 'bg-indigo-600 text-white shadow-md'
                        : 'text-slate-300 hover:bg-slate-700'
                    }
                    `}
                >
                    <span className="mr-3">{SECTION_ICONS[section] || '-'}</span>
                    {section}
                </li>
                );
            })}
            </ul>
        </nav>
    </aside>
  );
};