import React from 'react';
import LiquidGlass from '../components/liquid-glass';

type SkillGroup = { title: string; items: string[] };

const hardSkills: SkillGroup[] = [
  {
    title: 'Sáng tạo nội dung Short Video',
    items: ['Khả năng xây dựng và phát triển nội dung đa dạng nhiều lĩnh vực, phù hợp với xu hướng']
  },
  {
    title: 'Sản xuất video ngắn trọn gói',
    items: ['Lên ý tưởng, viết kịch bản và quay dựng chỉnh sửa cho nội dung phù hợp và hấp dẫn']
  },
  {
    title: 'Story telling',
    items: ['Kỹ năng xây dựng câu chuyện có cảm xúc và gắn kết, giúp nội dung trở nên độc đáo và thu hút người xem']
  },
  {
    title: 'Phân tích số liệu',
    items: ['Phân tích các chỉ số (lượt xem, tương tác, thời gian xem trung bình) để đo lường hiệu suất và điều chỉnh chiến lược nội dung']
  },
];

const softSkills: SkillGroup[] = [
  {
    title: 'Kỹ năng làm việc',
    items: [
      'Khả năng làm việc nhóm và quản lý thời gian',
      'Multitask và linh động trong công việc',
      'Thích học và có sự chủ động trong công việc'
    ]
  },
  {
    title: 'Công cụ',
    items: ['Sử dụng tốt Capcut, Canva']
  },
];

const Skills: React.FC = () => {
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%' }}>
      <h2
        style={{
          margin: 0,
          fontSize: 'clamp(28px, 4vw, 40px)',
          marginBottom: 32,
          color: '#0f1d2d',
          fontWeight: 700,
          letterSpacing: -0.5,
        }}
      >
        Kỹ năng
      </h2>

      <div style={{ marginBottom: 32 }}>
        <h3 style={{ margin: '0 0 16px', fontSize: 'clamp(20px, 3.5vw, 24px)', color: '#ffa76b', fontWeight: 600 }}>Hard Skills</h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 16,
          }}
        >
          {hardSkills.map((g) => (
            <LiquidGlass
              key={g.title}
              layout="inline"
              overLight
              style={{ width: '100%' }}
            >
              <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: 8 }}>
                <h4 style={{ margin: 0, fontSize: 'clamp(16px, 3vw, 18px)', color: '#ffa76b', fontWeight: 600 }}>{g.title}</h4>
                <p style={{ margin: 0, color: '#4b5563', fontSize: 'clamp(13px, 2vw, 15px)', lineHeight: 1.6 }}>
                  {g.items[0]}
                </p>
              </div>
            </LiquidGlass>
          ))}
        </div>
      </div>

      <div>
        <h3 style={{ margin: '0 0 16px', fontSize: 'clamp(20px, 3.5vw, 24px)', color: '#ffa76b', fontWeight: 600 }}>Soft Skills</h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 16,
          }}
        >
          {softSkills.map((g) => (
            <LiquidGlass
              key={g.title}
              layout="inline"
              overLight
              style={{ width: '100%' }}
            >
              <div style={{ textAlign: 'left' }}>
                <h4 style={{ margin: '0 0 12px', fontSize: 'clamp(16px, 3vw, 18px)', color: '#ffa76b', fontWeight: 600 }}>{g.title}</h4>
                <ul style={{ margin: 0, paddingLeft: 20, color: '#4b5563', fontSize: 'clamp(13px, 2vw, 15px)', lineHeight: 1.8 }}>
                  {g.items.map((s, idx) => (
                    <li key={idx}>{s}</li>
                  ))}
                </ul>
              </div>
            </LiquidGlass>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;