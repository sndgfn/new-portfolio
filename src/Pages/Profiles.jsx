// import React from 'react';

export default function Profile() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white p-4 md:p-8 flex flex-col justify-between font-sans selection:bg-neutral-800 selection:text-white">
      
      {/* MAIN CONTAINER */}
      <div className="max-w-5xl w-full mx-auto flex-grow flex flex-col justify-center my-6">
        
        {/* UPPER ROW: AVATAR & SELF-SUMMARY */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end mb-6">
          
          {/* PROFILE IMAGE CARD */}
          <div className="bg-[#161616] rounded-[32px] p-6 border border-neutral-800/40 flex justify-center items-center aspect-square md:aspect-auto md:h-full">
            <div className="w-full h-full max-w-[240px] max-h-[240px] bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-3xl overflow-hidden relative shadow-lg">
              {/* Replace placeholder with actual image URL if needed */}
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80" 
                alt="David Henderson laughing" 
                className="w-full h-full object-cover grayscale contrast-125"
              />
            </div>
          </div>

          {/* SELF-SUMMARY CARD */}
          <div className="md:col-span-2 flex flex-col">
            {/* Header Text Block */}
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4 text-center md:text-left">
              <span className="text-xl opacity-40">✺</span>
              <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-wider text-white">
                Self-Summary
              </h1>
              <span className="text-xl opacity-40">✺</span>
            </div>

            {/* Inner Content Card */}
            <div className="bg-[#161616] rounded-[32px] p-8 md:p-10 border border-neutral-800/40 relative min-h-[200px] flex flex-col justify-center">
              {/* Decorative Sparkle icon top left */}
              <div className="absolute top-6 left-6 text-neutral-700 text-xl font-light select-none">
                ✦
              </div>
              
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-3">
                David Henderson
              </h2>
              <p className="text-sm text-neutral-400 leading-relaxed max-w-2xl">
                I am a San francisco-based product designer with a focus on web design, 
                illustration, a visual development. I have a diverse range of experience having 
                worked across various fields and industries.
              </p>
            </div>
          </div>
        </div>

        {/* MIDDLE ROW: EXPERIENCE & EDUCATION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          
          {/* EXPERIENCE CARD */}
          <div className="bg-[#161616] rounded-[32px] p-8 border border-neutral-800/40">
            <h3 className="text-xs uppercase tracking-widest text-neutral-200 font-bold mb-6">
              Experience
            </h3>
            
            <div className="space-y-6">
              <div>
                <span className="text-xs font-medium text-neutral-500">2007 - 2017</span>
                <h4 className="text-base font-semibold text-neutral-200 mt-1">Framer Designer & Developer</h4>
                <p className="text-xs text-neutral-500 mt-0.5">Bluebase Designs</p>
              </div>
              
              <div>
                <span className="text-xs font-medium text-neutral-500">2017 - 2023</span>
                <h4 className="text-base font-semibold text-neutral-200 mt-1">Front-End Developer</h4>
                <p className="text-xs text-neutral-500 mt-0.5">Larsen & Toubro</p>
              </div>
            </div>
          </div>

          {/* EDUCATION CARD */}
          <div className="bg-[#161616] rounded-[32px] p-8 border border-neutral-800/40">
            <h3 className="text-xs uppercase tracking-widest text-neutral-200 font-bold mb-6">
              Education
            </h3>
            
            <div className="space-y-6">
              <div>
                <span className="text-xs font-medium text-neutral-500">2004 - 2007</span>
                <h4 className="text-base font-semibold text-neutral-200 mt-1">Bachelor Degree in Psychology</h4>
                <p className="text-xs text-neutral-500 mt-0.5">University of California</p>
              </div>
              
              <div>
                <span className="text-xs font-medium text-neutral-500">2007 - 2009</span>
                <h4 className="text-base font-semibold text-neutral-200 mt-1">Master Degree in Designing</h4>
                <p className="text-xs text-neutral-500 mt-0.5">University of Texas</p>
              </div>
            </div>
          </div>
        </div>

        {/* LOWER ROW: PROFILES, CTA, AND CREDENTIALS */}
        <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 gap-6">
          
          {/* PROFILES CARD */}
          <div className="sm:col-span-2 md:col-span-1 bg-[#161616] rounded-[32px] p-6 flex flex-col justify-between border border-neutral-800/40 relative group hover:border-neutral-700 transition duration-300 min-h-[160px]">
            <div className="flex items-center gap-3 h-14">
              <div className="w-11 h-11 rounded-full bg-[#1c1c1c] border border-neutral-800 flex items-center justify-center text-neutral-300 hover:bg-neutral-800 transition cursor-pointer">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8" />
                </svg>
              </div>
              <div className="w-11 h-11 rounded-full bg-[#1c1c1c] border border-neutral-800 flex items-center justify-center text-neutral-300 hover:bg-neutral-800 transition cursor-pointer">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
            </div>
            <div>
              <span className="text-[10px] tracking-widest text-neutral-500 uppercase font-medium">Stay With Me</span>
              <h2 className="text-base font-semibold text-neutral-200 mt-0.5">Profiles</h2>
            </div>
            <ArrowButton />
          </div>

          {/* LET'S WORK TOGETHER CARD */}
          <div className="sm:col-span-2 md:col-span-2 bg-[#161616] rounded-[32px] p-6 flex flex-col justify-end border border-neutral-800/40 relative group hover:border-neutral-700 transition duration-300 min-h-[160px]">
            <div className="absolute top-6 left-6 text-neutral-700 text-xl font-light select-none">
              ✦
            </div>
            <div className="mb-2">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight leading-none text-neutral-400">
                Let's <br /> work <span className="text-blue-500">together.</span>
              </h2>
            </div>
            <ArrowButton />
          </div>

          {/* CREDENTIALS CARD */}
          <div className="sm:col-span-4 md:col-span-1 bg-[#161616] rounded-[32px] p-6 flex flex-col justify-between border border-neutral-800/40 relative group hover:border-neutral-700 transition duration-300 min-h-[160px]">
            <div className="flex items-center h-14">
              <svg className="w-24 h-10 text-neutral-500 opacity-40" viewBox="0 0 100 50" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M10 25C20 15 30 40 40 20C50 5 55 45 70 25C80 15 85 30 95 20" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <span className="text-[10px] tracking-widest text-neutral-500 uppercase font-medium">More About Me</span>
              <h2 className="text-base font-semibold text-neutral-200 mt-0.5">Credentials</h2>
            </div>
            <ArrowButton />
          </div>

        </div>

      </div>

      {/* GLOBAL FOOTER BRAND SECTION */}
      <footer className="w-full text-center py-8 border-t border-neutral-900 mt-12 space-y-4">
        <div className="text-xl font-bold tracking-wider text-white">Grid<span className="text-white font-light">X</span></div>
        
        <nav className="flex justify-center items-center gap-6 text-xs font-semibold tracking-widest uppercase text-neutral-500">
          <a href="#home" className="hover:text-white transition">Home</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#works" className="hover:text-white transition">Works</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
        
        <p className="text-[11px] text-neutral-600">
          © All rights reserved by <span className="text-blue-500 hover:underline cursor-pointer">WordPressRiver</span>
        </p>
      </footer>

    </div>
  );
}

// Minimal Arrow Anchor Node for bottom-right corner placements
function ArrowButton() {
  return (
    <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full border border-neutral-800/80 flex items-center justify-center text-neutral-600 group-hover:text-white group-hover:border-neutral-500 transition-all duration-300 cursor-pointer">
      <svg className="w-3 h-3 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
      </svg>
    </div>
  );
}