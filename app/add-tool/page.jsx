'use client'
import { useState } from 'react'
import Navbar from '../../components/Navbar'

export default function AddToolPage() {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    pricePerDay: '',
    description: '',
    brand: '',
    model: '',
    condition: '',
    location: ''
  })

  const categories = [
    'Power Tools',
    'Hand Tools', 
    'Equipment',
    'Cleaning',
    'Painting',
    'Gardening',
    'Automotive',
    'Other'
  ]

  const conditions = [
    'Like New',
    'Excellent',
    'Good',
    'Fair',
    'Acceptable'
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Tool listing created! (This is a UI-only demo)')
    console.log('Form data:', formData)
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      <Navbar />
      
      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '32px 16px' }}>
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#111827', marginBottom: '8px' }}>
            List Your Tool
          </h1>
          <p style={{ color: '#6b7280' }}>
            Share your tools with the community and earn some extra income
          </p>
        </div>

        <div style={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', padding: '24px', border: '1px solid #e5e7eb' }}>
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginBottom: '24px' }}>
              <div>
                <label htmlFor="name" style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
                  Tool Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px' }}
                  placeholder="e.g., Power Drill, Circular Saw"
                  required
                />
              </div>

              <div>
                <label htmlFor="category" style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
                  Category *
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px' }}
                  required
                >
                  <option value="">Select a category</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="pricePerDay" style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
                  Price per Day ($) *
                </label>
                <input
                  type="number"
                  id="pricePerDay"
                  name="pricePerDay"
                  value={formData.pricePerDay}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px' }}
                  placeholder="15.00"
                  step="0.01"
                  min="0"
                  required
                />
              </div>

              <div>
                <label htmlFor="condition" style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
                  Condition *
                </label>
                <select
                  id="condition"
                  name="condition"
                  value={formData.condition}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px' }}
                  required
                >
                  <option value="">Select condition</option>
                  {conditions.map(cond => (
                    <option key={cond} value={cond}>{cond}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="brand" style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
                  Brand
                </label>
                <input
                  type="text"
                  id="brand"
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px' }}
                  placeholder="e.g., DeWalt, Makita"
                />
              </div>

              <div>
                <label htmlFor="model" style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
                  Model
                </label>
                <input
                  type="text"
                  id="model"
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px' }}
                  placeholder="e.g., DCD771C2"
                />
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label htmlFor="description" style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
                Description *
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', minHeight: '100px' }}
                placeholder="Describe your tool, its features, and any important details renters should know..."
                rows="4"
                required
              ></textarea>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label htmlFor="location" style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
                Pickup Location *
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px' }}
                placeholder="Enter your address or neighborhood"
                required
              />
              <p style={{ marginTop: '4px', fontSize: '12px', color: '#6b7280' }}>
                This helps renters find tools near them. Your exact address will not be shared publicly.
              </p>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
                Add Photos
              </h3>
              <div style={{ border: '2px dashed #d1d5db', borderRadius: '8px', padding: '24px', textAlign: 'center' }}>
                <div style={{ color: '#9ca3af', marginBottom: '8px' }}>
                  <svg width="48" height="48" fill="none" viewBox="0 0 24 24" style={{ margin: '0 auto' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '8px' }}>
                  Click to upload or drag and drop
                </p>
                <p style={{ fontSize: '12px', color: '#9ca3af' }}>
                  PNG, JPG, GIF up to 10MB
                </p>
                <button
                  type="button"
                  style={{ backgroundColor: '#f3f4f6', color: '#374151', padding: '8px 16px', borderRadius: '6px', fontSize: '14px', fontWeight: '500', cursor: 'pointer', border: '1px solid #d1d5db', marginTop: '16px' }}
                >
                  Select Files
                </button>
              </div>
            </div>

            <div style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '8px', padding: '16px', marginBottom: '32px' }}>
              <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#1e40af', marginBottom: '8px' }}>
                Listing Guidelines
              </h4>
              <ul style={{ fontSize: '14px', color: '#1e40af', paddingLeft: '20px', margin: 0 }}>
                <li style={{ marginBottom: '4px' }}>Be honest about the condition of your tool</li>
                <li style={{ marginBottom: '4px' }}>Include clear, well-lit photos</li>
                <li style={{ marginBottom: '4px' }}>Set a fair price based on market rates</li>
                <li style={{ marginBottom: '4px' }}>Respond to booking requests promptly</li>
                <li>Ensure tools are clean and in working order</li>
              </ul>
            </div>

            <div style={{ display: 'flex', gap: '16px' }}>
              <button
                type="submit"
                style={{ flex: 1, backgroundColor: '#2563eb', color: 'white', padding: '12px 24px', borderRadius: '8px', fontSize: '16px', fontWeight: '500', cursor: 'pointer', border: 'none' }}
              >
                List Tool
              </button>
              <button
                type="button"
                onClick={() => window.history.back()}
                style={{ flex: 1, backgroundColor: '#f3f4f6', color: '#374151', padding: '12px 24px', borderRadius: '8px', fontSize: '16px', fontWeight: '500', cursor: 'pointer', border: '1px solid #d1d5db' }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
