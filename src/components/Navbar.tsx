import React from "react";

type NavItem = {
  id: string;
  label: string;
};

const navItems: NavItem[] = [
  { id: 'about', label: 'Về mình' },
  { id: 'skills', label: 'Kỹ năng' },
  { id: 'experience', label: 'Kinh nghiệm' },
  { id: 'projects', label: 'Dự án' },
  { id: 'education', label: 'Học vấn' },
  { id: 'contact', label: 'Liên hệ' },
];

const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const Navbar: React.FC = () => {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: '#ffffffcc',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid #eee',
      }}
    >
      <nav
        aria-label="Primary"
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 16px',
        }}
      >
        {/* Left: Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToId('hero');
          }}
          style={{
            fontWeight: 700,
            fontSize: 18,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textDecoration: 'none',
            letterSpacing: 0.5,
          }}
          aria-label="Go to Hero"
        >
          Ctien
        </a>

        {/* Center: Menu */}
        <ul
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'clamp(8px, 1.5vw, 24px)',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            flexWrap: 'wrap',
            justifyContent: 'center',
            flex: 1,
          }}
        >
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId(item.id);
                }}
                style={{
                  color: '#555',
                  textDecoration: 'none',
                  fontSize: 'clamp(12px, 1.5vw, 14px)',
                  whiteSpace: 'nowrap',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#667eea';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#555';
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: Download CV */}
        <a
          href="/CV_Resume.pdf"
          download
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            padding: 'clamp(6px, 1vw, 8px) clamp(10px, 1.5vw, 14px)',
            borderRadius: 8,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: '#fff',
            fontSize: 'clamp(12px, 1.5vw, 14px)',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            fontWeight: 600,
            transition: 'all 0.2s',
            boxShadow: '0 2px 8px rgba(102, 126, 234, 0.3)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(102, 126, 234, 0.3)';
          }}
          aria-label="Download CV/Resume"
          title="Download CV/Resume"
        >
          {/* Download icon (inline SVG) */}
          <svg width="clamp(14px, 1.5vw, 16px)" height="clamp(14px, 1.5vw, 16px)" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 3v10m0 0l4-4m-4 4l-4-4M4 21h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span style={{ display: 'inline' }}>Download CV</span>
        </a>
      </nav>
    </header>
  );
};

export default Navbar;