import React from 'react';
import LiquidGlass from '../components/liquid-glass';

const goals = [
  {
    title: 'Mục tiêu ngắn hạn',
    description:
      'Tìm kiếm cơ hội thực tập tại agency năng động để học hỏi quy trình sản xuất nội dung chuyên nghiệp và gia tăng trải nghiệm thực chiến.',
  },
  {
    title: 'Mục tiêu dài hạn',
    description:
      'Trong 6 tháng tới hướng đến vị trí full-time Social Media, chủ động đóng góp ý tưởng và dẫn dắt các chiến dịch video ngắn cho thương hiệu.',
  },
];

const About: React.FC = () => {
  return (
    <div
      style={{
        maxWidth: 1200,
        margin: '0 auto',
        width: '100%',
        display: 'grid',
        gap: 32,
      }}
    >
      <div>
        <p style={{ margin: 0, color: 'rgba(255, 255, 255, 0.6)', letterSpacing: 2, textTransform: 'uppercase', fontSize: 12 }}>About me</p>
        <h2
          style={{
            margin: '8px 0 0 0',
            fontSize: 'clamp(28px, 4vw, 40px)',
            color: '#ffe8d8',
            fontWeight: 700,
            letterSpacing: -0.5,
          }}
        >
          Về mình
        </h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, alignItems: 'stretch' }}>
        <div style={{ display: 'grid', gap: 20 }}>
          {goals.map((goal) => (
            <LiquidGlass
              key={goal.title}
              layout="inline"
              displacementScale={42}
              blurAmount={0.08}
              saturation={210}
              aberrationIntensity={1.2}
              style={{ width: '100%' }}
            >
              <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: 8 }}>
                <h3 style={{ margin: 0, fontSize: 'clamp(18px, 3vw, 22px)', color: '#ffa76b', fontWeight: 600 }}>{goal.title}</h3>
                <p style={{ margin: 0, color: '#4b5563', fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: 1.7 }}>{goal.description}</p>
              </div>
            </LiquidGlass>
          ))}
        </div>

        <LiquidGlass
          layout="inline"
          displacementScale={50}
          blurAmount={0.06}
          saturation={180}
          aberrationIntensity={1.1}
          overLight
          style={{ width: '100%' }}
        >
          <div style={{ width: '100%', borderRadius: 24, overflow: 'hidden' }}>
            <img
              src="/about.png"
              alt="Về mình"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </LiquidGlass>
      </div>
    </div>
  );
};

export default About;