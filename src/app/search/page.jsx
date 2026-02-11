'use client'
import { useState } from 'react'
import Navbar from '../../../components/Navbar'
import ToolCard from '../../../components/ToolCard'

const mockTools = [
  {
    id: 1,
    name: 'Power Drill',
    category: 'Power Tools',
    description: 'Cordless drill with battery and charger. Perfect for home projects.',
    pricePerDay: 15,
    distance: '2.3 km',
    owner: 'John Smith'
  },
  {
    id: 2,
    name: 'Circular Saw',
    category: 'Power Tools',
    description: 'Heavy-duty circular saw for cutting wood and other materials.',
    pricePerDay: 20,
    distance: '1.8 km',
    owner: 'Sarah Johnson'
  },
  {
    id: 3,
    name: 'Ladder',
    category: 'Equipment',
    description: '8-foot extension ladder, sturdy and safe for reaching high places.',
    pricePerDay: 10,
    distance: '3.1 km',
    owner: 'Mike Davis'
  },
  {
    id: 4,
    name: 'Pressure Washer',
    category: 'Cleaning',
    description: 'Electric pressure washer, great for cleaning decks and driveways.',
    pricePerDay: 25,
    distance: '4.2 km',
    owner: 'Emily Wilson'
  },
  {
    id: 5,
    name: 'Socket Set',
    category: 'Hand Tools',
    description: 'Complete socket set with ratchet and various sizes.',
    pricePerDay: 8,
    distance: '2.7 km',
    owner: 'David Brown'
  },
  {
    id: 6,
    name: 'Paint Sprayer',
    category: 'Painting',
    description: 'Airless paint sprayer for smooth, even paint application.',
    pricePerDay: 30,
    distance: '3.5 km',
    owner: 'Lisa Anderson'
  }
]

export default function SearchPage() {
  const [location, setLocation] = useState('')
  const [category, setCategory] = useState('all')

  const categories = ['all', 'Power Tools', 'Hand Tools', 'Equipment', 'Cleaning', 'Painting']

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      <Navbar />
      
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 16px' }}>
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#111827', marginBottom: '8px' }}>
            Search Tools
          </h1>
          <p style={{ color: '#6b7280' }}>
            Find tools available in your community
          </p>
        </div>

        <div style={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', padding: '24px', border: '1px solid #e5e7eb', marginBottom: '32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            <div>
              <label htmlFor="location" style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
                Location
              </label>
              <input
                type="text"
                id="location"
                placeholder="Enter your location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px' }}
              />
            </div>
            
            <div>
              <label htmlFor="category" style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
                Category
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px' }}
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'flex-end' }}>
              <button
                style={{ width: '100%', backgroundColor: '#10b981', color: 'white', padding: '8px 16px', borderRadius: '6px', fontSize: '14px', fontWeight: '500', cursor: 'pointer', border: 'none' }}
              >
                Search Tools
              </button>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#111827' }}>
            Available Tools ({mockTools.length} found)
          </h2>
          <div style={{ fontSize: '14px', color: '#6b7280' }}>
            {location ? `Near ${location}` : 'All locations'}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {mockTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>

        {mockTools.length === 0 && (
          <div style={{ textAlign: 'center', padding: '48px 0' }}>
            <div style={{ color: '#9ca3af', marginBottom: '16px' }}>
              <svg width="64" height="64" fill="none" viewBox="0 0 24 24" style={{ margin: '0 auto' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: '500', color: '#111827', marginBottom: '8px' }}>
              No tools found
            </h3>
            <p style={{ color: '#6b7280' }}>
              Try adjusting your search filters or location
            </p>
          </div>
        )}
      </main>
    </div>
  )
}
