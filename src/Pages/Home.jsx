import React from 'react'

const Card = ({ children, className = '' }) => (
  <div className={`rounded-2xl bg-gray-800/60 p-6 shadow-inner ${className}`}>
    {children}
  </div>
)

export default function Home() {
  return (
    <main className="container mx-auto px-6 py-10 text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="col-span-2 flex items-center">
          <div className="w-28 h-28 rounded-lg bg-gradient-to-tr from-indigo-500 to-blue-400 mr-6" />
          <div>
            <p className="text-sm uppercase text-gray-300">A Web Designer</p>
            <h1 className="text-3xl font-bold">David Henderson.</h1>
            <p className="text-gray-400 mt-2">I am a Web Designer based in san francisco.</p>
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold">Credentials</h3>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold">Projects</h3>
        </Card>

        <Card className="col-span-2 flex items-center justify-between">
          <div>
            <h4 className="text-sm text-gray-300">Specialization</h4>
            <h3 className="text-xl font-semibold">Services Offering</h3>
          </div>
          <div className="flex gap-4 text-gray-400">
            <span className="w-10 h-10 rounded-full bg-gray-700/40 flex items-center justify-center">📷</span>
            <span className="w-10 h-10 rounded-full bg-gray-700/40 flex items-center justify-center">🎨</span>
            <span className="w-10 h-10 rounded-full bg-gray-700/40 flex items-center justify-center">⚙️</span>
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold">GFonts</h3>
        </Card>

        <Card className="col-span-3 mt-4 p-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold">Let's work <span className="text-indigo-400">together</span>.</h2>
          </div>
          <div className="text-gray-400">→</div>
        </Card>
      </div>
    </main>
  )
}
