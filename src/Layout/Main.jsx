// import React from 'react';
import { Link } from 'react-router-dom'

export default function PortfolioBento() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white p-4 sm:p-8 flex items-center justify-center font-sans">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-auto">
        
        {/* ================= CARD 1: PROFILE ================= */}
        <Link to="/profiles" className="md:col-span-6 bg-[#161616] rounded-3xl p-6 flex flex-col sm:flex-row gap-6 items-center border border-neutral-800/40 relative group hover:border-neutral-700 transition duration-300">
          <div className="w-40 h-40 bg-gradient-to-tr from-blue-600 to-indigo-400 rounded-tl-3xl rounded-br-3xl overflow-hidden flex-shrink-0 relative">
            {/* Replace with actual image src */}
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80" 
              alt="David Henderson" 
              className="w-full h-full object-cover grayscale contrast-125"
            />
          </div>
          <div className="flex flex-col justify-center flex-grow text-center sm:text-left">
            <span className="text-xs tracking-widest text-neutral-500 font-medium uppercase mb-1">A Web Designer</span>
            <h1 className="text-3xl font-bold tracking-tight mb-2">David Henderson.</h1>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-xs">
              I am a Web Designer based in San Francisco.
            </p>
          </div>
          <ArrowButton />
        </Link>

        {/* ================= CARD 2: CREDENTIALS ================= */}
        <Link to="/credentials" className="md:col-span-3 bg-[#161616] rounded-3xl p-6 flex flex-col justify-between border border-neutral-800/40 relative group hover:border-neutral-700 transition duration-300">
          {/* Decorative Ticker above the card content */}
          <div className="absolute -top-3 left-0 right-0 overflow-hidden whitespace-nowrap text-[10px] text-neutral-600 tracking-widest uppercase pointer-events-none select-none">
            
          </div>
          
          <div className="flex justify-center items-center h-28">
            {/* Signature Placeholder SVG */}
            <svg className="w-32 h-16 text-neutral-400 opacity-60" viewBox="0 0 100 50" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M10 25C20 15 30 40 40 20C50 5 55 45 70 25C80 15 85 30 95 20" strokeLinecap="round"/>
            </svg>
          </div>
          <div>
            <span className="text-[10px] tracking-widest text-neutral-500 uppercase font-medium">More About Me</span>
            <h2 className="text-lg font-semibold text-neutral-200 mt-1">Credentials</h2>
          </div>
          <ArrowButton />
        </Link>

        {/* ================= CARD 3: PROJECTS ================= */}
        <Link to="/projects" className="md:col-span-3 bg-[#161616] rounded-3xl p-6 flex flex-col justify-between border border-neutral-800/40 relative group hover:border-neutral-700 transition duration-300">
          <div className="bg-[#1c1c1c] rounded-2xl p-3 flex justify-center items-center h-28 overflow-hidden border border-neutral-800/50">
            {/* Project Thumbnail Mini Mockup */}
            <div className="bg-white text-black text-[8px] p-2 rounded w-full h-full font-bold flex flex-col justify-between shadow-inner">
              <div className="border-b border-neutral-200 pb-1 flex justify-between">
                <span>MY WORKS</span>
                <span>★</span>
              </div>
              <div className="text-center py-1 text-[9px] tracking-tight">MEDITATION COURSE</div>
              <div className="bg-neutral-900 text-white text-center py-0.5 rounded-[2px] text-[6px]">VISIT SITE</div>
            </div>
          </div>
          <div className="mt-4">
            <span className="text-[10px] tracking-widest text-neutral-500 uppercase font-medium">Showcase</span>
            <h2 className="text-lg font-semibold text-neutral-200 mt-1">Projects</h2>
          </div>
          <ArrowButton />
        </Link>

        {/* ================= CARD 4: GFONTS ================= */}
        <Link to="/gfonts" className="md:col-span-3 bg-[#161616] rounded-3xl p-6 flex flex-col justify-between border border-neutral-800/40 relative group hover:border-neutral-700 transition duration-300">
          <div className="flex justify-center items-center h-28">
            {/* Abstract GFonts Logo Style */}
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 bg-[#ff5e57] rounded-full mix-blend-screen opacity-90 translate-x-[-8px]"></div>
              <div className="absolute inset-0 bg-[#2f3542] rounded-full mix-blend-screen opacity-90 translate-y-[-4px]"></div>
              <div className="absolute inset-0 bg-[#ffa502] rounded-full mix-blend-screen opacity-90 translate-x-[8px] translate-y-[4px]"></div>
              <div className="absolute inset-0 bg-[#1e90ff] rounded-full mix-blend-screen opacity-90 translate-y-[6px]"></div>
            </div>
          </div>
          <div>
            <span className="text-[10px] tracking-widest text-neutral-500 uppercase font-medium">Blog</span>
            <h2 className="text-lg font-semibold text-neutral-200 mt-1">GFonts</h2>
          </div>
          <ArrowButton />
        </Link>

        {/* ================= CARD 5: SERVICES OFFERING ================= */}
        <Link to="/services" className="md:col-span-6 bg-[#161616] rounded-3xl p-6 flex flex-col justify-between border border-neutral-800/40 relative group hover:border-neutral-700 transition duration-300">
          <div className="flex justify-around items-center h-28 text-neutral-400">
            {/* Icon 1: Camera */}
            <svg className="w-8 h-8 opacity-80 hover:text-white transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
              <circle cx="12" cy="13" r="3" />
            </svg>
            {/* Icon 2: Design Text */}
            <svg className="w-8 h-8 opacity-80 hover:text-white transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m2.947-11.53c.497 1.447 1.183 2.841 2.052 4.144" />
            </svg>
            {/* Icon 3: Color Wheels */}
            <svg className="w-8 h-8 opacity-80 hover:text-white transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="8" r="4" />
              <circle cx="8" cy="15" r="4" />
              <circle cx="16" cy="15" r="4" />
            </svg>
            {/* Icon 4: Development Brackets */}
            <svg className="w-8 h-8 opacity-80 hover:text-white transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
          </div>
          <div>
            <span className="text-[10px] tracking-widest text-neutral-500 uppercase font-medium">Specialization</span>
            <h2 className="text-lg font-semibold text-neutral-200 mt-1">Services Offering</h2>
          </div>
          <ArrowButton />
        </Link>

        {/* ================= CARD 6: PROFILES / SOCIALS ================= */}
        <Link to="/profiles" className="md:col-span-3 bg-[#161616] rounded-3xl p-6 flex flex-col justify-between border border-neutral-800/40 relative group hover:border-neutral-700 transition duration-300">
          <div className="flex justify-center items-center gap-4 h-28">
            <div className="w-12 h-12 rounded-full bg-[#1c1c1c] border border-neutral-800 flex items-center justify-center text-neutral-300 hover:bg-neutral-800 transition cursor-pointer">
              {/* Dribbble/Web Network Icon */}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8" />
              </svg>
            </div>
            <div className="w-12 h-12 rounded-full bg-[#1c1c1c] border border-neutral-800 flex items-center justify-center text-neutral-300 hover:bg-neutral-800 transition cursor-pointer">
              {/* Twitter X Icon */}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </div>
          </div>
          <div>
            <span className="text-[10px] tracking-widest text-neutral-500 uppercase font-medium">Stay With Me</span>
            <h2 className="text-lg font-semibold text-neutral-200 mt-1">Profiles</h2>
          </div>
          <ArrowButton />
        </Link>

        {/* ================= CARD 7: STATS COUNTER ================= */}
        <div className="md:col-span-5 bg-[#161616] rounded-3xl p-6 flex items-center justify-around text-center border border-neutral-800/40">
          <div className="bg-[#1c1c1c] p-4 rounded-2xl w-24 border border-neutral-800/30">
            <h3 className="text-2xl font-bold tracking-tight">07</h3>
            <p className="text-[9px] text-neutral-500 uppercase tracking-wider mt-1 font-medium leading-tight">Years Experience</p>
          </div>
          <div className="bg-[#1c1c1c] p-4 rounded-2xl w-24 border border-neutral-800/30">
            <h3 className="text-2xl font-bold tracking-tight">+125</h3>
            <p className="text-[9px] text-neutral-500 uppercase tracking-wider mt-1 font-medium leading-tight">Clients Worldwide</p>
          </div>
          <div className="bg-[#1c1c1c] p-4 rounded-2xl w-24 border border-neutral-800/30">
            <h3 className="text-2xl font-bold tracking-tight">+210</h3>
            <p className="text-[9px] text-neutral-500 uppercase tracking-wider mt-1 font-medium leading-tight">Total Projects</p>
          </div>
        </div>

        {/* ================= CARD 8: CTA FOOTER ================= */}
        <Link to="/contact" className="md:col-span-7 bg-[#161616] rounded-3xl p-8 flex flex-col justify-end border border-neutral-800/40 relative group hover:border-neutral-700 transition duration-300 min-h-[140px]">
          {/* Subtle star graphic decoration top-left */}
          <div className="absolute top-6 left-6 text-neutral-700 text-xl font-light">
            ✦
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-none text-neutral-400">
              Let's <br /> work <span className="text-blue-500">together.</span>
            </h2>
          </div>
          <ArrowButton />
        </Link>

      </div>
    </div>
  );
}

// Sub-component for the universal Minimalist Arrow Link Anchor found in the bottom right corner of each block
function ArrowButton() {
  return (
    <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full border border-neutral-800/80 flex items-center justify-center text-neutral-600 group-hover:text-white group-hover:border-neutral-500 transition-all duration-300 cursor-pointer">
      <svg className="w-3 h-3 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
      </svg>
    </div>
  );
}














// // import React from 'rerm -rf node_modules package-lock.json
// npm installact'
// import { Outlet } from 'react-router-dom'
// import Navbar from '../Components/Navbar'
// import Footer from '../Components/Footer'

// const Main = () => {
//     return (
//         <div className="min-h-screen bg-black">
//             <Navbar />
//             <Outlet />
//             <Footer />
//         </div>
//     )
// }

// export default Main