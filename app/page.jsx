import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      <Navbar />
      
      <main style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '80px 16px 32px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ 
            fontSize: '48px', 
            fontWeight: 'bold', 
            color: '#111827',
            marginBottom: '24px',
            lineHeight: '1.2'
          }}>
            Share tools. Save money. Reduce waste.
          </h1>
          
          <p style={{ 
            fontSize: '20px', 
            color: '#6b7280',
            marginBottom: '48px',
            lineHeight: '1.6'
          }}>
            Join your community in sharing tools and equipment. Rent what you need, when you need it, and earn money from items you already own.
          </p>
          
          <div style={{ 
            display: 'flex', 
            gap: '16px', 
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link 
              href="/get-started"
              style={{
                backgroundColor: '#10b981',
                color: '#ffffff',
                padding: '16px 32px',
                borderRadius: '8px',
                fontSize: '18px',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.2s',
                display: 'inline-block'
              }}
            >
              Get Started
            </Link>
            
            <Link 
              href="/search"
              style={{
                backgroundColor: '#ffffff',
                color: '#10b981',
                padding: '16px 32px',
                borderRadius: '8px',
                fontSize: '18px',
                fontWeight: '600',
                textDecoration: 'none',
                border: '2px solid #10b981',
                transition: 'all 0.2s',
                display: 'inline-block'
              }}
            >
              Browse Tools
            </Link>
          </div>
        </div>
        
        <div style={{ 
          marginTop: '96px',
          backgroundColor: '#eff6ff',
          borderRadius: '12px',
          padding: '48px 32px',
          textAlign: 'center'
        }}>
          <h2 style={{ 
            fontSize: '28px', 
            fontWeight: 'bold', 
            color: '#111827', 
            marginBottom: '16px'
          }}>
            Share Your Tools
          </h2>
          <p style={{ 
            fontSize: '18px', 
            color: '#6b7280', 
            marginBottom: '24px',
            lineHeight: '1.6'
          }}>
            Have tools you&apos;re not using? List them on EcoTrack and earn money while helping your community.
          </p>
          <Link 
            href="/add-tool"
            style={{
              backgroundColor: '#10b981',
              color: '#ffffff',
              padding: '12px 24px',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '600',
              textDecoration: 'none',
              display: 'inline-block'
            }}
          >
            List a Tool
          </Link>
        </div>
        
        <div style={{ 
          marginTop: '96px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '48px'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              width: '80px', 
              height: '80px', 
              backgroundColor: '#dcfce7',
              borderRadius: '50%',
              margin: '0 auto 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '32px'
            }}>
              💰
            </div>
            <h3 style={{ 
              fontSize: '24px', 
              fontWeight: '600', 
              color: '#111827', 
              marginBottom: '12px'
            }}>
              Save Money
            </h3>
            <p style={{ 
              fontSize: '16px', 
              color: '#6b7280', 
              lineHeight: '1.5'
            }}>
              Rent tools instead of buying. Save hundreds on expensive equipment you only use occasionally.
            </p>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              width: '80px', 
              height: '80px', 
              backgroundColor: '#dbeafe',
              borderRadius: '50%',
              margin: '0 auto 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '32px'
            }}>
              🤝
            </div>
            <h3 style={{ 
              fontSize: '24px', 
              fontWeight: '600', 
              color: '#111827', 
              marginBottom: '12px'
            }}>
              Build Community
            </h3>
            <p style={{ 
              fontSize: '16px', 
              color: '#6b7280', 
              lineHeight: '1.5'
            }}>
              Connect with neighbors and build a stronger, more sustainable community through sharing.
            </p>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              width: '80px', 
              height: '80px', 
              backgroundColor: '#fef3c7',
              borderRadius: '50%',
              margin: '0 auto 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '32px'
            }}>
              ♻️
            </div>
            <h3 style={{ 
              fontSize: '24px', 
              fontWeight: '600', 
              color: '#111827', 
              marginBottom: '12px'
            }}>
              Reduce Waste
            </h3>
            <p style={{ 
              fontSize: '16px', 
              color: '#6b7280', 
              lineHeight: '1.5'
            }}>
              Make the most of existing resources. Less manufacturing means less environmental impact.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
