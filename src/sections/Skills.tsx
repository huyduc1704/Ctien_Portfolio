import React from 'react';

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

const cardStyle: React.CSSProperties = {
  border: '1px solid #e8e8e0',
  borderRadius: 12,
  padding: 20,
  background: '#fff',
  boxShadow: '0 2px 8px rgba(220, 97, 57, 0.08)',
  transition: 'all 0.3s ease',
};

const Skills: React.FC = () => {
  return (
    <div style={{ width: '100%' }}>
      <h2
        style={{
          margin: 0,
          fontSize: 'clamp(28px, 4vw, 40px)',
          marginBottom: 32,
          color: '#dc6139',
          fontWeight: 700,
          fontFamily: "'Playfair Display', 'Times New Roman', 'Noto Serif', serif",
        }}
      >
        Kỹ năng
      </h2>

      <div style={{ marginBottom: 32 }}>
        <h3 style={{ margin: '0 0 16px', fontSize: 'clamp(20px, 3.5vw, 24px)', color: '#dc6139', fontWeight: 600 }}>Hard Skills</h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 16,
          }}
        >
          {hardSkills.map((g) => (
            <div
              key={g.title}
              style={cardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(220, 97, 57, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(220, 97, 57, 0.08)';
              }}
            >
              <h4 style={{ margin: '0 0 8px', fontSize: 'clamp(16px, 3vw, 18px)', color: '#dc6139', fontWeight: 600 }}>{g.title}</h4>
              <p style={{ margin: 0, color: '#555', fontSize: 'clamp(13px, 2vw, 15px)', lineHeight: 1.6 }}>
                {g.items[0]}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 style={{ margin: '0 0 16px', fontSize: 'clamp(20px, 3.5vw, 24px)', color: '#dc6139', fontWeight: 600 }}>Soft Skills</h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 16,
          }}
        >
          {softSkills.map((g) => (
            <div
              key={g.title}
              style={cardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(220, 97, 57, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(220, 97, 57, 0.08)';
              }}
            >
              <h4 style={{ margin: '0 0 12px', fontSize: 'clamp(16px, 3vw, 18px)', color: '#dc6139', fontWeight: 600 }}>{g.title}</h4>
              <ul style={{ margin: 0, paddingLeft: 20, color: '#555', fontSize: 'clamp(13px, 2vw, 15px)', lineHeight: 1.8 }}>
                {g.items.map((s, idx) => (
                  <li key={idx}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;