import React from 'react';

const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const Hero: React.FC = () => {
  return (
    <div
      style={{
        width: '100%',
        display: 'grid',
        gap: 24,
        gridTemplateColumns: '1fr',
      }}
    >
      <div style={{ display: 'grid', gap: 16 }}>
        <h1
          style={{
            margin: 0,
            fontSize: 'clamp(32px, 5vw, 56px)',
            lineHeight: 1.2,
            color: '#dc6139',
            fontWeight: 700,
            fontFamily: "'Playfair Display', 'Times New Roman', 'Noto Serif', serif",
          }}
        >
          Xin chào, mình là Cẩm Tiên 👋
        </h1>
        <p style={{ margin: 0, color: '#555', fontSize: 'clamp(14px, 2vw, 18px)', maxWidth: 720, lineHeight: 1.6 }}>
          Social Media Intern đam mê tạo nội dung sáng tạo, quản lý fanpage và phát triển chiến lược marketing trên các nền tảng mạng xã hội.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 8 }}>
          <button
            onClick={() => scrollToId('projects')}
            style={{
              padding: '12px 24px',
              borderRadius: 10,
              border: 'none',
              background: '#dc6139',
              color: '#fff',
              cursor: 'pointer',
              fontSize: 'clamp(14px, 2vw, 16px)',
              fontWeight: 600,
              transition: 'transform 0.2s, box-shadow 0.2s, background 0.2s',
              boxShadow: '0 4px 15px rgba(220, 97, 57, 0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.background = '#c5522d';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(220, 97, 57, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.background = '#dc6139';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(220, 97, 57, 0.3)';
            }}
          >
            Xem Projects
          </button>
          <button
            onClick={() => scrollToId('contact')}
            style={{
              padding: '12px 24px',
              borderRadius: 10,
              border: '2px solid #dc6139',
              background: 'transparent',
              color: '#dc6139',
              cursor: 'pointer',
              fontSize: 'clamp(14px, 2vw, 16px)',
              fontWeight: 600,
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#dc6139';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#dc6139';
            }}
          >
            Liên hệ
          </button>
        </div>
      </div>
      <div style={{ width: '100%', maxWidth: 600, margin: '0 auto' }}>
        <img
          src="/introduce.png"
          alt="Cẩm Tiên"
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: 12,
            objectFit: 'cover',
          }}
        />
      </div>
    </div>
  );
};

export default Hero;