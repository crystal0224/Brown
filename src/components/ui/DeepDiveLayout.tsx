import React from 'react';

export const DeepDiveLayout: React.FC<{ kicker: string, title: string, children: React.ReactNode }> = ({ kicker, title, children }) => (
    <div className="w-full h-full flex flex-col p-10 bg-slate-50">
        <header className="flex-shrink-0 mb-6 border-b-2 border-slate-200 pb-3">
            <div className="bg-amber-300 text-amber-900 font-bold px-3 py-1 rounded-full inline-block mb-3 text-sm shadow-sm">💡 Deep Dive</div>
            <p className="text-sm font-bold text-slate-500 mb-1">{kicker}</p>
            <h2 className="text-4xl font-extrabold text-slate-700 tracking-tight">{title}</h2>
        </header>
        <div className="flex-grow flex flex-col overflow-y-auto text-slate-700">
            {children}
        </div>
    </div>
);
