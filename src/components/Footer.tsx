import React from 'react';

const iconStyle: React.CSSProperties = { width: 20, height: 20, display: 'block' };
const linkStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 40,
  height: 40,
  borderRadius: 8,
  border: '1px solid #e5e5e5',
  color: '#111',
  textDecoration: 'none',
};

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        borderTop: '1px solid #eee',
        background: '#fff',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '24px 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
          flexWrap: 'wrap',
        }}
      >
        <p style={{ margin: 0, color: '#666', fontSize: 14 }}>
          © {new Date().getFullYear()} CTien. All rights reserved.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {/* Facebook */}
          <a
            href="https://facebook.com/your_profile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            title="Facebook"
            style={linkStyle}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" style={iconStyle} aria-hidden="true">
              <path d="M22 12.06C22 6.49 17.52 2 11.94 2 6.37 2 1.88 6.49 1.88 12.06c0 4.97 3.63 9.09 8.38 9.94v-7.03H7.9v-2.91h2.36V9.84c0-2.33 1.38-3.62 3.5-3.62.99 0 2.03.18 2.03.18v2.24h-1.14c-1.12 0-1.47.69-1.47 1.4v1.69h2.5l-.4 2.91h-2.1V22c4.75-.85 8.38-4.96 8.38-9.94z" />
            </svg>
          </a>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@your_profile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            title="TikTok"
            style={linkStyle}
          >
            <svg viewBox="0 0 48 48" fill="currentColor" style={iconStyle} aria-hidden="true">
              <path d="M41 17.5a14.5 14.5 0 0 1-8.5-2.7v14.4a9.7 9.7 0 1 1-9.7-9.7c.5 0 1 .1 1.5.1v4.9a4.9 4.9 0 1 0 3.2 4.6V6.9h4.8c.7 3.3 3.7 6 8.7 6.3v4.3z" />
            </svg>
          </a>

          {/* Phone */}
          <a href="tel:+84901234567" aria-label="Phone" title="Phone" style={linkStyle}>
            <svg viewBox="0 0 24 24" fill="currentColor" style={iconStyle} aria-hidden="true">
              <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.11.37 2.3.57 3.53.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C11.4 21 3 12.6 3 2a1 1 0 0 1 1-1h3.49a1 1 0 0 1 1 1c0 1.23.2 2.42.57 3.53a1 1 0 0 1-.24 1.01l-2.2 2.2z" />
            </svg>
          </a>

          {/* Email */}
          <a href="mailto:your.email@example.com" aria-label="Email" title="Email" style={linkStyle}>
            <svg viewBox="0 0 24 24" fill="currentColor" style={iconStyle} aria-hidden="true">
              <path d="M20 4H4a2 2 0 0 0-2 2v.4l10 6.25L22 6.4V6a2 2 0 0 0-2-2zm0 4.25-8 5-8-5V18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.25z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;