import React from 'react';

export default function Home() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-[#0B1F3B]"
    >
      <div className="text-center px-6">
        <div className="w-24 h-1 bg-[#C7A14A] mx-auto mb-8 rounded-full" />
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter uppercase italic">
          Website Under <br className="md:hidden" />
          <span className="text-[#C7A14A]">Construction</span>
        </h1>
        <p className="text-lg md:text-xl text-white/50 font-medium max-w-xl mx-auto leading-relaxed">
          Epignosis Housing Co is currently refining your premium relocation experience. 
          Stay tuned for exciting updates!
        </p>
        <div className="mt-12 flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#C7A14A] animate-bounce" style={{ animationDelay: '0ms' }} />
            <div className="w-2 h-2 rounded-full bg-[#C7A14A] animate-bounce" style={{ animationDelay: '200ms' }} />
            <div className="w-2 h-2 rounded-full bg-[#C7A14A] animate-bounce" style={{ animationDelay: '400ms' }} />
        </div>
      </div>
    </div>
  );
}