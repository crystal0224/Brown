import React from 'react';

export const MegatrendFeatureCard: React.FC<{ icon: string, title: string, children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="bg-white p-4 rounded-lg shadow-md border border-slate-200 flex-grow basis-0 flex flex-col">
        <div className="flex items-center mb-2">
            <span className="text-2xl mr-3">{icon}</span>
            <h3 className="text-lg font-bold text-slate-800">{title}</h3>
        </div>
        <div className="text-slate-600 text-sm flex-grow space-y-2">{children}</div>
    </div>
);
