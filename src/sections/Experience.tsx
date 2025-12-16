import React from 'react';
import LiquidGlass from '../components/liquid-glass';

type Experience = {
  id: string;
  company: string;
  position: string;
  period: string;
  type: string;
  industry: string;
  logo?: string;
  achievement?: string;
};

const experiences: Experience[] = [
  {
    id: 'exp1',
    company: 'Đen Đá Coffee',
    position: 'Social Media - Freelancer',
    period: '01/7/2025 - 01/12/2025',
    type: 'Freelancer',
    industry: 'F&B',
    logo: '/denda.png',
    achievement: '/denda_achivement.png',
  },
  {
    id: 'exp2',
    company: 'Nubé',
    position: 'Social Media - Freelancer',
    period: '19/09/2025 - 01/12/2025',
    type: 'Freelancer',
    industry: 'Beauty',
    logo: '/nube.png',
    achievement: '/nube_achivement.png',
  },
  {
    id: 'exp3',
    company: 'An Beauty Room',
    position: 'Content Creator - Freelancer',
    period: '1/06/2025 - 30/09/2025',
    type: 'Freelancer',
    industry: 'Beauty',
    logo: '/anbeautyroom.png',
    achievement: '/anBeautyRoomAchivement.png',
  },
  {
    id: 'exp4',
    company: 'Mr.Tí Đô',
    position: 'TikTok Content Creator - Intern',
    period: '19/02/2025 - 19/05/2025',
    type: 'Intern',
    industry: 'F&B',
    logo: '/tido.png',
    achievement: '/tido_achivement.png',
  },
  {
    id: 'exp5',
    company: 'Góc trà',
    position: 'TikTok Content Creator - Intern',
    period: '19/02/2025 - 19/05/2025',
    type: 'Intern',
    industry: 'F&B',
    logo: '/goctra.png',
    achievement: '/tido_achivement.png',
  },
];

const accentColor = '#0f1d2d';
const headingColor = '#0f1d2d';

const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: 20,
  width: '100%',
};

const badgeStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  padding: '6px 16px',
  borderRadius: 999,
  border: '1px solid rgba(0, 0, 0, 0.1)',
  fontSize: 12,
  fontWeight: 500,
  color: '#475467',
  background: 'rgba(255, 255, 255, 0.5)',
  letterSpacing: 0.5,
};

const Experience: React.FC = () => {
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', padding: '64px 0' }}>
      <div style={{ marginBottom: 32, textAlign: 'center' }}>
        <img
          src="/work-experience.png"
          alt="Kinh nghiệm làm việc"
          style={{ maxWidth: '100%', height: 'auto', borderRadius: 24, marginBottom: 24, boxShadow: '0 25px 80px rgba(15, 23, 42, 0.3)' }}
        />
        <h2
          style={{
            margin: 0,
            fontSize: 'clamp(28px, 4vw, 40px)',
            color: headingColor,
            fontWeight: 700,
            letterSpacing: -0.5,
          }}
        >
          Kinh nghiệm làm việc
        </h2>
        <p style={{ marginTop: 8, color: '#475467', fontSize: 'clamp(14px, 2vw, 16px)' }}>
          Những dự án freelance & thực tập nổi bật gần đây
        </p>
      </div>

      <div style={gridStyle}>
        {experiences.map((exp) => (
          <LiquidGlass
            key={exp.id}
            layout="inline"
            overLight
            style={{ width: '100%' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, textAlign: 'left', color: '#101828' }}>
              {exp.logo && (
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  style={{ maxWidth: 120, height: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 10px 30px rgba(15, 23, 42, 0.25))' }}
                />
              )}

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                <span style={badgeStyle}>{exp.type}</span>
                <span style={badgeStyle}>{exp.industry}</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <h3 style={{ margin: 0, fontSize: 'clamp(18px, 3vw, 22px)', color: accentColor, fontWeight: 600 }}>{exp.company}</h3>
                <p style={{ margin: 0, fontSize: 'clamp(14px, 2vw, 16px)', fontWeight: 500, color: '#1f2937' }}>{exp.position}</p>
                <p style={{ margin: 0, fontSize: 'clamp(12px, 2vw, 14px)', color: '#475467' }}>{exp.period}</p>
              </div>

              {exp.achievement && (
                <div style={{ marginTop: 8 }}>
                  <img
                    src={exp.achievement}
                    alt={`${exp.company} achievement`}
                    style={{ width: '100%', borderRadius: 16, objectFit: 'cover', boxShadow: '0 18px 45px rgba(15, 23, 42, 0.2)' }}
                  />
                </div>
              )}
            </div>
          </LiquidGlass>
        ))}
      </div>
    </div>
  );
};

export default Experience;

