'use client'
import Link from 'next/link'

export default function ToolCard({ tool }) {
  return (
    <div style={{ 
      backgroundColor: '#ffffff', 
      borderRadius: '8px', 
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      border: '1px solid #e5e7eb',
      overflow: 'hidden',
      transition: 'transform 0.2s, box-shadow 0.2s'
    }}>
      <Link href={`/tools/${tool.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div style={{ position: 'relative' }}>
          <img 
            src={`https://picsum.photos/seed/${tool.id}/400/300.jpg`}
            alt={tool.name}
            style={{ 
              width: '100%', 
              height: '200px', 
              objectFit: 'cover',
              display: 'block'
            }}
          />
          <div style={{ 
            position: 'absolute', 
            top: '12px', 
            left: '12px',
            backgroundColor: '#10b981',
            color: '#ffffff',
            fontSize: '12px',
            fontWeight: '500',
            padding: '4px 8px',
            borderRadius: '4px'
          }}>
            {tool.category}
          </div>
        </div>
        
        <div style={{ padding: '16px' }}>
          <h3 style={{ 
            fontSize: '18px', 
            fontWeight: '600', 
            color: '#111827',
            margin: '0 0 8px 0'
          }}>
            {tool.name}
          </h3>
          
          <p style={{ 
            fontSize: '14px', 
            color: '#6b7280',
            margin: '0 0 12px 0',
            lineHeight: '1.5'
          }}>
            {tool.description}
          </p>
          
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: '12px'
          }}>
            <div style={{ 
              fontSize: '20px', 
              fontWeight: 'bold', 
              color: '#10b981'
            }}>
              ${tool.pricePerDay}
              <span style={{ 
                fontSize: '14px', 
                color: '#6b7280', 
                fontWeight: 'normal'
              }}>
                /day
              </span>
            </div>
            
            <div style={{ 
              fontSize: '12px', 
              color: '#9ca3af',
              display: 'flex',
              alignItems: 'center'
            }}>
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" style={{ marginRight: '4px' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314-9.674z" />
              </svg>
              {tool.distance}
            </div>
          </div>
          
          <div style={{ 
            display: 'flex', 
            alignItems: 'center',
            fontSize: '14px',
            color: '#6b7280'
          }}>
            <div style={{ 
              width: '24px', 
              height: '24px', 
              backgroundColor: '#e5e7eb', 
              borderRadius: '50%',
              marginRight: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#6b7280">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            {tool.owner}
          </div>
        </div>
      </Link>
    </div>
  )
}
