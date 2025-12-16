import React from 'react';
import LiquidGlass from '../components/liquid-glass';

const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const buttonBase: React.CSSProperties = {
  padding: '14px 28px',
  borderRadius: 14,
  border: 'none',
  fontSize: 'clamp(14px, 2vw, 16px)',
  fontWeight: 600,
  cursor: 'pointer',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease',
};

const Hero: React.FC = () => {
  return (
    <div
      style={{
        maxWidth: 1200,
        margin: '0 auto',
        width: '100%',
        display: 'grid',
        gap: 32,
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        alignItems: 'stretch',
      }}
    >
      <LiquidGlass
        layout="inline"
        overLight
        style={{ width: '100%' }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18, textAlign: 'left' }}>
          <p style={{ margin: 0, color: 'rgba(0, 0, 0, 0.5)', letterSpacing: 2, textTransform: 'uppercase', fontSize: 12 }}>Social Media · Content</p>
          <h1
            style={{
              margin: 0,
              fontSize: 'clamp(36px, 6vw, 60px)',
              lineHeight: 1.2,
              color: '#0f1d2d',
              fontWeight: 700,
              letterSpacing: -0.5,
            }}
          >
            Xin chào, mình là Cẩm Tiên 👋
          </h1>
          <p style={{ margin: 0, color: '#475467', fontSize: 'clamp(14px, 2.4vw, 18px)', lineHeight: 1.7 }}>
            Social Media & Content Creator tập trung vào video ngắn. Mình yêu thích việc biến insight khách hàng thành những
            câu chuyện trực quan, dễ nhớ và giàu cảm xúc.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 8 }}>
            <button
              onClick={() => scrollToId('projects')}
              style={{
                ...buttonBase,
                background: 'linear-gradient(135deg, #ff9248, #ff6f61)',
                color: '#fff',
                boxShadow: '0 15px 35px rgba(255, 111, 97, 0.35)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Xem projects nổi bật
            </button>

            <button
              onClick={() => scrollToId('contact')}
              style={{
                ...buttonBase,
                background: 'transparent',
                border: '1px solid rgba(255, 180, 138, 0.6)',
                color: '#ff7038',
                boxShadow: 'inset 0 0 0 1px rgba(255, 180, 138, 0.35)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.background = 'rgba(255, 180, 138, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              Kết nối ngay
            </button>
          </div>
        </div>
      </LiquidGlass>

      <LiquidGlass
        layout="inline"
        overLight
        style={{ width: '100%' }}
      >
        <div style={{ width: '100%', borderRadius: 24, overflow: 'hidden', position: 'relative' }}>
          <img
            src="/introduce.png"
            alt="Cẩm Tiên"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 16,
              left: 16,
              padding: '12px 16px',
              borderRadius: 999,
              background: 'rgba(12, 18, 34, 0.65)',
              color: '#fef3e7',
              fontSize: 14,
              fontWeight: 500,
            }}
          >
            +30 video ngắn / tháng
          </div>
        </div>
      </LiquidGlass>
    </div>
  );
};

export default Hero;