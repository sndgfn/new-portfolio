import React from 'react'

export default function Footer(){
  return (
    <footer className="mt-12 py-6 text-center text-gray-400">
      <div className="container mx-auto px-6">
        <p>© {new Date().getFullYear()} — Bangla Innovator. All rights reserved.</p>
      </div>
    </footer>
  )
}
