'use client'

import { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'
import About from '@/components/About'
import Resume from '@/components/Resume'
import Portfolio from '@/components/Portfolio'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'

export type PageType = 'about' | 'resume' | 'portfolio' | 'blog' | 'contact'

export default function Home() {
  const [activePage, setActivePage] = useState<PageType>('about')

  const renderActivePage = () => {
    switch (activePage) {
      case 'about':
        return <About />
      case 'resume':
        return <Resume />
      case 'portfolio':
        return <Portfolio />
      case 'blog':
        return <Blog />
      case 'contact':
        return <Contact />
      default:
        return <About />
    }
  }

  return (
    <main className="min-h-screen bg-smoky-black text-light-gray p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
        <Sidebar />
        <div className="flex-1">
          <Navbar activePage={activePage} onPageChange={setActivePage} />
          <div className="mt-6">
            {renderActivePage()}
          </div>
        </div>
      </div>
    </main>
  )
}

