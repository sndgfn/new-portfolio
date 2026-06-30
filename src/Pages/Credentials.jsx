// import React from 'react';

export default function Credentials() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white p-4 md:p-12 font-sans selection:bg-neutral-800 selection:text-white">
      
      {/* MAIN CONTAINER: 2-Column Grid */}
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start relative">
        
        {/* ================= LEFT SIDEBAR (STICKY ON DESKTOP) ================= */}
        <div className="md:sticky md:top-12 bg-[#161616] rounded-[36px] p-8 border border-neutral-800 flex flex-col items-center text-center w-full shadow-2xl">
          {/* Avatar Container */}
          <div className="w-full aspect-square max-w-[260px] bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-[32px] overflow-hidden relative shadow-xl mb-8 border border-neutral-700/30">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80" 
              alt="David Henderson" 
              className="w-full h-full object-cover grayscale contrast-125"
            />
          </div>

          {/* Name & Handle */}
          <h2 className="text-3xl font-extrabold tracking-tight text-white">David Henderson</h2>
          <span className="text-sm text-neutral-400 font-medium mt-2 block tracking-wide">@davidhenderson</span>

          {/* Social Icons Container */}
          <div className="flex items-center justify-center gap-4 my-8 w-full">
            {/* Dribbble Style Icon */}
            <div className="w-12 h-12 rounded-full bg-[#1c1c1c] border border-neutral-700/60 flex items-center justify-center text-neutral-300 hover:text-white hover:bg-neutral-800 hover:scale-105 transition duration-200 cursor-pointer shadow-md">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8" />
              </svg>
            </div>
            {/* Twitter/X Icon */}
            <div className="w-12 h-12 rounded-full bg-[#1c1c1c] border border-neutral-700/60 flex items-center justify-center text-neutral-300 hover:text-white hover:bg-neutral-800 hover:scale-105 transition duration-200 cursor-pointer shadow-md">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </div>
            {/* Instagram Icon */}
            <div className="w-12 h-12 rounded-full bg-[#1c1c1c] border border-neutral-700/60 flex items-center justify-center text-neutral-300 hover:text-white hover:bg-neutral-800 hover:scale-105 transition duration-200 cursor-pointer shadow-md">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </div>
            {/* Facebook Icon */}
            <div className="w-12 h-12 rounded-full bg-[#1c1c1c] border border-neutral-700/60 flex items-center justify-center text-neutral-300 hover:text-white hover:bg-neutral-800 hover:scale-105 transition duration-200 cursor-pointer shadow-md">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </div>
          </div>

          {/* Contact Button */}
          <button className="w-full bg-[#323232] hover:bg-white hover:text-black text-white font-bold text-base py-4 px-6 rounded-2xl transition-all duration-300 border border-neutral-700 shadow-lg active:scale-95">
            Contact Me
          </button>
        </div>

        {/* ================= RIGHT SIDEBAR (SCROLLABLE CONTENT) ================= */}
        <div className="md:col-span-2 space-y-16 pb-12 pt-2 md:pt-0">
          
          {/* SECTION 1: ABOUT ME */}
          <div>
            <h3 className="text-sm uppercase tracking-[0.25em] text-white font-extrabold mb-6 border-b border-neutral-800 pb-2">
              About Me
            </h3>
            <p className="text-base text-neutral-300 leading-relaxed font-normal">
              Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor 
              purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget 
              nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio 
              facilisis mauris sit. Scelerisque fermentum duisi faucibus in ornare quam sisd sit amet 
              luctussd fav venenatis, lectus magna fringilla zac urna, porttitor rhoncus dolor purus non 
              enim praesent cuz elementum sahas facilisis leot.
            </p>
          </div>

          {/* SECTION 2: EXPERIENCE */}
          <div>
            <h3 className="text-sm uppercase tracking-[0.25em] text-white font-extrabold mb-8 border-b border-neutral-800 pb-2">
              Experience
            </h3>
            <div className="space-y-10">
              <div className="group">
                <span className="text-sm font-semibold text-neutral-500 group-hover:text-neutral-400 transition">2007 - 2017</span>
                <h4 className="text-lg font-bold text-blue-500 mt-1">Framer Designer & Developer</h4>
                <p className="text-xs font-medium text-neutral-400 mt-0.5">Bluebase Designs</p>
                <p className="text-sm text-neutral-400 leading-relaxed mt-3">
                  Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.
                </p>
              </div>

              <div className="group">
                <span className="text-sm font-semibold text-neutral-500 group-hover:text-neutral-400 transition">2017 - 2023</span>
                <h4 className="text-lg font-bold text-blue-500 mt-1">Front-End Developer</h4>
                <p className="text-xs font-medium text-neutral-400 mt-0.5">Larsen & Toubro</p>
                <p className="text-sm text-neutral-400 leading-relaxed mt-3">
                  Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.
                </p>
              </div>
            </div>
          </div>

          {/* SECTION 3: EDUCATION */}
          <div>
            <h3 className="text-sm uppercase tracking-[0.25em] text-white font-extrabold mb-8 border-b border-neutral-800 pb-2">
              Education
            </h3>
            <div className="space-y-10">
              <div className="group">
                <span className="text-sm font-semibold text-neutral-500 group-hover:text-neutral-400 transition">2004 - 2007</span>
                <h4 className="text-lg font-bold text-blue-500 mt-1">Bachelor Degree in Psychology</h4>
                <p className="text-xs font-medium text-neutral-400 mt-0.5">University of California</p>
                <p className="text-sm text-neutral-400 leading-relaxed mt-3">
                  Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.
                </p>
              </div>

              <div className="group">
                <span className="text-sm font-semibold text-neutral-500 group-hover:text-neutral-400 transition">2007 - 2009</span>
                <h4 className="text-lg font-bold text-blue-500 mt-1">Master Degree in Designing</h4>
                <p className="text-xs font-medium text-neutral-400 mt-0.5">University of Texas</p>
                <p className="text-sm text-neutral-400 leading-relaxed mt-3">
                  Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.
                </p>
              </div>
            </div>
          </div>

          {/* SECTION 4: SKILLS */}
          <div>
            <h3 className="text-sm uppercase tracking-[0.25em] text-white font-extrabold mb-8 border-b border-neutral-800 pb-2">
              Skills
            </h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-10">
              <div className="border border-neutral-900 bg-[#131313] p-4 rounded-2xl hover:border-neutral-800 transition">
                <span className="text-sm font-bold text-neutral-400">85%</span>
                <h4 className="text-base font-bold text-neutral-200 mt-1">JavaScript</h4>
                <p className="text-xs text-neutral-500 mt-0.5">Non enim praesent</p>
              </div>
              <div className="border border-neutral-900 bg-[#131313] p-4 rounded-2xl hover:border-neutral-800 transition">
                <span className="text-sm font-bold text-neutral-400">78%</span>
                <h4 className="text-base font-bold text-neutral-200 mt-1">Python</h4>
                <p className="text-xs text-neutral-500 mt-0.5">Non enim praesent</p>
              </div>
              <div className="border border-neutral-900 bg-[#131313] p-4 rounded-2xl hover:border-neutral-800 transition">
                <span className="text-sm font-bold text-neutral-400">92%</span>
                <h4 className="text-base font-bold text-neutral-200 mt-1">Figma</h4>
                <p className="text-xs text-neutral-500 mt-0.5">Non enim praesent</p>
              </div>
              <div className="border border-neutral-900 bg-[#131313] p-4 rounded-2xl hover:border-neutral-800 transition">
                <span className="text-sm font-bold text-neutral-400">90%</span>
                <h4 className="text-base font-bold text-neutral-200 mt-1">WordPress</h4>
                <p className="text-xs text-neutral-500 mt-0.5">Non enim praesent</p>
              </div>
              <div className="border border-neutral-900 bg-[#131313] p-4 rounded-2xl hover:border-neutral-800 transition">
                <span className="text-sm font-bold text-neutral-400">81%</span>
                <h4 className="text-base font-bold text-neutral-200 mt-1">React</h4>
                <p className="text-xs text-neutral-500 mt-0.5">Non enim praesent</p>
              </div>
              <div className="border border-neutral-900 bg-[#131313] p-4 rounded-2xl hover:border-neutral-800 transition">
                <span className="text-sm font-bold text-neutral-400">87%</span>
                <h4 className="text-base font-bold text-neutral-200 mt-1">Adobe XD</h4>
                <p className="text-xs text-neutral-500 mt-0.5">Non enim praesent</p>
              </div>
            </div>
          </div>

          {/* SECTION 5: AWARDS */}
          <div>
            <h3 className="text-sm uppercase tracking-[0.25em] text-white font-extrabold mb-8 border-b border-neutral-800 pb-2">
              Awards
            </h3>
            <div className="space-y-8">
              <div className="border-l-2 border-neutral-800 pl-4 hover:border-neutral-500 transition">
                <span className="text-xs font-semibold text-neutral-500">14 May 2020</span>
                <h4 className="text-base font-bold text-neutral-200 mt-0.5">Bluebase</h4>
                <p className="text-xs text-neutral-500 mt-0.5">Non enim praesent</p>
              </div>
              <div className="border-l-2 border-neutral-800 pl-4 hover:border-neutral-500 transition">
                <span className="text-xs font-semibold text-neutral-500">26 June 2018</span>
                <h4 className="text-base font-bold text-neutral-200 mt-0.5">Demble</h4>
                <p className="text-xs text-neutral-500 mt-0.5">Non enim praesent</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* GLOBAL FOOTER */}
      <footer className="w-full text-center py-10 border-t border-neutral-900 mt-20 space-y-4">
        <div className="text-2xl font-bold tracking-wider text-white">Grid<span className="text-white font-light">X</span></div>
        <nav className="flex justify-center items-center gap-8 text-xs font-bold tracking-widest uppercase text-neutral-500">
          <a href="#home" className="hover:text-white transition">Home</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#works" className="hover:text-white transition">Works</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
        <p className="text-xs text-neutral-600 mt-2">
          © All rights reserved by <span className="text-blue-500 hover:underline cursor-pointer">WordPressRiver</span>
        </p>
      </footer>

    </div>
  );
}

















// // import React from 'react';

// export default function Credentials() {
//   return (
//     <div className="min-h-screen bg-[#0f0f0f] text-white p-4 md:p-12 font-sans selection:bg-neutral-800 selection:text-white">
      
//       {/* MAIN CONTAINER: 2-Column Grid */}
//       <div className="max-w-5xl w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start relative">
        
//         {/* ================= LEFT SIDEBAR (STICKY ON DESKTOP) ================= */}
//         <div className="md:sticky md:top-12 bg-[#161616] rounded-[32px] p-6 border border-neutral-800/40 flex flex-col items-center text-center w-full">
//           {/* Avatar Container */}
//           <div className="w-full aspect-square max-w-[240px] bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-3xl overflow-hidden relative shadow-lg mb-6">
//             <img 
//               src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80" 
//               alt="David Henderson" 
//               className="w-full h-full object-cover grayscale contrast-125"
//             />
//           </div>

//           {/* Name & Handle */}
//           <h2 className="text-2xl font-bold tracking-tight text-white">David Henderson</h2>
//           <span className="text-xs text-neutral-500 mt-1 block">@davidhenderson</span>

//           {/* Social Icons Container */}
//           <div className="flex items-center justify-center gap-3 my-6 w-full">
//             {/* Dribbble Style Icon */}
//             <div className="w-10 h-10 rounded-full bg-[#1c1c1c] border border-neutral-800/80 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-800 transition cursor-pointer">
//               <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8" />
//               </svg>
//             </div>
//             {/* Twitter/X Icon */}
//             <div className="w-10 h-10 rounded-full bg-[#1c1c1c] border border-neutral-800/80 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-800 transition cursor-pointer">
//               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
//               </svg>
//             </div>
//             {/* Instagram Icon */}
//             <div className="w-10 h-10 rounded-full bg-[#1c1c1c] border border-neutral-800/80 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-800 transition cursor-pointer">
//               <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//                 <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
//                 <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
//                 <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
//               </svg>
//             </div>
//             {/* Facebook Icon */}
//             <div className="w-10 h-10 rounded-full bg-[#1c1c1c] border border-neutral-800/80 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-800 transition cursor-pointer">
//               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
//               </svg>
//             </div>
//           </div>

//           {/* Contact Button */}
//           <button className="w-full bg-[#1f1f1f] hover:bg-neutral-800 text-neutral-200 hover:text-white font-medium text-sm py-3 px-6 rounded-2xl transition duration-300 border border-neutral-800/20 shadow-md">
//             Contact Me
//           </button>
//         </div>

//         {/* ================= RIGHT SIDEBAR (SCROLLABLE CONTENT) ================= */}
//         <div className="md:col-span-2 space-y-12 pb-12">
          
//           {/* SECTION 1: ABOUT ME */}
//           <div>
//             <h3 className="text-xs uppercase tracking-[0.2em] text-neutral-200 font-bold mb-5">
//               About Me
//             </h3>
//             <p className="text-sm text-neutral-400 leading-relaxed font-normal">
//               Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor 
//               purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget 
//               nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio 
//               facilisis mauris sit. Scelerisque fermentum duisi faucibus in ornare quam sisd sit amet 
//               luctussd fav venenatis, lectus magna fringilla zac urna, porttitor rhoncus dolor purus non 
//               enim praesent cuz elementum sahas facilisis leot.
//             </p>
//           </div>

//           {/* SECTION 2: EXPERIENCE */}
//           <div>
//             <h3 className="text-xs uppercase tracking-[0.2em] text-neutral-200 font-bold mb-6">
//               Experience
//             </h3>
//             <div className="space-y-8">
//               <div>
//                 <span className="text-xs font-medium text-neutral-500">2007 - 2017</span>
//                 <h4 className="text-base font-semibold text-blue-500 mt-1">Framer Designer & Developer</h4>
//                 <p className="text-xs text-neutral-500 mt-0.5">Bluebase Designs</p>
//                 <p className="text-xs text-neutral-400 leading-relaxed mt-2">
//                   Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.
//                 </p>
//               </div>

//               <div>
//                 <span className="text-xs font-medium text-neutral-500">2017 - 2023</span>
//                 <h4 className="text-base font-semibold text-blue-500 mt-1">Front-End Developer</h4>
//                 <p className="text-xs text-neutral-500 mt-0.5">Larsen & Toubro</p>
//                 <p className="text-xs text-neutral-400 leading-relaxed mt-2">
//                   Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* SECTION 3: EDUCATION */}
//           <div>
//             <h3 className="text-xs uppercase tracking-[0.2em] text-neutral-200 font-bold mb-6">
//               Education
//             </h3>
//             <div className="space-y-8">
//               <div>
//                 <span className="text-xs font-medium text-neutral-500">2004 - 2007</span>
//                 <h4 className="text-base font-semibold text-blue-500 mt-1">Bachelor Degree in Psychology</h4>
//                 <p className="text-xs text-neutral-500 mt-0.5">University of California</p>
//                 <p className="text-xs text-neutral-400 leading-relaxed mt-2">
//                   Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.
//                 </p>
//               </div>

//               <div>
//                 <span className="text-xs font-medium text-neutral-500">2007 - 2009</span>
//                 <h4 className="text-base font-semibold text-blue-500 mt-1">Master Degree in Designing</h4>
//                 <p className="text-xs text-neutral-500 mt-0.5">University of Texas</p>
//                 <p className="text-xs text-neutral-400 leading-relaxed mt-2">
//                   Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* SECTION 4: SKILLS */}
//           <div>
//             <h3 className="text-xs uppercase tracking-[0.2em] text-neutral-200 font-bold mb-6">
//               Skills
//             </h3>
//             <div className="grid grid-cols-2 gap-x-6 gap-y-8">
//               <div>
//                 <span className="text-xs text-neutral-500">85%</span>
//                 <h4 className="text-sm font-semibold text-neutral-200 mt-0.5">JavaScript</h4>
//                 <p className="text-[11px] text-neutral-600 mt-0.5">Non enim praesent</p>
//               </div>
//               <div>
//                 <span className="text-xs text-neutral-500">78%</span>
//                 <h4 className="text-sm font-semibold text-neutral-200 mt-0.5">Python</h4>
//                 <p className="text-[11px] text-neutral-600 mt-0.5">Non enim praesent</p>
//               </div>
//               <div>
//                 <span className="text-xs text-neutral-500">92%</span>
//                 <h4 className="text-sm font-semibold text-neutral-200 mt-0.5">Figma</h4>
//                 <p className="text-[11px] text-neutral-600 mt-0.5">Non enim praesent</p>
//               </div>
//               <div>
//                 <span className="text-xs text-neutral-500">90%</span>
//                 <h4 className="text-sm font-semibold text-neutral-200 mt-0.5">WordPress</h4>
//                 <p className="text-[11px] text-neutral-600 mt-0.5">Non enim praesent</p>
//               </div>
//               <div>
//                 <span className="text-xs text-neutral-500">81%</span>
//                 <h4 className="text-sm font-semibold text-neutral-200 mt-0.5">React</h4>
//                 <p className="text-[11px] text-neutral-600 mt-0.5">Non enim praesent</p>
//               </div>
//               <div>
//                 <span className="text-xs text-neutral-500">87%</span>
//                 <h4 className="text-sm font-semibold text-neutral-200 mt-0.5">Adobe XD</h4>
//                 <p className="text-[11px] text-neutral-600 mt-0.5">Non enim praesent</p>
//               </div>
//             </div>
//           </div>

//           {/* SECTION 5: AWARDS */}
//           <div>
//             <h3 className="text-xs uppercase tracking-[0.2em] text-neutral-200 font-bold mb-6">
//               Awards
//             </h3>
//             <div className="space-y-6">
//               <div>
//                 <span className="text-xs font-medium text-neutral-500">14 May 2020</span>
//                 <h4 className="text-sm font-semibold text-neutral-200 mt-0.5">Bluebase</h4>
//                 <p className="text-[11px] text-neutral-600 mt-0.5">Non enim praesent</p>
//               </div>
//               <div>
//                 <span className="text-xs font-medium text-neutral-500">26 June 2018</span>
//                 <h4 className="text-sm font-semibold text-neutral-200 mt-0.5">Demble</h4>
//                 <p className="text-[11px] text-neutral-600 mt-0.5">Non enim praesent</p>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* GLOBAL FOOTER */}
//       <footer className="w-full text-center py-8 border-t border-neutral-900 mt-16 space-y-4">
//         <div className="text-xl font-bold tracking-wider text-white">Grid<span className="text-white font-light">X</span></div>
//         <nav className="flex justify-center items-center gap-6 text-xs font-semibold tracking-widest uppercase text-neutral-500">
//           <a href="#home" className="hover:text-white transition">Home</a>
//           <a href="#about" className="hover:text-white transition">About</a>
//           <a href="#works" className="hover:text-white transition">Works</a>
//           <a href="#contact" className="hover:text-white transition">Contact</a>
//         </nav>
//         <p className="text-[11px] text-neutral-600">
//           © All rights reserved by <span className="text-blue-500 hover:underline cursor-pointer">WordPressRiver</span>
//         </p>
//       </footer>

//     </div>
//   );
// }