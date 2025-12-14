import React from 'react';

const About: React.FC = () => {
  return (
    <div
      style={{
        width: '100%',
        display: 'grid',
        gap: 24,
      }}
    >
      <h2
        style={{
          margin: 0,
          fontSize: 'clamp(28px, 4vw, 40px)',
          color: '#dc6139',
          fontWeight: 700,
          fontFamily: 'Georgia, serif',
          marginBottom: 32,
        }}
      >
        Về mình
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, alignItems: 'center' }}>
        <div style={{ display: 'grid', gap: 20 }}>
          <div>
            <h3 style={{ margin: '0 0 8px', fontSize: 'clamp(18px, 3vw, 22px)', color: '#dc6139', fontWeight: 600 }}>
              Mục tiêu ngắn hạn
            </h3>
            <p style={{ margin: 0, color: '#555', fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: 1.6 }}>
              Để có được cơ hội thực tập trong môi trường Agency năng động, tập trung vào việc học hỏi và tích lũy kinh nghiệm sâu về truyền thông/marketing.
            </p>
          </div>
          <div>
            <h3 style={{ margin: '0 0 8px', fontSize: 'clamp(18px, 3vw, 22px)', color: '#dc6139', fontWeight: 600 }}>
              Mục tiêu dài hạn
            </h3>
            <p style={{ margin: 0, color: '#555', fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: 1.6 }}>
              Sau sáu tháng, phấn đấu đạt được vị trí full-time, trực tiếp đóng góp khả năng sáng tạo vào các chiến dịch và dự án quan trọng của doanh nghiệp.
            </p>
          </div>
        </div>
        <div style={{ width: '100%', maxWidth: 500, margin: '0 auto' }}>
          <img
            src="/about.png"
            alt="Về mình"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: 12,
              objectFit: 'cover',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;