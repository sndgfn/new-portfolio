// import React from 'react';

export default function Projects() {
  const projectList = [
    {
      id: 1,
      title: 'Dynamic',
      category: 'Web Designing',
      image: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 2,
      title: 'Seven Studio',
      category: 'Mobile Designing',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 3,
      title: 'Raven Studio',
      category: 'Branding',
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 4,
      title: 'Diesel H1',
      category: 'Photography',
      image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 5,
      title: 'Submarine',
      category: 'Mobile Designing',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 6,
      title: 'Hydra Merc',
      category: 'Web Designing',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white p-4 md:p-12 font-sans selection:bg-neutral-800 selection:text-white flex flex-col justify-between">
      
      {/* MAIN CONTAINER */}
      <div className="max-w-6xl w-full mx-auto my-auto">
        
        {/* ROW 1: TITLE BLOCK & ASYMMETRIC CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          
          {/* COLUMN 1 */}
          <div className="space-y-6">
            <ProjectCard project={projectList[0]} />
            <ProjectCard project={projectList[3]} />
          </div>

          {/* COLUMN 2 */}
          <div className="space-y-6">
            {/* Main Header styled explicitly like image_7eb7a3.jpg */}
            <div className="flex items-center justify-center gap-3 py-6 md:py-2 select-none">
              <span className="text-2xl opacity-40 animate-pulse">✺</span>
              <h1 className="text-3xl md:text-5xl font-black uppercase tracking-wider text-white text-center whitespace-nowrap">
                All Projects
              </h1>
              <span className="text-2xl opacity-40 animate-pulse">✺</span>
            </div>
            <ProjectCard project={projectList[1]} />
            <ProjectCard project={projectList[4]} />
          </div>

          {/* COLUMN 3 */}
          <div className="space-y-6 md:pt-[76px]"> 
            {/* Top padding pushes column 3 downwards to square up beneath the row 2 title alignment */}
            <ProjectCard project={projectList[2]} />
            <ProjectCard project={projectList[5]} />
          </div>

        </div>
      </div>

      {/* REPLICATED GLOBAL BRAND FOOTER */}
      <footer className="w-full text-center py-12 border-t border-neutral-900 mt-20 space-y-4">
        <div className="text-2xl font-bold tracking-wider text-white">
          Grid<span className="text-white font-light">X</span>
        </div>
        
        <nav className="flex justify-center items-center gap-8 text-xs font-bold tracking-widest uppercase text-neutral-500">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#works" className="hover:text-white transition-colors">Works</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>
        
        <p className="text-xs text-neutral-600 mt-2">
          © All rights reserved by <span className="text-blue-500 hover:underline cursor-pointer">WordPressRiver</span>
        </p>
      </footer>

    </div>
  );
}

// Internal reusable card module handling image rendering, hover effects, and tags
function ProjectCard({ project }) {
  return (
    <div className="bg-[#161616] rounded-[32px] p-6 border border-neutral-800/60 relative group hover:border-neutral-700 transition duration-300 w-full overflow-hidden flex flex-col justify-between">
      
      {/* Aspect Box containing Image element */}
      <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800/40 relative shadow-inner mb-5">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        {/* Dark overlay sheet fading slightly on interaction */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition duration-300" />
      </div>

      {/* Info Rows */}
      <div className="flex justify-between items-end relative z-10">
        <div>
          <span className="text-[11px] font-bold tracking-widest text-neutral-500 uppercase block">
            {project.category}
          </span>
          <h2 className="text-xl font-bold text-neutral-200 mt-1 group-hover:text-white transition-colors">
            {project.title}
          </h2>
        </div>

        {/* Minimal Circle Arrow Target */}
        <div className="w-10 h-10 rounded-full border border-neutral-800/80 flex items-center justify-center text-neutral-600 group-hover:text-white group-hover:border-neutral-500 transition-all duration-300 cursor-pointer shadow-md bg-[#1a1a1a]/40 backdrop-blur-sm">
          <svg className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </div>
      </div>

    </div>
  );
}