import React from 'react';
import LiquidGlass from '../components/liquid-glass';

const Education: React.FC = () => {
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', padding: '64px 0' }}>
      <div style={{ marginBottom: 32 }}>
        <p style={{ margin: 0, color: 'rgba(255, 255, 255, 0.6)', letterSpacing: 2, textTransform: 'uppercase', fontSize: 12 }}>
          Learning Path
        </p>
        <h2
          style={{
            margin: '8px 0 4px 0',
            fontSize: 'clamp(28px, 4vw, 40px)',
            color: '#ffe8d8',
            fontWeight: 700,
            letterSpacing: -0.5,
          }}
        >
          Học vấn & chứng chỉ
        </h2>
        <p style={{ margin: 0, color: 'rgba(255, 255, 255, 0.7)', fontSize: 'clamp(14px, 2vw, 16px)' }}>
          Kết hợp giữa kiến thức chính quy và các khóa học chuyên sâu về truyền thông
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
        <LiquidGlass
          layout="inline"
          displacementScale={52}
          blurAmount={0.07}
          saturation={210}
          aberrationIntensity={1.2}
          style={{ width: '100%' }}
        >
          <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: 12 }}>
            <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: 1.5, textTransform: 'uppercase', color: 'rgba(15, 29, 45, 0.7)' }}>
              Đại học
            </span>
            <h3 style={{ margin: 0, fontSize: 'clamp(20px, 3.5vw, 26px)', color: '#ffa76b', fontWeight: 600 }}>Khoa Ngoại ngữ</h3>
            <p style={{ margin: 0, fontSize: 'clamp(16px, 2.5vw, 18px)', color: '#1f2937', fontWeight: 500 }}>
              Đại học Công nghiệp TP. Hồ Chí Minh
            </p>
            <p style={{ margin: 0, fontSize: 'clamp(14px, 2vw, 16px)', color: '#475467' }}>17/06/2021 - Hiện tại</p>
            <ul style={{ margin: '8px 0 0 16px', color: '#4c5564', fontSize: 14, lineHeight: 1.7 }}>
              <li>Chuyên ngành Tiếng Anh thương mại</li>
              <li>Tập trung vào kỹ năng giao tiếp & biên dịch</li>
            </ul>
          </div>
        </LiquidGlass>

        <LiquidGlass
          layout="inline"
          displacementScale={45}
          blurAmount={0.08}
          saturation={220}
          aberrationIntensity={1.3}
          style={{ width: '100%' }}
        >
          <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: 14 }}>
            <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: 1.5, textTransform: 'uppercase', color: 'rgba(15, 29, 45, 0.7)' }}>
              Khóa học ngoại khóa
            </span>
            <h4 style={{ margin: 0, fontSize: 'clamp(18px, 3vw, 22px)', color: '#ffa76b', fontWeight: 600 }}>Ngáo Content</h4>
            <p style={{ margin: 0, fontSize: 'clamp(14px, 2vw, 16px)', color: '#4c5564', lineHeight: 1.7 }}>
              Hiểu sâu về nguyên tắc content marketing, xây dựng chân dung khách hàng, viết nội dung chuẩn insight
              và ứng dụng các khung như AIDA, PAS vào thực tế chiến dịch.
            </p>
          </div>
        </LiquidGlass>
      </div>
    </div>
  );
};

export default Education;

