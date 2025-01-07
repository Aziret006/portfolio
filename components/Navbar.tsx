'use client'

import { PageType } from '@/app/page'

interface NavbarProps {
  activePage: PageType
  onPageChange: (page: PageType) => void
}

const navItems: { id: PageType; label: string }[] = [
  { id: 'about', label: 'About' },
  { id: 'resume', label: 'Resume' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' }
]

export default function Navbar({ activePage, onPageChange }: NavbarProps) {
  return (
    <nav className="bg-eerie-black2 border border-jet rounded-2xl p-2">
      <ul className="flex justify-around">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => onPageChange(item.id)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activePage === item.id
                  ? 'text-orange-yellow-crayola'
                  : 'text-light-gray hover:text-light-gray70'
              }`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

